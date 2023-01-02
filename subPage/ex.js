//json
fetch('../resource/data.json')
.then(function(res) {return res.json()})
.then(function(abc) {
  init(abc.data)
})

//로컬스트로지 값 받오는 변수
let contryKey = localStorage.getItem('num');

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
  const subEl = document.querySelectorAll('.text > .text-sub')
  const contryImg = document.querySelectorAll('.section01-contain')
  const contryMaps = document.querySelector('.maps')
  // window.addEventListener('load',()=>{
  subEl.innerHTML = `<p>${a[contryKey].country_en}</p>`
  contryImg.forEach((btn, key)=>{
    btn.innerHTML = `<img src="${a[contryKey].place[key].url}">
    <p class="section01-text">${a[contryKey].place[key].title}</p>`
  })
  contryMaps.innerHTML = `<img src="${a[contryKey].country_url}">`
  // })
}

