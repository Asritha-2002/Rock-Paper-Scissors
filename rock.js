
const choice=["rock","paper","scissors"];
const buttons=document.querySelectorAll(".myButtons");
const player=document.getElementById("play");
const computer=document.getElementById("computerr");
const computer2=document.getElementById("computer");

const output=document.getElementById("output")
const pscore=document.getElementById('pscore');
const cscore=document.getElementById('cscore');
let pcount=0;
let ccount=0;
let playerChoice='';


computer2.addEventListener("mouseover",event=>{
    computer2.style.backgroundColor="hsl(240, 30%, 50%)";
    computer2.style.color="hsl(34, 78%, 101%)"
})
computer2.addEventListener("mouseout",event=>{
    computer2.style.backgroundColor="hsl(180, 20%, 70%)";
    computer2.style.color="hsl(160, 100%, 75%)"
})
computer2.addEventListener("click",event=>{
    computer2.style.backgroundColor="tomato";
    computer2.style.color="red";
})

function players(input){
    player.textContent=input;
    playerChoice=input;
   
    
}
function computerChoice(playerChoice){
const random=choice[Math.floor(Math.random()*3)];
console.log(random);
computer.textContent=`${random}`

if(random===playerChoice){
    

    output.style.color="orange";
   
    output.textContent='Yeah! Its a Tie'
}else{
  
   if(random=='rock'&&playerChoice=='scissors'|| random=='scissors'&&playerChoice=='paper'||random=='paper'&&playerChoice=='rock'){
    output.textContent='You Lost';
    output.style.color="tomato";
    ccount++;
    cscore.textContent=`Computer score ${ccount}`;
   }else{
    output.textContent='You Win';
    output.style.color="green"
    pcount++;
    pscore.textContent=`Your score  ${pcount}`;
   }
}
}






