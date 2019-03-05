
var choices = ["rock", "paper", "scissors"]

var choiceOne = document.getElementById("choice-one")
var choiceTwo = document.getElementById("choice-two")
var choiceThree = document.getElementById("choice-three")


choiceOne.addEventListener('click', function() {
  var choice = "rock";
  var rand = choices[Math.floor(Math.random() * choices.length)];
  document.getElementById('two').innerHTML = "User: " + choice + ' ' + "Computer: " + rand

  if (choice == rand){
    document.getElementById('one').innerHTML = 'Its a tie!';

  }
  if (rand == "scissors") {
    document.getElementById('one').innerHTML = 'You Win!';
  }
  if (rand == "paper"){
    document.getElementById('one').innerHTML = 'You lose';
  }
  
  
})

choiceTwo.addEventListener('click', function() {
  var choice = "paper";
  var rand = choices[Math.floor(Math.random() * choices.length)];
  document.getElementById('two').innerHTML = "User: " + choice + ' ' + "Computer: " + rand

  if (choice == rand){
    document.getElementById('one').innerHTML = 'Its a Tie!';

  }
  if (rand == "rock") {
    document.getElementById('one').innerHTML = 'You Win!';
  }
  if (rand == "scissors"){
    document.getElementById('one').innerHTML = 'You Lose!';
  }

})

choiceThree.addEventListener('click', function() {

  var choice = "scissors";
  var rand = choices[Math.floor(Math.random() * choices.length)];
  document.getElementById('two').innerHTML = "User: " + choice + ' ' + "Computer: " + rand

  if (choice == rand){
    document.getElementById('one').innerHTML = 'Its a Tie!';
  }
  if (rand == "paper") {
    document.getElementById('one').innerHTML = 'You win!';
  }
  if (rand == "rock"){
    document.getElementById('one').innerHTML = 'You lose!';

  }
  
})


  


