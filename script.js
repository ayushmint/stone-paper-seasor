let userscore =0;
let compscore =0;

let choices = document.querySelectorAll(".choice");
let message = document.querySelector("#move");
let user = document.querySelector("#user");
let comp = document.querySelector("#comp");

const compchoice = () =>{
    let option = ["rock" , "paper" , "scissor"];
    let choice = Math.floor(Math.random()*3);
    return option[choice];
};
const drawgame= () =>
{
    message.innerText ="it's a draw";
    message.style.backgroundcolor ="#081b31";
}
const showwinner= (userwin) =>{
    if(userwin){
      userscore++;
      user.innerText = userscore;
      message.innerText ="congragulation you win hip hip"
       message.style.backgroundColor = "green";

    } else {
       compscore++;
       comp.innerText = compscore;
       message.innerText ="ohoo you lost"
       message.style.backgroundColor ="red";
    }

    }
const playgame = (userchoice) =>
{
    let computer =compchoice();

      
    if(userchoice === computer ){
        drawgame();
    }else{
        let userwin = "true";
        if(userchoice === "rock"){
            userwin = computer === "paper" ? false : true;
        }else  if(userchoice === "paper"){
            userwin = computer === "scissor" ? false : true;
    }else  if(userchoice === "scissor"){
            userwin = computer === "paper" ? false : true;

}
  showwinner(userwin);
    }
  
}

choices.forEach((choice) =>{
choice.addEventListener("click", () => {
    const element = choice.getAttribute("id");
 playgame(element);
  });
});
