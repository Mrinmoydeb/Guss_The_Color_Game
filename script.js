let squres = document.querySelectorAll(".boxes");
let colors = [];

function colorGenerator(){
    var i;
 for(i=0; i<squres.length;i++){
colors.push(
    `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
);
 }
};
colorGenerator();

function seColor(){
    for(i=0;i<squres.length;i++){
        squres[i].style.backgroundColor= colors[i];
    }
};

seColor();
function randomColor(){
      
}