// let i = document.querySelector(`#score-${activePlayer}`).textContent
// document.querySelector('#current-' + activePlayer).textContent = dice;


let scores , roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;


document.querySelector('.dice').style.display = 'none';

// Global Score
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
// Round Score
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';



//Dice Roll Button
document.querySelector('.btn-roll').addEventListener('click', function(){
  let dice = Math.floor(Math.random() * (6 - 1) + 1);

  let diceView = document.querySelector('.dice');
  diceView.style.display = 'block';
  diceView.src = `dice-${dice}.png`

  if(dice > 1){
      roundScore += dice
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else {
    document.querySelector('.dice').style.display = 'none';
    // next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0

    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';


    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
  }

});
