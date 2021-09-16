async function registrarServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    console.log("No es compatible con service workers");
    return;
  }

  try {
    const registration = await navigator.serviceWorker.register(
      "/service-worker.js"
    );
    console.log("Service worker registrado correctamente", registration.scope);
  } catch (error) {
    console.error(error);
  }
}

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
};
