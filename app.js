var Question = function (question, answers, correctAnswer) {
  this.question = question;
  this.answers = answers;
  this.correctAnswer = correctAnswer;
}

Question.prototype.ask = function() {
  console.log(this.question);
  for (var i = 0; i < this.answers.length; i++) {
    console.log(i + ". " + this.answers[i]);
  }
}

Question.prototype.checkAnswer = function(userAnswer) {
  if (userAnswer == this.correctAnswer) {
    console.log("Correct answer!");
    return 1;
  }
  else if (userAnswer === null) {
    console.log("Exiting...\nGoodbye!")
    return null;
  }
  else {
    console.log("Wrong answer!");
    return 0;
  }
}

var questions = [
  new Question("What's the full-age in Japan?", [18, 16, 20, 21], 2),
  new Question("Where is Lombardy?", ["Italy", "France", "Scotland"], 0),
  new Question("Who's the president of the USA?", ["Barack Obama", "Hillary Clinton", "Donald Trump"], 2),
  new Question("In which continent is Turkey located?", ["Europe", "Asia", "Africa", "America"], 1)
];

function askQuestions(loop) {
  var points = 0;
  function randomInt(num) { return Math.floor(Math.random() * num); }
  function displayPoints() {
    if (loop) { console.log("-------------------\nCurrent points: " + points); }
  }
  do {
    questionNumber = randomInt(questions.length);
    questions[questionNumber].ask();
    var userAnswer = prompt("Please input the number of the correct answer (press Cancel to quit): ");
    points += questions[questionNumber].checkAnswer(userAnswer);
    displayPoints();
    if (userAnswer == null) { loop = false; }
  } while(loop);
}

askQuestions(loop=true);
