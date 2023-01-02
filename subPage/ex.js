//json
fetch('../resource/data.json')
.then(function(res) {return res.json()})
.then(function(abc) {
  init(abc.data)
})

//로컬스트로지 값 받오는 변수
let contryKey = localStorage.getItem('num');

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

