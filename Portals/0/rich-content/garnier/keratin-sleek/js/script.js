(() => {
  if (!document.querySelector('.swiper1.swiper-initialized')) {
    const swiper = new Swiper('#es-garnier .es-swiper1', {
      direction: 'horizontal',
      loop: false,

      pagination: {
        el: '.es-swiper1-pagination',
      },

      navigation: {
        nextEl: '.es-swiper1-button-next',
        prevEl: '.es-swiper1-button-prev',
      },
    });
  }
})();
