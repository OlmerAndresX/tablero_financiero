// Datos simulados de portafolio
const portafolio = [
  { activo: "Acciones USA", valor: 4500, rendimiento: "+12.4%" },
  { activo: "Renta Fija", valor: 2800, rendimiento: "+5.1%" },
  { activo: "Efectivo", valor: 1200, rendimiento: "0.0%" }
];

// 1. Mostrar resumen en texto en el panel "Métricas Principales"
const contenedorResumen = document.getElementById("resumen");
// Verificación de seguridad por si el elemento no existe
if (contenedorResumen) {
  portafolio.forEach(item => {
    const div = document.createElement("div");
    div.style.marginBottom = "8px";
    div.innerHTML = `<strong>${item.activo}:</strong> $${item.valor} USD <span style="color: #4ade80;">(${item.rendimiento})</span>`;
    contenedorResumen.appendChild(div);
  });
}

// 2. Configurar y renderizar gráfico en el panel "Distribución de Activos"
const canvas = document.getElementById('graficoPortafolio');
if (canvas) {
  const ctx = canvas.getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: portafolio.map(item => item.activo),
      datasets: [{
        data: portafolio.map(item => item.valor),
        backgroundColor: ['#38bdf8', '#818cf8', '#f43f5e'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false, // Ayuda a que no se deforme
      plugins: {
        legend: {
          labels: { color: '#f8fafc' }
        }
      }
    }
  });
}