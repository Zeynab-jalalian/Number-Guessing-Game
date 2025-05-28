const btn = document.getElementById("btn");
let chancesText = document.getElementById("chances");
let number=document.getElementById("number");
let result=document.getElementById("result");
let txt=document.getElementById("txt");
let promptResult = document.querySelector("#prompt-result")
let random = Math.floor(Math.random() * 100 + 1);
let chances = 10;
let numberValue;
chancesText.innerHTML = "chances:" + chances;


btn.addEventListener("click", (e) => {
    e.preventDefault();
    chances--;
    chancesText.innerHTML = "chances:" + chances;
    if (chances == 0) {
        activateBox("Loss");
    }
    numberValue=number.value;
    check(numberValue);
    number.value='';
})

function check(numberValue){
 if(numberValue==random){
    activateBox("Win");
 }else if(numberValue>random){
 txt.innerHTML="Enter Small Number"
 }else{
    txt.innerHTML="Enter Large Number"
 }
}

function activateBox(e) {
    promptResult.classList.add("active");
    result.innerHTML=" You " + e + " The Game ";
    document.body.classList.add("prompt-active");
}
function play(e){
    promptResult.classList.remove("active");
    chances=10;
    chancesText.innerHTML = "chances:" + chances;
    txt.innerHTML="";
    document.body.classList.remove("prompt-active");
}