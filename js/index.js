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
// gsap animation
TweenMax.from('.header__logo', 1.4, {
  delay: 0.1,
  x: "-100vw",
  ease: Expo.easeInOut,
});
TweenMax.from('.header__item', 1.4, {
  delay: 0.2,
  y: "-50",
  ease: Expo.easeInOut,
});
TweenMax.from('.header__nav', 1.6, {
  delay: 0.4,
  y: "50",
  ease: Expo.easeInOut,
});
TweenMax.from('.hero__slider', 1.6, {
  delay: 0.1,
  x: "-100vw",
  ease: Expo.easeInOut,
});
TweenMax.from('.subtitle', 1.3, {
  delay: 0.2,
  x: "-100vw",
  ease: Expo.easeInOut,
});
TweenMax.from('.services__title', 1.5, {
  delay: 0.4,
  x: "-100vw",
  ease: Expo.easeInOut,
});
TweenMax.from('.services__items img', 1.5, {
  delay: 0.1,
  opacity: 0,
  ease: Expo.easeInOut,
});
TweenMax.from('.services__items span', 1.5, {
  delay: 0.1,
  opacity: 0,
  ease: Expo.easeInOut,
});
TweenMax.from('.clients__title', 1.5, {
  delay: 0.1,
  x: "-100vw",
  ease: Expo.easeInOut,
});
TweenMax.from('.clients__slider', 1.5, {
  delay: 0.1,
  opacity: 0,
  ease: Expo.easeInOut,
});
TweenMax.from('.reviews__title', 1.5, {
  delay: 0.1,
  x: "-100vw",
  ease: Expo.easeInOut,
});
TweenMax.from('.reviews__slider', 1.5, {
  delay: 0.1,
  opacity: 0,
  ease: Expo.easeInOut,
});
TweenMax.from('.about__left .about__title', 1, {
  delay: 0.2,
  x:"-100vw",
  ease: Expo.easeInOut,
});
TweenMax.from('.about__left .about__description', 1, {
  delay: 0.4,
  x:"-100vw",
  ease: Expo.easeInOut,
});
TweenMax.from('.about__right .about__items', 1, {
  delay: 0.4,
  opacity: 0,
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