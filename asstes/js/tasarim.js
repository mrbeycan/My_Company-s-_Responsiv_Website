const navbar = document.querySelector("nav");
function animation(){
  var controller = new ScrollMagic.Controller();
  const t1=gsap.timeline({defaults: {ease: Expo.Inout} });
  t1.fromTo(navbar,1, {y:"-10rem"}, {y:0});
  t1.fromTo(".box",1,{x:"-5rem", opacity:0},{x:0, opacity:1});
}
animation();