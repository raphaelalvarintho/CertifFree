// Função para adicionar classe 'active' ao link correspondente à página atual
function setActiveLink() {
    var links = document.querySelectorAll('.navLink');
    var currentPage = window.location.pathname.split('/').pop();

    links.forEach(function(link) {
        if (
          (link.textContent === "" && currentPage === "index.html") ||
          (link.textContent === "Home" && currentPage === "index.html") ||
            (link.textContent === "Sobre" && currentPage === "sobre.html")) {
            link.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', setActiveLink);

// Incluindo o header.html
fetch('header.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('header').innerHTML = html;
        setActiveLink(); // Chama a função para definir o link ativo após carregar o header
    });



    var cards = [
        {
          Imagem: "img/bradesco.PNG",
          Link: "https://www.ev.org.br/",
          TituloLink: "Certificado com a Bradesco",
          Subtitulo: "Confira aqui os cursos Gratuitos na Area de Tecnologia",
          Logo: "img/LogoBradesco.jpg",
          NomeEmpresa: "Bradesco"
        },
        {
          Imagem: "img/BaltaIo.PNG",
          Link: "https://balta.io/",
          TituloLink: "Certificado com a Balta.io",
          Subtitulo: "Confira aqui os cursos Gratuitos na Area de Tecnologia",
          Logo: "img/BaltaIoLogo.jpg",
          NomeEmpresa: "Balta.io"
        },
        {
          Imagem: "img/Dio..PNG",
          Link: "https://www.dio.me/",
          TituloLink: "Certificado com a Dio.",
          Subtitulo: "Confira aqui os cursos Gratuitos na Area de Tecnologia",
          Logo: "img/Dio.Logo.png",
          NomeEmpresa: "Dio."
        }
      ];


  // Obtendo o container dos cards
var postContainer = document.querySelector('.post.container');

// Criando os cards dinamicamente
cards.forEach(function(card) {
  // Criando elementos HTML para o card
  var postBox = document.createElement('div');
  postBox.classList.add('post-box');
  
  var imagem = document.createElement('img');
  imagem.src = card.Imagem; 
  
  var link = document.createElement('a');
  link.href = card.Link; 
  link.classList.add('post-title');
  link.textContent = card.TituloLink; 
  
  var subtitulo = document.createElement('h5');
  subtitulo.textContent = card.Subtitulo; 
  
  var profile = document.createElement('div');
  profile.classList.add('profile');
  
  var logo = document.createElement('img');
  logo.src = card.Logo; 
  logo.alt = '';
  logo.classList.add('profile-img');
  
  var nomeEmpresa = document.createElement('span');
  nomeEmpresa.textContent = card.NomeEmpresa; 
  nomeEmpresa.classList.add('profile-name');
  
  // Adicionando elementos ao postBox
  profile.appendChild(logo);
  profile.appendChild(nomeEmpresa);
  
  postBox.appendChild(imagem);
  postBox.appendChild(link);
  postBox.appendChild(subtitulo);
  postBox.appendChild(profile);
  
  // Adicionando o postBox ao container de cards
  postContainer.appendChild(postBox);
});
