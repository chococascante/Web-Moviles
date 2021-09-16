function guardarCookie(nombre, valor, diasVigencia, path = "/") {
  const fecha = new Date();
  fecha.setTime(fecha.getTime() + (diasVigencia * 24 * 60 * 60 * 1000));
  const stringFecha = fecha.toUTCString();
  console.log(stringFecha);
  document.cookie = `${nombre}=${valor}; expires=${fecha.toUTCString}; path=${path};`;
}

function leerCookie(nombre){
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");
    if (cookie[0].trim() === nombre) {
      return cookie[1];
    }
  }
  return "";
}

function guardarStorage(nombre, valor) {
  localStorage.setItem(nombre, valor);
}

function leerStorage(nombre) {
  return localStorage.getItem(nombre);
}

window.onload = () => {
  // guardarCookie("nombreUsuario", "choco", 4);
  // console.log(leerCookie("nombreUsuario"));

  guardarStorage("nombreUsuario", "choco");
  console.log(leerStorage("nombreUsuario"));
};
