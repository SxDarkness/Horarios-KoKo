// Datos de ejemplo de horarios de colectivos
const horariosColectivos = {
    "Villa Regina > Neuquen": {
      "Villa Regina (Inicio del recorrido)": ["03:50", "04:35", "05:00", "05:40", "06:20", "07:00", "07:40", "08:20", "09:10", "09:50", "10:30", "11:25", "12:10", "13:00", "13:40", "14:25", "14:55", "15:45", "16:25", "17:00", "17:40", "18:20", "19:00", "20:10", "21:10", "22:30"],
      "Godoy": ["04:00", "04:45", "05:10", "05:50", "06:30", "07:10", "07:50", "08:30", "09:20", "10:00", "10:40", "11:35", "12:20", "13:10", "13:50", "14:35", "15:05", "15:55", "16:35", "17:10", "17:50", "18:30", "19:10", "20:20", "21:20", "22:40"],
      "Huergo": ["04:10", "04:55", "05:20", "06:05", "06:45", "07:25", "08:05", "08:45", "09:35", "10:15", "10:55", "11:50", "12:35", "13:25", "14:05", "14:50", "15:20", "16:20", "16:50", "17:25", "18:45", "19:25", "20:35", "21:35", "22:55"],
      "Mainque": ["04:20", "05:05", "05:30", "06:20", "07:00", "07:40", "08:20", "09:00", "09:50", "10:30", "11:10", "12:05", "12:50", "13:40", "14:20", "15:05", "15:35", "16:25", "17:05", "17:35", "18:20", "19:00", "19:40", "20:50", "21:50", "23:10"],
      "Cervantes": ["04:30", "05:15", "05:40", "06:35", "07:15", "07:55", "08:35", "09:15", "10:05", "10:45", "11:25", "12:20", "13:05", "13:55", "14:35", "15:20", "15:50", "16:40", "17:20", "17:50", "18:35", "19:15", "19:55", "21:05", "22:05", "23:25"],
      "Stefenelli": ["04:50", "05:35", "06:00", "06:55", "07:35", "08:15", "08:55", "09:35", "10:25", "11:05", "11:45", "12:40", "13:25", "14:15", "14:55", "15:40", "16:10", "17:00", "17:40", "18:10", "18:55", "19:35", "20:15", "21:25", "22:25", "23:40"],
      "General Roca (Centro)": ["05:00", "05:50", "06:15", "07:10", "07:50", "08:30", "09:10", "09:50", "10:40", "11:20", "12:00", "12:55", "13:40", "14:30", "15:10", "15:55", "16:25", "17:15", "17:55", "18:25", "19:10", "19:50", "20:30", "21:40", "22:40", "23:55"],
      "General Roca (Terminal)": ["00:05", "05:00", "05:55", "06:20", "06:55", "07:15", "07:55", "08:35", "09:15", "09:55", "10:45", "11:25", "12:05", "13:00", "13:45", "14:35", "15:15", "16:00", "16:25", "17:15", "17:55", "18:25", "19:10", "19:50", "21:25", "22:00", "22:50"],
      "Gomez": ["00:20", "05:15", "06:10", "06:35", "07:10", "07:30", "08:10", "08:50", "09:30", "10:10", "11:00", "11:40", "12:20", "13:15", "14:00", "14:50", "15:30", "16:15", "16:40", "17:30", "18:10", "18:40", "19:25", "20:05", "21:40", "22:15", "23:05"],
      "Guerrico": ["00:30", "05:25", "06:20", "06:45", "07:25", "07:40", "08:20", "09:00", "09:40", "10:20", "11:10", "11:50", "12:30", "13:25", "14:20", "15:00", "15:40", "16:25", "16:50", "17:40", "18:20", "18:50", "19:35", "20:15", "21:50", "22:25", "23:20"],
      "Allen": ["00:45", "04:45", "05:20", "05:40", "06:35", "07:00", "07:40", "07:55", "08:35", "09:15", "09:55", "10:35", "11:25", "12:05", "12:45", "13:40", "14:25", "15:15", "15:55", "16:40", "17:05", "17:55", "18:35", "19:05", "19:50", "20:30", "22:05", "22:40", "23:35"],
      "Fernandez Oro": ["01:00", "04:55", "05:35", "05:55", "06:50", "07:15", "07:55", "08:10", "08:50", "09:30", "10:10", "10:50", "11:40", "12:20", "13:00", "13:55", "14:40", "15:30", "16:10", "16:55", "17:20", "18:10", "18:50", "19:20", "20:05", "20:45", "22:20", "22:55", "23:50"],
      "Cipolletti": ["00:05", "01:15", "05:50", "06:10", "07:05", "07:30", "08:10", "08:25", "09:05", "09:45", "10:25", "11:05", "11:55", "12:35", "13:15", "14:10", "14:55", "15:45", "16:25", "17:10", "17:35", "18:25", "19:05", "19:35", "20:20", "21:00", "22:35", "23:10"],
      "Neuquen (Centro)": ["00:35", "05:30", "06:15", "06:40", "07:35", "08:00", "08:40", "08:55", "09:35", "10:15", "10:55", "11:35", "12:25", "13:05", "13:45", "14:40", "15:25", "16:15", "16:55", "17:40", "18:05", "18:55", "19:35", "20:05", "20:50", "21:30", "23:05", "23:40"],
      "ETON (Final del recorrido)": ["05:40", "06:25", "06:50", "07:45", "08:15", "09:10", "09:50", "10:30", "11:10", "11:50", "12:40", "13:20", "14:00", "14:50", "15:40", "16:30", "17:10", "17:50", "18:20", "19:10", "19:50", "20:20", "21:05", "21:40"]
  },
  "ETON > Villa Regina": {
    "ETON (Inicio del recorrido)": ["05:15", "05:55", "06:40", "07:15", "08:00", "08:35", "09:20", "10:00", "10:40", "11:20", "12:00", "12:50", "13:30", "14:10", "15:00", "15:50", "16:40", "17:20", "18:00", "18:40", "19:20", "20:00", "20:40", "21:30", "22:15"],
      "Neuquen (Centro)": ["05:25", "06:10", "06:55", "07:30", "08:15", "08:50", "09:35", "10:15", "10:55", "11:35", "12:15", "13:05", "13:45", "14:25", "15:15", "16:05", "16:55", "17:35", "18:15", "18:55", "19:35", "20:15", "20:55", "21:45", "22:30"],
      "Cipolletti": ["05:20", "05:45", "05:55", "06:40", "07:25", "08:00", "08:45", "09:20", "10:05", "10:45", "11:25", "12:05", "12:45", "13:35", "14:15", "14:55", "15:45", "16:35", "17:25", "18:05", "18:45", "19:25", "20:05", "20:45", "21:25", "22:15", "23:00"],
      "Fernandez Oro": ["05:30", "06:00", "06:05", "06:55", "07:40", "08:15", "09:00", "09:35", "10:20", "11:00", "11:40", "12:20", "13:00", "13:50", "14:30", "15:10", "16:00", "16:50", "17:40", "18:20", "19:00", "19:40", "20:20", "21:00", "21:40", "22:30", "23:15"],
      "Allen": ["05:45", "06:15", "06:20", "07:10", "07:55", "08:30", "09:15", "09:50", "10:35", "11:15", "11:55", "12:35", "13:15", "14:05", "14:45", "15:25", "16:15", "17:05", "17:55", "18:35", "19:15", "19:55", "20:35", "21:15", "21:55", "22:45", "23:30"],
      "Guerrico": ["06:00", "06:30", "07:25", "08:10", "08:45", "09:30", "10:05", "10:50", "11:30", "12:10", "12:50", "13:30", "14:15", "15:00", "15:40", "16:30", "17:20", "18:10", "18:50", "19:30", "20:10", "20:50", "21:30", "22:10"],
      "Gomez": ["06:10", "06:40", "06:45", "07:35", "08:20", "08:55", "09:40", "10:15", "11:00", "11:45", "12:20", "13:00", "13:40", "14:30", "15:10", "15:50", "16:40", "17:30", "18:20", "19:00", "19:40", "20:20", "21:00", "21:40", "22:20"],
      "General Roca (Centro)": ["06:25", "06:50", "06:55", "07:50", "08:30", "09:10", "09:55", "10:30", "11:15", "12:00", "12:35", "13:15", "13:55", "14:45", "15:25", "16:05", "16:55", "17:45", "18:35", "19:15", "19:55", "20:35", "21:15", "22:35"],
      "General Roca (Terminal)": ["00:05", "05:40", "06:25", "07:10", "07:55", "08:35", "09:15", "10:00", "10:45", "11:20", "12:10", "12:40", "13:25", "14:05", "15:00", "15:35", "16:15", "17:00", "18:05", "18:45", "19:25", "20:05", "20:45", "21:25", "22:05", "22:50"],
      "Stefenelli": ["00:15", "05:50", "06:40", "07:25", "08:10", "08:50", "09:30", "10:15", "11:00", "11:30", "12:25", "12:55", "13:40", "14:20", "15:15", "15:50", "16:30", "17:15", "18:20", "19:00", "19:40", "20:15", "21:00", "21:40", "22:20", "23:05"],
      "Cervantes": ["00:30", "06:05", "07:00", "07:45", "08:30", "09:10", "09:50", "10:35", "11:20", "11:50", "12:45", "13:15", "14:00", "14:40", "15:35", "16:10", "16:50", "17:35", "18:40", "19:20", "20:00", "20:35", "21:20", "22:00", "22:40", "23:25"],
      "Mainque": ["00:40", "06:20", "07:15", "08:00", "08:45", "09:25", "10:05", "10:50", "11:35", "12:05", "13:00", "13:30", "14:15", "14:55", "15:50", "16:25", "17:05", "17:50", "18:55", "19:35", "20:15", "20:50", "21:35", "22:15", "22:55", "23:40"],
      "Huergo": ["00:55", "06:30", "07:30", "08:15", "09:00", "09:40", "10:20", "11:05", "11:50", "12:20", "13:15", "13:45", "14:30", "15:10", "16:05", "16:40", "17:25", "18:05", "19:10", "19:50", "20:30", "21:05", "21:50", "22:30", "23:10", "23:55"],
      "Godoy": ["00:10", "01:10", "06:45", "07:45", "08:30", "09:15", "09:55", "10:35", "11:20", "12:05", "12:35", "13:30", "14:00", "14:45", "15:25", "16:20", "16:55", "17:40", "18:20", "19:25", "20:05", "20:45", "21:20", "22:45", "23:25"],
      "Villa Regina (Final del recorrido)": ["00:20", "01:20", "07:00", "07:55", "08:40", "09:25", "10:05", "10:45", "11:30", "12:15", "12:45", "13:40", "14:10", "14:55", "15:35", "16:30", "17:05", "17:50", "18:30", "19:35", "20:15", "20:55", "21:30", "22:15", "22:55", "23:35"]
  }
};

