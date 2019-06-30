const modal = document.querySelector('.menu');
const featureBackground = document.querySelector('.features-container');

const modalClose = () => {

  const toggle = () => {
    modal.classList.toggle('menu--open');
    featureBackground.classList.toggle('background-blur');
  };

  setTimeout(() => toggle(), 900);
}

TweenMax.to(modal, 0.8, {opacity: 0, delay: 0.3});

Window.onload = modalClose();

TweenMax.from(menu, .1, {opacity:1, delay:2});