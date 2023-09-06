window.onscroll = function() {fixHeader()}

let header = document.querySelector('.header')
let breadcrumbs = document.querySelector('.breadcrumbs')
let sticky = header.offsetTop

function fixHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("header--zindex")
    breadcrumbs.classList.add("breadcrumbs--dn")
  } else {
    header.classList.remove("header--zindex")
    breadcrumbs.classList.remove("breadcrumbs--dn")
  }
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
  $('.cart__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.cart__sliderprev'
  });
  $('.cart__sliderprev').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    asNavFor: '.cart__slider',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 575,
        settings: {
          dots: false,
          slidesToShow: 3,
          rows: 1,
          centerMode: false
        }
      },
      {
        breakpoint: 424,
        settings: {
          dots: false,
          slidesToShow: 2,
          rows: 1,
          centerMode: false
        }
      },
      {
        breakpoint: 374,
        settings: {
          dots: false,
          rows: 1,
          slidesToShow: 2,
          centerMode: false
        }
      }
    ]
  });
})