let figureCircle = document.querySelectorAll(".circle");
let servicesTabsItem = document.querySelectorAll(".services__tabs-item");
let tabLink = document.querySelectorAll(".services__tabs-btns a");
let tabBtns = document.querySelector(".services__tabs-btns");
let faqAccordion = document.querySelectorAll(".faq__accordion a");
let faqAccordionTxt = document.querySelectorAll(".faq__accordion p");
let pricingItems = document.querySelectorAll(".pricing__items");
let priciBtns = document.querySelectorAll(".pricing__btns button");
let headerNav = document.querySelector(".header__nav");
let headerMenuClose = document.querySelector(".header__menu-close");
let servicesOpenMobile = document.querySelector(".services__tabs-mobile");
let createxVideo = document.querySelector(".createx-video");

$(window).ready(() => {
  servicesOpenMobile.textContent = tabBtns.firstElementChild.innerText;
  //Слайдер клиенты
  $(".agency-slider").slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
    ],
  });
  //Слайдер студии
  $(".studies__slider")
    .slick({
      speed: 1000, //Скорость анимации
      autiplaySpeed: 2000, //Таймер автопрокрутки
      cssEase: "cubic-bezier(.22,.68,0,1.71)",
      arrows: true,
      slidesToShow: 3,
      infinite: false,
      autoplay: true,
      prevArrow: `
      <button class="s_prev">
      <svg width="24" height="24" viewBox="0 0 24 24">
      <path fill="#424551" clip-rule="evenodd" d="M9.20711 17.2071C8.81658 17.5976 8.18342 17.5976 7.79289 17.2071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L7.79289 6.79289C8.18342 6.40237 8.81658 6.40237 9.20711 6.79289C9.59763 7.18342 9.59763 7.81658 9.20711 8.20711L6.41421 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L6.41421 13L9.20711 15.7929C9.59763 16.1834 9.59763 16.8166 9.20711 17.2071Z" fill="#424551"/>
      </svg>
      </button>
      `,
      nextArrow: `
      <button class="s_next">
      <svg width="24" height="24" viewBox="0 0 24 24">
      <path fill="#424551" clip-rule="evenodd" d="M14.7929 6.79289C15.1834 6.40237 15.8166 6.40237 16.2071 6.79289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L16.2071 17.2071C15.8166 17.5976 15.1834 17.5976 14.7929 17.2071C14.4024 16.8166 14.4024 16.1834 14.7929 15.7929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L14.7929 8.20711C14.4024 7.81658 14.4024 7.18342 14.7929 6.79289Z" fill="white"/>
      </svg>
      </button>
      `,
      appendArrows: ".studies__slider-btn",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows: true,
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 800,
          settings: {
            arrows: true,
            slidesToShow: 1,
          },
        },
      ],
    })
    .on("afterChange", () => {
      console.log(1);
    });
  //Слайдер клиентов
  $(".clients__slider-inner").slick({
    arrows: true,
    slidesToShow: 1,
    infinite: false,
    fade: true,
    prevArrow: `
    <button class="s_prev">
    <svg width="24" height="24" viewBox="0 0 24 24">
    <path fill="#424551" clip-rule="evenodd" d="M9.20711 17.2071C8.81658 17.5976 8.18342 17.5976 7.79289 17.2071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L7.79289 6.79289C8.18342 6.40237 8.81658 6.40237 9.20711 6.79289C9.59763 7.18342 9.59763 7.81658 9.20711 8.20711L6.41421 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L6.41421 13L9.20711 15.7929C9.59763 16.1834 9.59763 16.8166 9.20711 17.2071Z" fill="#424551"/>
    </svg>
    </button>
    `,
    nextArrow: `
    <button class="s_next">
    <svg width="24" height="24" viewBox="0 0 24 24">
    <path fill="#424551" clip-rule="evenodd" d="M14.7929 6.79289C15.1834 6.40237 15.8166 6.40237 16.2071 6.79289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L16.2071 17.2071C15.8166 17.5976 15.1834 17.5976 14.7929 17.2071C14.4024 16.8166 14.4024 16.1834 14.7929 15.7929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L14.7929 8.20711C14.4024 7.81658 14.4024 7.18342 14.7929 6.79289Z" fill="white"/>
    </svg>
    </button>
    `,
    appendArrows: `.clients__slider`,
  });
  //Табы
  document.addEventListener("click", (e) => {
    let tabBtn = e.target.closest(".services__tabs-btns a");
    let accBtn = e.target.closest(".faq__accordion a");
    let allBtns = e.target.closest("a, button");
    let priceBtns = e.target.closest(".pricing__btns button");
    let newsItemA = e.target.closest(".news__item a");
    let menuBtn = e.target.closest(".header__menu-btn");
    let footerUp = e.target.closest(".footer__up a");
    let playVideo = e.target.closest(".header__center-play");
    let closeVideo = e.target.closest(".close-video");

    if (allBtns) {
      e.preventDefault();
    }
    //Таб
    if (tabBtn) {
      tabBtn.classList.add("active-btn");
      for (let i = 0; i < servicesTabsItem.length; i++) {
        servicesTabsItem[i].classList.remove("active-tab");
        tabLink[i].classList.remove("active-btn");
      }
      document
        .getElementById(`${tabBtn.dataset.tab}`)
        .classList.add("active-tab");
      tabBtn.classList.add("active-btn");
      servicesOpenMobile.textContent = tabBtn.textContent;
    } else if (accBtn) {
      //Аккордион
      let nextElBtn = accBtn.nextElementSibling;

      if (accBtn.classList == "active-ac-btn") {
        nextElBtn.style.height = `${nextElBtn.offsetHeight}px`;
        nextElBtn.offsetHeight;
        nextElBtn.style.display = "block";
        nextElBtn.style.height = 0;

        accBtn.classList.remove("active-ac-btn");
        nextElBtn.classList.remove("active-ac-txt");

        accTime(nextElBtn, 300);
      } else {
        nextElBtn.style.display = "block";

        let myH = nextElBtn.offsetHeight;
        nextElBtn.style.height = 0;
        nextElBtn.offsetHeight;

        nextElBtn.style.height = `${myH}px`;
        accBtn.classList.add("active-ac-btn");
        nextElBtn.classList.add("active-ac-txt");

        accTime(nextElBtn, 300);
      }
    } else if (priceBtns) {
      for (let i = 0; i < pricingItems.length; i++) {
        pricingItems[i].classList.remove("pricing-i-active");
        priciBtns[i].classList.remove("pricing-b-active");
      }
      priceBtns.classList.add("pricing-b-active");
      document
        .getElementById(`${priceBtns.dataset.price}`)
        .classList.add("pricing-i-active");
    } else if (newsItemA) {
      let nextEl = newsItemA.previousElementSibling;
      console.dir(nextEl);
      if (newsItemA.dataset.news == "off") {
        newsItemA.dataset.news = "on";
        nextEl.lastElementChild.style.display = "block";
        nextEl.style.height = `${nextEl.lastElementChild.offsetHeight}px`;
      } else {
        newsItemA.dataset.news = "off";
        nextEl.style.height = "52px";
        setTimeout(() => {
          nextEl.lastElementChild.style.display = "-webkit-box";
        }, 300);
      }
    } else if (menuBtn) {
      document.body.style.overflow = "hidden";
      headerNav.classList.add("header__nav-a");
      headerMenuClose.classList.add("header__menu-active");
    } else if (footerUp) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (playVideo) {
      document.body.style.overflow = "hidden";
      createxVideo.classList.add("createx-video-a");
      $(".youtube__video").each(function () {
        $(this)[0].contentWindow.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          "*"
        );
      });
    } else if (closeVideo) {
      document.body.style.overflow = "visible";
      createxVideo.classList.remove("createx-video-a");
      $(".youtube__video").each(function () {
        $(this)[0].contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      });
    } else {
      false;
    }
  });

  //Скрыть меню
  headerMenuClose.onclick = () => {
    document.body.style.overflow = "visible";
    headerNav.classList.remove("header__nav-a");
    headerMenuClose.classList.remove("header__menu-active");
  };
  //Табы для мобильной версии
  servicesOpenMobile.onclick = function () {
    this.classList.toggle("services__tabs-mobile-a");
    if (this.dataset.tab == "off") {
      this.dataset.tab = "on";
      tabBtns.style.display = "flex";
      tabBtns.style.padding = "5px";
      let bbb = tabBtns.offsetHeight;
      tabBtns.style.height = `0`;
      tabBtns.offsetHeight;
      tabBtns.style.height = `${bbb}px`;
    } else {
      this.dataset.tab = "off";
      tabBtns.style.padding = "0";
      accTime(tabBtns, 300);
      tabBtns.style.height = `0`;
    }
  };
  //Аккордион
  let accTime = (el, t) => {
    window.setTimeout(() => {
      el.style.display = "";
      el.style.height = "";
    }, t);
  };
  //Скрыть меню при увелечении размера окна
  $(window).resize(() => {
    if ($(window).width() > 992) {
      if (headerNav.classList.length > 1) {
        console.log("boom");
        document.body.style.overflow = "visible";
        headerNav.classList.remove("header__nav-a");
        headerMenuClose.classList.remove("header__menu-active");
      }
    }
  });
  //Прозрачный фон фигур
  for (let i = 0; i < figureCircle.length; i++) {
    figureCircle[i].style.borderColor = figureCircle[i].dataset.empty;
  }
  //Плагин фигур
  let figureFun = () => {
    $(".circle").circleProgress({
      startAngle: 4.7, //начало
      emptyFill: "transparent",
    });
  };
  figureFun();
});
