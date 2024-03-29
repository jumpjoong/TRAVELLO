// let ima = [
//   "./img/BRA/brazil.jpg",
//   "./img/TUR/turtur.jpg",
//   "./img/CHE/newswiss.webp",
//   "./img/VNM/vietnam.jpg",
//   "./img/CAN/canadatwo.jpg",
//   "./img/ISL/islandtwo.jpg",
//   "./img/ITA/italia.jpg",
// ];

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
// 기본값 0
window.onload = () => {
  localStorage.setItem('num', 0)
}

const visualMain = document.querySelector("main");
const txtM = document.querySelector(".center .text");
const txtMain = document.querySelector(".center .text h2");
const txtMain2 = document.querySelector(".center .text .text-sub p");
let iddx = 0;
let txt = [
  ["브라질연방 공화국", "FederativeRepublic of Brazil"],
  ["캐나다", "Canada"],
  ["스위스연방", "Swiss Confederation"],
  ["이탈리아 공화국", "The Italian Republic"],
  ["아이슬란드 공화국", "Republic of Iceland"],
  ["튀르키예 공화국", "Republic of Türkiye"],
  ["베트남 사회주의 공화국", "Socialist Republic of Viet Nam"],
];
//swiper관련 이벤트
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  SlidesPerGroup:6,
  spaceBetween: 56,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChange: function (e) {
      txtM.classList.remove("active");
      setTimeout(() => {
        txtMain.innerHTML = `${txt[e.realIndex][0]}`;
        txtMain2.innerHTML = `${txt[e.realIndex][1]}`;
        txtM.classList.add("active");
      }, 1000);
    },
  },
  breakpoints: {
    1920: {
      slidesPerView: 6,
      spaceBetween: 56,
    },
    1600: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 45,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    200: {
      slidesPerView: 1,
      spaceBetween: 40,
    }
  }
});
//오버 시 슬라이드
let slides, slides1;

swiper.navigation.nextEl.addEventListener("mouseenter", () => {
  slides = setInterval(() => {
    swiper.navigation.nextEl.click();
  }, 2000);
});

swiper.navigation.prevEl.addEventListener("mouseenter", () => {
  slides1 = setInterval(() => {
    swiper.navigation.prevEl.click();
  }, 2000);
});
//오버 아닐 시 슬라이드 멈춤
swiper.navigation.prevEl.addEventListener("mouseout", () => {
  clearInterval(slides1);
});
swiper.navigation.nextEl.addEventListener("mouseout", () => {
  clearInterval(slides);
});

const contry = document.querySelectorAll('.swiper-slide');

contry.forEach(function(btn, key){
  btn.onclick = function(e) {
    localStorage.setItem('num', this.dataset.swiperSlideIndex)
    // e.preventDefault()
    // console.log(btn)
  }
});