/* Problema #3 */
const btn = document.querySelector("#btn");
const info = document.querySelector("#info");

btn.addEventListener("click", () => {
  const valorUno = document.querySelector("#valorUno").value;
  const valorDos = document.querySelector("#valorDos").value;
  const valorTres = document.querySelector("#valorTres").value;

  /* Validar contraseña 1 (911) y contraseña 2 (714) */
  if (valorUno == 9 && valorDos == 1 && valorTres == 1) {
    info.innerHTML = "El password #1 es correcto.";
  } else if (valorUno == 7 && valorDos == 1 && valorTres == 4) {
    info.innerHTML = "El password #2 es correcto.";
  } else {
    info.innerHTML = "Password incorrecto!";
  }
});
