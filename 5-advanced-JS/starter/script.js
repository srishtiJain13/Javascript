/*var john={
    name : 'John',
    yearOfBirth : 2001,
    job : 'Clerk'
}

var Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job='job';
};

Person.prototype.calcAge= function(){
    console.log(2016-this.yearOfBirth);
}

var john = new Person('John',2001,'teacher');
john.calcAge();
var jane = new Person('Jane',1969,'Designer');
var mark = new Person('Mark',1995,'Engineer');
jane.calcAge();
mark.calcAge();
*/

/*
(function(){
    function Question (question,arrOfAnswer,correctAns){
    this.question = question;
    this.arrOfAnswer = arrOfAnswer;
    this.correctAns = correctAns;
}

Question.prototype.displayQuestion = function(){
    console.log(this.question);

    for(var i = 0; i < this.arrOfAnswer.length; i++){
        console.log(i +': ' + this.arrOfAnswer[i]);
    }
}

Question.prototype.checkAnswer = function(ans){
    if(ans === this.correctAns){
        console.log('Correct Answer!');
    }else{
        console.log('Wrong answer!');
    }
}


var ques1 = new Question('What is your name?',['sneha','srishti','ria'],1);

var ques2 = new Question('What is your age?',[25,26,29],0);
var ques3 = new Question('What is your weight?',[50,51,53],3);

var questionsArray = [ques1,ques2,ques3];

var randomQuestionNumber = Math.floor(Math.random() * questionsArray.length);

questionsArray[randomQuestionNumber].displayQuestion();

var answer = parseInt(prompt('please select the current answer!'));
questionsArray[randomQuestionNumber].checkAnswer(answer);
})();
*/

(
    function(){
    function Question (question,arrOfAnswer,correctAns){
    this.question = question;
    this.arrOfAnswer = arrOfAnswer;
    this.correctAns = correctAns;
}
var answer;
//var scores=0;

Question.prototype.displayQuestion = function(){
    console.log(this.question);

    for(var i = 0; i < this.arrOfAnswer.length; i++){
        console.log(i +': ' + this.arrOfAnswer[i]);
    }
}

Question.prototype.checkAnswer = function(ans,keepScore){
    var sc;

    if(ans === this.correctAns){
        console.log('Correct Answer!');
        sc= keepScore(true);

    }else{
        console.log('Wrong answer! Try again!!');
        sc= keepScore(false);
    }
    this.displayScore(sc);
}


Question.prototype.displayScore = function(score) {
    console.log('Your current score is: ' + score);
    console.log('------------------------------');
}

function score() {
    var sc = 0;
    return function(correct) {
        if (correct) {
            sc++;
        }
        return sc;
    }
}

var keepScore = score();

function nextQuestion(){
    var randomQuestionNumber = Math.floor(Math.random() * questionsArray.length);
    questionsArray[randomQuestionNumber].displayQuestion();
    answer = prompt('please select the current answer!');
    if(answer !== 'exit'){
        questionsArray[randomQuestionNumber].checkAnswer(parseInt(answer),keepScore);
        nextQuestion();
    }
}


    var ques1 = new Question('What is your name?',['sneha','srishti','ria'],1);
    var ques2 = new Question('What is your age?',[25,26,29],0);
    var ques3 = new Question('What is your weight?',[50,51,53],3);

    var questionsArray = [ques1,ques2,ques3];
    nextQuestion();

})();


