'use strict';

if (gsap) {
  $(function () {
    const benefits = $('.benefits');

    const benefitsItem = $('.benefits__item');

    if (benefits.length > 0) {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: benefits,
                start:'top-=150',
            }
          });
    
          tl.from(benefitsItem, {
            autoAlpha: 0,
            ease: 'power3',
            y:20,
            stagger: 0.3,
            duration: 0.3,
          });
    
    }
  });
}
