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
const blogPosts = document.querySelectorAll('.blog-post'); // Select blog posts

// Dark mode theme change
function themeChange() {
  console.log('theme button clicked');
  darkMode = !darkMode;

  if (darkMode) {
    // Set dark mode properties
    body.style.background = '#181817';
    body.style.color = '#e0dede';

    // Change icons
    themeButton.src = moon;
    icon.src = darkIcon;

    setTimeout(() => {
      themeButton.classList.remove('theme-change');
      icon.classList.remove('img-change');
    }, 300);

    themeButton.classList.add('theme-change');
    icon.classList.add('img-change');

    // Loop through the NodeList and set the color for links
    links.forEach((link) => {
      link.style.color = '#e0dede';
    });

    // Update blog posts for dark mode
    blogPosts.forEach((post) => {
      post.style.backgroundColor = '#1F1F1E'; // Dark background
      post.style.color = '#F0EFEF'; // Light text color
      post.style.border = '3px solid #444'; // Optional dark border for contrast
    });
  } else {
    // Set light mode properties
    body.style.background = 'white';
    body.style.color = 'black';

    // Change icons
    themeButton.src = sun;
    icon.src = lightIcon;

    setTimeout(() => {
      themeButton.classList.remove('theme-change');
      icon.classList.remove('img-change');
    }, 300);

    themeButton.classList.add('theme-change');
    icon.classList.add('img-change');

    // Loop through the NodeList and reset the color for links
    links.forEach((link) => {
      link.style.color = '#181817';
    });

    // Update blog posts for light mode
    blogPosts.forEach((post) => {
      post.style.backgroundColor = '#f9f9f9'; // Light background
      post.style.color = '#181817'; // Dark text color
      post.style.border = '1px solid #ddd'; // Optional light border for contrast
    });
  }
}
