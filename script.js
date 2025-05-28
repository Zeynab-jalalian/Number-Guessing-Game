
const btn = document.getElementById("btn");
let chancesText = document.getElementById("chances");
let number = document.getElementById("number");
let result = document.getElementById("result");
let txt = document.getElementById("txt");
let promptResult = document.querySelector("#prompt-result")
let random = Math.floor(Math.random() * 100 + 1);
let chances = 10;
let numberValue;
chancesText.innerHTML = "chances:" + chances;
const bgMusic = document.getElementById("bg-music");
bgMusic.volume = 0.3;
let musicStarted = false;



btn.addEventListener("click", (e) => {
    e.preventDefault();
    chances--;
    chancesText.innerHTML = "chances:" + chances;
    if (chances == 0) {
        activateBox("Loss");
    }
    numberValue = number.value;
    check(numberValue);
    number.value = '';

    if (!musicStarted) {
        bgMusic.play().catch(error => {
            console.log("Error");
        });
        musicStarted = true;
    }
})

function check(numberValue) {
    if (numberValue == random) {
        activateBox("Win");
    } else if (numberValue > random) {
        txt.innerHTML = "Enter Small Number"
    } else {
        txt.innerHTML = "Enter Large Number"
    }
}


function activateBox(e) {
    promptResult.classList.add("active");
    if (e === "Win") {
        result.innerHTML = "You won... but how?! Impossible — how could you beat me?!";
    } else if (e === "Loss") {
        result.innerHTML = "!See? You're a loser — just like I said!";
    }
}

function play(e) {
    promptResult.classList.remove("active");
    chances = 10;
    chancesText.innerHTML = "chances:" + chances;
    txt.innerHTML = "";
    document.body.classList.remove("prompt-active");
}


