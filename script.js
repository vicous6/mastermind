let eleme = document.getElementsByTagName("li");
let counterLine= document.getElementsByClassName("counter-line")
let counterTry = document.getElementsByClassName("counter-try")
let liste =document.getElementById("liste")
let li = document.getElementsByTagName("li")

let blue = document.getElementById("blue")
let red = document.getElementById("red")
let black = document.getElementById("black")
let yellow = document.getElementById("yellow")
let prompt = document.getElementById("prompt")

let result = ["","","",""]

let couleur = "white"



createSecret()
createLine()
draw()
// console.log("le secret est :"+result)

// console.log(counterLine,counterTry)

function createLine(){

    for(let i =0; i < 4;i++){

        let p = document.createElement("li");
        p.style.backgroundColor="white"
        p.addEventListener("click",function(){
            
            p.style.backgroundColor= couleur
            isLineComplete()
        })
        liste.appendChild(p);
        // console.log(liste)
}




}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function createSecret(){
    for(let i = 0; i<result.length;i++){

        number =  getRandomInt(4)
         if(number== 0){
     
             result[i]="blue"
         }else
         if(number== 1){
     
             result[i]="red"
         }else if(number== 2){
     
             result[i]="black"
         }else if(number== 3){
     
             result[i]="yellow"
         }
     }
    //  console.log(result)
  }

function draw (){
    black.addEventListener("click",function(){

        couleur = "black"
        // console.log('changement de couleur')

    })
    red.addEventListener("click",function(){

        couleur = "red"
        // console.log('changement de couleur')

    })
    yellow.addEventListener("click",function(){

        couleur = "yellow"
        // console.log('changement de couleur')

    })
    blue.addEventListener("click",function(){

        couleur = "blue"
        // console.log('changement de couleur')

    })


}


function isLineComplete(){
let count = 0
// console.log (li.length)
  for(let i= li.length-1; i >=li.length-4;i--){

    if( li[i].style.backgroundColor != "white"){

      count ++
    //   console.log(count)
    }
    
    
}
if(count== 4 ){
    // console.log("ligne remplie")
    checkWithResult()
    createLine()
}else{
    // console.log("ligne incomplete")
}

}

function checkWithResult(){

    let playerGuess = []
    let reverPlayerGuess = []
    for(let i= li.length-1; i >=li.length-4;i--){

       playerGuess.push(  li[i].style.backgroundColor) 

    }
    for(let i = 3; i >=0;i--){

        reverPlayerGuess.push(playerGuess[i])
    }

    
let trueColorTruePositon = 0
    for (let i =0 ; i <4;i++){

        if(result[i]== reverPlayerGuess[i]){
            trueColorTruePositon++
            // console.log("nombre de bonne couleur sur la bonne position = "+trueColorTruePositon)
            prompt.innerHTML = "nombre de bonne couleur sur la bonne position = "+trueColorTruePositon
        }



    }

    if(trueColorTruePositon== 4){

        prompt.innerHTML=" Bravo tu a reussis en "+ li.length/4 +"essai(s)"
    }

    let trueColor = 0

    



}



