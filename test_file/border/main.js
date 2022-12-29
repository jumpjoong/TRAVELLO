//마우스 오버시 정지, 오버 아닐 시 재생
let $slides = document.querySelectorAll(".swiper-slide");
for (let i of $slides) {
  i.addEventListener("mouseover", () => {
    swiper.autoplay.stop();
  });
  i.addEventListener("mouseout", () => {
    swiper.autoplay.start();
  });
}
//스위퍼
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 56,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//오버 시 슬라이드
let slides, slides1;

swiper.navigation.nextEl.addEventListener("mouseenter", () => {
  slides = setInterval(() => {
    swiper.navigation.nextEl.click();
  }, 1000);
});

swiper.navigation.prevEl.addEventListener("mouseenter", () => {
  slides1 = setInterval(() => {
    swiper.navigation.prevEl.click();
  }, 1000);
});
//오버 아닐 시 슬라이드 멈춤
swiper.navigation.prevEl.addEventListener("mouseout", () => {
  clearInterval(slides1);
});
swiper.navigation.nextEl.addEventListener("mouseout", () => {
  clearInterval(slides);
});
