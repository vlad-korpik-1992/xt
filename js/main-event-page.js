window.onscroll = function() {fixHeader()}

let header = document.querySelector('.header')
let sticky = header.offsetTop

function fixHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("header--zindex")
  } else {
    header.classList.remove("header--zindex")
  }
}

const pageWidth = document.documentElement.scrollWidth

if (pageWidth > 992) {

  const contentEvants = document.querySelector('#recital__box__inner')
  let contentEvantsH = document.getElementById('recital__box__inner').clientHeight
  let recitalImg = document.getElementById('recitalImg').clientHeight
  
  if(contentEvantsH < recitalImg){
    contentEvants.style.height = document.getElementById('recitalImg').clientHeight - 168 + 'px'
  }
  else{
    contentEvants.style.height = document.getElementById('recital__box__inner').clientHeight + 'px'
  }
  window.addEventListener('resize', (e) => {
    let contentEvantsH = document.getElementById('recital__box__inner').clientHeight
    let recitalImg = document.getElementById('recitalImg').clientHeight
    if(contentEvantsH < recitalImg){
      contentEvants.style.height = document.getElementById('recitalImg').clientHeight - 168 + 'px'
    }
    else{
      contentEvants.style.height = document.getElementById('recital__box__inner').clientHeight + 'px'
    }
  });

}


if (pageWidth < 992) {
  document.querySelector("#logo").src = "./img/logo.svg";
}



function openMenu(event) {
    event.preventDefault()
    const btnMenu = document.querySelector('.menu__btn');
    const listMenu = document.querySelector('.menu__list');
    const btnElement = document.querySelector('.menu__btn__element');
    btnMenu.classList.toggle('menu__btn--close');
    listMenu.classList.toggle('menu__list--active');
    btnElement.classList.toggle('menu__btn__element--close');
}