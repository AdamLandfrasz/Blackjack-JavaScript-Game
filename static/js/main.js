function createDeck(amountOfDeck) {
    const colors = 'dchs';
    const values = '234567890jqka';
    let fullDeck = [];

    for (let i = 0; i < amountOfDeck; i++) {
        for (let color of colors) {
            for (let value of values) {
                fullDeck.push(`${i}${color}${value}`)
            }
        }
    }

    return fullDeck;
}

function dealCards(amount, newDeck, fullDeck) {
    for (let j = 0; j < amount; j++) {
        let pick = parseInt(Math.random() * (fullDeck.length -1));
        while (pick in newDeck) {
            pick = parseInt(Math.random() * (fullDeck.length -1));
        }
        newDeck.push(fullDeck[pick]);
    }
    return newDeck;
}


function getValue(card) {
    let getCardNumber = card.slice(-1), checkIsNumber = !!parseInt(getCardNumber);
    if (checkIsNumber && getCardNumber !== '0' ){
        return parseInt(getCardNumber);
    } else if (getCardNumber === '0') {
        return 10;
    } else if (!checkIsNumber && getCardNumber !== 'a') {
        return 10;
    } else {
        return 11;
    }
}

function check(isOverm, newDeck, fullDeck) {

        let newCard = dealCards(1);

    console.log(newCard)
}


function main() {
    const amount = 2;
    let isOver = false;

    let newDeck = [];
    const fullDeck = createDeck(1);

    let handValues = [];
    const startUserHand = dealCards(amount, newDeck, fullDeck);
    newDeck = startUserHand;
    for (let card of startUserHand) {
        let cardValue = getValue(card);
        handValues.push(cardValue)
    }

    const btnHit = document.getElementById('hit');
    btnHit.addEventListener('click', function () {
        check(isOver, newDeck, fullDeck)
    });



}

main();