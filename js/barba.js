'use strict';

const mask = document.querySelector(".mask");

const eventDelete = e => {
  if (e.currentTarget.href === window.location.href) {
    e.preventDefault()
    e.stopPropagation()
    return
  }
}
const links = [...document.querySelectorAll("a[href]")];
links.forEach(link => {
  link.addEventListener(
    "click",
    e => {
      eventDelete(e);
    },
    false
  );
});

barba.init({
  transitions: [{
    name: 'default-transition',
    async leave() {
      mask.classList.add("active");
      await new Promise(resolve => {
        return setTimeout(resolve, 500);
      });
    },
    afterEnter() {
      mask.classList.remove('active');
    }
  }]
});