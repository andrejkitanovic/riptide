'use strict';

if (gsap) {
//   document.onreadystatechange = function () {
    const benefits = document.querySelectorAll('.benefits');

    const benefitsItem = document.querySelectorAll('.benefits__item');

    if (benefits.length > 0) {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: benefits,
                start:'top-=150',
            }
          });
      
//         benefitsItem.forEach((item,index) => {
         tl.from(benefitsItem, {
            autoAlpha: 0,
            ease: 'power3',
            y:20,
            stagger: 0.3,
            duration: 0.3,
          });
//         })
         
    
    }
//   };
}
