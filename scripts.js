const chamaWhats = "https://wa.me/5511942278254"

function toggleMenu() {
  let linksHeader = document.getElementById("menu-list");
  if (linksHeader.style.display === "flex") {
    linksHeader.style.display = "none";
  } else {
    linksHeader.style.display = "flex";
  }
}

document.querySelectorAll('#menu-list a').forEach(item => {
  item.addEventListener('click', () => {
    toggleMenu();
  });
});

document.addEventListener("click", function (event) {
  let menuList = document.getElementById("menu-list");
  let menuBurguer = document.getElementById("menu-burguer");
  if (!menuList.contains(event.target) && !menuBurguer.contains(event.target)) {
    menuList.style.display = "none"
  }
});


function rolarParaSecao(event) {
  event.preventDefault();
  var secaoId = event.target.getAttribute("href").substring(1);
  var secao = document.getElementById(secaoId);
  if (secao) {
    var posicao = secao.offsetTop;
    window.scrollTo({
      top: posicao,
      behavior: "smooth"
    });
  }
}
var linksMenu = document.querySelectorAll('.menu-list a');
linksMenu.forEach(function(link) {
  link.addEventListener("click", rolarParaSecao);
});
