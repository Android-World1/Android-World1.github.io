var pages = ["index.html", "Emulators.html"];


function openNewPage(v1, v2) {
  var n1 = document.querySelector(".n-l"+v1);
  var n2 = document.querySelector(".n-l"+v2);
  n2.style.backgroundColor="rgba(119, 119, 119, 0.5)";
  n1.style.backgroundColor="#FFFFFF";
  window.location.href = pages[v2-1];
}

function openPage(url) {
  window.open(url, '_blank');
}