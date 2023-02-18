let Luckynumber = Math.floor(Math.random() * 20)
console.log(Luckynumber)
let userselectednumber = document.getElementById('guessing')
let checkbutton = document.getElementById('check')
let message = document.getElementById('message')
let main = document.getElementById('main')
let scorecard = document.getElementById('score')
let score = 10
scorecard.textContent = score
let againbutton = document.getElementById('again')

function userenterednumber(){



    const uservalue =  userselectednumber.value

    if(uservalue<1 || uservalue>20){
        message.textContent = 'Enter the number between 1 to 20'
        return
    }

    if(uservalue == Luckynumber){
        message.textContent = 'you have entered the correct number'
        main.style.backgroundColor = '#54B435'
    }
    else if(uservalue > Luckynumber){
        message.textContent = 'you have entered a higher value'
        main.style.backgroundColor = '#FF1E1E'
        score = score - 1
        scorecard.textContent = score
    }
    else if(uservalue < Luckynumber){
        message.textContent = 'you have entered a lower value'
        main.style.backgroundColor = '#FF1E1E'
        score = score - 1
        scorecard.textContent = score
    }

    if(score < 1){
        message.textContent = 'you have lost the game'
        main.style.backgroundColor = '#DC0000'
        checkbutton.style.display = 'none'
    }
    
}


againbutton.addEventListener('click', function(){
    score = 10;
    scorecard.textContent = score
    message.textContent = 'Start guessing.....'
    Luckynumber = Math.floor(Math.random() * 20)
    main.style.backgroundColor = '#222'
    checkbutton.style.display = 'block'
    
    userselectednumber.value = ''
    



})

checkbutton.addEventListener('click',userenterednumber )