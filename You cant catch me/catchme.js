const button = document.getElementById("movingImage");
const threshold = 100; // Ngưỡng di chuyển

document.addEventListener("mousemove", moveButton);

function moveButton(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const rect = button.getBoundingClientRect(); // Lấy kích thước và vị trí tương đối của nút

  // Tính khoảng cách giữa con trỏ chuột và nút
  const distance = Math.sqrt(
    (mouseX - rect.left - rect.width / 2) ** 2 +
      (mouseY - rect.top - rect.height / 2) ** 2
  );

  if (distance < threshold) {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    button.style.position = "absolute";
    button.style.left = newX + "px";
    button.style.top = newY + "px";
  }
}

const backgroundMusic = document.getElementById("backgroundMusic");
let isMouseMoving = false;

// Bắt sự kiện khi con trỏ chuột di chuyển
document.addEventListener("mousemove", function () {
  isMouseMoving = true;
  backgroundMusic.pause(); // Tắt âm nhạc khi con trỏ di chuyển
});

// Bắt sự kiện khi con trỏ chuột đứng im
document.addEventListener("mouseenter", function () {
  if (!isMouseMoving) {
    backgroundMusic.play(); // Bật âm nhạc khi con trỏ đứng im
  }
  isMouseMoving = false;
});

// Bắt sự kiện khi trang web được tải
window.addEventListener("DOMContentLoaded", (event) => {
  backgroundMusic.play(); // Bắt đầu phát nhạc khi trang web được tải
});
