function showResult(idAsString) {
  document.getElementById(`pure-code-${idAsString}`).style.display = "none";
  document.getElementById(`image-example-${idAsString}`).style.display = "grid";
}

function showCode(idAsString) {
  document.getElementById(`pure-code-${idAsString}`).style.display = "grid";
  document.getElementById(`image-example-${idAsString}`).style.display = "none";
}