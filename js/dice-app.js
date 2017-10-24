
var scores, currentScore, totalScore, activePlayer;

init();


document.querySelector('.btn-roll-dice').addEventListener('click', function () {
    //1. Find Random Number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    document.querySelector('#dice-img img').src = 'img/dice-clipart-' + dice + '.png';
    document.querySelector('#dice-img img').style.visibility = 'visible';

    //3. Update the Total score if the rolled out number was not 1
    if (dice !== 1) {
        totalScore += dice;
        document.querySelector('#current-score-' + activePlayer).innerHTML = totalScore;

    } else {
        nextPlayer();
    }
});

    //4. Save totalScore and update in respective user scores
document.querySelector('#hold-score').addEventListener('click', function () {

    //Add totalScore to Player
    scores[activePlayer] += totalScore;

    //Update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //Check if Player won the game or not
    var target = document.querySelector('#score-' + activePlayer).textContent;
    //console.log('target is : ' + target + 'for' + '#score-' + activePlayer);
    if (target >= 100) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner';
        document.querySelector('#name-' + activePlayer).classList.add('winner');
        document.querySelector('#dice-img img').style.display = 'none';
        document.querySelector('.user-' + activePlayer).classList.remove('active');
        document.querySelector('.dice-roll').style.display = 'none';
        document.querySelector('.save-dice').style.display = 'none';
        document.querySelector('.btn-new-game').style.display = 'block';
    } else {
        //Next Players Turn
        nextPlayer();
    }

})

//New Game
document.querySelector('.btn-new-game').addEventListener('click', init);

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    totalScore = 0;
    document.getElementById('current-score-0').textContent = '0';
    document.getElementById('current-score-1').textContent = '0';

    document.querySelector('.user-0').classList.toggle('active');
    document.querySelector('.user-1').classList.toggle('active');

    document.querySelector('#dice-img img').style.visibility = 'hidden';
}

function init() {
    scores = [0, 0];
    currentScore = 0;
    totalScore = 0;
    activePlayer = 0;

    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('#current-score-0').textContent = 0;
    document.querySelector('#current-score-1').textContent = 0;
    document.querySelector('#dice-img img').style.visibility = 'hidden';
    document.querySelector('.btn-new-game').style.display = 'none';

    document.querySelector('.dice-roll').style.display = 'block';
    document.querySelector('.save-dice').style.display = 'block';

    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';

    document.querySelector('#name-0').classList.remove('winner');
    document.querySelector('#name-1').classList.remove('winner');
    document.querySelector('.user-0').classList.remove('active');
    document.querySelector('.user-1').classList.remove('active');
    document.querySelector('.user-0').classList.add('active');

}

