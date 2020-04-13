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

    const grid = document.querySelector('.grid')
    //create your board
    createBoard = () => {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', './images/blank.png');
            card.setAttribute('data-id', i);
            grid.appendChild(card);
        }
    }
    createBoard();

    //check for matches

    //flip your card
    
})