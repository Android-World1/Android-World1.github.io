
function openNewPage(v1, v2, url) {
  var n1 = document.querySelector(".n-l"+v1);
  var n2 = document.querySelector(".n-l"+v2);
  n1.style.backgroundColor="#FFFFFF";
  n2.style.backgroundColor="rgba(119, 119, 119, 0.5)";
  window.location.href = url;
}

function openPage(url) {
  window.open(url, '_blank');
}