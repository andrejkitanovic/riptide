'use strict';

if (gsap) {
  $(function () {
    const analytics = $('.analytics');

    const smallImageBg = $('.analytics__small-image-background');
    const smallImage = $('.analytics__small-image-picture');
    const bigImageBg = $('.analytics__big-image-background');
    const bigImage = $('.analytics__big-image-picture');

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
    }
  });
}
