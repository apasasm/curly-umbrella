const baclgroundImg = ["img1.jpg", "img2.jpg"];

function getRandomIndex(object) {
  const selectedIndex = Math.floor(Math.random() * object.length);
  return selectedIndex;
}

function changeBackgroundImg() {
  const selectedImg = baclgroundImg[getRandomIndex(baclgroundImg)];
  // document.body.style.backgroundImage = `url("img1.jpg")`;
  // document.body.style.backgroundImage = `url("/src/img/img1.jpg")`;
  document.body.style.backgroundImage = `url("${selectedImg}")`;
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  console.log(document.body.style.backgroundImage);
}

const htmlBody = document.querySelector("body");
changeBackgroundImg();
