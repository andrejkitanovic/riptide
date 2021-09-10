'use strict';

if (gsap) {
  $(function () {
    const chat = $('.chat');

    const chatBox = $('.chat__box');
    const messageBox = $('.chat__message-box');

    const chatMessage1 = $('.chat__message-1');
    const chatMessage2 = $('.chat__message-2');
    const chatMessage3 = $('.chat__message-3');
    const chatMessage4 = $('.chat__message-4');

    if (chat.length > 0) {
      const drationPerSlide = 0.8;
      const ease = 'power4'

      gsap
        .timeline({
          scrollTrigger: {
            trigger: chat,
            start:'top-=150'
            // pin: true,
            // start: 'top-=150',
            // end: '+=1500',
            // scrub: true,
          },
        })
        .from(chatMessage1, {x:30, autoAlpha: 0, duration:drationPerSlide, ease:ease})
        .from(chatMessage2, {x:-30, autoAlpha: 0, duration:drationPerSlide, ease:ease})
        .from(messageBox, { y: 10, autoAlpha: 0, duration:drationPerSlide, ease:ease })
        .to(chatBox, { scrollTo: { y: 400 }, duration:drationPerSlide, ease:ease }, 1.5)
        .to(messageBox, { x: 30, autoAlpha: 0, duration:drationPerSlide, ease:ease })
        .from(chatMessage3, {x:30, autoAlpha: 0, duration:drationPerSlide, ease:ease})
        .from(chatMessage4, {x:-30, autoAlpha: 0, duration:drationPerSlide, ease:ease})
    }
  });
}
