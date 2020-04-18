const square = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0;
let currentTime = timeLeft.textContent

function randomSquare() {
    //removing class mole from all the squares
    square.forEach(className => {
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')
    //assign the id of the randomPosition to hitPosition for us to use later
    hitPosition = randomPosition.id
    console.log("randomSquare -> hitPosition", hitPosition)
}

square.forEach(id => {
    id.addEventListener('mouseup', ()=> {
        if(id.id === hitPosition) {
            result ++
            score.textContent = result
        }
    })
})

function moveMole() {
    // let timerId = null
    // timerId = setInterval(randomSquare, 1000)
    setInterval(randomSquare, 1000)
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime
    
    if(currentTime === 0) {
        alert('Game over! Your final score is ' + result)
        clearInterval(timerId);
        location.reload()
    }
}

let timerId = setInterval(countDown, 1000)
console.log("timerId", timerId)