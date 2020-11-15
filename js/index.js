// ================= slick
$('.hero__items').slick({
    infinite: true,
    speed: 1000,
    fade:true,
    cssEase: 'linear',
    dots:true
  });

$('.clients__items').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidestoScroll:1,
    dots:true
});

$('.reviews__items').slick({
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidestoScroll:1,
  dots:true
});

// ================= animations
TweenMax.from('.subtitle', 1, {
  delay: 0.1,
  x: "-100vw",
  ease: Expo.easeInOut,
});
// header
TweenMax.from('.header__logo', 1.4, {
  delay: 0.2,
  x: "-100vw",
  ease: Expo.easeInOut,
});
TweenMax.from('.header__first', 1.2, {
  delay: 0.2,
  opacity: 0,
  x: "100%",
  ease: Expo.easeInOut,
});
TweenMax.from('.header__second', 1.2, {
  delay: 0.4,
  opacity: 0,
  x: "100%",
  ease: Expo.easeInOut,
});
TweenMax.from('.header__third', 1.2, {
  delay: 0.6,
  opacity: 0,
  x: "100%",
  ease: Expo.easeInOut,
});
TweenMax.from('.header__fourth', 1.2, {
  delay: 0.8,
  opacity: 0,
  x: "100%",
  ease: Expo.easeInOut,
});

// nav
TweenMax.from('.nav__first', 1, {
  delay: 0.3,
  opacity: 0,
  x: "100%",
  ease: Expo.easeInOut,
});
TweenMax.from('.nav__second', 1, {
  delay: 0.4,
  opacity: 0,
  x: "100%",
  ease: Expo.easeInOut,
});
TweenMax.from('.nav__third', 1, {
  delay: 0.5,
  opacity: 0,
  x: "100%",
  ease: Expo.easeInOut,
});
TweenMax.from('.nav__fourth', 1, {
  delay: 0.7,
  opacity: 0,
  x: "100%",
  ease: Expo.easeInOut,
});
TweenMax.from('.nav__fifth', 1, {
  delay: 0.7,
  opacity: 0,
  x: "100%",
  ease: Expo.easeInOut,
});

// hero
TweenMax.from('.hero__slider', 1.6, {
  delay: 0.1,
  x: "-100vw",
  ease: Expo.easeInOut,
});

// services
TweenMax.from('.services__title', 1, {
  delay: 0.1,
  opacity: 0,
  x: "-100%",
  ease: Expo.easeInOut,
});
TweenMax.from('.service__first', 1, {
  delay: 0.1,
  opacity: 0,
  y: "-100",
  x: "-100%",
  ease: Expo.easeInOut,
});
TweenMax.from('.service__fourth', 1, {
  delay: 0.1,
  opacity: 0,
  y: "100",
  x: "-100%",
  ease: Expo.easeInOut,
});
TweenMax.from('.service__third', 1, {
  delay: 0.1,
  opacity: 0,
  y: "-100",
  x: "100%",
  ease: Expo.easeInOut,
});
TweenMax.from('.service__sixth', 1, {
  delay: 0.1,
  opacity: 0,
  y: "100",
  x: "100%",
  ease: Expo.easeInOut,
});
TweenMax.from('.service__second', 1, {
  delay: 0.3,
  opacity: 0,
  ease: Expo.easeInOut,
});
TweenMax.from('.service__fifth', 1, {
  delay: 0.3,
  opacity: 0,
  ease: Expo.easeInOut,
});

// about
TweenMax.from('.about__title', 1.2, {
  delay: 0.2,
  x:"-100vw",
  ease: Expo.easeInOut,
});
TweenMax.from('.about__description', 1.4, {
  delay: 0.4,
  x:"-100vw",
  ease: Expo.easeInOut,
});
TweenMax.from('.about__down', 1.1, {
  delay: 0.3,
  opacity: 0,
  y: '-200',
  ease: Expo.easeInOut,
});
TweenMax.from('.about__up', 1.1, {
  delay: 0.2,
  opacity: 0,
  y: '200',
  ease: Expo.easeInOut,
});

// clients
TweenMax.from('.clients__title', 1.3, {
  delay: 0.1,
  opacity: 0,
  x: "-100%",
  ease: Expo.easeInOut,
});
TweenMax.from('.clients__slider', 1.5, {
  delay: 0.1,
  opacity: 0,
  ease: Expo.easeInOut,
});

// rewiews
TweenMax.from('.reviews__title', 1.3, {
  delay: 0.1,
  opacity: 0,
  x: "-100%",
  ease: Expo.easeInOut,
});
TweenMax.from('.reviews__slider', 1.5, {
  delay: 0.1,
  x: "100vw",
  ease: Expo.easeInOut,
});

// contacts
TweenMax.from('.contacts__bg', 1, {
  delay: 0,
  opacity: 0,
  ease: Expo.easeInOut,
});
TweenMax.from('.contacts__title', 1, {
  delay: 0.1,
  opacity: 0,
  x: '-100%',
  ease: Expo.easeInOut,
});
TweenMax.from('.contacts__descriptions', 1, {
  delay: 0.2,
  opacity: 0,
  x: '-100%',
  ease: Expo.easeInOut,
});
TweenMax.from('.contacts__items .contacts__icons', 1, {
  delay: 0.3,
  opacity: 0,
  x: '-100%',
  ease: Expo.easeInOut,
});

TweenMax.from('.contacts__items span', 1, {
  delay: 0.4,
  opacity: 0,
  x: '-100%',
  ease: Expo.easeInOut,
});
TweenMax.from('.contacts__name--input', 1, {
  delay: 0.4,
  opacity: 0,
  x: '100%',
  ease: Expo.easeInOut,
});
TweenMax.from('.contacts__message--input', 1, {
  delay: 0.4,
  opacity: 0,
  x: '100%',
  ease: Expo.easeInOut,
});
TweenMax.from('.contacts__link', 1, {
  delay: 0.4,
  opacity: 0,
  x: '100%',
  ease: Expo.easeInOut,
});

//footer 
TweenMax.from('.footer', 1, {
  delay: 0.1,
  opacity: 0,
  y: '100%',
  ease: Expo.easeInOut,
});
// setTimeout(timer, 500);

// TweenMax.to('.over-1', 1, {
//   delay: 0.3,
//   top: '-100%',
//   ease: Expo.easeInOut,
// });

// TweenMax.to('.over-2', 1, {
//   delay: 0.7,
//   top: '-100%',
//   ease: Expo.easeInOut,
// });

// TweenMax.to('.over-3', 1, {
//   delay: 1.1,
//   top: '-100%',
//   ease: Expo.easeInOut,
// });

// TweenMax.to('.overlay', 1, {
//   delay: 1.1,
//   zIndex: -1,
// });