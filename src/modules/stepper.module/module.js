'use strict';

if (gsap) {
//   $(function () {
    const stepper = document.querySelectorAll('.stepper');

    const image1 = document.querySelector('.stepper__image-1');
    const arrow1 = document.querySelector('.stepper__arrow-1');
    const image2 = document.querySelector('.stepper__image-2');
    const arrow2 = document.querySelector('.stepper__arrow-2');
    const image3 = document.querySelector('.stepper__image-3');

    if (stepper.length > 0) {
      var tl = gsap.timeline({
        scrollTrigger: {
            trigger: stepper,
            start:'top-=150'
        }
      });

      tl.from(image1, {
        autoAlpha: 0,
        ease: 'power3',
        stagger: 0.3,
        duration: 0.5,
      });

      tl.from(arrow1, {
        autoAlpha: 0,
        ease: 'power3',
        scale:0.8,
        stagger: 0.3,
        duration: 0.5,
      });

      tl.from(image2, {
        autoAlpha: 0,
        ease: 'power3',
        stagger: 0.3,
        duration: 0.5,
      });

      tl.from(arrow2, {
        autoAlpha: 0,
        ease: 'power3',
        scale:0.8,
        stagger: 0.3,
        duration: 0.5,
      });

      tl.from(image3, {
        autoAlpha: 0,
        ease: 'power3',
        stagger: 0.3,
        duration: 0.5,
      });
    }
//   });
}
