const btnPlayPause = document.getElementById("btnInicio");
const btnReset = document.getElementById("btnReset");
const Cronometro = document.getElementById("cronometro");


//almacenar tiempo
let [seg, min, hor] = [0, 0, 0]

//almacenar estado cronometro
let estadoCrono = "pausado";
let intervaloTiempo;

function actualizarCrono() {
  seg++;
  if (seg / 60 === 1) {
    seg = 0;
    min++;
  }
  if (min / 60 === 1) {
    min = 0;
    hor++;
  }
  const segundosFormateados = darformato(seg);
  const minutosFormateados = darformato(min);
  const horasFormateados = darformato(hor);
  Cronometro.innerHTML = `${horasFormateados}:${minutosFormateados}:${segundosFormateados}`;

}
function darformato(undTiempo) {
  return undTiempo < 10 ? "0" + undTiempo
    : undTiempo;
}




btnPlayPause.addEventListener("click", () => {
  if (estadoCrono === "pausado") {
    intervaloTiempo = window.setInterval(actualizarCrono, 1000);
    btnPlayPause.innerHTML = `<img src="../img/Pause.png" alt="">`;
    estadoCrono = "corriendo";
  } else if (estadoCrono === "corriendo") {
    window.clearInterval(intervaloTiempo);
    btnPlayPause.innerHTML = `<img src="../img/Play.png" alt="">`;
    estadoCrono = "pausado";
  }
}
);

btnReset.addEventListener("click", () => {
  window.clearInterval(intervaloTiempo);
  seg = 0;
  min = 0;
  hor = 0;
  Cronometro.innerHTML = "00:00:00";
  estadoCrono = "pausado";
  btnPlayPause.innerHTML = `<img src="../img/Play.png" alt="">`;
});

