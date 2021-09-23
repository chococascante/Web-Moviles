async function registrarServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    console.log("No es compatible con service workers");
    return;
  }

  try {
    const registration = await navigator.serviceWorker.register(
      "./service-worker.js"
    );
    console.log("Service worker registrado correctamente", registration.scope);
  } catch (error) {
    console.error(error);
  }
}

// PWA
window.addEventListener("beforeinstallprompt", (event) => {
  console.log("👍", "beforeinstallprompt", event);
  // Stash the event so it can be triggered later.
  window.deferredPrompt = event;
});

window.addEventListener("beforeinstallprompt", (event) => {
  console.log("👍", "beforeinstallprompt", event);
  event.preventDefault();
  // Stash the event so it can be triggered later.
  window.deferredPrompt = event;
});

window.onload = () => {
  // registrar el worker
  registrarServiceWorker();

  document.querySelector("#boton").addEventListener("click", () => {
    const urlIcono = document.querySelector("select").selectedOptions[0].value;
    if (urlIcono === "") {
      return;
    }
    const imagen = document.createElement("img");
    imagen.src = urlIcono;
    document.querySelector("#lista-iconos").appendChild(imagen);
  });

  document.getElementById("boton-pwa").addEventListener("click", async () => {
    console.log("Hola");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      console.log("No hay promptEvent");
      // The deferred prompt isn't available.
      return;
    }
    // Mostramos el prompt
    promptEvent.prompt();
    const result = await promptEvent.userChoice;
    console.log("👍", "Elección", result);
    window.deferredPrompt = null;
  });
};
