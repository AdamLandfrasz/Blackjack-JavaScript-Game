import {deal} from "./dealLogic.js";

export let init = {
    init: function () {
        let startButton = document.querySelector('#start-btn');
        startButton.addEventListener('click', function () {
            let body = document.querySelector('body');
            body.innerHTML = '';

            let container = document.createElement('div');
            container.classList.add('container');
            body.appendChild(container);

            let dealerCards = document.createElement('div');
            dealerCards.classList.add('dealer-cards');
            container.appendChild(dealerCards);

            let cards = document.createElement('div');
            cards.classList.add('cards');
            container.appendChild(cards);

            let hitButton = document.createElement('button');
            hitButton.classList.add('hit-btn');
            hitButton.textContent = 'Hit';
            container.appendChild(hitButton);




            let isOver = false;
            let newDeck = [];
            const fullDeck = deal.createDeck(1);
            const btnHit = document.querySelector('.hit-btn');
            btnHit.addEventListener('click', function () {
                userHand.push(deal.dealCards(1, newDeck, fullDeck)[0]);
                console.log(userHand);
            });
            let hands = {dealer: [], player: []};
            init.initTest(newDeck, fullDeck, hands);

        });
    },

    addTestCard: function (card, cardContainer) {
        let newCard = document.createElement('img');
        newCard.classList.add(`test-card${cardContainer.childElementCount + 1}`);
        newCard.setAttribute('src', `../static/images/${card}.png`);
        cardContainer.appendChild(newCard);
        newCard.dataset.value = `${card.slice(0, 1)}`;

    },



    initTest: function (newDeck, fullDeck, hands) {
        let cardContainer = document.querySelector('.cards');
        hands.player = deal.dealCards(2, newDeck, fullDeck);
        hands.dealer = deal.dealCards(2, newDeck, fullDeck);
        for (let card of hands.player) {
            init.addTestCard(`${card.slice(0, 2)}`, cardContainer);
            console.log(`${card.slice(0, 1)}`)
        }

    }
};
