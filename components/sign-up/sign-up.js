const modal = document.querySelector('.menu');
const signUpBackground = document.querySelector('#sign-up-page');

const modalClose = () => {

  const toggle = () => {
    modal.classList.toggle('menu--open');
    signUpBackground.classList.toggle('background-blur');
  };

  setTimeout(() => toggle(), 1200);
}

Window.onload = modalClose();