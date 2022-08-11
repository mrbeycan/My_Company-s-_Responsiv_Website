

var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        },
});



var swiper = new Swiper(".ekip", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        },
});



var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});

const navbar = document.querySelector("nav");

function animation() {
  var controller = new ScrollMagic.Controller();

  const t1 = gsap.timeline({ defaults: { ease: Expo.InOut } });

  t1.fromTo(navbar, 1.5, { y: "-10rem" }, { y: 0 });
  t1.fromTo(".images .box .icon,p,h4",0.5,{ x: "5rem", opacity: 0 },{ x: 0, opacity: 1 });
  t1.fromTo(".images .box h5",1.2,{ y: "-5rem", opacity: 0 },{ y: 0, opacity: 1 });

  // about animations
  const t2 = gsap.timeline({ defaults: { ease: Expo.InOut } });

  t2.fromTo(".we h1",1.5,{ x: "-2rem", opacity: 0 },{ x: 0, opacity: 1 });
  t2.fromTo(".we .box",0.5,{ x: "-2rem", opacity: 0 },{ x: 0, opacity: 1 },"-=1");
  t2.fromTo(".we .box1",0.5,{ x: "2rem", opacity: 0 },{ x: 0, opacity: 1 },"-=1");
  t2.fromTo("#hakkimizda .rero",1.5,{rotate:45, x: "2rem", opacity: 0 },{rotate:0,x: 0, opacity: 1 },"-=1");
  t2.fromTo("#hakkimizda .rero1",1.5,{rotate:45 , x: "-2rem", opacity: 0 },{rotate:0, x: 0, opacity: 1 },"-=1");

  new ScrollMagic.Scene({
    triggerElement: "#hakkimizda",
    triggerHook: 0.5,
    reverse: false,
  })
    .setTween(t2)
    .addTo(controller);

   // about animations

  const t3 = gsap.timeline({ defaults: { ease: Expo.InOut } });
  t3.fromTo(".services",0.5,{  opacity: 0 },{ opacity: 1 });
  t3.fromTo(".services .yazi .box,h3,h1 ",2.5,{ x: "-12rem", opacity: 0 },{ x: 0, opacity: 1 });

  new ScrollMagic.Scene({
    triggerElement: "#servisler",
    triggerHook: 0.5,
    reverse: false,
  })
    .setTween(t3)
    .addTo(controller);

  // card animations

  const t4 = gsap.timeline({ defaults: { ease: Expo.InOut } });
  t4.fromTo(" .timeline_component-bg",0.5,{  x: 0 },{ opacity: 1 });
  t4.fromTo(" .timeline_component-bg",0.5,{  opacity: 0 },{ opacity: 1 });
}

animation();
