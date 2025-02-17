// Nội dung thư
var letterContent =
  "Cô gái nhỏ à, trước tiên là sinh nhật vui vẻ, hạnh phúc nghen... (nội dung giữ nguyên)";

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50;

// Hiệu ứng gõ chữ
function effectWrite() {
  var boxLetter = document.querySelector(".letterContent");
  letterContentSplited = letterContent.split("");

  boxLetter.innerHTML = ""; // Đảm bảo nội dung không bị ghi đè khi mở lại

  letterContentSplited.forEach((val, index) => {
    setTimeout(() => {
      boxLetter.innerHTML += val;
    }, durationWrite * index);
  });
}

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".container").classList.add("active");
  }, 500);
});

var openBtn = document.querySelector(".openBtn");
openBtn.addEventListener("click", () => {
  document.querySelector(".cardValentine").classList.add("active");
  document.querySelector(".container").classList.add("close");
});

var cardValentine = document.querySelector(".cardValentine");

cardValentine.addEventListener("click", () => {
  cardValentine.classList.toggle("open");

  if (cardValentine.classList.contains("open")) {
    setTimeout(effectWrite, 500);
  } else {
    setTimeout(() => {
      document.querySelector(".letterContent").innerHTML = "";
    }, 1000);
  }
});

// Điều chỉnh để thiệp không bị mất một bên khi xem trên mobile
function adjustCardForMobile() {
  if (window.innerWidth <= 768) {
    document.querySelector(".cardValentine").style.width = "95%";
    document.querySelector(".cardValentine .left").style.width = "50%";
    document.querySelector(".cardValentine .right").style.width = "50%";
    document.querySelector(".cardValentine").style.left = "45%";
    document.querySelector(".cardValentine").style.transform =
      "translate(-50%, -50%)";
  } else {
    document.querySelector(".cardValentine").style.width = "800px";
    document.querySelector(".cardValentine .left").style.width = "50%";
    document.querySelector(".cardValentine .right").style.width = "50%";
    document.querySelector(".cardValentine").style.left = "50%";
    document.querySelector(".cardValentine").style.transform =
      "translate(-50%, -50%)";
  }
}

// Gọi hàm khi load trang và khi resize màn hình
window.addEventListener("load", adjustCardForMobile);
window.addEventListener("resize", adjustCardForMobile);
