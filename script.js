const userAgent = navigator.userAgent || "";
const isAndroid = /Android/i.test(userAgent);
const isIOS = /iPhone|iPad|iPod/i.test(userAgent) ||
  (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

if (isAndroid) {
  document.body.dataset.device = "android";
} else if (isIOS) {
  document.body.dataset.device = "ios";
}

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-store]").forEach((link) => {
  link.addEventListener("click", () => {
    link.dataset.clicked = "true";
  });
});
