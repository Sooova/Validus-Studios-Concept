gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".imgGalery");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontalScrollDiv",
    // start: 'top top+=100',
    pin: false,
    scrub: 1,
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=1750"
    // markers: true,
  }
});

// let sections2 = gsap.utils.toArray(".textGallery");
// gsap.to(sections2, {
//     xPercent: 80 * (sections.length - 1),
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".dare",
//       start: 'top top+=100',
//       pin: false,
//       scrub: 1,
//       // base vertical scrolling on how wide the container is so it feels more natural.
//       end: "+=1500",
//       markers: true,
//     }
//   });

  
let sections3 = gsap.utils.toArray(".imgGalery2");
gsap.to(sections3, {
    xPercent: 100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontalScrollDiv",
    //   start: 'top top+=250',
      pin: false,
      scrub: 1,
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: "+=2050"
      // markers: true,
    }
  });
