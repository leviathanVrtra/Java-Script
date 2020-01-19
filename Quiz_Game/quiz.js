(function() {
  var finalScore = 0;
  function Question(question, options, correctAnswer) {
    this.question = question;
    this.correctAnswer = correctAnswer;
    this.options = options;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.options.length; i++) {
      console.log(i + ". " + this.options[i]);
    }
  };

  Question.prototype.checkAnswer = function(ans, func) {
    var sc = 0;
    if (this.correctAnswer === ans) {
      console.log("Correct answer!");
      sc = func(true);
    } else {
      console.log("Wrong answer. Try again :)");
      sc = func(false);
    }
    this.displayScore(sc);
  };

  Question.prototype.displayScore = function(score) {
    console.log("Your current score is: " + score);
    console.log();
    finalScore = score;
  };

  function score() {
    var sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }
  var keepScore = score();

  var q1 = new Question(
    "Who seized Draupadi by her hair and dragged her into the court?",
    ["Vidura", "Duryodhana", "Duhshasana", "Drushtadyumna"],
    2
  );

  var q2 = new Question(
    "Who was the son of Bhima and Hidimba ?",
    ["Abhimanyu", "Ghatotkacha", "Barbarik", "Jarasandha"],
    1
  );

  var q3 = new Question(
    "Kunti's Son Karna also known with this name -",
    ["Kaurav", "Kauntey", "Radhey"],
    2
  );

  var q4 = new Question(
    "Who was Bhishma's mother?",
    ["Ganga", "Saraswati", "Satyavati", "Laxmi"],
    0
  );

  var q5 = new Question(
    "King Pandu Married _____ .",
    ["Once", "Twice", "Thrice", "NOTA"],
    1
  );

  var questions = [q1, q2, q3, q4, q5];

  function nextQuestion() {
    var selectQuestion = Math.floor(Math.random() * questions.length);
    questions[selectQuestion].displayQuestion();

    var answer = prompt("Select the corret answer");

    if (answer !== "exit") {
      questions[selectQuestion].checkAnswer(parseInt(answer), keepScore);
      nextQuestion();
    }
  }

  nextQuestion();

  document.write(`<h1>Your final score is ${finalScore} </h1>`);
})();
