
let  userscore = 0;
let compscore = 0; 
 
const  choices = document.querySelectorAll(".choice");   
const meg =document.querySelector("#meg")

const userscorepara = document.querySelector("#user-score")
const compscorepara = document.querySelector("#comp-score")

const gencompchoice = ()=>{
    const options = ["rock", "paper" ,"Secciors"];
    const rndidx = Math.floor(Math.random() *3);
    return options[rndidx];
}
const drawgame = ()=>{
    console.log("draw game ! ")
     meg.innerText="Game was draw play again !"
       meg.style.backgroundColor="#081b31"
}
const showinner =(userwin,userchoice,compchoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        meg.innerText="you are  a winner" ;
        meg.style.backgroundColor="green"
   }else{
     compscore++;
        compscorepara.innerText = compscore;
    meg.innerText="you loss";
     meg.style.backgroundColor="red"
   }
}

const playgame= (userchoice)=>{
    console.log("user choice=", userchoice);
    // generate computer chice //  

    const compchoice = gencompchoice();
    console.log("comp choice=", compchoice);

    if(userchoice===compchoice){
        drawgame();
    }
else{
    let userwin = true ;
    if(userchoice==="rock"){
        //sescior paper //
        userwin ==="paper" ? false :true;
    }
    else if(userchoice ==="paper"){
        //rock sessior //
        userwin=compchoice ==="Secciors" ? false :true
    }
    else{
        //rock paper
         userwin = compchoice === "rock" ? false :true 
    }
   showinner(userwin , userchoice ,compchoice);
}
};
// first step //

 choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    const userchoice = choice.getAttribute("id")
playgame(userchoice);
})


})

