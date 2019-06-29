let headerIcon = document.querySelector('.icons');

iconsArray.forEach((elem)=> {
  let icon = document.createRange().createContextualFragment(elem);
  headerIcon.appendChild(icon);
});