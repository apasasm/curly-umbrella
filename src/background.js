const baclgroundImg = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];

function getRandomIndex(object) {
  const selectedIndex = Math.floor(Math.random() * object.length);
  return selectedIndex;
}

function changeBackgroundImg() {
  const selectedImg = baclgroundImg[getRandomIndex(baclgroundImg)];
  htmlBody.style.backgroundImage = `url("${selectedImg}")`;
  htmlBody.style.backgroundRepeat = "no-repeat";
  htmlBody.style.backgroundSize = "cover";
}

const htmlBody = document.querySelector("body");
changeBackgroundImg();
