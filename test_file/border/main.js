let ima=["../img/BRA/brazil_place_01.jpeg",
"../img/BRA/brazil_place_02.jpg",
"../img/BRA/brazil_place_03.jpg",
"../img/BRA/food/brazil01_food01_01.jpg",
"../img/BRA/food/brazil01_food01_02.jpg",
"../img/BRA/food/brazil01_food01_03.jpg",
"../img/BRA/food/brazil01_food01_04.jpg",
];
let txt=[["브라질연방 공화국", "FederativeRepublic of Brazil"],
["튀르키예 공화국" , "Republic of Türkiye"],
["스위스연방" , "Swiss Confederation"],
["베트남 사회주의 공화국" , "Socialist Republic of Viet Nam"],
["캐나다" , "Canada"],
["아이슬란드 공화국" , "Republic of Iceland"],
["국", "Country"]
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
const visualMain = document.querySelector("main");
const txtMain= document.querySelector(".center .text h2");
const txtMain2= document.querySelector(".center .text .text-sub p");
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
  on:{
    slideChange:function(e){
      //visualMain.style=`background-image=${ima[e.realIndex]}`;
      visualMain.style=`background:url(${ima[e.realIndex]}) 0 0 / cover no-repeat`;
      txtMain.innerHTML=`${txt[e.realIndex][0]}`;
      txtMain2.innerHTML=`${txt[e.realIndex][1]}`;

      console.log(e.realIndex)
    }
  }
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
