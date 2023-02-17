var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.getElementsByClassName(".score-board")
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")
var smallUserWord = "user".fontsize(4).sub()
var smallCompWord = "comp".fontsize(4).sub()

function getComputerChoice(){
    const choice = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random()*3)
    return choice[randomNumber]
}

function game(userChoice){
    const computerChoice = getComputerChoice()
    
    switch(userChoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice)
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice)
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice)
            break;
    }
}

function convertToWord(letter){
    if(letter === 'r') return "Rock"
    if(letter === 'p') return "Paper"
    return "Scissors"
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    const userChoice_div = document.getElementById(userChoice)
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord}  beats ${convertToWord(computerChoice)} ${smallCompWord}. You Win !!`
    userChoice_div.classList.add("green-glow")
    setTimeout(() => userChoice_div.classList.remove("green-glow"), 500)
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    const userChoice_div = document.getElementById(userChoice)
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord}  looses to ${convertToWord(computerChoice)} ${smallCompWord}. You Loose !!`
    userChoice_div.classList.add("red-glow")
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 500)
}

function draw(userChoice, computerChoice){
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord}  equals ${convertToWord(computerChoice)} ${smallCompWord}. Its a Draw !!`
    const userChoice_div = document.getElementById(userChoice)
    userChoice_div.classList.add("gray-glow")
    setTimeout(() => userChoice_div.classList.remove("gray-glow"), 500)
}

function main()
{

    rock_div.addEventListener('click',() => game("r"))

    paper_div.addEventListener('click',() => game("p"))

    scissors_div.addEventListener('click',() => game("s"))

}


main()