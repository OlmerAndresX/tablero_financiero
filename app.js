// Datos simulados de portafolio de inversión
const portafolio = [
  { activo: "Acciones USA", valor: 4500, rendimiento: "+12.4%" },
  { activo: "Renta Fija", valor: 2800, rendimiento: "+5.1%" },
  { activo: "Efectivo", valor: 1200, rendimiento: "0.0%" }
];

const contenedorResumen = document.getElementById("resumen");

// Limpiar mensaje de carga
contenedorResumen.innerHTML = "";

// Renderizar métricas en pantalla
portafolio.forEach(item => {
  const div = document.createElement("div");
  div.style.marginBottom = "10px";
  div.innerHTML = `<strong>${item.activo}:</strong> $${item.valor} USD <span style="color: #4ade80;">(${item.rendimiento})</span>`;
  contenedorResumen.appendChild(div);
});
