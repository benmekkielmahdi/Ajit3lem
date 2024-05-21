
const quizData = [
    {
        number: "Question 1 of 5",
        question: "Qu'est-ce que le modèle OSI et quel est son objectif principal ?",
        a: "Un modèle de gestion des systèmes d'exploitation",
        b: "Un modèle pour standardiser les communications réseau",
        c: "Un modèle pour concevoir des applications web",
        d: "Un modèle pour sécuriser les ordinateurs personnels",
        correct: "b"
    },
    {
        number: "Question 2 of 5",
        question: "Quel est le rôle de la couche Application (Layer 7) dans le modèle OSI ?",
        a: "Gérer les connexions entre les périphériques réseau",
        b: "Traiter les données brutes pour les rendre compréhensibles par l'utilisateur",
        c: "Gérer les fonctions liées aux applications et à l'interaction utilisateur",
        d: " Assurer le transport de données entre les différents réseaux",
        correct: "c"
    },
    {
        number: "Question 3 of 5",
        question: "Quels protocoles représentent bien la couche Session (Layer 5) du modèle OSI ?",
        a: "HTTP, FTP, SNMP ",
        b: "TCP, UDP, QUICt",
        c: "SOCKS, NetBIOS, SIP",
        d: "IP, ICMP, IPSec",
        correct: "c"
    },
    {
        number: "Question 4 of 5",
        question: "Quels sont les protocoles les plus couramment associés à la couche Réseau (Layer 3) du modèle OSI ?",
        a: " HTTP, FTP, SNMP",
        b: "SOCKS, NetBIOS, SIP",
        c: "TCP, UDP, QUIC",
        d: "IP, ICMP, IPSec ",
        correct: "d"
    },
    {
        number: "Question 5 of 5",
        question: "Quels types de protocoles sont associés à la couche Physique (Layer 1) du modèle OSI ?",
        a: "Protocoles CAN Bus et Ethernet Physical Layer",
        b: "Protocoles HTTP et FTP",
        c: "Protocoles SOCKS et SI",
        d: "Protocoles TCP et UDP",
        correct: "a"
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
