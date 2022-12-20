var introPage = document.getElementById("intro-page");
// var introName = document.createElement("div");
// var introMe = document.createElement("div");
// var welcomeWords = document.createElement("div");

// var introName = new Array(1);
var introMe = new Array(3);
var welcomeWords = new Array(3);
var introSign = document.createElement("img");
introSign.src = "/images/light-sign.png";
introSign.classList.add("intro-sign-img");

document.getElementsByTagName("body")[0].style.overflow = "hidden";
var WelcomeFirst = ["Hello~ 😊", "Hi! 👋", "你好! 😀", "Hey! 👈"];
var WelcomeSecond = [
  "Nice to meet you!",
  "Welcome! 🎉",
  "So glad you are here!",
];
var WelcomeThird = [
  "Can't wait to see you!",
  "My name is Jiaqi! 🫣",
  "This is Tusu!",
  "I am 屠苏 🍶",
];

for (let i = 0; i < 3; i++) {
  // introName[i] = document.createElement("div");
  introMe[i] = document.createElement("div");
  welcomeWords[i] = document.createElement("div");

  // introName[i].classList.add("intro-name");
  introMe[i].classList.add("intro-me");
  welcomeWords[i].classList.add("welcome-words");

  switch (i) {
    case 0: {
      // introName[i].innerText = "Jiaqi Tu";
      introMe[i].innerText = "Software Engineer";
      welcomeWords[i].innerText =
        WelcomeFirst[Math.floor(Math.random() * WelcomeFirst.length)];
      console.log(i);
      console.log(introMe[i]);
      break;
    }
    case 1: {
      introMe[i].innerText = "Toronto";
      welcomeWords[i].innerText =
        WelcomeSecond[Math.floor(Math.random() * WelcomeSecond.length)];
      console.log(i);
      console.log(introMe[i]);
      break;
    }

    case 2: {
      console.log(i);
      console.log(introMe[i]);
      introMe[i].innerText = "Canada";
      welcomeWords[i].innerText =
        WelcomeThird[Math.floor(Math.random() * WelcomeThird.length)];
      break;
    }
  }
}

window.onload = () => {
  setTimeout(() => {
    // introPage.appendChild(introName[0]);
    introPage.appendChild(welcomeWords[0]);
    introPage.appendChild(introMe[0]);
    introPage.appendChild(introSign);
  }, 0);

  setTimeout(() => {
    introMe[1].style.setProperty("grid-area", "53/8/55/30");
    introPage.appendChild(introMe[1]);
  }, 500);

  setTimeout(() => {
    introMe[2].style.setProperty("grid-area", "56/8/58/30");
    introPage.appendChild(introMe[2]);
    welcomeWords[1].style.setProperty("grid-area", "15/50/19/95");
    introPage.appendChild(welcomeWords[1]);
  }, 1000);

  setTimeout(() => {
    welcomeWords[2].style.setProperty("grid-area", "20/50/24/95");
    introPage.appendChild(welcomeWords[2]);
  }, 2000);

  setInterval(() => {
    introPage.style.display = "none";
    document.getElementsByTagName("body")[0].style.removeProperty(overflow);
  }, 3000333);
};
