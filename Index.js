

let cards=[]
let sum=0;
let isAlive=false;
let hasBlackJack=false;
let message=""
//let messageEl=document.getElementById("message-el")
//let sumEl=document.getElementById("sum-el")

let messageEl=document.querySelector("#message-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.querySelector("#cards-el")

let player={
     Name:"Per",
     Chips:"$145"
    
}

let playerEl=document.getElementById("player-el")

playerEl.textContent=player.Name+" "+ player.Chips

function getRandomNumber(){
    // const min = 1;
    // const max = 13;
    // return Math.floor(Math.random() * (max - min + 1)) + min;

   let randomnumber= Math.floor(Math.random()*13)+1

    if(randomnumber===1){
        return 11
    }
    else if (randomnumber>10 ){
        return 10
    }
    else{
        return randomnumber
    }
}

function startGame(){
    isAlive=true
    let firstCard=getRandomNumber()
    let secondCard=getRandomNumber()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}
function renderGame() {

    cardsEl.textContent= "Cards:"

    for(i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" "
    }
    
    if(sum<21){

        message="do you want draw a new card?"
        isAlive=true
    }
    
    else if(sum===21) {
        message="Congatulations! You've got BlackJack!!"
        hasBlackJack=true
    }
    else if(sum>21) {
        message="You are out of the game!"
        isAlive=false
        
    }
    messageEl.textContent=message
    sumEl.textContent="Sum: "+ sum
    
}


function newCard(){
    console.log("Drawing new card from deck")
if(isAlive===true && hasBlackJack===false){
    let card=getRandomNumber();
    sum+=card
    cards.push(card)
    renderGame()
}
  
    

}

//cash
console.log(hasBlackJack)
console.log(isAlive)





