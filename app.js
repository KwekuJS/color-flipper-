const colors = ["Peach","Maroon","lightgreen", "red", "Gold", "LightYellow", "yellow", "blue", "Cyan", "Hotpink", "PeachPuff", "peru", "lightblue"];
const btn = document.getElementById('btn');
const color = document.getElementById('color');
btn.addEventListener('click', function(){

//    get a random number between 0-3

const randomNumber=getRandomNumber();
let activeColor = colors[randomNumber];
document.body.style.backgroundColor = activeColor;
color.textContent = activeColor;
})

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
    }
    


        