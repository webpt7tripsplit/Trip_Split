const stickyNav = document.querySelector('#menu-bar');

const landing = document.querySelector('.landing');

if (document.querySelector('title').innerText.includes('Home')) {
    stickyNav.style.display = 'none';

    window.addEventListener('scroll', () => {
        if (landing.scrollHeight - window.scrollY <= 74) {
            stickyNav.style.display = "flex";
        } else {
            stickyNav.style.display = 'none';
        }
    })
}

// const menuIcon = document.querySelector('i');


// console.log(landing)

// function checkHeight(e) {
//     console.log(`Scroll position: ${window.scrollY}`);
// }

// landing.onscroll = checkHeight(landing);

// const landingCompStyle = getComputedStyle(landing);

// const landingHeight = landing.height;

// console.log(landingHeight);

// observer = new IntersectionObserver(entry => {
//     if (entry.intersectionRatio === 0) {
//         stickyNav.style.display = 'flex';
//     }
// });

// observer.observe(landing);

// landing.onvisibilitychange = () => {stickyNav.style.display = 'flex'};