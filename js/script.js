function hamburgerMenu() {
  const hamNav = document.getElementById("ham-nav");
  hamNav.classList.toggle("show");
}
function changeImg(imgId, changeImg) {
  var changeMainImage = document.getElementById(imgId);
  changeMainImage.src = changeImg;
}
function mainImgChange(imageId, changeImage) {
  var mainImg = document.getElementById(imageId);
  mainImg.src = changeImage;
}
