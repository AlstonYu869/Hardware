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

const correctMessages = [
    "WOW! SUCH A SMARTIE!",
    "Your brain must be massive!"
];

const incorrectMessages = [
    "HAHAHAH YOU'RE WRONG!",
    "I'm disappointed..."
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    questionElement.innerText = questions[currentQuestionIndex].text;
    document.getElementById("question-container").style.display = 'block';
    document.getElementById("result-container").style.display = 'none';
}

function getRandomMessage(messages) {
    return messages[Math.floor(Math.random() * messages.length)];
}

function checkAnswer(answer) {
    const resultElement = document.getElementById("result");
    const isCorrect = answer === questions[currentQuestionIndex].answer;
    const messageArray = isCorrect ? correctMessages : incorrectMessages;
    const randomMessage = getRandomMessage(messageArray);

    resultElement.innerText = randomMessage;
    if (isCorrect) score++;

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
        document.getElementById("next-question-button").style.display = 'none';
        document.getElementById("restart-button").style.display = 'block';
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("next-question-button").style.display = 'block';
    document.getElementById("restart-button").style.display = 'none';
    loadQuestion();
}

window.onload = loadQuestion;