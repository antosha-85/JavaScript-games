document.addEventListener('DOMContentLoaded', ()=> {
    //card options
    const cardArray = [
        { 
            name: 'cat1',
            img: './images/cat1.png'
        },
        { 
            name: 'cat1',
            img: './images/cat1.png'
        },
        { 
            name: 'cat2',
            img: './images/cat2.png'
        },
        { 
            name: 'cat2',
            img: './images/cat2.png'
        },
        { 
            name: 'cat3',
            img: './images/cat3.png'
        },
        { 
            name: 'cat3',
            img: './images/cat3.png'
        },
        { 
            name: 'cat4',
            img: './images/cat4.png'
        },
        { 
            name: 'cat4',
            img: './images/cat4.png'
        },
        { 
            name: 'cat5',
            img: './images/cat5.png'
        },
        { 
            name: 'cat5',
            img: './images/cat5.png'
        },
        { 
            name: 'cat6',
            img: './images/cat6.png'
        },
        { 
            name: 'cat6',
            img: './images/cat6.png'
        }

    ]
    
    cardArray.sort(()=> 0.5 - Math.random())

    const grid = document.querySelector('.grid');
    let resultDisplay = document.querySelector('#result')
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    //create your board
    function createBoard () {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', './images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard)
            grid.appendChild(card);
        }
    }
    
    //check for matches
    
    function checkForMatch () {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', './images/white.png')
            cards[optionTwoId].setAttribute('src', './images/white.png')
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', './images/blank.png')
            cards[optionTwoId].setAttribute('src', './images/blank.png')
            alert('Sorry try again')
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }
    //flip your card
    
    function flipCard () {
        const cardId = this.getAttribute('data-id');
        if (cardsChosenId.length ===1 && cardsChosenId[0]==cardId){return}//check that don't click on the same picture twice
        if(this.src.search('white.png')!=-1){return} //check that don't click on the white picture
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 100) 
        }
    }
    createBoard();
})