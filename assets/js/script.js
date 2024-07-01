var count = 200;
var defaults = {
  origin: { y: 0.7 },
};

function fire(particleRatio, opts, button) {
  // Obtener las coordenadas del botón
  var rect = button.getBoundingClientRect();
  var centerX = rect.left + rect.width / 2;
  var centerY = rect.top + rect.height / 2;

  // Configurar opciones del confeti
  var confettiOptions = {
    ...defaults,
    ...opts,
    particleCount: Math.floor(count * particleRatio),
    origin: { x: centerX / window.innerWidth, y: centerY / window.innerHeight },
  };

  // Lanzar confeti
  confetti(confettiOptions);
}

// Función para lanzar confeti al hacer clic en los botones y abrir la ventana después de un retraso
function setupConfettiButton(buttonId, particleRatio, opts, delay) {
  var button = document.getElementById(buttonId);
  button.addEventListener("click", function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    fire(particleRatio, opts, button);
    setTimeout(function () {
      window.open(button.href, "_blank");
    }, delay);
  });
}

// Configurar los botones con sus respectivas funciones de confeti y retrasos
setupConfettiButton(
  "button1",
  0.35,
  {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  },
  1000
);
setupConfettiButton(
  "button2",
  0.35,
  {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  },
  1000
);

setupConfettiButton(
  "button3",
  0.35,
  {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  },
  1000
);
