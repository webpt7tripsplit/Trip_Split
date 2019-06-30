const modal = document.querySelector('.menu');
const teamBackground = document.querySelector('.team-container');

const modalClose = () => {

  const toggle = () => {
    modal.classList.toggle('menu--open');
    teamBackground.classList.toggle('background-blur');
  };

  setTimeout(() => toggle(), 1200);
}

Window.onload = modalClose();