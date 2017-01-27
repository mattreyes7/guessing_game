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
  alert('Awesome!');
} else {
  alert(':(');
}

var answerThree = prompt('Do you know how to code?').toLowerCase();
var myAnswerThree = 'yes';

if (answerThree === myAnswerOne) {
  alert('Same here and I am loving it.');
} else {
  alert('You gonna learn today!');
}

var answerFour = prompt('Do you know how to build a car?').toLowerCase();
var myAnswerFour = 'no';

if (answerFour === myAnswerFour) {
  alert('Me too I\'d love to learn though!');
} else {
  alert('Teach me, Master!');
}

var answerFive = prompt('Do you know how to fly a plane? Yes/Y or No/N');
var myAnswerFive = ('N');
var otherAnswerFive = ('Y');
var anotherAnswerFive =('Yes');

// checks to see if user answer matches the above variables.
// an appropriate alert will run based on answer.

if ((answerFive === myAnswerFive) || (answerFive !== myAnswerFive)) {
  alert('That\'s too bad. Would\'ve been pretty cool');
} else {
  alert('Gas up my jet!');
}

var answerSix = prompt('Are you sleepy yet? Yes, No, Maybe.');
var myAnswerSix = [ ['Yes'], ['No'], ['Maybe'] ];

if (answerSix === myAnswerSix.indexOf(0)) {
  alert('ZZZZZZ');
} else {
  alert('You should sleep anyway.')
}
