const quizData = [
    {
        number: "Question 1 of 5",
        question: "What is Cyber Crime ?",
        a: "Only exists in physical forms",
        b: "Crime that exists on the Internet",
        c: "Crimes related to wildlife",
        d: "Crimes committed using vehicles",
        correct: "b"
    },
    {
        number: "Question 2 of 5",
        question: "Why is Cyber Crime on the rise ?",
        a: "It's difficult to accomplish",
        b: "There are high risks of getting caught",
        c: "Low returns for the effort",
        d: " Easy to accomplish with low risks and high returns",
        correct: "d"
    },
    {
        number: "Question 3 of 5",
        question: "Which of the following is an example of Cyber Crime mentioned on the page ?",
        a: "Bank robbery ",
        b: "Identity Theft",
        c: "Shoplifting",
        d: "Speeding",
        correct: "b"
    },
    {
        number: "Question 4 of 5",
        question: "What is a common challenge mentioned in the context of Cyber Crime ?",
        a: " Low chances of financial losses",
        b: "High chances of personal happiness",
        c: "Significant consequences of identity theft",
        d: " No impact on individuals",
        correct: "c"
    },
    {
        number: "Question 5 of 5",
        question: "Who are Cyber Criminals ?",
        a: "Law-abiding citizens",
        b: "Kids in their rooms doing legal activities",
        c: "Individuals engaged in illegal hacking activities",
        d: "Government agencies promoting cybersecurity",
        correct: "c"
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionNumberEl = document.getElementById('question-number'); // For question number
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const feedbackEl = document.getElementById('feedback'); // For feedback
const nextBtn = document.getElementById('next'); // For Next button

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    feedbackEl.innerHTML = ''; // Clear feedback
    nextBtn.style.display = 'none'; // Hide Next button

    const currentQuizData = quizData[currentQuiz];

    questionNumberEl.innerText = currentQuizData.number; // Set question number
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

// Inside the submitBtn event listener
submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    
    if (answer) {
        const currentQuizData = quizData[currentQuiz];
        if (answer === currentQuizData.correct) {
            score++;
            feedbackEl.innerHTML = '<p style="color: green;">Correct!</p>';
        } else {
            feedbackEl.innerHTML = `<p style="color: red;">Incorrect! The correct answer is ${currentQuizData.correct.toUpperCase()}: ${currentQuizData[currentQuizData.correct]}</p>`;
        }

        nextBtn.style.display = 'inline-block'; // Show Next button
        submitBtn.style.display = 'none'; // Hide Submit button
    }
});


nextBtn.addEventListener('click', () => {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
        submitBtn.style.display = 'inline-block'; // Show Submit button
    } else {
        quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
        `;
    }
});
