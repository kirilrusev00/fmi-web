// window.onscroll = function() {
//   var scrollPosition = window.pageYOffset;
//   if (scrollPosition > 90) {
//     document.getElementById("navbar").style.display = "grid";
//   } else {
//     document.getElementById("navbar").style.display = "none";
//   }
// }

function showOrHideContents() {
  if (document.getElementById("contents").style.display !== "none") {
    document.getElementById("contents").style.display = "none";
    document.getElementById("article").style.gridColumn = "1 / span 2";
    return;
  } else {
    document.getElementById("contents").style.display = "grid";
    document.getElementById("article").style.gridColumn = "2 / span 1";
  }
}