
    
    var cards = [
        {
          Imagem: "img/certificados/1 - Hackes do Bem - Cibersegurança.png",
          Link: "https://hackersdobem.org.br/",
          TituloLink: "Certificado com a Dio.",
          Subtitulo: "Confira aqui os cursos Gratuitos na Area de Tecnologia",
          Logo: "img/LogoBradesco.jpg",
          NomeEmpresa: "Dio."
        },
        {
          Imagem: "img/certificados/2 - Certificado Fortinet.PNG",
          Link: "https://www.dio.me/",
          TituloLink: "Certificado com a Dio.",
          Subtitulo: "Confira aqui os cursos Gratuitos na Area de Tecnologia",
          Logo: "img/LogoBradesco.jpg",
          NomeEmpresa: "Dio."
        },
        {
          Imagem: "img/certificados/3 - Fundação Bradesco - Certificações em Tecnologia.png",
          Link: "https://www.ev.org.br/",
          TituloLink: "Certificações em Tecnologia",
          Subtitulo: "Confira aqui os cursos Gratuitos na Area de Tecnologia",
          Logo: "img/LogoBradesco.jpg",
          NomeEmpresa: "Bradesco"
        },
        {
          Imagem: "img/certificados/4 - IBSEC - CYBERSECURITY - REDES - INFORMÁTICA.png",
          Link: "https://www.dio.me/",
          TituloLink: "Certificado com a Dio.",
          Subtitulo: "Confira aqui os cursos Gratuitos na Area de Tecnologia",
          Logo: "img/LogoBradesco.jpg",
          NomeEmpresa: "Dio."
        },
        {
          Imagem: "img/certificados/5 - ORACLE OCI.jpg",
          Link: "https://www.oracle.com/br/education/oracle-next-education/",
          TituloLink: "Certificado com a Dio.",
          Subtitulo: "Confira aqui os cursos Gratuitos na Area de Tecnologia",
          Logo: "img/LogoBradesco.jpg",
          NomeEmpresa: "Dio."
        },
        {
          Imagem: "img/certificados/6 - API Academy - Certificação em API.PNG",
          Link: "https://www.dio.me/",
          TituloLink: "Certificado com a Dio.",
          Subtitulo: "Confira aqui os cursos Gratuitos na Area de Tecnologia",
          Logo: "img/LogoBradesco.jpg",
          NomeEmpresa: "Dio."
        },
        {
          Imagem: "img/certificados/7 - Certificado OracleAlura.png",
          Link: "https://www.dio.me/",
          TituloLink: "Certificado com a Dio.",
          Subtitulo: "Confira aqui os cursos Gratuitos na Area de Tecnologia",
          Logo: "img/LogoBradesco.jpg",
          NomeEmpresa: "Dio."
        },
        {
          Imagem: "img/certificados/8 - Certified - Scrum Fundamentals Certified.jpg",
          Link: "https://www.dio.me/",
          TituloLink: "Certificado com a Dio.",
          Subtitulo: "Confira aqui os cursos Gratuitos na Area de Tecnologia",
          Logo: "img/LogoBradesco.jpg",
          NomeEmpresa: "Dio."
        },
        {
          Imagem: "img/certificados/9 - CertiProf - Fundamentos Na Lei Geral De Proteção De Dados.PNG",
          Link: "https://www.dio.me/",
          TituloLink: "Certificado com a Dio.",
          Subtitulo: "Confira aqui os cursos Gratuitos na Area de Tecnologia",
          Logo: "img/LogoBradesco.jpg",
          NomeEmpresa: "Dio."
        },
        {
          Imagem: "img/certificados/10 - DESEC - INTRODUÇÃO AO PENTEST NA PRÁTICA.jpg",
          Link: "https://balta.io/",
          TituloLink: "INTRODUÇÃO AO PENTEST NA PRÁTICA",
          Subtitulo: "Confira aqui os cursos Gratuitos na Area de Tecnologia",
          Logo: "img/LogoBradesco.jpg",
          NomeEmpresa: "Balta.io"
        },
        {
          Imagem: "img/certificados/11 - IBM - CYBERSECURITY FUNDAMENTALS.PNG",
          Link: "https://balta.io/",
          TituloLink: "INTRODUÇÃO AO PENTEST NA PRÁTICA",
          Subtitulo: "Confira aqui os cursos Gratuitos na Area de Tecnologia",
          Logo: "img/LogoBradesco.jpg",
          NomeEmpresa: "Balta.io"
        },
        {
          Imagem: "img/certificados/12 - Segurança Cibernética ISC2.PNG",
          Link: "https://balta.io/",
          TituloLink: "INTRODUÇÃO AO PENTEST NA PRÁTICA",
          Subtitulo: "Confira aqui os cursos Gratuitos na Area de Tecnologia",
          Logo: "img/LogoBradesco.jpg",
          NomeEmpresa: "Balta.io"
        },   
        {
          Imagem: "img/certificados/13 - SkillFront - ISO-IEC 27001 Information Security Associate.PNG",
          Link: "https://balta.io/",
          TituloLink: "INTRODUÇÃO AO PENTEST NA PRÁTICA",
          Subtitulo: "Confira aqui os cursos Gratuitos na Area de Tecnologia",
          Logo: "img/LogoBradesco.jpg",
          NomeEmpresa: "Balta.io"
        },
        {
          Imagem: "img/certificados/14 - SOLYD - Introdução ao Hacking e Pentest 2.0.PNG",
          Link: "https://balta.io/",
          TituloLink: "INTRODUÇÃO AO PENTEST NA PRÁTICA",
          Subtitulo: "Confira aqui os cursos Gratuitos na Area de Tecnologia",
          Logo: "img/LogoBradesco.jpg",
          NomeEmpresa: "Balta.io"
        },
        {
          Imagem: "img/certificados/15 - SOLYD - PYTHON.PNG",
          Link: "https://balta.io/",
          TituloLink: "INTRODUÇÃO AO PENTEST NA PRÁTICA",
          Subtitulo: "Confira aqui os cursos Gratuitos na Area de Tecnologia",
          Logo: "img/LogoBradesco.jpg",
          NomeEmpresa: "Balta.io"
        },
        {
          Imagem: "img/certificados/16 - WOMCY - Programa de Educação e Certificação de Segurança Cibernética.PNG",
          Link: "https://balta.io/",
          TituloLink: "INTRODUÇÃO AO PENTEST NA PRÁTICA",
          Subtitulo: "Confira aqui os cursos Gratuitos na Area de Tecnologia",
          Logo: "img/LogoBradesco.jpg",
          NomeEmpresa: "Balta.io"
        },


        

      ];


    
// Obtendo o container dos cards
var postContainer = document.querySelector('.post.contain');

// Variável para controlar se todos os cards estão visíveis ou não
var allCardsVisible = false;

// Função para mostrar os cards restantes
function showMoreCards() {
   // Contador para acompanhar o número de cards ocultos mostrados
   var hiddenCardsShown = 0;

   // Seleciona todos os cards ocultos e remove a classe hidden
   document.querySelectorAll('.post-link.hidden').forEach(function(card) {
       card.classList.remove('hidden');
       hiddenCardsShown++;
   });
  // Remove o botão "Ver mais"
  document.querySelector('.ver-mais-link').remove();
  // Atualiza a variável de controle
  allCardsVisible = true;
}





// Criando os cards dinamicamente
cards.forEach(function(card, index) {
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


  if (index > 8) {
    link.classList.add('hidden');
} 
});

