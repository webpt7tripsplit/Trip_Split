
const menuToggle = () => {
  // Toggle the "menu--open" class on your menu refence. 
  if (menu.classList.contains('menu--open')) {

    TweenMax.to(menu, 0.5, { opacity: 0 });

    setTimeout(() => menu.classList.toggle('menu--open'), 900);

    TweenMax.from(menu, .1, { opacity: 1, delay: 2 });

    if (document.querySelector('title').innerText.includes('Home')) {
      mainContainer.classList.toggle('background-blur');
    } else if (document.querySelector('title').innerText.includes('Features')) {
      featuresContainer.classList.toggle('background-blur');
    } else if (document.querySelector('title').innerText.includes('Team')) {
      teamContainer.classList.toggle('background-blur');
    } else if (document.querySelector('title').innerText.includes('Sign Up')) {
      signUpContainer.classList.toggle('background-blur');
    }


  } else {

    menu.classList.toggle('menu--open');

    if (document.querySelector('title').innerText.includes('Home')) {
      mainContainer.classList.toggle('background-blur');
    } else if (document.querySelector('title').innerText.includes('Features')) {
      featuresContainer.classList.toggle('background-blur');
    } else if (document.querySelector('title').innerText.includes('Team')) {
      teamContainer.classList.toggle('background-blur');
    } else if (document.querySelector('title').innerText.includes('Sign Up')) {
      signUpContainer.classList.toggle('background-blur');
    }

    TweenMax.from('.menu', 0.4, { x: 350 });
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

const mainContainer = document.querySelector('.main-container');
const featuresContainer = document.querySelector('.features-container');
const teamContainer = document.querySelector('.team-container');
const signUpContainer = document.querySelector('#sign-up-page');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', menuToggle);

const closeButton = document.querySelector('.fa-window-close');

closeButton.addEventListener('click', menuToggle);
