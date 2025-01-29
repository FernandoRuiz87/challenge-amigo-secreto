const input = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

let amigos = [];

function agregarAmigo() {
  if (!input.value) {
    alert("Por favor, inserte un nombre.");
    return;
  }
  amigos.push(input.value);
  input.value = "";
  mostrarAmigos();
}

function mostrarAmigos() {
  listaAmigos.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    let nuevoAmigo = document.createElement("li");
    nuevoAmigo.textContent = amigos[i];
    listaAmigos.appendChild(nuevoAmigo);
  }
}

function sortearAmigo() {
  listaAmigos.textContent = "";
  if (amigos.length < 2) {
    alert("Ingrese al menos 2 nombres");
  }
  let i = Math.floor(Math.random() * amigos.length);
  resultado.textContent = `El amigo sorteado es: ${amigos[i]}`;
}
