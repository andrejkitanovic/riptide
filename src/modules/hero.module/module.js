'use strict';

if (gsap) {
//   $(function () {
    const hero = document.querySelectorAll('.hero');

    const changableWord = document.querySelector('.hero__header-top > span');

    if (hero.length > 0) {
      const words = changableWord.getAttribute('data-words').split(',');

      const ease = 'power4';
      const durationPerSlide = 0.8;
      gsap.registerPlugin(TextPlugin);

      let tl = gsap.timeline({ repeat: -1 })

      tl.to(changableWord, {
        duration: durationPerSlide,
        opacity: 1,
        delay: 0.5,
        ease: ease,
      })
      .to(changableWord, {
        duration: durationPerSlide,
        opacity: 0,
        ease: ease,
      })
  
        words.forEach(function (word) {
            return tl.to(changableWord, {
                text: {
                  value: word,
                },
                ease: ease,
              })
              .to(changableWord, {
                duration: durationPerSlide,
                opacity: 1,
                ease: ease,
              })
              .to(changableWord, {
                duration: durationPerSlide,
                opacity: 0,
                delay: 0.5,
                ease: ease,
              });
        })
     
    }
//   });
}
