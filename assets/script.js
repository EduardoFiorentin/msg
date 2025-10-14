const mensagens = [
  {
    titulo: "O Valor de Ensinar",
    texto: "Ensinar não é apenas transmitir conteúdo, é transformar vidas . Professores são agentes de mudança, capazes de inspirar questionamentos e novas perspectivas ..."
  },
  {
    titulo: "Aprender e Libertar",
    texto: "Como Paulo Freire disse, a educação verdadeira liberta . Cada palavra sua abre horizontes, inspira, e cada reflexão compartilhada desperta consciência ..."
  },
  {
    titulo: "Educação Crítica",
    texto: "Bell hooks também nos ensina que a educação é um ato de amor e resistência . E é justamente isso que vejo em cada gesto seu: atenção, cuidado e inspiração ..."
  },
  {
    titulo: "Arte que Ensina",
    texto: "Assim como a arte molda nossa percepção do mundo, você molda mentes e corações . Cada dúvida esclarecida é como uma pincelada delicada, e cada aluno inspirado é sua tela final ..."
  },
  {
    titulo: "Heróis Invisíveis",
    texto: "Ser professor é ocupar um papel heroico silencioso: mover mentes, abrir portas, acender curiosidade ..."
  },
  {
    titulo: "Força e Resiliência",
    texto: "Mesmo nos dias difíceis, sua dedicação continua iluminando caminhos . Momentos ruins passam, e sua força inspira todos ao seu redor ..."
  },
  {
    titulo: "História e Cultura",
    texto: "Cada aula é uma viagem: da pré-história à cultura pop contemporânea, você guia seus alunos através de mundos cheios de cores, histórias e ideias ..."
  },
  {
    titulo: "E finalmente",
    texto: "Parabéns minha labubu. Continue sendo esta mulher incrível, cheia de sonhos e determinação. Muito feliz pelo seu dia!!! 💐"
  }
];


// Elementos principais
const mensagemElemento = document.getElementById("mensagem");
const btnProxima = document.getElementById("proxima");
const btnAnterior = document.getElementById("anterior");

let indice = 0;
let intervalo;

// Função para digitar lentamente a mensagem
function digitarTexto(texto) {
  clearInterval(intervalo);
  mensagemElemento.innerHTML = "";
  let i = 0;
  intervalo = setInterval(() => {
    if (i < texto.length) {
      mensagemElemento.innerHTML += texto.charAt(i);
      i++;
    } else {
      clearInterval(intervalo);
    }
  }, 40);
}


const titulo = document.getElementById("titulo");
function mostrarMensagem() {
  titulo.textContent = mensagens[indice].titulo;
  digitarTexto(mensagens[indice].texto);
   atualizarBotoes();
}

// Botões de navegação
btnProxima.addEventListener("click", () => {
  indice = (indice + 1) % mensagens.length;
  mostrarMensagem();
});

btnAnterior.addEventListener("click", () => {
  indice = (indice - 1 + mensagens.length) % mensagens.length;
  mostrarMensagem();
});

function atualizarBotoes() {
  anterior.disabled = indice === 0;
  proxima.disabled = indice === mensagens.length - 1;
}

// Inicia com a primeira mensagem
mostrarMensagem();


function iniciarParticulas() {
  const canvas = document.getElementById('particulas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particulas = [];
  const numParticulas = 50;

  for (let i = 0; i < numParticulas; i++) {
    particulas.push(criarParticula());
  }

  function criarParticula() {
    const tipo = Math.random() < 0.3 ? 'flor' : 'brilho';
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: tipo === 'brilho' ? Math.random() * 2 + 0.5 : Math.random() * 8 + 6,
      dy: Math.random() * -0.5 - 0.2,
      dx: Math.random() * 0.2 - 0.1,
      tipo,
      cor:
        tipo === 'flor'
          ? `rgba(255,182,193,${Math.random() * 0.4 + 0.2})`
          : `rgba(255,255,255,${Math.random() * 0.8 + 0.2})`
    };
  }

  function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particulas.forEach(p => {
      if (p.tipo === 'flor') {
        // Desenha uma flor simples (5 pétalas)
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
          const angle = (i * Math.PI * 2) / 5;
          const x = p.x + Math.cos(angle) * p.r;
          const y = p.y + Math.sin(angle) * p.r;
          ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = p.cor;
        ctx.globalAlpha = 1.0;
        ctx.fill();
      } else {
        // Brilho simples
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = p.cor;
        ctx.globalAlpha = 1.0;
        ctx.fill();
      }

      // Movimento
      p.x += p.dx;
      p.y += p.dy;

      // Reposiciona se sair da tela
      if (p.y < -10) {
        p.y = canvas.height + 10;
        p.x = Math.random() * canvas.width;
      }
    });

    requestAnimationFrame(animar);
  }

  animar();
}

window.addEventListener('resize', () => {
  const canvas = document.getElementById('particulas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Inicia as partículas assim que a página carregar
window.onload = iniciarParticulas;

const floresCanvas = document.getElementById("flores");
const fctx = floresCanvas.getContext("2d");
floresCanvas.width = window.innerWidth;
floresCanvas.height = window.innerHeight;

const emojis = ["🌷", "🌸", "🌺", "💮", "🌹", "🌼", "🌻", "🪻", "🍃", "🍂"];
const flores = [];

for (let i = 0; i < 20; i++) {
  flores.push({
    x: Math.random() * floresCanvas.width,
    y: Math.random() * floresCanvas.height,
    size: Math.random() * 30 + 20,
    speed: Math.random() * 0.3 + 0.5,
    emoji: emojis[Math.floor(Math.random() * emojis.length)],
    alpha: Math.random() * 0.2 + 0.1
  });
}

function desenharFlores() {
  fctx.clearRect(0, 0, floresCanvas.width, floresCanvas.height);
  flores.forEach(f => {
    fctx.globalAlpha = f.alpha;
    fctx.font = `${f.size}px serif`;
    fctx.fillText(f.emoji, f.x, f.y);
    f.y -= f.speed;
    if (f.y < -50) {
      f.y = floresCanvas.height + 50;
      f.x = Math.random() * floresCanvas.width;
      f.alpha = Math.random() * 0.5 + 0.5;
    }
  });
  fctx.globalAlpha = 1.0;
  requestAnimationFrame(desenharFlores);
}
desenharFlores();