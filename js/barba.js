'use strict';
const mask = document.querySelector(".mask");

const windowSize = window.innerWidth;
if(windowSize >= 1024) {
  barba.init({
    transitions: [{
      name: 'transition-for-pc',
      async leave() {
        mask.classList.add("active");
        await new Promise(resolve => {
          return setTimeout(resolve, 500);
        });
      },
      afterEnter() {
        mask.classList.remove("active");
      }
    }]
  });
} else {
  barba.init();
};
