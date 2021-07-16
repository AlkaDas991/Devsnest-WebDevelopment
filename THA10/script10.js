const cards = document.querySelectorAll('.memory-card');
console.log(cards);

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
    console.log(this);//card that fired this event
    // toggle: if class is there : remove it
    //         if not there : add it
    if( lockBoard || this === firstCard ) return;
    this.classList.add('flip');
    if(!hasFlippedCard) {
        // first time click
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    hasFlippedCard = false;
    secondCard = this;
    console.log(firstCard.dataset.framework);
    console.log(secondCard.dataset.framework);
    checkForMatch();
        
}

function checkForMatch() {
    
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
}
function disableCards() {

    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}
function unflipCards() {

    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
}
function resetBoard() {
    [hasFlippedCard,lockBoard] = [false,false];
    [firstCard,secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let random = Math.floor(Math.random() * 12);
        card.style.order = random;
    });
})();

cards.forEach(card => card.addEventListener('click',flipCard));