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