// Función para obtener la hora actual en formato de 24 horas (hh:mm)
function obtenerHoraActual() {
  const horaActual = new Date();
  const hora = horaActual.getHours().toString().padStart(2, "0");
  const minutos = horaActual.getMinutes().toString().padStart(2, "0");
  return `${hora}:${minutos}`;
}

// Función para mostrar el resultado por 45 segundos
function mostrarResultadoPor45Segundos() {
  const resultadoElement = document.getElementById("resultado1");
  const botonResultado2 = document.getElementById("botonResultado2");
  const resultado2 = document.getElementById("resultado2");

  resultadoElement.style.display = "block";
  botonResultado2.style.display = "block";
  resultado2.style.display = "block";

  setTimeout(function() {
    resultadoElement.style.display = "none";
    botonResultado2.style.display = "none";
    resultado2.style.display = "none";
  }, 45000); // 45000 milisegundos = 45 segundos
}

// Función para consultar el próximo colectivo que pasa por el destino seleccionado después de la hora actual del dispositivo
function consultarProximoColectivo() {
  const destinoSeleccionado = document.getElementById("destinos").value;
  const grupoSeleccionado = document.getElementById("grupos").value;

  if (horariosColectivos.hasOwnProperty(grupoSeleccionado) && horariosColectivos[grupoSeleccionado].hasOwnProperty(destinoSeleccionado)) {
    const horarios = horariosColectivos[grupoSeleccionado][destinoSeleccionado];
    const horaActualTexto = obtenerHoraActual();

    let proximoHorario = "No hay horarios disponibles";
    for (const horario of horarios) {
      if (horario > horaActualTexto) {
        proximoHorario = horario;
        break;
      }
    }
      // Mostrar los resultados
  mostrarResultadoPor45Segundos();

    // Si no hay horarios después de la hora actual, tomamos el primer horario del día siguiente
    if (proximoHorario === "No hay horarios disponibles" && horarios.length > 0) {
      proximoHorario = horarios[0];
    }

    const resultadoElement = document.getElementById("resultado1");
    resultadoElement.innerHTML = `Próximo colectivo que pasa por <strong>${destinoSeleccionado}</strong> es a las: <strong>${proximoHorario}hs</strong>`;

    const botonResultado2 = document.getElementById("botonResultado2");
    const resultado2 = document.getElementById("resultado2");
    botonResultado2.style.display = "block";
    resultado2.style.display = "block";
  } else {
    const resultadoElement = document.getElementById("resultado1");
    resultadoElement.textContent = `Lo sentimos, no hay horarios disponibles para ${destinoSeleccionado} en el grupo ${grupoSeleccionado}.`;
  }
}

