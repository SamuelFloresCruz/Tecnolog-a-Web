fetch("lugar.json")
  .then(res => res.json())
  .then(data => {
    document.getElementById("contenido").innerHTML = `
      <h2>${data.lugar}</h2>
      <p><strong>Ubicación:</strong> ${data.ubicacion}</p>
      <p>${data.descripcion}</p>
      <p><strong>Actividades:</strong></p>
      <ul>
        ${data.actividades.map(a => `<li>${a}</li>`).join("")}
      </ul>
      <p><strong>Precio entrada:</strong> ${data.precioEntrada} Bs</p>
      <p><strong>Horarios:</strong></p>
      <ul>
        <li>Lunes-Viernes: ${data.horarios["lunes-viernes"]}</li>
        <li>Sábado-Domingo: ${data.horarios["sabado-domingo"]}</li>
      </ul>
    `;
  })
  .catch(err => {
    document.getElementById("contenido").innerHTML = "Error al cargar el JSON";
  });
