// Хедер скролл

$(document).ready(function () {  
  var top = $('#menubar-mob').offset().top - parseFloat($('#menubar-mob').css('marginTop').replace(/auto/, 0));
  $(window).scroll(function (_event) {
  // определяем позицию y относительно окна браузера
    var y = $(this).scrollTop();

    // если он является формой ниже
    if (y >= top) {
    // то присваиваем класс .fixed
    $('#menubar-mob').addClass('fixed');
    } else {
    // если нет – удаляем класс
    $('#menubar-mob').removeClass('fixed');
    }
  });
});


// Бургер-меню 

document.querySelector(".header-burger").addEventListener("click", function() {
  document.querySelector(".header-mobile__burger-menu").classList.add("active");
  document.querySelector("#scroll").classList.add("body-scroll")
});

document.querySelector(".header-mobile__burger-nav").addEventListener("click", function() {
  document.querySelector(".header-mobile__burger-menu").classList.remove("active");
  document.querySelector("#scroll").classList.remove("body-scroll")
}); 

document.querySelector(".header-mobile__burger-close").addEventListener("click", function() {
  document.querySelector(".header-mobile__burger-menu").classList.remove("active");
  document.querySelector("#scroll").classList.remove("body-scroll")
}); 


// Показать текст

let btnsMore = document.querySelectorAll(".btnsMore");

for(btn of btnsMore) {
  btn.addEventListener('click', function() {
    let parent = this.closest('.section-review__bottom');
    let dots = parent.querySelector('.dots');
    let more = parent.querySelector('.more');

    if(dots.style.display === 'none') {
      dots.style.display = "inline";
      more.style.display = "none";
      this.textContent = "Читать";
    } else {
      dots.style.display = "none";
      more.style.display = "inline";
      this.textContent = "Скрыть";
    };
  });
};


// Слайдер Документы

const swiperDoc = new Swiper('.section-doc__swiper', {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  

  breakpoints: {
		769: {
			direction: 'horizontal',
			spaceBetween: 30,
			slidesPerView: 4.5,
      centeredSlides: true,
		},
  },
});


// Mодальное окно Город

document.getElementById("modal__btn-mob").addEventListener("click", function() {
  document.getElementById("modal__city").classList.add("open");
  document.querySelector("#scroll").classList.add("body-scroll");
  document.querySelector(".header-mobile__burger-menu").classList.add("body-scroll");
});

document.getElementById("modal__btn").addEventListener("click", function() {
  document.getElementById("modal__city").classList.add("open");
  document.querySelector("#scroll").classList.add("body-scroll")
});

document.getElementById("close-city-btn").addEventListener("click", function() {
  document.getElementById("modal__city").classList.remove("open");
  document.querySelector("#scroll").classList.remove("body-scroll")
});

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("modal__city").classList.remove("open");
      document.querySelector("#scroll").classList.remove("body-scroll")
  }
});

document.querySelector("#modal__city .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("modal__city").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
  document.querySelector("#scroll").classList.remove("body-scroll")
});


// Попап Акции

var delay_popup = 5000;
setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);

document.getElementById('popupClose').addEventListener('click', () => {
  document.getElementById('overlay').style.display='none'
})


// Слайдер Преимущества

const slider = document.querySelector('.section-plus__swiper');

let mySwiper;

function mobileSlider() {
	if (window.innerWidth <= 769 && slider.dataset.mobile == 'false') {
		mySwiper = new Swiper(slider, {
			slidesPerView: 1.8,
			spaceBetween: 20,
      initialSlide: 1,     
      loop: true,
			slideClass: 'section-plus__item',

      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: 50,
      },
		});

		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 769) {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-container-initialized')) {
			mySwiper.destroy();
		}
	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});

window.addEventListener('orientationchange', () => {
	mobileSlider();
});


// Слайдер Работаем

const sliderWork = document.querySelector('.section-work__swiper');

let swiperWork;

function mobileSliderWork() {
	if (window.innerWidth <= 769 && sliderWork.dataset.mobile2 == 'false') {
		swiperWork = new Swiper(sliderWork, {
			slidesPerView: 1,
			spaceBetween: 5,
			slideClass: 'section-work__item',
      
      scrollbar: {
        el: '.section-work__scrollbar',
        draggable: true,
        dragSize: 50,
      },
		});

		sliderWork.dataset.mobile2 = 'true';
	}

	if (window.innerWidth > 769) {
		sliderWork.dataset.mobile2 = 'false';
		if (sliderWork.classList.contains('swiper-container-initialized')) {
			swiperWork.destroy();
		}
	}
}

mobileSliderWork()

window.addEventListener('resize', () => {
	mobileSliderWork();
});

window.addEventListener('orientationchange', () => {
	mobileSliderWork();
});


// Слайдер Партнеры

const sliderPartners = document.querySelector('.section-partners__swiper');

let swiperPartners;

function mobileSliderPartners() {
	if (window.innerWidth <= 769 && sliderPartners.dataset.mobile3 == 'false') {
		swiperPartners = new Swiper(sliderPartners, {
			slidesPerView: 2,
			spaceBetween: 20,
			loop: true,
      centeredSlides: true,
      initialSlide: 2,
			slideClass: 'section-partners__item',
		});

		sliderPartners.dataset.mobile3 = 'true';
	}

	if (window.innerWidth > 769) {
		sliderPartners.dataset.mobile3 = 'false';
		if (sliderPartners.classList.contains('swiper-container-initialized')) {
			swiperPartners.destroy();
		}
	}
}

mobileSliderPartners()

window.addEventListener('resize', () => {
	mobileSliderPartners();
});

window.addEventListener('orientationchange', () => {
	mobileSliderPartners();
});



// Аккордеон

document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.accordion__control');
      const content = self.querySelector('.accordion__content');

      self.classList.toggle('open');

      // если открыт аккордеон
      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
      }
    });
  });
});


// Слайдер Отзывы

const sliderReview = document.querySelector('.section-review__swiper');

let swiperReview;

function mobileSliderReview() {
  if (window.innerWidth >= 769 && sliderReview.dataset.mobile4 == 'false') {
    swiperReview = new Swiper(sliderReview, {
    
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
      slideClass: 'section-review__slide',
      
      navigation: {
        nextEl: ".section-review__btn-right",
        prevEl: ".section-review__btn-left"
      },
    });
    sliderReview.dataset.mobile4 = 'true';
  };
  
	if (window.innerWidth < 769) {
    sliderReview.dataset.mobile4 = 'false';
		swiperReview.destroy();
	};
};

mobileSliderReview()

window.addEventListener('resize', () => {
	mobileSliderReview();
});

window.addEventListener('orientationchange', () => {
	mobileSliderReview();
});
