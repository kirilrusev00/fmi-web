<?php 
  require_once("./db.php");
  require_once("./product.php");
  
  class ProductManager {
    function addProduct($productId, $name, $quantity) {
      try {
        $db = new DB();
        $connection = $db->getConnection();
  
        $select_sql = "SELECT * FROM store WHERE id = ?";
        $stmt = $connection->prepare($select_sql);
        $stmt->execute([$productId]);
  
        $prod = null;
  
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
          $prod = new Product($row["id"], $row["name"], $row["quantity"]);
        }
  
        if (!$stmt->rowCount()) {
          $add_sql = "INSERT INTO store (id, name, quantity) VALUES (?, ?, ?)";
          $add_stmt = $connection->prepare($add_sql);
  
          $add_stmt->execute([$productId, $name, $quantity]);
        } else {
          $update_sql = "UPDATE store SET quantity = ? + ? WHERE id = ?";
          $update_stmt = $connection->prepare($update_sql);
  
          $update_stmt->execute([$prod->quantity, $quantity, $productId]);
        }
  
      } catch (PDOException $e) {
          echo $e->getMessage();
      }
    }
    
    function buyProduct($productId, $quantity) {
      try {
        $db = new DB();
        $connection = $db->getConnection();
  
        $select_sql = "SELECT * from store WHERE id = ?";
        $stmt = $connection->prepare($select_sql);
        $stmt->execute([$productId]);
  
        $prod = null;
  
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
          $prod = new Product($row["id"], $row["name"], $row["quantity"]);
        }
  
        if (!$stmt->rowCount()) {
          echo "Product with id " . $productId . " does not exist!";
        } else if (var_dump($quantity > $prod->quantity)) {
          echo "Not enough product quantity. You can buy up to " . $prod->quantity . " products with this id.";
        } else {
          $update_sql = "UPDATE store SET quantity = ? - ? WHERE id = ?";
          $update_stmt = $connection->prepare($update_sql);
  
          $update_stmt->execute(array($prod->quantity, $quantity, $productId));
        }
  
      } catch (PDOException $e) {
        echo $e->getMessage();
      }
    }
  }
?>