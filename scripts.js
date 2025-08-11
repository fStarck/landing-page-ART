const chamaWhats = "https://wa.me/5511979874649"


function toggleMenu() {
  let linksHeader = document.getElementById("menu-list");
  if (window.innerWidth < 768) {
    if (linksHeader.style.display === "flex") {
      linksHeader.style.display = "none";
    } else {
      linksHeader.style.display = "flex";
    }
  }
}

document.addEventListener("click", function (event) {
  if (window.innerWidth < 768) {
    let menuList = document.getElementById("menu-list");
    let menuBurguer = document.getElementById("menu-burguer");
    if (!menuList.contains(event.target) && !menuBurguer.contains(event.target)) {
      menuList.style.display = "none";
    }
  }
});

document.querySelectorAll('#menu-list a').forEach(item => {
  item.addEventListener('click', () => {
    toggleMenu();
  });
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
linksMenu.forEach(function (link) {
  link.addEventListener("click", rolarParaSecao);
});

function toggleAnswer(id) {
  let answer = document.getElementById(id + '-answer');

  if (answer.style.display === 'block') {
    answer.style.display = 'none';
  } else {
    let allAnswers = document.querySelectorAll('.duvidas-respostas');
    allAnswers.forEach(answer => {
      answer.style.display = 'none';
    });
    answer.style.display = 'block';
  }
}


const modal = document.getElementById('politicaModal');
const btn = document.getElementById('politicaBtn');
const span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
  modal.style.display = 'block';
}
span.onclick = function() {
  modal.style.display = 'none';
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

window.addEventListener('load', () => {
  if (window.location.hash === '#politica') {
    abrirModalPolitica(); // função que você já tenha para abrir o modal
  }
});
