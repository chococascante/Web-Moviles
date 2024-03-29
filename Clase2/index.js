let indice = -1;
let carros = [];
let yaHizoAutoPlay = false;
let intervalId;

// for (let i = 0; i < slides.length; i++) {
//   slides[i].style.display = "none";
// }
// slides[n].style.display = "block";

function manejarVerMas() {
  const carrusel = document.getElementById("carrusel");
  const verMas = document.getElementById("ver-mas");

  if (carrusel.classList.contains("carrousel-height-full")) {
    verMas.innerHTML = "Ver más";
    carrusel.classList.add("carrousel-height-definido");
    carrusel.classList.remove("carrousel-height-full");
  } else {
    verMas.innerHTML = "Ver menos";
    carrusel.classList.remove("carrousel-height-definido");
    carrusel.classList.add("carrousel-height-full");
  }
}

function cambiarSlide(n) {
  const slides = document.getElementsByClassName("slide");
  if (n >= slides.length) {
    indice = 0;
  } else if (n < 0) {
    indice = slides.length - 1;
  } else {
    indice = n;
  }

  const arregloSlides = [...slides]; // Array.from(arregloSlides);
  const dots = document.getElementById("dot-container").children;
  arregloSlides.forEach((slide, index) => {
    if (index === indice || index === indice + 1) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });

  for (let i = 0; i < dots.length; i++) {
    if (i === indice) {
      dots[i].classList.add("dot-active");
    } else {
      dots[i].classList.remove("dot-active");
    }
  }
}

// function slideAnterior() {
//   indice = indice - 2;
//   cambiarSlide(indice);
// }

// function siguienteSlide() {
//   indice = indice + 2;
//   cambiarSlide(indice);
// }

function cambiarIndice(n) {
  cambiarSlide((indice += n));
}

function renderDots() {
  const carrusel = document.getElementById("carrusel");
  const numeroDeSlides = carrusel.children.length;

  const dotContainer = document.getElementById("dot-container");

  for (let i = 0; i < numeroDeSlides / 2; i++) {
    const dot = document.createElement("li");
    dot.addEventListener("click", () => cambiarSlide(i));
    dot.classList.add("dot");
    dotContainer.appendChild(dot);
  }
}

function autoplay() {
  yaHizoAutoPlay = true;
  intervalId = setInterval(() => {
    cambiarSlide(indice + 2);
  }, 2000);
}

function shouldAutoPlay() {
  const slides = document.getElementsByClassName("slide");

  if (window.innerWidth >= 700 && !yaHizoAutoPlay) {
    // autoplay();
    cambiarSlide(0);
  } else if (window.innerWidth < 700 && yaHizoAutoPlay) {
    clearInterval(intervalId);

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "block";
    }
    yaHizoAutoPlay = false;
  }

  if (slides.length <= 2) {
    const flechas = document.getElementsByClassName("chevron-button");

    for (let i = 0; i < dots.length; i++) {
      flechas[i].style.display = "none";
    }
  }
}

window.onload = function () {
  renderDots();
  shouldAutoPlay();
};

window.onresize = function () {
  shouldAutoPlay();
};

// Dudas

function fetchCarros() {
  // ... traes los carros
}

function renderCarros() {
  if (carros.length) {
    const carrousel = document.getElementById("carrusel");
    const loading = document.createElement("p");
    carrousel.appendChild(loading);
  } else {
    for (let i = 0; i < carros.length; i++) {
      //...
    }
  }
}
