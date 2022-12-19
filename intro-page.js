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
      welcomeWords[i].innerText = "Hey!";
      console.log(i);
      console.log(introMe[i]);
      break;
    }
    case 1: {
      introMe[i].innerText = "Toronto";
      welcomeWords[i].innerText = "Nice to meet you!";
      console.log(i);
      console.log(introMe[i]);
      break;
    }

    case 2: {
      console.log(i);
      console.log(introMe[i]);
      introMe[i].innerText = "Canada";
      welcomeWords[i].innerText = "Can't wait to see you!";
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
    introMe[1].style.setProperty("grid-area", "32/2/34/5");
    introPage.appendChild(introMe[1]);
  }, 500);

  setTimeout(() => {
    introMe[2].style.setProperty("grid-area", "34/2/36/5");
    introPage.appendChild(introMe[2]);
    welcomeWords[1].style.setProperty("grid-area", "10/8/13/11");
    introPage.appendChild(welcomeWords[1]);
  }, 1000);

  setTimeout(() => {
    welcomeWords[2].style.setProperty("grid-area", "13/8/16/11");
    introPage.appendChild(welcomeWords[2]);
  }, 2000);

  setInterval(() => {
    introPage.style.display = "none";
  }, 3000333);
};
