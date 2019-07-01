const mainBackground = document.querySelector('.main-container');
const mainCompStyles = getComputedStyle(mainBackground);
const bgImage = mainCompStyles.backgroundImage;

// TweenMax.from(bgImage, 2, {opacity: 0, delay: 1});