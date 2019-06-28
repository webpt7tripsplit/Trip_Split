const stickyNav = document.querySelector('#menu-bar');
const menuIcon = document.querySelector('i');

stickyNav.style.display = 'none';
// menuIcon.style.display = 'inline-block';

const landing = document.querySelector('.landing');

// const landingCompStyle = getComputedStyle(landing);

// const landingHeight = landingCompStyle.offsetHeight;

// console.log(landingHeight);

// observer = new IntersectionObserver(entry => {
//     if (entry.intersectionRatio === 0) {
//         stickyNav.style.display = 'flex';
//     }
// });

// observer.observe(landing);

// landing.onvisibilitychange = () => {stickyNav.style.display = 'flex'};

landing.addEventListener('onscroll', (event) => {
    if (event.target.scrollHeight - event.target.scrollTop === 0) {
        stickyNav.style.display = "flex";
    }
})