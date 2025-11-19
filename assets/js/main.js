const burgerBtn = document.getElementById("burgerBtn");
const nav = document.querySelector(".nav");

burgerBtn.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});