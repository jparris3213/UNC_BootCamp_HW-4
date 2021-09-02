var bodyEl = $("#root");
var cardEl = $("<div>");
var startbuttonEl = $("#startbutton");


var titleEl = $("<h1>");

var isBegin = true;




//Start Button Begins Timer and Opens First Question Div
function startbutton() {

    cardEl.attr("class","card");
    cardEl.attr("id","startbutton");
    titleEl.text("Start");
    cardEl.attr("style","margin-top:23%; margin-left:46%;")
    cardEl.append(titleEl);
    bodyEl.append(cardEl);
    
};
startbutton();

cardEl.on("click", function () {
    if (isBegin) {
        titleEl.text("Reset");
        cardEl.animate({
            marginTop: "1%"},
            1000);
        tvOn();
        setTime();
        timerDiv.attr("style","display: flex");
        isBegin = !isBegin
    } else {
        startbutton();
        $("#tvElement").remove();
        for (i = 0; i < 4; i++) {
            var answerID = "#answer_" + i;
            $(answerID).remove()
        };
        timerDiv.attr("style","display: none");
        $("#time").text("00:00:01:00");
        resetTimer();

        

        isBegin = !isBegin;
    }
});

function tvOn() {
    var tvEl = $("<div>");
    var tvContent = $("<h2>");
    var answerChoices = $("<div>")

    var quizQuestions = ["What Element do we place Javascript in?","Which of the Following is NOT a Javascript Data Type?", "Arrays can be used to store what?", "What line can be used to print a variable to the debugger?"];
    var quizChoices = [["<link>","<head>","<script>","<div>"],["Boolean","Alert","String","Numbers"],["Strings","Numbers","Other Arrays","All of the Above"],["print()","console.log()","debug()","debugger.log()"]];
    var answerKey = [3,2,4,2];

    var questionNumber = Math.floor(Math.random() * quizQuestions.length)
    
    tvEl.attr("class","card contentdiv");
    tvEl.attr("id","tvElement");

    tvContent.text(quizQuestions[questionNumber]);
    tvEl.append(tvContent);
    var correctAnswer = answerKey[questionNumber];
    console.log(correctAnswer);

    for (i = 0; i < 4; i++) {
        var answers = $("<p>");
        var answerID = "answer_" + i;
        answers.text(quizChoices[questionNumber][i]);

        answers.attr("id",answerID);
        answers.attr("class","card contentdiv answer");
        answerChoices.append(answers);

    };
    
    bodyEl.append(tvEl);
    bodyEl.append(answerChoices);
    
    tvEl.animate({height: "20vh",paddingTop: "10px"}, 1000);
};

var answerselection = $(".answer")
answerselection.on("click", function() {
    console.log("Hello");
});

//Timer Functionality
var timerDiv = $("<div>");
var timerEl = $("<h2>");

timerEl.text("00:00:01:00");
timerDiv.attr("class","card contentdiv");
timerDiv.attr("style","width: 20%");
timerDiv.attr("style","display: none");
//timerDiv.attr("style","margin: 0 auto")
timerEl.attr("id","time");
timerEl.attr("style","margin: 0 auto");
timerEl.attr("style", "font-size: 50px");
timerDiv.append(timerEl);
bodyEl.append(timerDiv);

var timeEl = $("time")
var secondsLeft = 60;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.text("00:00:00:"+ secondsLeft);
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Display Game Over, Reset Button, Score
        timerEl.text("Game Over");

      }
  
    }, 1000);
  }



