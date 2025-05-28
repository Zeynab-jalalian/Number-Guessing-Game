const btn = document.getElementById("btn");
let chancesText = document.getElementById("chances");
let number=document.getElementById("number");
let promptResult = document.querySelector("#prompt-result")
let random = Math.floor(Math.random() * 100 + 1);
let chances = 10;
chancesText.innerHTML = "chances:" + chances;


btn.addEventListener("click", (e) => {
    e.preventDefault();
    chances--;
    chancesText.innerHTML = "chances:" + chances;
    if (chances == 0) {
        activateBox("Loss");
    }
})

function activateBox(e) {
    promptResult.classList.add("active");
}
function play(e){
    promptResult.classList.remove("active");
    chances=10;
    chancesText.innerHTML = "chances:" + chances;
}