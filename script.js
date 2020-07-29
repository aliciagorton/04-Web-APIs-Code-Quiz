// set the time of the quiz
var seconds_remaining = 60;

// set the game score
var quiz_score = 0;

var q1_answer = 1;
var q2_answer = 1;
var q3_answer = 2;
var q4_answer = 0;
var q5_answer = 2;


function countDown(){

  // only continue the countdown if there are positive seconds
  if (seconds_remaining <= 0){
    // store the current score
    localStorage.setItem('js_quiz_current', JSON.stringify({"time": seconds_remaining, "score": quiz_score}));

    // load the scores.html page when the timer is out
    window.location.href = "scores.html"
  }
  else {
    seconds_remaining = seconds_remaining - 1;
    document.querySelector('#timer').innerHTML = `<p>Seconds Remaining: ${seconds_remaining}</p>`;
  }
  
}

function startQuiz(){
  console.log('starting the quiz');

  // hide the start button
  document.querySelector("#start-quiz").style.display = "none";

  // begin firing the countDown function once every second
  setInterval(countDown, 1000)

  // show the first question
  document.querySelector('#q1').style.display = "block";

  // listen for an answer to the first question
  var q1 = document.querySelectorAll('.q1-response');
  for (let i = 0; i < q1.length; i++) {
    q1[i].addEventListener("click", function() {
      console.log(`user chose answer ${i}`);

      // check if the answer is right or wrong
      if (q1_answer !== i){
        // subtract 10 seconds from the timer
        seconds_remaining = seconds_remaining - 10;
        // alert the user they are wrong
        document.querySelector("#q1-message").innerHTML = "<p style='color: red;'>You are wrong!</p>";
        // show the message
        document.querySelector("#q1-message").style.display = "block";
      }
      else {
        // alert the user they are correct
        document.querySelector("#q1-message").innerHTML = "<p style='color: green;'>You are correct!</p>";
        // update the score
        quiz_score = quiz_score + 1;
        // show the message
        document.querySelector("#q1-message").style.display = "block";
        // hide this question
        document.querySelector("#q1").style.display = "none";
        // show the next question
        document.querySelector("#q2").style.display = "block";
      }
    });
  }

  // listen for an answer to the second question
  var q2 = document.querySelectorAll('.q2-response');
  for (let i = 0; i < q2.length; i++) {
    q2[i].addEventListener("click", function() {
      console.log(`user chose answer ${i}`);

      // check if the answer is right or wrong
      if (q2_answer !== i){
        // subtract 10 seconds from the timer
        seconds_remaining = seconds_remaining - 10;
        // alert the user they are wrong
        document.querySelector("#q2-message").innerHTML = "<p style='color: red;'>You are wrong!</p>";
        // show the message
        document.querySelector("#q2-message").style.display = "block";
      }
      else {
        // alert the user they are correct
        document.querySelector("#q2-message").innerHTML = "<p style='color: green;'>You are correct!</p>";
        // update the score
        quiz_score = quiz_score + 1;
        // show the message
        document.querySelector("#q2-message").style.display = "block";
        // hide this question
        document.querySelector("#q2").style.display = "none";
        // show the next question
        document.querySelector("#q3").style.display = "block";
      }
    });
  }

  // listen for an answer to the third question
  var q3 = document.querySelectorAll('.q3-response');
  for (let i = 0; i < q3.length; i++) {
    q3[i].addEventListener("click", function() {
      console.log(`user chose answer ${i}`);

      // check if the answer is right or wrong
      if (q3_answer !== i){
        // subtract 10 seconds from the timer
        seconds_remaining = seconds_remaining - 10;
        // alert the user they are wrong
        document.querySelector("#q3-message").innerHTML = "<p style='color: red;'>You are wrong!</p>";
        // show the message
        document.querySelector("#q3-message").style.display = "block";
      }
      else {
        // alert the user they are correct
        document.querySelector("#q3-message").innerHTML = "<p style='color: green;'>You are correct!</p>";
        // update the score
        quiz_score = quiz_score + 1;
        // show the message
        document.querySelector("#q3-message").style.display = "block";
        // hide this question
        document.querySelector("#q3").style.display = "none";
        // show the next question
        document.querySelector("#q4").style.display = "block";
      }
    });
  }
  // listen for an answer to the fourth question
  var q4 = document.querySelectorAll('.q4-response');
  for (let i = 0; i < q4.length; i++) {
    q4[i].addEventListener("click", function() {
      console.log(`user chose answer ${i}`);

      // check if the answer is right or wrong
      if (q4_answer !== i){
        // subtract 10 seconds from the timer
        seconds_remaining = seconds_remaining - 10;
        // alert the user they are wrong
        document.querySelector("#q4-message").innerHTML = "<p style='color: red;'>You are wrong!</p>";
        // show the message
        document.querySelector("#q4-message").style.display = "block";
      }
      else {
        // alert the user they are correct
        document.querySelector("#q4-message").innerHTML = "<p style='color: green;'>You are correct!</p>";
        // update the score
        quiz_score = quiz_score + 1;
        // show the message
        document.querySelector("#q4-message").style.display = "block";
        // hide this question
        document.querySelector("#q4").style.display = "none";
        // show the next question
        document.querySelector("#q5").style.display = "block";
      }
    });
  }

  // listen for an answer to the fifth question
  var q5 = document.querySelectorAll('.q5-response');
  for (let i = 0; i < q5.length; i++) {
    q5[i].addEventListener("click", function() {
      console.log(`user chose answer ${i}`);

      // check if the answer is right or wrong
      if (q5_answer !== i){
        // subtract 10 seconds from the timer
        seconds_remaining = seconds_remaining - 10;
        // alert the user they are wrong
        document.querySelector("#q5-message").innerHTML = "<p style='color: red;'>You are wrong!</p>";
        // show the message
        document.querySelector("#q5-message").style.display = "block";
      }
      else {
        // alert the user they are correct
        document.querySelector("#q5-message").innerHTML = "<p style='color: green;'>You are correct!</p>";
        // update the score
        quiz_score = quiz_score + 1;
        // show the message
        document.querySelector("#q5-message").style.display = "block";
        // hide this question
        document.querySelector("#q5").style.display = "none";
        // ask the user for their initials
        var initials = prompt("What are your initials?");
        // store the current score
        localStorage.setItem('js_quiz_current', JSON.stringify({"time": seconds_remaining, "score": quiz_score, "initials": initials}));
        // load the scores.html page when the timer is out
        window.location.href = "scores.html"
      }
    });
  }
}

// grab the start quiz button 
var start_quiz = document.querySelector('#start-quiz');

// fire the startQuiz() function when the start_quiz button is clicked
start_quiz.addEventListener("click", startQuiz);