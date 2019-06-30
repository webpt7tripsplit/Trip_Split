const modal = document.querySelector('.menu');
const teamBackground = document.querySelector('.team-container');

const modalClose = () => {

  const toggle = () => {
    modal.classList.toggle('menu--open');
    teamBackground.classList.toggle('background-blur');
  };

  setTimeout(() => toggle(), 900);
}

TweenMax.to(modal, 0.8, {opacity: 0, delay: 0.3});

Window.onload = modalClose();

TweenMax.from(menu, .1, {opacity:1, delay:2});