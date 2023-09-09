resultData = JSON.parse(localStorage.getItem('result'));

let totalQuestion = document.getElementById('totalQuestion');
let skippedQuestions = document.getElementById('skippedQuestions');
let correctAnswers = document.getElementById('correctAnswers');
let wrongAnswers = document.getElementById('wrongAnswers');
let attemptedQuestion = document.getElementById('attemptedQuestion');
let totalPoints = document.getElementById('totalPoints');

totalQuestion.innerText = resultData.totalQuestion;
skippedQuestions.innerText = resultData.skippedQuestions;
correctAnswers.innerText = resultData.correctAnswers;
wrongAnswers.innerText = resultData.wrongAnswers;
totalPoints.innerText = Number(resultData.correctAnswers) * 2;
attemptedQuestion.innerText = (Number(resultData.correctAnswers) + Number(resultData.wrongAnswers))