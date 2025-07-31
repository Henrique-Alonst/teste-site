 const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    toggle.addEventListener('click', () => {
      menu.classList.toggle('ativo');
    });

document.addEventListener('DOMContentLoaded', function () {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.getElementById('lightboxClose');
    const links = document.querySelectorAll('.comprar');

    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const imgSrc = this.getAttribute('data-image');
        lightboxImg.src = imgSrc;
        lightbox.style.display = 'flex';
      });
    });

    closeBtn.addEventListener('click', () => {
      lightbox.style.display = 'none';
      lightboxImg.src = '';
    });

    // Fechar clicando fora da imagem
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
      }
    });
  });

function inicio(){
  var sobreInicio = document.querySelector('#hero');
  sobreInicio.scrollIntoView({behavior: 'smooth'})
}

  function produtos(){
  var sobreProdutos = document.querySelector('#CATÁLOGO');
  sobreProdutos.scrollIntoView({behavior: 'smooth'})
}

function sobre(){
  var sobreNos = document.querySelector('#sobre-nos');
  sobreNos.scrollIntoView({behavior: 'smooth'})
}

function faleConosco(){
  var sobreFooter = document.querySelector('#contato');
  sobreFooter.scrollIntoView({behavior: 'smooth'});
}