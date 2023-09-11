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

$(document).ready(function() {
  $('.top__slider').slick({
		mobileFirst: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		rows: 1,
		arrows: true,
		dots: false,
		autoplay: true,
		infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          dots: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 280,
        settings: {
          dots: false,
          slidesToShow: 1
        }
      }
    ]
	});
  $('.jobs__box__items__link').click(function (e) {
    e.preventDefault();
    let elem = e.target;
    let id = '1' + elem.getAttribute('id');
    let idContent = '2' + elem.getAttribute('id');
    console.log(elem);
    jQuery("#"+id).toggleClass('content--dn');
    jQuery("#"+idContent).toggleClass('content--active');
    });
})