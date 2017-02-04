var questionCounter = 0;

var userName = prompt('What\'s your name?').toLowerCase();
// game prompts user name//
alert('Hello'+' '+ userName + '. Thanks for coming to my site! First, you need to answer a short survey.');
// this is the question counter below.
console.log(userName);

//Question one//
function questionOne() {
  var answerOne = prompt('Are you ready to begin? yes or no.').toLowerCase();
  var myAnswerOne = 'yes';

  if (answerOne === myAnswerOne) {
    alert('Alright, let\'s start!');
  } else {
    alert('Sorry, I\'m starting anyway. LOL.');
  }
  console.log(answerOne);
}

questionOne();

//Question two//
function questionTwo() {
  var answerTwo = prompt('Do you play sports?').toLowerCase();
  var myAnswerTwo = 'yes';

  if (answerTwo === myAnswerTwo) {
    alert('Awesome! My favorite sport is baseball.');
  } else {
    alert(':(');
  }
  console.log(answerTwo);
}

questionTwo();

//Question three//
function questionThree() {
  var answerThree = prompt('Do you know how to code?').toLowerCase();
  var myAnswerThree = 'yes';

  if (answerThree === myAnswerThree) {
    alert('Same here and I am loving it.');
  } else {
    alert('You are gonna learn today!');
  }
  console.log(answerThree);
}

questionThree();

//Question four//
function questionFour() {
  var answerFour = prompt('Do you play video games?').toLowerCase();
  var myAnswerFour = 'yes';

  if (answerFour === myAnswerFour) {
    alert('I can play video games all day!');
  } else {
    alert('It\'s a great way to pass the time!');
  }
  console.log(answerFour);
}

questionFour();

//Question five//
function questionFive() {
  var answerFive = prompt('Do you like to travel?').toLowerCase();
  var myAnswerFive = ['y', 'yes'];

  if (myAnswerFive.indexOf(answerFive) > -1) {
    alert('Awesome! I\'ve been to at least 3 countries.');
  } else {
    alert('Get out there and see the world!');
  }
  console.log(answerFive);
}

questionFive();

//Question six includes array//
function questionSix() {
  var answerSix = prompt('Let\'s make this a little harder. I have a ton of favorite movies. Name at least one');
  var myAnswerSix = [ 'Mad Max', 'Inception', 'Guardians of the Galaxy' ];
//Beginning of logic//
  if (myAnswerSix.indexOf(answerSix) > -1) {
    alert('You got it!');
    questionCounter++;
  } else {
    alert('I need to add that to my watchlist!')
  }
  console.log(answerSix);
}

questionSix();

//Question seven includes feedback on whether answer is too high/too low//
function questionSeven() {
  var myAnswerSeven = 7;
  var counterSeven = 0;
//Beginning of logic//
  while (counterSeven < 4) {
    counterSeven++;
    var answerSeven = parseInt(prompt('What\'s my favorite number?'));
    if (counterSeven === 5) {
      alert('Let\s move on');
    } else if (answerSeven === myAnswerSeven) {
      alert('Good guess!');
      questionCounter++;
      break;
    } else if (answerSeven < myAnswerSeven) {
      alert('A little higher!');
    } else if (answerSeven > myAnswerSeven) {
      alert ('A little lower!');
    }
  }
  console.log(answerSeven);
}

questionSeven();
//Question eight -- includes array and limits questions//
function questionEight() {
  var myAnswerEight = ['baseball', 'basketball', 'table tennis', 'golf'];
  var counterEight = 1;
//Beginning of logic//
  while (counterEight < 7) {
    counterEight++;
    var answerEight = prompt('Name one of my favorite sports.');
    if (counterEight === 7) {
      alert('I like baseball, basketball, table tennis, and golf!');
    } else if (myAnswerEight.indexOf(answerEight) > -1) {
      alert('That is correct!');
      questionCounter++;
      break;
    }
  }
  console.log(answerEight);
}
//Question counter only reflects scores for last three questions -- other questions do not have right or wrong answers//
questionEight();
alert('Thanks for playing' +' '+ userName + '. You got '+ questionCounter + ' correct answers out of 3!');
