const mychannel = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1, //количество колонок в слайдере
  spaceBetween: 20, //расстояние между картинками в слайдере
  breakpoints: { //поведение слайдера в разных точках
    1900: { //для экранов с разрешением больше 1900
      slidesPerView: 6, //количество колонок в слайдере
    },
    1600:{ 
      slidesPerView: 5, //количество колонок в слайдере
    },
    1300:{ 
      slidesPerView: 4,
    },
    1100:{ 
      slidesPerView: 3,
    },
    800:{ 
      slidesPerView: 2,
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: 'channel-button-next',
    prevEl: 'channel-button-prev',
  },
});

const searchBth = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');
searchBth.addEventListener('click',() => {
 mobileSearch.classList.toggle('is-open');
});