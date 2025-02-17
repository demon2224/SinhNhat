// Nội dung thư
var letterContent =
  "Cô gái nhỏ à, trước tiên là sinh nhật vui vẻ, hạnh phúc nghen. Tâm sự xíu nè, con biết không ba thật sự rất cảm ơn con nhiều nè. Con thấy ba vậy thôi, chứ ba thật sự rất ít người quan tâm, ba chỉ cảm thấy con là thực sự có quan tâm ba. Những lúc cô đơn nhất, mệt mỏi nhất. Thì người chia sẽ với ba chỉ có con. Ba chỉ mãi đuổi theo hạnh phúc phía trước mà đã làm bản thân mình có nhiều tổn thương. Nên là ba hứa ba sẽ không bao giờ bị tổn thương nữa đâu nè hihi con yên tâm nha. Nhớ lại đợt ba có bồ mắc cười ghê ha, lúc ba có bồ thì ba lại mải mê vào tình yêu mà chả quan tâm mọi thứ xung quanh, vậy mà đến lúc ba có chuyện buồn thì con lại chính là người tâm sự, an ủi ba (chứ không phải thứ ba mải mê đó), và một đợt gần đây nhất, ba bị trap ba không nghĩ là con lại bênh ba đến vậy, ba không biết là ba như thế nào, nhưng trong mắt con con lại thấy ba tuyệt vời vậy, con biết không ba rất vui luôn, kiểu ba không ngờ lại có ai đó thấy mình tuyệt vời vậy, kể từ đó ba bắt đầu nghe lời con nè, yêu bản thân nhiều lên nè, biết dành tiền cho bản thân hơn nè, biết ăn diện lên nè hihi nhờ bào con hết đó nghen. Hmmm sao ta thặc sự thì chả biết từ lúc nào mà ba lại có tình cảm với con mất rồi ( ba sợ ba không nói thì sẽ là chả bao giờ), không biết sao nữa mà mỗi lần ba gặp con ba điều cảm thấy trong lòng nó bình yên đến lạ thường. Ba nói ra để cho con biết tâm tình của ba thoy nè, chứ ba biết con đang thặc sự không muốn yêu nữa vì mối tình trước con đã tổn thương nhiều, nên là con không nhất phải trả lời câu nói của ba. Con yên tâm ba vẫn sẽ ở đây làm chỗ dựa cho con không để ai làm tổn thương con nữa đâu nè. Thứ nhất là ba biết ba cx không phải là gu của con nè. Thứ 2 là ba biết con đang không muốn bắt đầu một qh nữa. Hmmm nếu con có thể chấp nhận tình cảm của ba thì là vậy đó, còn nếu chưa chấp nhận được thì ba xin phép mình vẫn giữ được mối quan hệ như hiện tại nè, đừng vì những câu nói trên mà tránh mặt ba nghen (đừng bỏ ba nghen). Ba vẫn muốn được quan tâm con theo cách đặt biệt nhất nè. Mãi yêu con gái dễ thương của ba.";

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 60;

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
