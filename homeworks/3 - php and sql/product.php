<?php

  class Product {

    public $id;
    public $name;
    public $quantity;

    function __construct($id, $name, $quantity) {
      $this->id = $id;
      $this->name = $name;
      $this->quantity = $quantity;
    }
  }

?>