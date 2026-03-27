// Stars animation
// Seção para animação das estrelas
const canvas = document.getElementById('stars-canvas');
// Obtém o elemento canvas
const ctx = canvas.getContext('2d');
// Obtém o contexto 2D do canvas

function resizeCanvas() {
  // Função para redimensionar o canvas
  canvas.width = window.innerWidth;
  // Define largura como largura da janela
  canvas.height = window.innerHeight;
  // Define altura como altura da janela
}

resizeCanvas();
// Chama a função para redimensionar inicialmente
window.addEventListener('resize', resizeCanvas);
// Adiciona listener para redimensionar ao mudar tamanho da janela

const stars = [];
// Array para armazenar as estrelas
const numStars = 100;
// Número de estrelas

for (let i = 0; i < numStars; i++) {
  // Loop para criar estrelas
  stars.push({
    x: Math.random() * canvas.width,
    // Posição x aleatória
    y: Math.random() * canvas.height,
    // Posição y aleatória
    radius: Math.random() * 2 + 1,
    // Raio aleatório
    speed: Math.random() * 0.5 + 0.1,
    // Velocidade aleatória
    opacity: Math.random() * 0.8 + 0.2
    // Opacidade aleatória
  });
}

function animateStars() {
  // Função para animar as estrelas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Limpa o canvas

  stars.forEach(star => {
    // Para cada estrela
    ctx.beginPath();
    // Inicia um caminho
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    // Desenha um círculo
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
    // Define cor com opacidade
    ctx.fill();
    // Preenche o círculo

    star.y += star.speed;
    // Move a estrela para baixo
    if (star.y > canvas.height) {
      // Se sair da tela
      star.y = 0;
      // Volta ao topo
      star.x = Math.random() * canvas.width;
      // Nova posição x aleatória
    }
  });

  requestAnimationFrame(animateStars);
  // Chama a próxima animação
}

animateStars();
// Inicia a animação