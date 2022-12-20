var darkMode = false;
const sun = "/svgs/sun.svg";
const moon = "/svgs/moon.svg";
const darkIcon = "/svgs/dark-O.svg";
const lightIcon = "/svgs/O.svg";
const darkSign = "/images/sign.png";
const lightSign = "/images/light-sign.png";

const body = document.getElementsByTagName("body")[0];

const themeButton = document.getElementById("dark-mode-button");
themeButton.addEventListener("click", themeChange);
const icon = document.getElementById("icon");
const sign = document.getElementById("sign");
const githubLink = document.getElementById("github-link");
const instagramLink = document.getElementById("instagram-link");
const linkedinLink = document.getElementById("linkedin-link");
const link = document.querySelectorAll("a");

console.log(icon.src);

//dark mode theme change
function themeChange() {
  console.log("theme button clicked");
  darkMode = !darkMode;
  if (darkMode) {
    //set darkmode properties
    body.style.background = "#181817";
    body.style.color = "#e0dede";

    link.forEach((a) => {
      a.style.setProperty("color", "#e0dede");
    });

    //change icons
    themeButton.src = moon;
    icon.src = darkIcon;
    sign.src = lightSign;

    setTimeout(() => {
      themeButton.classList.remove("theme-change");
      sign.classList.remove("img-change");
      icon.classList.remove("img-change");
    }, 300);
    themeButton.classList.add("theme-change");
    sign.classList.add("img-change");
    icon.classList.add("img-change");
  } else {
    body.style.background = "white";
    body.style.color = "black";

    //change color for all links
    link.forEach((a) => {
      a.style.setProperty("color", "black");
    });

    //change img for all the pics
    themeButton.src = sun;
    icon.src = lightIcon;
    sign.src = darkSign;
    setTimeout(() => {
      themeButton.classList.remove("theme-change");
      sign.classList.remove("img-change");
      icon.classList.remove("img-change");
    }, 300);
    themeButton.classList.add("theme-change");
    sign.classList.add("img-change");
    icon.classList.add("img-change");
  }
}

//intro-page
