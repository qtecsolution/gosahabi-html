
var swiper = new Swiper(".mySwiper", {
    mousewheelControl : false,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

    navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 40,
    }
  
  },
});
var swiper2 = new Swiper(".logoSlider", {
  mousewheelControl : false,
  loop: true,
  autoplay: {
      delay: 4000,
      disableOnInteraction: false,
  },

  navigation: {
nextEl: ".swiper-button-next",
prevEl: ".swiper-button-prev",
},
slidesPerView: 2,
spaceBetween: 10,
breakpoints: {
  576: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  992: {
    slidesPerView: 6,
    spaceBetween: 40,
  }

},
});

// hotel gallery slider

var swiper3 = new Swiper(".hotelGallery", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
},
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});