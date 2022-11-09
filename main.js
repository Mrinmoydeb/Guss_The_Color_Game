let boxes=document.querySelectorAll("#boxes");
let showClrsV =document.getElementById('rgb-clrs');
let colors=[];
let result =document.getElementById("result");
let header =document.getElementById("header");
let playAgain=document.getElementById("play-again");
let changeColor=document.getElementById("new-color");

function getBoxes(){
    var i;
    for( i=0;i<boxes.length;i++){
colors.push(`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
)
    }
}
getBoxes()



function setColor(){
    var i;
    for(i=0; i<boxes.length;i++){
        boxes[i].style.backgroundColor = colors[i];
        boxes[i].setAttribute("Colors-data", colors[i])
    }
};
setColor()



function colorValue(){
    let randomClr=colors[Math.floor(Math.random()*boxes.length)];
    showClrsV.innerText=randomClr;
    return randomClr;
    }
    let pickedClr = colorValue();
   

function checkClr(){
    let i,j;
    for(i=0;i<boxes.length;i++){
        boxes[i].onclick = (e) =>{
var getColor =e.target.getAttribute("Colors-data");
if( pickedClr === getColor){
    for(j=0; j<boxes.length;j++){
        boxes[j].style.opacity = "1";
        boxes[j].style.backgroundColor = pickedClr;

    }
    playAgain.innerText = "Play again"
    header.style.backgroundColor =pickedClr;
result.innerText="Correct";
}else{
    result.innerText="Wrong";
    e.target.classList.add("fade");
}
        }
    } 
}
checkClr()

function reset(){
    window.location = location.href;
}

playAgain.onclick = function(){
    reset()
}
changeColor.onclick =function(){
    reset()
}




