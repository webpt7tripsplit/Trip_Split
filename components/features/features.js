const modal = document.querySelector('.menu');
const featureBackground = document.querySelector('.features-container');

const modalClose = () => {

  const toggle = () => {
    modal.classList.toggle('menu--open');
    featureBackground.classList.toggle('background-blur');
  };

  setTimeout(() => toggle(), 1200);
}

Window.onload = modalClose();