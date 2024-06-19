const questions = [
    { text: "Ram stands for Read Access Memory", answer: false },
    { text: "The Central Processing Unit consists of Control Unit, ALU, CPU", answer: true },
    { text: "GPU stands for Graphic Processing Unit", answer: true },
    { text: "ROM stands for Read Only Memory", answer: true },
    { text: "A device for changing the connection on a connector to a different configuration is a Converter", answer: false },
    { text: "RAM is known as the 'brain' of the computer", answer: false },
    { text: "Resistance is measured in Volts", answer: false },
    { text: "Devices which are used to receive data from central processing unit are classified as Output Devices", answer: true },
    { text: "Sockets provide expansion capability for a computer system", answer: true },
    { text: "The 'main store' of CPU is called Temporary Memory", answer: false }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    questionElement.innerText = questions[currentQuestionIndex].text;
    document.getElementById("question-container").style.display = 'block';
    document.getElementById("result-container").style.display = 'none';
}

function checkAnswer(answer) {
    const resultElement = document.getElementById("result");
    if (answer === questions[currentQuestionIndex].answer) {
        resultElement.innerText = "Wow, such a smartie!";
        score++;
    } else {
        resultElement.innerText = "HAHAH YOU'RE WRONG!!";
    }
    document.getElementById("question-container").style.display = 'none';
    document.getElementById("result-container").style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question-container").style.display = 'none';
        document.getElementById("result-container").style.display = 'block';
        document.getElementById("result").innerText = `Quiz Finished! Your score is ${score} out of ${questions.length}`;
        document.querySelector("#result-container button").style.display = 'none';
    }
}

window.onload = loadQuestion;