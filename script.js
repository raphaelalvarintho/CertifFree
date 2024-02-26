AOS.init();    
    var cards = [
        {
          Imagem: "img/certificados/1 - Hackes do Bem - Cibersegurança.png",
          Link: "https://hackersdobem.org.br/",
          TituloLink: "Cibersegurança",
          Subtitulo: "Aprenda a ser um profissional da área do futuro!",
          Logo: "/img/logoEmpresas/HackerDoBemlogo.jpg",
          NomeEmpresa: "Hackers do Bem"
        },
        {
          Imagem: "img/certificados/2 - Certificado Fortinet.PNG",
          Link: "https://www.fortinet.com/br/training/cybersecurity-professionals",
          TituloLink: "Segurança de Rede",
          Subtitulo: "Confira aqui as Certicações Fortinet NSE1+NSE2+NSE3",
          Logo: "img/logoEmpresas/FortinetLogo.png",
          NomeEmpresa: "Fortinet"
        },
        {
          Imagem: "img/certificados/3 - Fundação Bradesco - Certificações em Tecnologia.png",
          Link: "https://www.ev.org.br/",
          TituloLink: "Certificados em Tecnologia",
          Subtitulo: "Confira aqui as 18 Certificações em Tecnologia",
          Logo: "img/logoEmpresas/LogoBradesco.jpg",
          NomeEmpresa: "Fundação Bradesco"
        },
        {
          Imagem: "img/certificados/4 - IBSEC - CYBERSECURITY - REDES - INFORMÁTICA.png",
          Link: "https://certs.ibsec.com.br/",
          TituloLink: "Certificações em Cyber",
          Subtitulo: "Cnfira aqui as 12 Certifições em Cibersegurança",
          Logo: "img/logoEmpresas/IbsecLogo.png",
          NomeEmpresa: "IBSEC"
        },
        {
          Imagem: "img/certificados/5 - ORACLE OCI.jpg",
          Link: "https://education.oracle.com/oracle-oci-certification#oracle-cloud-infrastructure",
          TituloLink: "Oracle Cloud Infrastructure",
          Subtitulo: "Confira aqui as 3 Certificações Oracle Infrastructure",
          Logo: "img/logoEmpresas/OracleLogo.png",
          NomeEmpresa: "ORACLE"
        },
        {
          Imagem: "img/certificados/17-Senac-e-Sebrae.png",
          Link: "https://www.ead.senac.br/gratuito/",
          TituloLink: "Certificados em Tecnologia",
          Subtitulo: "Confira aqui os 6 Certificados em Tecnologia",
          Logo: "img/logoEmpresas/Logo-do-Senac-e-Sebrae.png",
          NomeEmpresa: "Senac"
        }, {
          Imagem: "img/logoEmpresas/FIAP.png",
          Link: "https://on.fiap.com.br/local/programaeucapacito/",
          TituloLink: "Certificados em Tecnologia",
          Subtitulo: "Confira aqui os 20 cursos em Tecnologia",
          Logo: "img/logoEmpresas/FIAP.png",
          NomeEmpresa: "FIAP"
        },
       {
          Imagem: "img/certificados/Curso em video.png",
          Link: "https://www.cursoemvideo.com/",
          TituloLink: "Certificados em Tecnologia",
          Subtitulo: "Confira aqui os Certificados em Tecnologia do Gustavo Guanabara",
          Logo: "img/logoEmpresas/cursoEmVideo.png",
          NomeEmpresa: "Curso em Vídeo"
        },
        {
          Imagem: "img/certificados/instituto-federal-de-educacao-ciencia-e-tecnologia-do-rio-grande-do-sul.png",
          Link: "https://moodle.ifrs.edu.br/",
          TituloLink: "Certificados em Tecnologia",
          Subtitulo: "Confira aqui os Certificados em Tecnologia pela IFRS",
          Logo: "img/logoEmpresas/ifLogo.webp",
          NomeEmpresa: "Instituto Federal"
        },
         {
          Imagem: "img/certificados/AWS + BOTICARIO.png",
          Link: "https://aws-boticario.ontidwit.com/#/",
          TituloLink: "Certificação AWS",
          Subtitulo: "Confira aqui o Certificado do Grupo Boticario + AWS",
          Logo: "img/logoEmpresas/awsLogo.png",
          NomeEmpresa: "AWS"
        },
        {
          Imagem: "img/certificados/IBM - CYBERSECURITY FUNDAMENTALS.PNG",
          Link: "https://skillsbuild.org/students/digital-credentials",
          TituloLink: "Certificados em Tecnologia",
          Subtitulo: "Confira aqui os Certificados EM tecnologia pela IBM",
          Logo: "img/logoEmpresas/ibmLogo.png",
          NomeEmpresa: "IBM"
        },
        {
          Imagem: "img/certificados/6 - API Academy - Certificação em API.PNG",
          Link: "https://apiacademy.co/api-certification/",
          TituloLink: "Certificação em API",
          Subtitulo: "Confira aqui as 3 Certifições em API",
          Logo: "img/logoEmpresas/api_academy_logo.jpg",
          NomeEmpresa: "API Academy"
        },
        {
          Imagem: "img/certificados/7 - Certificado OracleAlura.png",
          Link: "https://www.oracle.com/br/education/oracle-next-education/",
          TituloLink: "Certificado Oracle + Alura.",
          Subtitulo: "Mias de 100 Certificados em Tecnologia ministrados pela Alura",
          Logo: "img/logoEmpresas/OracleLogo.png",
          NomeEmpresa: "Alura"
        },
        {
          Imagem: "img/certificados/8 - Certified - Scrum Fundamentals Certified.jpg",
          Link: "https://www.scrumstudy.com/portuguese/scrum-fundamentals-certified",
          TituloLink: "Scrum Fundamentals Certified",
          Subtitulo: "Confira aqui a Certificação em Scrum",
          Logo: "img/logoEmpresas/ScrumLogo.png",
          NomeEmpresa: "Certified"
        },
        {
          Imagem: "img/certificados/9 - CertiProf - Fundamentos Na Lei Geral De Proteção De Dados.PNG",
          Link: "https://certiprof.com/pt/pages/free-new-entry-level-certification",
          TituloLink: "Lei Geral De Proteção de Dados",
          Subtitulo: "Confira as 6 Certificações Gratuitas",
          Logo: "img/logoEmpresas/CertiProf.png",
          NomeEmpresa: "CertiProf"
        },
        {
          Imagem: "img/certificados/10 - DESEC - INTRODUÇÃO AO PENTEST NA PRÁTICA.jpg",
          Link: "https://desecsecurity.com/curso/introducao-pentest?utm_source=Google&utm_medium=CPL&utm_campaign=Perpetuo&utm_content=623626905067&gad_source=1&gclid=Cj0KCQiAw6yuBhDrARIsACf94RWiHdOAaqPTk3uLAIE4w7-2-RN9jEaRuFtawGXuxLVjTFhkixrwMI0aAl4BEALw_wcB",
          TituloLink: "Pentest Na Prática ",
          Subtitulo: "Confira aqui a Certificação de Introdução ao Pentest",
          Logo: "img/logoEmpresas/desec_security_logo.jpg",
          NomeEmpresa: "Desec"
        },
        {
          Imagem: "img/certificados/12 - Segurança Cibernética ISC2.PNG",
          Link: "https://www.isc2.org/certifications/cc",
          TituloLink: "Segurança Cibernética ISC2	",
          Subtitulo: "Confira aqui o certificado ISC2 em Cibersegurança",
          Logo: "img/logoEmpresas/isc2Logo.jpg",
          NomeEmpresa: "ISC2"
        },   
        {
          Imagem: "img/certificados/13 - SkillFront - ISO-IEC 27001 Information Security Associate.PNG",
          Link: "https://www.skillfront.com/ISO-IEC-27001-Information-Security-Associate",
          TituloLink: "ISO/IEC 27001",
          Subtitulo: "Confira aqui a Certificação pela SkillFront",
          Logo: "img/logoEmpresas/sfLogo.jpg",
          NomeEmpresa: "SkillFront"
        },
        {
          Imagem: "img/certificados/14 - SOLYD - Introdução ao Hacking e Pentest 2.0.PNG",
          Link: "https://solyd.com.br/cursos/introducao-ao-hacking-e-pentest-2/",
          TituloLink: "Hacking e Pentest",
          Subtitulo: "Confira aqui a Certificação em Hacking e Pentest",
          Logo: "img/logoEmpresas/solydLogo.png",
          NomeEmpresa: "SOLYD"
        },
        {
          Imagem: "img/certificados/15 - SOLYD - PYTHON.PNG",
          Link: "https://solyd.com.br/cursos/python-basico/",
          TituloLink: "PYTHON",
          Subtitulo: "Confira aqui a Certificação em Python",
          Logo: "img/logoEmpresas/solydLogo.png",
          NomeEmpresa: "SOLYD"
        },
        {
          Imagem: "img/certificados/16 - WOMCY - Programa de Educação e Certificação de Segurança Cibernética.PNG",
          Link: "https://womcy.org/pt/womcy-microsoft-cybersecurity-education-certification-program-2023-pt/",
          TituloLink: "SC-900 Microsoft",
          Subtitulo: "Certificação Segurança, Conformidade e Fundamentos da Microsoft",
          Logo: "img/logoEmpresas/womcy_logo.jpg",
          NomeEmpresa: "WOMCY"
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
  document.getElementById('ver-mais-button').style.display = 'none';
  // Atualiza a variável de controle
  allCardsVisible = true;
 // Atualiza o AOS para animar os novos cards adicionados
  AOS.refresh();
}





// Criando os cards dinamicamente
cards.forEach(function(card, index) {
  // Criando o elemento de link
  var link = document.createElement('a');
  link.target = "_blank";
  link.href = card.Link; 
  link.classList.add('post-link');
  link.setAttribute('data-aos', 'fade-up');

  
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

