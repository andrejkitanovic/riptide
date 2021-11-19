'use strict';

if (gsap) {
//   document.onreadystatechange = function () {
    const analytics = document.querySelectorAll('.analytics');

    const smallImageBg = document.querySelector('.analytics__small-image-background');
    const smallImage = document.querySelector('.analytics__small-image-picture');
    const bigImageBg = document.querySelector('.analytics__big-image-background');
    const bigImage = document.querySelector('.analytics__big-image-picture');
    const bigImageTop = document.querySelector('.analytics__big-image-top');

    if (analytics.length > 0) {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: analytics,
          start: 'top-=150',
        },
      });

      tl.from(smallImageBg, {
        autoAlpha: 0,
        ease: 'power3',
        duration: 0.3
      });

      tl.from(smallImage, {
        autoAlpha: 0,
        x:20,
        ease: 'power3',
        duration: 0.5
      });

      tl.from(bigImageBg, {
        autoAlpha: 0,
        ease: 'power3',
        duration: 0.3
      });

      tl.from(bigImage, {
        autoAlpha: 0,
        ease: 'power3',
        duration: 0.5
      });

      tl.from(bigImageTop, {
        autoAlpha: 0,
        ease: 'power3',
        duration: 0.5
      });
    }
//   };
}
