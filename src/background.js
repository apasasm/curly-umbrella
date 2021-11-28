const baclgroundImg = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
];

function getRandomIndex(object) {
  const selectedIndex = Math.floor(Math.random() * object.length);
  return selectedIndex;
}

function changeBackgroundImg() {
  const selectedImg = baclgroundImg[getRandomIndex(baclgroundImg)];
  // htmlBody.style.backgroundImage = `../img/${selectedImg}`;

  // document.body.style.backgroundImage = `url('../img/${selectedImg}')`;
  // document.body.style.backgroundImage = `url(https://github.com/apasasm/curly-umbrella.github.io/raw/main/img/`;
  document.body.style.backgroundImage = `url(https://github.com/apasasm/curly-umbrella.github.io/blob/main/img/${selectedImg})?raw=true`;
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
}

const htmlBody = document.querySelector("body");
changeBackgroundImg();
