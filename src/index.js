document.addEventListener('DOMContentLoaded', () => {
    const continueBtn = document.getElementById('continueBtn');
    const introSection = document.getElementById('introSection');
    const swiperSection = document.getElementById('swiperSection');

    // ⏱️ Mostra botão após 3 segundos com fade
    setTimeout(() => {
    continueBtn.style.display = 'inline-block';
    continueBtn.classList.add('fade-in-delay');
    }, 3000);

    continueBtn.addEventListener('click', () => {
    introSection.classList.add('d-none');
    swiperSection.classList.remove('d-none');
    enableMusicPlaybackOnUserInteraction();

    // Inicia Swiper vertical
    const swiper = new Swiper('.swiper', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        keyboard: {
        enabled: true,
        },
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
    });
    });
});

function enableMusicPlaybackOnUserInteraction() {
  const bgMusic = document.getElementById('bgMusic');

  function playMusicOnce() {
    // Remove o listener para evitar múltiplas execuções
    document.removeEventListener('click', playMusicOnce);
    document.removeEventListener('touchstart', playMusicOnce);

    if (bgMusic) {
      bgMusic.play().catch((err) => {
        console.warn("Música não pôde ser reproduzida:", err);
      });
    }
  }

  // Aguarda qualquer interação do usuário
  document.addEventListener('click', playMusicOnce);
  document.addEventListener('touchstart', playMusicOnce);
}
