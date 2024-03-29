var darkMode = false;
const sun = '/svgs/sun.svg';
const moon = '/svgs/moon.svg';
const darkIcon = '/svgs/dark-O.svg';
const lightIcon = '/svgs/O.svg';
const darkSign = '/images/sign.png';
const lightSign = '/images/light-sign.png';

const body = document.getElementsByTagName('body')[0];

const themeButton = document.getElementById('dark-mode-button');
themeButton.addEventListener('click', themeChange);
const icon = document.getElementById('icon');
const links = document.querySelectorAll('a');

//dark mode theme change
function themeChange() {
  console.log('theme button clicked');
  darkMode = !darkMode;
  if (darkMode) {
    //set darkmode properties
    body.style.background = '#181817';
    body.style.color = '#e0dede';

    //change icons
    themeButton.src = moon;
    icon.src = darkIcon;

    setTimeout(() => {
      themeButton.classList.remove('theme-change');
      icon.classList.remove('img-change');
    }, 300);

    themeButton.classList.add('theme-change');
    icon.classList.add('img-change');

    // Loop through the NodeList and set the color
    for (let i = 0; i < links.length; i++) {
      links[i].style.color = '#e0dede';
    }
  } else {
    body.style.background = 'white';
    body.style.color = 'black';

    //change img for all the pics
    themeButton.src = sun;
    icon.src = lightIcon;

    setTimeout(() => {
      themeButton.classList.remove('theme-change');
      icon.classList.remove('img-change');
    }, 300);
    themeButton.classList.add('theme-change');
    icon.classList.add('img-change');

    // Loop through the NodeList and set the color
    for (let i = 0; i < links.length; i++) {
      links[i].style.color = '#181817';
    }
  }
}
