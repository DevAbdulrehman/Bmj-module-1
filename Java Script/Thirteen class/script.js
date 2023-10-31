let imgLink = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
];

let imgs = document.getElementsByClassName("dp");
let img = () => {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].setAttribute("src", imgLink[i]);
  }
};          