const text =
  "❤️Thương gửi Phương Quỳnh, Đức cũng không biết phải bắt đầu từ đâu... hmmm 😊 Đức luôn tự hỏi rằng trong trái tim của Quỳnh thì mình đang nằm ở vị trí quan trọng nào? Đã có bao nhiêu người con trai khác đến trước đối xử có tốt với Quỳnh không? Quỳnh có yêu Đức nhiều như Quỳnh đã từng dành tình cảm cho họ hay không? Nhưng có lẽ tất cả những điều ấy dường như không quan trọng đối với Đức nữa. Dù cho bản thân Đức không được tốt bằng họ, đẹp bằng họ, giàu có bằng họ, lãng mạn bằng họ hay mọi thứ khác bằng họ. Nhưng Đức chắc chắn rằng trên thế giới này kể từ giờ sẽ không ai có thể yêu thương, trân trọng Quỳnh nhiều hơn Đức được đâu, hứa đó 😚! Ngày đầu tiên thấy và được trò chuyện cùng Quỳnh thì ngay từ giây phút đó vũ trụ như muốn nói với Đức rằng 'À ! Mình phải có được cô gái này bằng mọi giá, bây giờ, hiện tại hoặc là không bao giờ ! Người ấy phải là người yêu của mịnh.' Cho nên đã từ rất lâu rồi Đức phải nói ra điều này với người mà mình đang và sẽ mãi đặt trọn tình cảm lớn nhất cho chính cô gái thùy mị, nết na này rằng là: 'Đức không có gì hợn ngoài tấm lòng chân thành & trái tim sâu sắc này với ước muốn là sẽ yêu và lấy Quỳnh làm cô dâu của Anh Đức trong nửa phần đời còn lại của mình, nước mắt của Quỳnh sẽ do Đức lau, nụ cười của Quỳnh sẽ được Đức vẽ nên, sự hạnh phúc của Quỳnh là điều hai ta sẽ cùng nhau tạo ra.. Bông hoa xinh đẹp nhất ĐỒNG Ý làm người yêu của Đức nhé !?😘🥰 Mãi yêu Quỳnh dấu yêu rất nhiều ..💖💖💖💖💖💖💖💖💖💖";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
