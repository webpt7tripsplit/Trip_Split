const modal = document.querySelector('.menu');
const featureBackground = document.querySelector('.features-container');
const featureIcons = ['fas fa-globe-americas',
  'fas fa-map-marked-alt',
  'fas fa-taxi',
  'fas fa-suitcase',
  'fas fa-cocktail',
  'fas fa-wallet',
  'fas fa-truck-monster',
  'fas fa-gas-pump'];

const featureCells = document.querySelectorAll('.features-outer');
const outerContainer = document.querySelector('.content-container');
const compStyle = getComputedStyle(outerContainer);
const outerBgColor = compStyle.backgroundColor;

function setbackgroundColor() {

  function darkenColor(color, amt) {
    let r = parseInt(color.substring(4, 7), 10);
    let g = parseInt(color.substring(9, 12), 10);
    let b = parseInt(color.substring(14, 17), 10);

    r = r - amt;
    g = g - amt;
    b = b - amt;

    return `rgb(${r}, ${g}, ${b})`
  }

  featureCells.forEach((el, i) => {

    el.style.backgroundColor = darkenColor(outerBgColor, (i + 1) * 3)
  })
}

function addIcons() {
  const container = document.querySelector('.content-container');
  let icons = container.querySelectorAll('.fas');
  icons.forEach((icon) => icon.setAttribute('aria-hidden', 'true'));
  icons.forEach((icon, i) => icon.setAttribute('class', featureIcons[i]));
}
const modalClose = () => {

  const toggle = () => {
    modal.classList.toggle('menu--open');
    featureBackground.classList.toggle('background-blur');
  };

  setTimeout(() => toggle(), 900);
}

addIcons();
setbackgroundColor()

TweenMax.to(modal, 0.8, { opacity: 0, delay: 0.3 });

Window.onload = modalClose();

TweenMax.from(menu, .1, { opacity: 1, delay: 2 });

