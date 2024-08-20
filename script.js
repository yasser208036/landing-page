let child = document.querySelector(".icon span:nth-child(2)");
document.querySelector(".links").addEventListener("click", () => {
  document.querySelector(".links ul").classList.toggle("open");
});
document.querySelector(".links").addEventListener("click", () => {
  child.classList.toggle("open");
});
