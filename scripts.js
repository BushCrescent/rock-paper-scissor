console.log("hello this is working....");

//computer picks 
    //Make string array
    var arr = ["rock" , "paper" , "scissors"];
    var random_index = Math.floor(Math.random()*3);
    console.log(random_index);
    //
    

//player picks
    var cp = arr[random_index];
    var pp = prompt("rock, paper, or scissors");
//determine winnner
if(pp === cp){
    console.log("It's a draw");
}
else if(pp === "rock" && cp === "paper"){
    console.log("computer wins");
}
else if(pp === "paper" && cp === "scissors"){
    console.log("computer wins");
}
else if(pp === "scissors" && cp === "rock"){
    console.log("computer wins");
}
else if(pp === "rock" && cp === "scissors"){
    console.log("you win");
}
else if(pp === "scissors" && cp === "paper"){
    console.log("you win");
}
else if(pp === "paper" && cp === "rock"){
    console.log("you win");
}