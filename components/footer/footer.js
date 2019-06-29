const iconsArray = ['<i class="fab fa-linkedin-in fa-2x" aria-hidden="true"></i>', 
                    '<i class="fab fa-facebook-f fa-2x" aria-hidden="true"></i>', 
                    '<i class="fab fa-twitter fa-2x" aria-hidden="true"></i>', 
                    '<i class="fab fa-instagram fa-2x" aria-hidden="true"></i>', 
                    '<i class="fas fa-envelope fa-2x" aria-hidden="true"></i>'];

let footerIcon = document.querySelector('.footer-icons');

iconsArray.forEach((elem)=> {
  let icon = document.createRange().createContextualFragment(elem);
  footerIcon.appendChild(icon);
});