// Función para consultar el colectivo perdido
function consultarColectivoPerdido() {
  const destinoSeleccionado = document.getElementById("destinos").value;
  const grupoSeleccionado = document.getElementById("grupos").value;

  if (horariosColectivos.hasOwnProperty(grupoSeleccionado) && horariosColectivos[grupoSeleccionado].hasOwnProperty(destinoSeleccionado)) {
    const horarios = horariosColectivos[grupoSeleccionado][destinoSeleccionado];
    const horaActualTexto = obtenerHoraActual();

    let colectivoPerdido = "No hay horarios disponibles";
    for (let i = horarios.length - 1; i >= 0; i--) {
      if (horarios[i] < horaActualTexto) {
        colectivoPerdido = horarios[i];
        break;
      }
    }
      // Mostrar los resultados
  mostrarResultadoPor45Segundos();

    // Si no hay horarios anteriores a la hora actual, tomamos el último horario del día anterior
    if (colectivoPerdido === "No hay horarios disponibles" && horarios.length > 0) {
      colectivoPerdido = horarios[horarios.length - 1];
    }

    const resultadoElement = document.getElementById("resultado2");
    resultadoElement.innerHTML = `El último colectivo que pasó por <strong>${destinoSeleccionado}</strong> fue a las: <strong>${colectivoPerdido}hs</strong>`;
  } else {
    const resultadoElement = document.getElementById("resultado2");
    resultadoElement.textContent = `Lo sentimos, no hay horarios disponibles para ${destinoSeleccionado} en el grupo ${grupoSeleccionado}.`;
  }
}

    // Arrays para las opciones originales de cada grupo
    const opcionesVillaReginaNeuquen = [
        "Villa Regina (Inicio del recorrido)",
        "Godoy",
        "Huergo",
        "Mainque",
        "Cervantes",
        "Stefenelli",
        "General Roca (Centro)",
        "General Roca (Terminal)",
        "Gomez",
        "Guerrico",
        "Allen",
        "Fernandez Oro",
        "Cipolletti",
        "Neuquen (Centro)",
        "ETON (Final del recorrido)"
    ];

    const opcionesETONVillaRegina = [
        "ETON (Inicio del recorrido)",
        "Neuquen (Centro)",
        "Cipolletti",
        "Fernandez Oro",
        "Allen",
        "Guerrico",
        "Gomez",
        "General Roca (Centro)",
        "General Roca (Terminal)",
        "Stefenelli",
        "Cervantes",
        "Mainque",
        "Huergo",
        "Godoy",
        "Villa Regina (Final del recorrido)"
    ];

    // Función para inicializar las opciones
    function inicializarOpciones() {
        const selectDestinos = document.getElementById("destinos");
        selectDestinos.innerHTML = "";

        let opcionesMostrar = [];

        // Seleccionar las opciones según el grupo al cargar la página
        const grupoSeleccionado = document.getElementById("grupos").value;
        if (grupoSeleccionado === "Villa Regina > Neuquen") {
            opcionesMostrar = opcionesVillaReginaNeuquen;
        } else if (grupoSeleccionado === "ETON > Villa Regina") {
            opcionesMostrar = opcionesETONVillaRegina;
        }

        opcionesMostrar.forEach((opcion) => {
            const optionElement = document.createElement("option");
            optionElement.textContent = opcion;
            selectDestinos.appendChild(optionElement);
        });
    }

    // Función para reiniciar los resultados
    function reiniciarResultados() {
        document.getElementById("resultado1").textContent = "";
        document.getElementById("resultado2").textContent = "";
    }

    // Función para actualizar las opciones del menú "destinos" según el grupo seleccionado
    function actualizarOpciones() {
        // Reiniciar los resultados
        reiniciarResultados();

        // Obtener el grupo seleccionado del menú desplegable
        const grupoSeleccionado = document.getElementById("grupos").value;
        const selectDestinos = document.getElementById("destinos");
        selectDestinos.innerHTML = "";

        let opcionesMostrar = [];

        // Seleccionar las opciones según el grupo al cambiar la selección
        if (grupoSeleccionado === "Villa Regina > Neuquen") {
            opcionesMostrar = opcionesVillaReginaNeuquen;
        } else if (grupoSeleccionado === "ETON > Villa Regina") {
            opcionesMostrar = opcionesETONVillaRegina;
        }

        opcionesMostrar.forEach((opcion) => {
            const optionElement = document.createElement("option");
            optionElement.textContent = opcion;
            selectDestinos.appendChild(optionElement);
        });

        // Reiniciar resultado2 después de 45 segundos
        setTimeout(() => {
            document.getElementById("resultado2").textContent = "";
        }, 45000); // 45000 milisegundos = 45 segundos
    }

    // Inicializar opciones al cargar la página
    window.addEventListener("load", () => {
        inicializarOpciones();
        actualizarOpciones();
    });