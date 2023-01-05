let ima=["../img/br/brazil_place_01.jpeg",
"../img/br/tur_place_01.jpg",
"../img/br/che_place_01.png",
"../img/br/vietnam_place_01.jpg",
"../img/br/can_place_02.png",
"../img/br/isl_place_01.jpg",
"../img/br/ita_place_03.jpg",
];
let txt=[["브라질연방 공화국", "FederativeRepublic of Brazil"],
["튀르키예 공화국" , "Republic of Türkiye"],
["스위스연방" , "Swiss Confederation"],
["베트남 사회주의 공화국" , "Socialist Republic of Viet Nam"],
["캐나다" , "Canada"],
["아이슬란드 공화국" , "Republic of Iceland"],
["이탈리아 공화국", "The Italian Republic"]
]
console.log(txt[3][1]);
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
const visualMain = document.querySelector(".swi");
const txtMain= document.querySelector(".center .text h2");
const txtMain2= document.querySelector(".center .text .text-sub p");
const txtM= document.querySelector(".center .text");
let iddx=0;
//스위퍼
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
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
  on:{
    slideChange:function(e){
      //visualMain.style=`background-image=${ima[e.realIndex]}`;
      visualMain.style=`background:url(${ima[e.realIndex]}) center center  / cover no-repeat`;
      txtM.classList.remove('active');
      
      setTimeout(() => {
        txtMain.innerHTML=`${txt[e.realIndex][0]}`;
        txtMain2.innerHTML=`${txt[e.realIndex][1]}`;
        txtM.classList.add('active');     
      }, 1000);
      //console.log(e.realIndex)
    }
  },
  breakpoints: {
    1920:{
      slidesPerView: 6,
      spaceBetween: 56,
    },
    1280:{
      slidesPerView:5,
      spaceBetween:90
    },
    1024:{
      slidesPerView:4,
      spaceBetween:40
    },
    768:{
      slidesPerView:3,
      spaceBetween:60
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
