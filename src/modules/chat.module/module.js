'use strict';

if (gsap) {
  $(function () {
    let start = "-=150";
    let end = "+=1500";

    if (window.matchMedia('(max-width: 767px)').matches) {
      start = "+=250";
      end = "+=2000"
    }

    const chat = $('.chat');

    const chatBox = $('.chat__box');
    const chatBoxMessages = $('.chat__box-messages');
    // const messageBox = $('.chat__message-box');

    const chatMessage1 = $('.chat__message-1');
    const chatMessage2 = $('.chat__message-2');
    const chatMessage3 = $('.chat__message-3');
    const chatMessage4 = $('.chat__message-4');
    const chatMessage5 = $('.chat__message-5');

    if (chatBoxMessages.length > 0) {
      // const durationPerSlide = 0.8;
      const ease = 'power4';

      gsap
        .timeline({
          scrollTrigger: {
            trigger: chat,
            pin: true,
            start: `top${start}`,
            end: end,
            scrub: true,
          },
        })
        .from(chatMessage1, { x: 30, autoAlpha: 0, ease: ease })
        .from(chatMessage2, { x: -30, autoAlpha: 0, ease: ease })
        // .from(messageBox, { y: 10, autoAlpha: 0, ease: ease })
        .to(chatBox, { scrollTo: { y: 400 }, ease: ease }, 1.5)
        // .to(messageBox, { x: 30, autoAlpha: 0, ease: ease })
        .from(chatMessage3, { x: 30, autoAlpha: 0, ease: ease })
        .from(chatMessage4, { x: -30, autoAlpha: 0, ease: ease })
        .fromTo(
          chatBox,
          { scrollTo: { y: 400 } },
          { scrollTo: { y: 700 }, ease: ease },
          4.5
        )
        .from(chatMessage5, { x: 30, autoAlpha: 0, ease: ease });
    }
  });
}
