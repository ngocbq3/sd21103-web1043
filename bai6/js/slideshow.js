const images = [
  "images/anh1.jpg",
  "images/anh2.jfif",
  "images/anh3.jfif",
  "images/anh4.jpg",
];

const slideshow = document.getElementById("slideshow");

//Hàm slider(index) di chuyển ảnh theo index
function slider(i) {
  slideshow.src = images[i];
}

//Hàm next() di chuyển ảnh tiếp theo
let index = 0;
function next() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  slider(index);
}

//Hàm previous() di chuyển ảnh về ảnh trước
function previous() {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  slider(index);
}

//hàm start() cho slider tự đông chạy
let interval = 0;
function start() {
  interval = setInterval(function () {
    next();
  }, 2000);
}
//hàm stop dùng chạy tự động
function stop() {
  clearInterval(interval);
}
