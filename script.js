const state = {
  questions: [],
  currentIndex: 0,
  score: 0,
  hasAnswered: false,
  currentQuestion: null,
};

const dom = {

  startScreen: document.getElementById("start-screen"),
  questionScreen: document.getElementById("question-screen"),
  resultScreen: document.getElementById("result-screen"),

  startBtn: document.getElementById("start-btn"),
  nextBtn: document.getElementById("next-btn"),
  restartBtn: document.getElementById("restart-btn"),

  questionText: document.getElementById("question-text"),
  answersContainer: document.getElementById("answers-container"),

  questionCounter: document.getElementById("question-counter"),
  progressPercent: document.getElementById("progress-percent"),
  progressFill: document.getElementById("progress-fill"),

  feedback: document.getElementById("feedback"),
  feedbackText: document.getElementById("feedback-text"),
  finalScore: document.getElementById("final-score"),
  resultGrade: document.getElementById("result-grade"),
};

async function loadQuestions() {
  try {
    const response = await fetch("data/questions.json");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const questions = await response.json();
    state.questions = questions;
    console.log(`✅ Wczytano ${questions.length} pytań`);
  } catch (error) {
    console.error("❌ Błąd wczytywania pytań:", error);
    alert("Nie udało się wczytać pytań. Otwórz aplikację przez Live Server, nie przez plik.");
  }
}

function showScreen(screenName) {
  // Ukryj wszystkie ekrany
  dom.startScreen.classList.add("hidden");
  dom.questionScreen.classList.add("hidden");
  dom.resultScreen.classList.add("hidden");

  if (screenName === "start") dom.startScreen.classList.remove("hidden");
  if (screenName === "question") dom.questionScreen.classList.remove("hidden");
  if (screenName === "result") dom.resultScreen.classList.remove("hidden");
}

function shuffleQuestion(original) {
  const indices = original.answers.map((_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return {
    ...original,
    answers: indices.map((i) => original.answers[i]),
    correctIndex: indices.indexOf(original.correctIndex),
  };
}

function showQuestion() {
  const question = shuffleQuestion(state.questions[state.currentIndex]);
  state.currentQuestion = question;
  state.hasAnswered = false;

  dom.questionText.textContent = question.question;

  const progress = ((state.currentIndex + 1) / state.questions.length) * 100;
  dom.questionCounter.textContent = `Pytanie ${state.currentIndex + 1} z ${state.questions.length}`;
  dom.progressPercent.textContent = `${Math.round(progress)}%`;
  dom.progressFill.style.width = `${progress}%`;

  dom.answersContainer.innerHTML = "";

  question.answers.forEach((answerText, index) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.textContent = answerText;
    button.addEventListener("click", () => handleAnswer(index));
    dom.answersContainer.appendChild(button);
  });

  dom.feedback.classList.add("hidden");
}

function handleAnswer(selectedIndex) {
  if (state.hasAnswered) return;
  state.hasAnswered = true;

  const question = state.currentQuestion;
  const isCorrect = selectedIndex === question.correctIndex;

  if (isCorrect) {
    state.score++;
  }

  const answerButtons = dom.answersContainer.querySelectorAll(".answer");

  answerButtons.forEach((button, index) => {
    button.disabled = true;

    if (index === question.correctIndex) {
      button.classList.add("answer--correct");
    } else if (index === selectedIndex) {
      button.classList.add("answer--wrong");
    }
  });

  dom.feedbackText.textContent = question.explanation;
  dom.feedback.classList.remove("hidden");

  const isLastQuestion = state.currentIndex === state.questions.length - 1;
  dom.nextBtn.textContent = isLastQuestion ? "Zobacz wynik" : "Następne pytanie";
}

function nextQuestion() {
  state.currentIndex++;

  if (state.currentIndex >= state.questions.length) {
    showResults();
  } else {
    showQuestion();
  }
}

function showResults() {
  dom.finalScore.textContent = state.score;
  dom.resultGrade.textContent = getGrade(state.score);
  showScreen("result");
}

function getGrade(score) {
  if (score === 10) return "🏆 Cyber-ekspert! Bezbłędnie!";
  if (score >= 8) return "🛡️ Świadomy użytkownik";
  if (score >= 6) return "👍 Niezły wynik, ale jest co poprawić";
  if (score >= 4) return "📚 Czas na naukę cyberbezpieczeństwa";
  return "⚠️ Twoje dane są w niebezpieczeństwie - szybko do nauki!";
}

function restartQuiz() {
  state.currentIndex = 0;
  state.score = 0;
  state.hasAnswered = false;

  state.questions.sort(() => Math.random() - 0.5);

  showQuestion();
  showScreen("question");
}

function startQuiz() {
  state.currentIndex = 0;
  state.score = 0;
  showScreen("question");
  showQuestion();
}

function setupEventListeners() {
  dom.startBtn.addEventListener("click", startQuiz);
  dom.nextBtn.addEventListener("click", nextQuestion);
  dom.restartBtn.addEventListener("click", restartQuiz);
}

async function init() {
  await loadQuestions();
  setupEventListeners();
  showScreen("start");
}

init();