document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  function revealSections() {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if(rect.top < window.innerHeight - 80) {
        section.classList.add("visible");
      }
    });
  }
  window.addEventListener("scroll", revealSections);
  revealSections();
});
document.addEventListener("DOMContentLoaded", function() {
  // Hiệu ứng đánh máy cho màn hình chào
  const welcomeMsg = "Xin chào bạn đến với trang web của Linh Trường Giang\nRất vui khi bạn ghé thăm, chúc bạn 1 ngày vui vẻ.";
  const welcomeText = document.getElementById("welcome-text");
  const welcomeScreen = document.getElementById("welcome-screen");
  let i = 0;

  function typeWriter() {
    if (i < welcomeMsg.length) {
      welcomeText.textContent += welcomeMsg.charAt(i);
      i++;
      setTimeout(typeWriter, 20); // tốc độ đánh máy
    } else {
      setTimeout(() => {
        welcomeScreen.style.opacity = 0;
        setTimeout(() => {
          welcomeScreen.style.display = "none";
          // Hiện các section (nếu dùng hiệu ứng fade-in)
          document.querySelectorAll("section").forEach(s => s.classList.add("visible"));
        }, 700);
      }, 1200); // thời gian chờ sau khi đánh máy xong
    }
  }

  typeWriter();

  // Nếu bạn dùng hiệu ứng fade-in cho section:
  window.addEventListener("scroll", revealSections);
  function revealSections() {
    document.querySelectorAll("section").forEach(section => {
      const rect = section.getBoundingClientRect();
      if(rect.top < window.innerHeight - 80) {
        section.classList.add("visible");
      }
    });
  }
});
