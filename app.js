const WHATSAPP_NUMBER = '5500000000000'; // Substitua pelo número real com DDI+DDD
const WHATSAPP_MESSAGE = 'Olá! Quero agendar minha Sessão de Alívio Emocional.';

const questions = [
  { text: 'Você sente ansiedade mesmo quando não há um motivo claro?' },
  { text: 'Seus pensamentos ficam acelerados ao ponto de dificultar o foco?' },
  { text: 'Você se sente emocionalmente sobrecarregado(a) ao longo do dia?' },
  { text: 'Você se cobra além do seu limite para dar conta de tudo?' },
  { text: 'Ao deitar, sua mente continua ativa e inquieta?' },
  { text: 'Você sente que depende emocionalmente da validação de outras pessoas?' },
  { text: 'Você acorda já se sentindo cansado(a) mentalmente?' },
  { text: 'Pequenas situações acabam gerando reações emocionais intensas?' },
  { text: 'Você tem dificuldade para relaxar sem sentir culpa?' },
  { text: 'Você sente que está sempre no “modo alerta”, mesmo em descanso?' }
];

const scale = [
  { label: 'Nunca', value: 0 },
  { label: 'Raramente', value: 1 },
  { label: 'Às vezes', value: 2 },
  { label: 'Frequentemente', value: 3 },
  { label: 'Sempre', value: 4 }
];

const screens = {
  start: document.getElementById('start-screen'),
  quiz: document.getElementById('quiz-screen'),
  result: document.getElementById('result-screen')
};

const progressEl = document.getElementById('progress');
const progressFill = document.getElementById('progress-fill');
const questionText = document.getElementById('question-text');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const resultText = document.getElementById('result-text');
const guidanceText = document.getElementById('result-guidance');
const whatsappBtn = document.getElementById('whatsapp-btn');

let current = 0;
let answers = [];
let selectedValue = null;

function configureWhatsappLink() {
  const message = encodeURIComponent(WHATSAPP_MESSAGE);
  whatsappBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

function show(screen) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[screen].classList.add('active');
}

function renderQuestion() {
  selectedValue = null;
  nextBtn.disabled = true;

  const q = questions[current];
  questionText.textContent = q.text;
  progressEl.textContent = `Pergunta ${current + 1} de ${questions.length}`;
  progressFill.style.width = `${((current + 1) / questions.length) * 100}%`;

  optionsEl.innerHTML = '';
  scale.forEach(item => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'option';
    btn.textContent = item.label;
    btn.onclick = () => {
      selectedValue = item.value;
      [...optionsEl.children].forEach(c => c.classList.remove('selected'));
      btn.classList.add('selected');
      nextBtn.disabled = false;
    };
    optionsEl.appendChild(btn);
  });
}

function getResult(avg) {
  if (avg < 1.2) {
    return {
      text: 'Sua mente mostra um nível leve de tensão emocional no momento.',
      guidance: 'Você está em uma boa direção. Mantenha pausas conscientes durante o dia e preserve momentos de autocuidado sem cobrança.'
    };
  }

  if (avg < 2.4) {
    return {
      text: 'Sua mente demonstra sinais de sobrecarga emocional e hiperatividade mental.',
      guidance: 'Talvez seja a hora de reduzir estímulos, organizar prioridades e praticar respiração lenta por alguns minutos ao longo do dia.'
    };
  }

  return {
    text: 'Sua mente está em estado elevado de alerta, com ansiedade, autocobrança e cansaço mental acumulados.',
    guidance: 'Você não precisa lidar com isso sozinho(a). Diminua o ritmo, acolha seus limites e considere buscar apoio profissional para aliviar essa carga.'
  };
}

function finishQuiz() {
  const sum = answers.reduce((total, value) => total + value, 0);
  const avg = sum / answers.length;
  const result = getResult(avg);
  resultText.textContent = result.text;
  guidanceText.textContent = result.guidance;
  show('result');
}

document.getElementById('start-btn').onclick = () => {
  current = 0;
  answers = [];
  renderQuestion();
  show('quiz');
};

nextBtn.onclick = () => {
  answers[current] = selectedValue;
  current += 1;

  if (current >= questions.length) {
    finishQuiz();
    return;
  }

  renderQuestion();
};

document.getElementById('restart-btn').onclick = () => show('start');

configureWhatsappLink();
