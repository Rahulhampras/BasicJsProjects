// let fighters = ["A", "B", "C","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O", "P", "Q"]

// let stageEl= document.getElementById("stage")
// let fightbutton=document.getElementById("pickfighter")

// fightbutton.addEventListener("click", function() {
//     let randomem1=Math.floor(Math.random()*16)
//     let randomem12=Math.floor(Math.random()*16)

//     stageEl.textContent=fighters[randomem1]+" VS "+ fighters[randomem12]

// })


let numbers=[1,2,5,8,10,7]
let oddShelf=document.getElementById("oddshelf")
let evenShelf=document.getElementById("evenshelf")

function shelf(){

    for(i=0;i<numbers.length;i++){
        let value=numbers[i]
        if(value % 2==0){
            evenShelf.textContent+=numbers[i]+" "
        }
    
        else if(value %2 !=0){
            oddShelf.textContent+=numbers[i]
        }
    }

}
