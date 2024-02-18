
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


      var carrossel = [
        {
          Imagem:"img/Desec.PNG",
          Link:"https://www.ev.org.br/"
        },
        {
          Imagem:"img/BaltaIo.PNG",
          Link:"https://balta.io/"
        },
        {
          Imagem:"img/Dio..PNG",
          Link:"https://www.dio.me/"
        }

      ]



 // Obtendo o container dos cards
var postContainer = document.querySelector('.post.contain');

// Criando os cards dinamicamente
cards.forEach(function(card) {
  // Criando o elemento de link
  var link = document.createElement('a');
  link.target = "_blank";
  link.href = card.Link; 
  link.classList.add('post-link'); // Adicione uma classe ao link se necessário
  
  // Criando elementos HTML para o card
  var postBox = document.createElement('div');
  postBox.classList.add('post-box');
  
  var imagem = document.createElement('img');
  imagem.src = card.Imagem; 
  
  var titulo = document.createElement('h2'); // Ou o nível de cabeçalho apropriado
  titulo.classList.add('post-title');
  titulo.textContent = card.TituloLink; 
  
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
  postBox.appendChild(titulo);
  postBox.appendChild(subtitulo);
  postBox.appendChild(profile);
  
  // Adicionando o postBox como filho do link
  link.appendChild(postBox);
  
  // Adicionando o link ao container de cards
  postContainer.appendChild(link);
});

