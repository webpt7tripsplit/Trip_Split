


const sellContainers = document.querySelectorAll('.cell');

const outerContainer = document.querySelector('.selling-points');
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

    sellContainers.forEach((el, i) => {

        el.style.backgroundColor = darkenColor(outerBgColor, (i+1)*3)
    })
}

setbackgroundColor();