class SellContainer {
    constructor(element) {
        this.element = element;
        this.icon = this.element.querySelector('.fas');

    };
};

const sellIcons = ['fas fa-globe-americas',
    'fas fa-map-marked-alt',
    'fas fa-taxi',
    'fas fa-suitcase',
    'fas fa-cocktail',
    'fas fa-wallet'];

const sellContainers = document.querySelectorAll('.cell');

sellContainers.forEach(cell => new SellContainer(cell));

function addIcons() {
    const container = document.querySelector('.selling-points');
    let icons = container.querySelectorAll('.fas');
    icons.forEach((icon) => icon.setAttribute('aria-hidden', 'true'));
    icons.forEach((icon, i) => icon.setAttribute('class', sellIcons[i]));
}

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

        el.style.backgroundColor = darkenColor(outerBgColor, (i + 1) * 3)
    })
}

setbackgroundColor();
addIcons();