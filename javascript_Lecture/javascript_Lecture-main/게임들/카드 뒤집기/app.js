const cards = [
    {
        name : 'Choonsik1',
        img : 'img/앞모습1.gif'
    },
    {
        name : 'Choonsik1',
        img : 'img/앞모습1.gif'
    },
    {
        name : 'Choonsik2',
        img : 'img/앞모습2.gif'
    },
    {
        name : 'Choonsik2',
        img : 'img/앞모습2.gif'
    },
    {
        name : 'Choonsik3',
        img : 'img/앞모습3.gif'
    },
    {
        name : 'Choonsik3',
        img : 'img/앞모습3.gif'
    },
    {
        name : 'Choonsik4',
        img : 'img/앞모습4.gif'
    },
    {
        name : 'Choonsik4',
        img : 'img/앞모습4.gif'
    },
    {
        name : 'Choonsik5',
        img : 'img/앞모습5.gif'
    },
    {
        name : 'Choonsik5',
        img : 'img/앞모습5.gif'
    },
    {
        name : 'Choonsik6',
        img : 'img/앞모습6.gif'
    },
    {
        name : 'Choonsik6',
        img : 'img/앞모습6.gif'
    }
]

document.addEventListener('DOMContentLoaded', ()=> {
    cards.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    function createBoard() {
        for (let i = 0; i < cards.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'img/뒷모습.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cards[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cards[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if(optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'img/뒷모습.jpg')
            cards[optionTwoId].setAttribute('src', 'img/뒷모습.jpg')
            alert('You have clicked the same image!')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].setAttribute('src', 'img/하얀 카드.jpg')
            cards[optionTwoId].setAttribute('src', 'img/하얀 카드.jpg')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
            alert('You found a match')
        }
        else {
            cards[optionOneId].setAttribute('src', 'img/뒷모습.jpg')
            cards[optionTwoId].setAttribute('src', 'img/뒷모습.jpg')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cards.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }

    }
    createBoard();
})
