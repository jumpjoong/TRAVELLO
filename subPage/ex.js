//json
fetch('../resource/data.json')
.then(function(res) {return res.json()})
.then(function(abc) {
  init(abc.data)

})

//로컬스트로지 값 받오는 변수
let countryKey = localStorage.getItem('num');

//구글 맵
// let contryGps = [
//   {
//     "contry": "brazil",
//     "url" : { lat: -14.142426 ,lng: -53.104981 },
//   },
//   {
//     "contry": "canada",
//     "url" : { lat: 56.00000 ,lng: -96.00000 },
//   },
//   {
//     "contry": "switzerland",
//     "url" : { lat: 46.584747 ,lng: 8.132716 },
//   },
//   {
//     "contry": "italy",
//     "url" : { lat: 41.173286 ,lng: 12.342500 },
//   },
//   {
//     "contry": "mongolia",
//     "url" : { lat: 46.515439 ,lng: 103.50522 },
//   },
//   {
//     "contry": "turkey",
//     "url" : { lat: 38.572643 ,lng: 35.142667 },
//   },
//   {
//     "contry": " vietnam",
//     "url" : { lat: 15.541102 ,lng: 105.482409 }
//   }
// ]
// function initMap() {
//   var map = new google.maps.Map(
//     document.querySelector('.maps'), {
//       zoom: 5,
//       center: contryGps[contryKey].url
//     }
//   );
// }
//큰 제목
function init (a) {
  const countryImg = document.querySelectorAll('.section01-contain')

  countryImg.forEach((btn, key)=>{
    btn.innerHTML = `<img src="${a[countryKey].place[key].url}">
    <p class="section01-text">${a[countryKey].place[key].title}</p>`
  })

  //section02
  function dataChange(key){
    const elSec02 = document.querySelector('.section02-contain');
    elSec02.innerHTML = `<div class="maps">
                        <img src="${a[countryKey].country_url}" alt="${a[countryKey].place[key].title}의 지역">
                      </div>
                      <div class="text">
                        <p class="title">${a[countryKey].place[key].title}</p>
                        <p class="detail">${a[countryKey].place[key].detail}</p>
                        <a class="more" href="">more</a>
                      </div>`;
                      // console.log(a[countryKey].place[key].lodging[key].img_url)

    //section04 클릭 시 이미지 추가
    const elSec04Img = document.querySelector('.section04-img'),
          elsec04Num = document.querySelectorAll('.section04-number'),
          elInfo = document.querySelector('.section04-info');
    
    elsec04Num.forEach((sec,n)=>{
      sec.addEventListener("click",function(){
      image(n)
      })
    })
    function image(n){ 
      elSec04Img.innerHTML = `<img src="" alt="">`
      for(i=0;i<4;i++){
        elSec04Img.innerHTML += `<img src="${a[countryKey].place[key].lodging[n].img_url[i]}" alt="">`;
      }
    }
    elInfo.innerHTML = `<p>
                          설명
                        </p>`;
    //section04 페이지 로드 시 이미지 불러오기
    image(0);           
  }  
  dataChange(0);

  //section1 슬라이드
  var swiper = new Swiper(".mySwiper", {
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on:{
      slideChange:function(e){
        dataChange(e.realIndex);
      }
    }
  });


}
