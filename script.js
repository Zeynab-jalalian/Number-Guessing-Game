const btn = document.getElementById("btn");
let chancesText = document.getElementById("chances");
let random = Math.floor(Math.random() * 100 + 1);
let chances = 10;
 chancesText.innerHTML="chances:" + chances;
btn.addEventListener("click", () => {
    chances--;
    chancesText.innerHTML="chances:" + chances;
})