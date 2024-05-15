function openGift() {
  const giftImage = document.getElementById("giftImage");
  giftImage.style.opacity = "0"; // Ẩn hình ảnh ban đầu

  // Thay đổi dòng chữ "Open Your Gift" thành "This is your gift"
  const title = document.querySelector("h1");
  title.innerText = "This is your gift";

  // Tạo và thêm hình ảnh mới
  const newGiftImage = document.createElement("img");
  newGiftImage.id = "newGiftImage";
  newGiftImage.src = "/openyourgift/finger.png"; // Đường dẫn tương đối đến hình ảnh trong kho của bạn
  newGiftImage.alt = "New Gift";
  newGiftImage.style.width = "50%";
  newGiftImage.style.height = "50%";

  // Đặt kích thước của hình ảnh mới nhỏ hơn một nửa
  newGiftImage.style.width = "50%";
  newGiftImage.style.height = "50%";

  const container = document.querySelector(".container");
  container.appendChild(newGiftImage);

  // Sau một thời gian ngắn, kích hoạt hiệu ứng di chuyển lên trên và hiện ra của hình ảnh mới
  setTimeout(() => {
    newGiftImage.style.bottom = "200px"; // Di chuyển hình ảnh thứ hai lên vị trí của hình ảnh ban đầu
    newGiftImage.style.opacity = "1"; // Hiện hình ảnh thứ hai
  }, 100);
}
