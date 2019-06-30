const stickyNav = document.querySelector('#menu-bar');

const navCompStyles = getComputedStyle(stickyNav);

const landing = document.querySelector('.landing');

if (document.querySelector('title').innerText.includes('Home')) {
    if (landing.scrollHeight - window.scrollY <= stickyNav.offsetHeight) {
        stickyNav.style.display = "flex";
    } else {
        stickyNav.style.display = 'none';
    }

    window.addEventListener('scroll', () => {
        if (landing.scrollHeight - window.scrollY <= 73) {
            stickyNav.style.display = "flex";
            TweenMax.to ('#menu-bar', 2, {opacity: 1});

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