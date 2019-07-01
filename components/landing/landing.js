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
            TweenMax.to('#menu-bar', 2, { opacity: 1 });

        } else {
            stickyNav.style.display = 'none';
        }
    })
}

