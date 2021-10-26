'use strict';

if (gsap) {
  $(function () {
    const stepper = $('.stepper-new');

    const steps = $('.stepper-new__step');

    if (stepper.length > 0) {
      var tl = gsap.timeline({
        scrollTrigger: {
            trigger: stepper,
            start:'top-=150'
        }
      });

      tl.from(steps, {
        autoAlpha: 0,
        y:30,
        ease: 'power3',
        stagger: 0.3,
        duration: 0.5,
      });

    
    }
  });
}
