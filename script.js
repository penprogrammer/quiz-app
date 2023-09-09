let dataset = [
    {
        question: "HTML Stand for?",
        option_a: "Hyper Text Mirinda Language",
        option_b: "Hyper Text Mercury Language",
        option_c: "Hypnotize Text Mercury Language",
        option_d: "Hyper Text Markup Language",
        answer: "option_d"
    },
    {
        question: "RAM Stand for?",
        option_a: "Random Access Memory",
        option_b: "Random Accessly Memories",
        option_c: "Rather Act Meaningless",
        option_d: "Raw Access Memory",
        answer: "option_a"
    },
    {
        question: "CSS Stand for?",
        option_a: "Cascading Standard Sheet",
        option_b: "Cascading Style Sheet",
        option_c: "Counting Style System",
        option_d: "Cascading Story Style",
        answer: "option_b"
    },
    {
        question: "Republic Day of India",
        option_a: "26 January",
        option_b: "15 March",
        option_c: "15 August",
        option_d: "29 December",
        answer: "option_a"
    },
    {
        question: "Independence Day is celebrated on?",
        option_a: "15th August",
        option_b: "26th January",
        option_c: "2nd October",
        option_d: "15th March",
        answer: "option_a"
    },
    {
        question: "President of India",
        option_a: "Sri Narendra Damodar Das Modi",
        option_b: "Draupadi Murmu",
        option_c: "Himanta Biswa Sharma",
        option_d: "Netaji Subash Chandra Bose",
        answer: "option_b"
    }
]

let attemptedQuestion = 0;
let countdown;
let timer = 10;
let rightAudio = new Audio('sath-crore.mp3');
let wrongAudio = new Audio('pushpa.mp3');

//Result
let skippedQuestions = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let totalQuestion = dataset.length;

let option_a = document.getElementById("option_a")
let option_b = document.getElementById("option_b")
let option_c = document.getElementById("option_c")
let option_d = document.getElementById("option_d")

let currentQuestion = dataset[attemptedQuestion];
let timing = document.getElementById("timing");

function renderQuestion() {

    option_a.className = "alert alert-primary"
    option_b.className = "alert alert-primary"
    option_c.className = "alert alert-primary"
    option_d.className = "alert alert-primary"

    let questionField = document.querySelector('.question');
    let counting = document.querySelector('.counting');

    counting.innerText = `${attemptedQuestion + 1} of ${dataset.length} Question`;
    questionField.innerText = currentQuestion.question

    option_a.innerText = currentQuestion.option_a
    option_b.innerText = currentQuestion.option_b
    option_c.innerText = currentQuestion.option_c
    option_d.innerText = currentQuestion.option_d
}

function nextQuestion() {
    console.log(currentQuestion);
    if ((attemptedQuestion + 1) == dataset.length) {
        //Last question pe hai user
        const result = {
            skippedQuestions: skippedQuestions,
            correctAnswers: correctAnswers,
            wrongAnswers: wrongAnswers,
            totalQuestion: totalQuestion,
        }
        localStorage.setItem('result', JSON.stringify(result))
        location.replace("result.html")
        return
    }
    attemptedQuestion = attemptedQuestion + 1;
    currentQuestion = dataset[attemptedQuestion]
    renderQuestion()
    startTimer()
    clearInterval(countdown);
    timer = 10;
}

function clickedOption(selectedOption) {

    if (selectedOption == "option_a") {
        if (currentQuestion.answer == selectedOption) {
            option_a.className = "alert alert-success"
            rightAudio.play()
            correctAnswers = correctAnswers + 1;
        } else {
            option_a.className = "alert alert-danger"
            wrongAudio.play()
            wrongAnswers = wrongAnswers + 1;
        }
    }
    if (selectedOption == "option_b") {
        if (currentQuestion.answer == selectedOption) {
            option_b.className = "alert alert-success"
            rightAudio.play()
            correctAnswers = correctAnswers + 1;
        } else {
            option_b.className = "alert alert-danger"
            wrongAudio.play()
            wrongAnswers = wrongAnswers + 1;
        }
    }
    if (selectedOption == "option_c") {
        if (currentQuestion.answer == selectedOption) {
            option_c.className = "alert alert-success"
            rightAudio.play()
            correctAnswers = correctAnswers + 1;
        } else {
            option_c.className = "alert alert-danger"
            wrongAudio.play()
            wrongAnswers = wrongAnswers + 1;
        }
    }
    if (selectedOption == "option_d") {
        if (currentQuestion.answer == selectedOption) {
            option_d.className = "alert alert-success"
            rightAudio.play()
            correctAnswers = correctAnswers + 1;
        } else {
            option_d.className = "alert alert-danger"
            wrongAudio.play()
            wrongAnswers = wrongAnswers + 1;
        }
    }

    if (currentQuestion.answer == "option_a") {
        option_a.className = "alert alert-success"
    }

    if (currentQuestion.answer == "option_b") {
        option_b.className = "alert alert-success"
    }

    if (currentQuestion.answer == "option_c") {
        option_c.className = "alert alert-success"
    }

    if (currentQuestion.answer == "option_d") {
        option_d.className = "alert alert-success"
    }
    setTimeout(() => {
        nextQuestion()
    }, 1000);
}


function startTimer() {
    countdown = setInterval(function () {
        timer = timer - 1
        timing.innerText = `${timer} Sec`
        if (timer <= 0) {
            nextQuestion()
            timer = 10;
            skippedQuestions = skippedQuestions + 1
            clearInterval(countdown)
        }
    }, 1000)
}

startTimer()

renderQuestion()