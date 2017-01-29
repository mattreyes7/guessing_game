var userName = prompt('What\'s your name?').toLowerCase();
alert('Hello'+' '+ userName + '. Thanks for coming to my site! First, you need to answer a short survey.');

// We want to ask the user a question
// Take their answer as input stored in a variable
// Validate that their answer matches my answer
// depending on True or False, provide feedback

var answerOne = prompt('Are you ready to begin? yes or no.').toLowerCase();
var myAnswerOne = 'yes';

if (answerOne === myAnswerOne) {
  alert('Alright, let\'s start!');
} else {
  alert('Sorry, I\'m starting anyway. LOL.');
}

var answerTwo = prompt('Do you play sports?').toLowerCase();
var myAnswerTwo = 'yes';

if (answerTwo === myAnswerTwo) {
  alert('Awesome! My favorite sport is baseball.');
} else {
  alert(':(');
}

var answerThree = prompt('Do you know how to code?').toLowerCase();
var myAnswerThree = 'yes';

if (answerThree === myAnswerOne) {
  alert('Same here and I am loving it.');
} else {
  alert('You are gonna learn today!');
}

var answerFour = prompt('Do you play video games?').toLowerCase();
var myAnswerFour = 'yes';

if (answerFour === myAnswerFour) {
  alert('I can play video games all day!');
} else {
  alert('It\'s a great way to pass the time!');
}

var answerFive = prompt('Do you like to travel?').toLowerCase();
var myAnswerFive = ['yes'];

// checks to see if user answer matches above
// an appropriate alert will run based on answer.

if ((answerFive === myAnswerFive) || (myAnswerFive !== answerFive)) {
  alert('Awesome! I\'ve been to at least 3 countries.');
} else {
  alert('Get out there and see the world!');
}

var answerSix = prompt('Let\'s make this a little harder. I have a ton of favorite movies. What is my favorite one?');
var myAnswerSix = [ 'The Lord of the Rings Trilogy', 'Star Wars trilogy', 'Guardians of the Galaxy' ];

if (answerSix === myAnswerSix.indexOf(-1)) {
  alert('I think I need to add that to my watchlist!');
} else {
  alert('You got it!')
}
// As a developer, I want to add a seventh question to my guessing game that takes numeric input, and indicates to the user whether the guess is 'too high' or 'too low', and gives the user exactly four opportunities to get the correct answer, so that my fancy programming skills are showcased.
//

// this while loop counts the number of guesses up to 4 moves onto the next question when tries expire and stops when the user guesses correctly.

var myAnswerSeven = 7;
var counter = 1;

while (counter < 5) {
  counter++;
  var answerSeven = parseInt(prompt('What\'s my favorite number?'));
if (counter ===5) {
  alert('Let\s move on');
} else if (answerSeven === myAnswerSeven) {
  alert('Good guess!');
  break;
} else if (answerSeven < myAnswerSeven) {
  alert('A little higher!');
} else if (answerSeven > myAnswerSeven) {
  alert ('A little lower!');
}
}

var answerSix = prompt('Let\'s make this a little harder. I have a ton of favorite movies. What is my favorite one?');
var myAnswerSix = [ 'The Lord of the Rings Trilogy', 'Star Wars trilogy', 'Guardians of the Galaxy' ];

if (answerSix === myAnswerSix.indexOf(-1)) {
  alert('I think I need to add that to my watchlist!');
} else {
  alert('You got it!')
}
// As a developer, I want to add a seventh question to my guessing game that takes numeric input, and indicates to the user whether the guess is 'too high' or 'too low', and gives the user exactly four opportunities to get the correct answer, so that my fancy programming skills are showcased.

// code on lines 99-113 runs a while loop that counts user input on prompt for up to 4 times. when user guesses the correct answer the loop stops. the loops stops stop after 4 tries.

var myAnswerSeven = 7;
var counter = 1;

while (counter < 5) {
  counter++;
  var answerSeven = parseInt(prompt('What\'s my favorite number?'));
if (counter === 5) {
  alert('Let\s move on');
} else if (answerSeven === myAnswerSeven) {
  alert('Good guess!');
  break;
} else if (answerSeven < myAnswerSeven) {
  alert('A little higher!');
} else if (answerSeven > myAnswerSeven) {
  alert ('A little lower!');
}
}
// As a developer, I want to add a question to my guessing game that accepts multiple possible correct answers that are stored in an array, for instance, "Can you guess a state that I have lived in besides Washington?", so that even more of my programming skills are showcased. For now, I will structure this question so that the user has six tries to get a single correct answer, and upon exhausting those tries OR getting a correct answer, displays a message to the user indicating all of the possible correct answers.

var myAnswerEight = ['baseball', 'basketball', 'table tennis', 'golf'];

while (counter < 7) {
  counter++;
  var answerEight = prompt('What is my favorite sport?');
if (counter === 7) {
    alert('I like baseball, basketball, table tennis, and golf!');
  } else if (answerEight === myAnswerEight[0] || answerEight === myAnswerEight[1] || answerEight === myAnswerEight[2] || answerEight === myAnswerEight[3]) {
    alert('That is correct!');
    break;
  }
}
