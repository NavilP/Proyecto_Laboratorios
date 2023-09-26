/*const eventsArr = [
  {
    idReserva: 1,
    startDateTime: "07:00:10",
    endDateTime: "08:29:50",
    descripcion: "Reservación",
    tipo: "Personal",
    usuario: "navil@gmail.com",
    numLab: 1,
    canceled: 0,
  },
  {
    idReserva: 2,
    startDateTime: "07:00:10",
    endDateTime: "08:29:50",
    descripcion: "Reservación",
    tipo: "Personal",
    usuario: "navil@gmail.com",
    numLab: 1,
    canceled: 1,
  },
  {
    idReserva: 2,
    startDateTime: "07:00:10",
    endDateTime: "08:29:50",
    descripcion: "Reservación",
    tipo: "Personal",
    usuario: "navil@gmail.com",
    numLab: 1,
    canceled: 1,
  },
  {
    idReserva: 2,
    startDateTime: "07:00:10",
    endDateTime: "08:29:50",
    descripcion: "Reservación",
    tipo: "Personal",
    usuario: "navil@gmail.com",
    numLab: 1,
    canceled: 1,
  },
  {
    idReserva: 2,
    startDateTime: "07:00:10",
    endDateTime: "08:29:50",
    descripcion: "Reservación",
    tipo: "Personal",
    usuario: "navil@gmail.com",
    numLab: 1,
    canceled: 1,
  },
  {
    idReserva: 2,
    startDateTime: "07:00:10",
    endDateTime: "08:29:50",
    descripcion: "Reservación",
    tipo: "Personal",
    usuario: "navil@gmail.com",
    numLab: 1,
    canceled: 1,
  },
  {
    idReserva: 2,
    startDateTime: "07:00:10",
    endDateTime: "08:29:50",
    descripcion: "Reservación",
    tipo: "Personal",
    usuario: "navil@gmail.com",
    numLab: 1,
    canceled: 1,
  },
  {
    idReserva: 2,
    startDateTime: "07:00:10",
    endDateTime: "08:29:50",
    descripcion: "Reservación",
    tipo: "Personal",
    usuario: "navil@gmail.com",
    numLab: 1,
    canceled: 1,
  },
  {
    idReserva: 2,
    startDateTime: "07:00:10",
    endDateTime: "08:29:50",
    descripcion: "Reservación",
    tipo: "Personal",
    usuario: "navil@gmail.com",
    numLab: 1,
    canceled: 1,
  },
  {
    idReserva: 2,
    startDateTime: "07:00:10",
    endDateTime: "08:29:50",
    descripcion: "Reservación",
    tipo: "Personal",
    usuario: "navil@gmail.com",
    numLab: 1,
    canceled: 1,
  },
  {
    idReserva: 2,
    startDateTime: "07:00:10",
    endDateTime: "08:29:50",
    descripcion: "Reservación",
    tipo: "Personal",
    usuario: "navil@gmail.com",
    numLab: 1,
    canceled: 1,
  },
  {
    idReserva: 2,
    startDateTime: "07:00:10",
    endDateTime: "08:29:50",
    descripcion: "Reservación",
    tipo: "Personal",
    usuario: "navil@gmail.com",
    numLab: 1,
    canceled: 1,
  },
  {
    idReserva: 2,
    startDateTime: "07:00:10",
    endDateTime: "08:29:50",
    descripcion: "Reservación",
    tipo: "Personal",
    usuario: "navil@gmail.com",
    numLab: 1,
    canceled: 1,
  },
];

const usuario = [
  {
    correo: "navil@gmail.com",
    tipo: "usuario",
    numfaltas: 0,
  },
  {
    correo: "navil@gmail.com",
    tipo: "usuario",
    numfaltas: 1,
  },
];

const horarios = [
  {
    usuario: "jrojas@ipn.mx",
    startDateTime: "07:00:10",
    endDateTime: "08:29:50",
    day: "Lunes",
  },
  {
    usuario: "esau@ipn.mx",
    startDateTime: "07:00:10",
    endDateTime: "08:29:50",
    day: "Lunes",
  },
  {
    usuario: "jrojas@ipn.mx",
    startDateTime: "07:00:10",
    endDateTime: "08:29:50",
    day: "Martes",
  },
  {
    usuario: "esau@ipn.mx",
    startDateTime: "07:00:10",
    endDateTime: "08:29:50",
    day: "Miercoles",
  },
  {
    usuario: "jrojas@ipn.mx",
    startDateTime: "07:00:10",
    endDateTime: "08:29:50",
    day: "Jueves",
  },
];*/

function obtenerFecha(s) {
  const fecha = new Date(s);
  const anio = fecha.getFullYear();
  const mes = String(fecha.getMonth() + 1).padStart(2, "0");
  const dia = String(fecha.getDate()).padStart(2, "0");
  return `${anio}-${mes}-${dia}`;
}

function obtenerHora(s) {
  const fecha = new Date(s);
  const horas = String(fecha.getHours()).padStart(2, "0");
  const minutos = String(fecha.getMinutes()).padStart(2, "0");
  const segundos = String(fecha.getSeconds()).padStart(2, "0");
  return `${horas}:${minutos}:${segundos}`;
}

function roundTime(time) {
  const [hours, minutes] = time.split(":").map(Number);
  const roundedMinutes = Math.ceil(minutes / 10) * 10;
  const roundedHours = hours + Math.floor((minutes + roundedMinutes) / 60);
  return `${roundedHours.toString().padStart(2, "0")}:${(roundedMinutes % 60)
    .toString()
    .padStart(2, "0")}`;
}
// Funcionalidad para recuperar reservaciones
function reservaciones(tableContainer) {
  const table = document.createElement("table");
  table.id = "myTable";
  // Crear filas del head de la tabla
  const tr = document.createElement("tr");
  // Crear columnas del head de la tabla

  const th2 = document.createElement("th");
  th2.scope = "col";
  th2.textContent = "Usuario";

  const th3 = document.createElement("th");
  th3.scope = "col";
  th3.textContent = "Tipo";

  const th4 = document.createElement("th");
  th4.scope = "col";
  th4.textContent = "Laboratorio";

  const th9 = document.createElement("th");
  th9.scope = "col";
  th9.textContent = "Fecha";

  const th5 = document.createElement("th");
  th5.scope = "col";
  th5.textContent = "Hora de entrada";

  const th6 = document.createElement("th");
  th6.scope = "col";
  th6.textContent = "Hora de salida";

  const th7 = document.createElement("th");
  th7.scope = "col";
  th7.textContent = "Descripción";

  const th8 = document.createElement("th");
  th8.scope = "col";
  th8.textContent = "Cancelada";
  // Append a la fila
  tr.appendChild(th2);
  tr.appendChild(th3);
  tr.appendChild(th4);
  tr.appendChild(th9);
  tr.appendChild(th5);
  tr.appendChild(th6);
  tr.appendChild(th7);
  tr.appendChild(th8);

  // Append al head de la tabla
  const thead = document.createElement("thead");
  thead.appendChild(tr);

  table.appendChild(thead);

  // Append de la tabla al contenedor
  tableContainer.appendChild(table);

  // ***************************************************************** //
  // Insertar las reservaciones
  const tbody = document.createElement("tbody");

  axios
    .get("http://localhost:8080/reservas", {})
    .then((response) => {
      const eventsArr = response.data;
      eventsArr.forEach((event) => {
        const tr = document.createElement("tr");
        tr.id = event.idreserva;
        tr.setAttribute("data-bs-toggle", "modal");
        tr.setAttribute("data-bs-target", "#exampleModal");
        // Recuperar datos
        // Usuario
        const td2 = document.createElement("td");
        td2.classList.add("user");
        td2.textContent = event.usuario;
        // Tipo
        const td3 = document.createElement("td");
        td3.classList.add("type");
        td3.textContent = event.tipo;
        // Laboratorio
        const td4 = document.createElement("td");
        td4.classList.add("lab");
        td4.textContent = event.numLab;
        //fecha
        const td9 = document.createElement("td");
        td9.classList.add("lab");
        td9.textContent = obtenerFecha(event.startDateTime);
        // Hora de llegada (startDateTime)
        const td5 = document.createElement("td");
        td5.classList.add("start");
        console.log(event.startDateTime);
        td5.textContent = roundTime(obtenerHora(event.startDateTime));
        // Hora de salida (endDateTime)
        const td6 = document.createElement("td");
        td6.classList.add("end");
        td6.textContent = roundTime(obtenerHora(event.endDateTime));
        // Descripcion
        const td7 = document.createElement("td");
        td7.classList.add("decription");
        td7.textContent = event.descripcion;
        // Cancelada
        const td8 = document.createElement("td");
        td8.classList.add("canceled");
        if (event.canceled === 0) {
          td8.textContent = "No";
        } else {
          td8.textContent = "Sí";
        }

        // Append a la fila
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td9);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tr.appendChild(td8);
        createClick(tr);
        // Append al body de la tabla
        tbody.appendChild(tr);

        // Append a la tabla
        table.appendChild(tbody);
      });
      // Aquí puedes hacer lo que desees con los datos recibidos
    })
    .catch((error) => {
      alert(error);
    });
}

// Funcionalidad para recuperar usuarios
function usuarios(tableContainer) {
  const table = document.createElement("table");
  table.id = "myTable";
  // Crear filas del head de la tabla
  const tr = document.createElement("tr");
  // Crear columnas del head de la tabla
  const th1 = document.createElement("th");
  th1.scope = "col";
  th1.textContent = "Correo";

  const th2 = document.createElement("th");
  th2.scope = "col";
  th2.textContent = "Tipo";

  const th3 = document.createElement("th");
  th3.scope = "col";
  th3.textContent = "Numero de Faltas";

  const th4 = document.createElement("th");
  th4.scope = "col";

  // Append a la fila
  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  tr.appendChild(th4);

  // Append al head de la tabla
  const thead = document.createElement("thead");
  thead.appendChild(tr);

  table.appendChild(thead);

  // Append de la tabla al contenedor
  tableContainer.appendChild(table);

  // ***************************************************************** //
  // Insertar los usuarios
  const tbody = document.createElement("tbody");
  axios
    .get("http://localhost:8080/usuario", {})
    .then((response) => {
      const usuario = response.data;
      usuario.forEach((user) => {
        const tr = document.createElement("tr");
        // Recuperar datos
        // Correo
        const td1 = document.createElement("td");
        td1.classList.add("mail");
        td1.textContent = user.correo;
        // Tipo
        const td2 = document.createElement("td");
        td2.classList.add("type-user");
        td2.textContent = user.tipo;
        // Numero de Faltas (numFaltas)
        const td3 = document.createElement("td");
        td3.classList.add("num-faltas");
        td3.textContent = user.numFaltas;

        const td4 = document.createElement("td");
        td4.classList.add("num-faltas");
        const btnEdit = document.createElement("button");
        btnEdit.textContent = "✎";
        td4.appendChild(btnEdit);
        btnEdit.addEventListener("click", () => {
          id = user.correo;
          const number = document.createElement("input");
          number.classList.add("number");
          number.value = td3.textContent;
          td3.textContent = "";
          number.setAttribute("type", "number");
          number.setAttribute("min", "0");
          number.setAttribute("max", "100");
          td3.appendChild(number);
          btnEdit.textContent = "Save";
          btnEdit.addEventListener("click", function (e) {
            const newFaltas = number.value.toString();
            axios
              .put(`http://localhost:8080/edit/${id}`, { numFaltas: newFaltas })
              .then((response) => {
                alert(response.data);
                btnEdit.textContent = "✎";
                number.style.display = "none";
                location.reload();
              })
              .catch((error) => {
                alert(error);
                // Manejar el error de alguna manera
              });
          });
        });

        // Append a la fila
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        // Append al body de la tabla
        tbody.appendChild(tr);

        // Append a la tabla
        table.appendChild(tbody);
      });
    })

    .catch((error) => {
      alert(error);
    });
  searchTable();
}

function createClick(element) {
  element.addEventListener("click", function (e) {
    console.log(element.id);
    const id = element.id;
    var usuarioInput = document.querySelector("#usuario");
    var tipoInput = document.querySelector("#tipo");
    var laboratorioInput = document.querySelector("#laboratorio");
    var fechaInput = document.querySelector("#fecha");
    var horaEntradaInput = document.querySelector("#horaEntrada");
    var horaSalidaInput = document.querySelector("#horaSalida");
    var descripcionInput = document.querySelector("#descripcion");

    // Seleccionar el campo "Cancelada" (select) por su ID
    var canceladaSelect = document.querySelector("#cancelada");

    axios
      .get(`http://localhost:8080/reservas/${id}`)
      .then((response) => {
        const reserva = response.data[0];
        console.log(reserva);
        usuarioInput.value = reserva.usuario;
        tipoInput.value = reserva.tipo;
        laboratorioInput.value = reserva.numLab;
        fechaInput.value = obtenerFecha(reserva.startDateTime);
        horaEntradaInput.value = roundTime(obtenerHora(reserva.startDateTime));
        horaSalidaInput.value = roundTime(obtenerHora(reserva.endDateTime));
        descripcionInput.value = reserva.descripcion;
        canceladaSelect.value = reserva.canceled;
      })
      .catch((error) => {
        alert(error);
      });

    const form = document.getElementById("edits");
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

      const tipo = form.elements.tipo.value;
      const descripcion = form.elements.descripcion.value;
      const cancelada = form.elements.cancelada.value;

      // Ejemplo: muestra los valores en la consola
      console.log("Tipo:", tipo);
      console.log("Descripción:", descripcion);
      console.log("Cancelada:", cancelada);

      const updatedReserva = {
        tipo: tipo,
        descripcion: descripcion,
        cancelada: cancelada,
      };
      axios
        .put(`http://localhost:8080/Editreservas/${id}`, updatedReserva)
        .then((response) => {
          alert(response.data);
          location.reload(); // Muestra la respuesta del servidor en la consola
        })
        .catch((error) => {
          alert(error);
        });
      // Limpia los campos del formulario si es necesario
      form.reset();
    });
  });
}

// Funcionalidad para agregar y consultar horarios
function opcionesHorarios(tableContainer) {
  const form = document.createElement("form");
  form.id = "new-reservation";
  const titleForm = document.createElement("h2");
  titleForm.textContent = "Agregar horario nuevo";

  const input1 = document.createElement("input");
  input1.setAttribute("list", "usuarios");
  input1.id = "opciones";
  input1.placeholder = "Correo de usuario";
  const input1_1 = document.createElement("datalist");
  input1_1.id = "usuarios";
  axios
    .get("http://localhost:8080/usuarioSelect")
    .then((response) => {
      const opciones = response.data;
      opciones.forEach((opcion) => {
        const option = document.createElement("option");
        option.text = opcion.correo;
        option.value = opcion.correo;
        input1_1.appendChild(option);
      });
    })
    .catch((error) => {
      alert(error);
    });

  const inputDate = document.createElement("input");
  inputDate.type = "date";
  inputDate.placeholder = "Fecha";
  inputDate.id = "inputDate";
  const input2 = document.createElement("input");
  input2.type = "text";
  input2.id = "Horainicio";
  input2.placeholder = "Hora de inicio";
  input2.setAttribute("onkeyup", "formatearHora(this)");
  input2.setAttribute("data-bs-toggle", "tooltip");
  input2.setAttribute("data-bs-placement", "bottom");
  input2.setAttribute("title", "Escribela en formato de 24 horas");

  const input3 = document.createElement("input");
  input3.type = "text";
  input3.id = "Horafin";
  input3.placeholder = "Hora de fin";
  input3.setAttribute("onkeyup", "formatearHora(this)");
  input3.setAttribute("data-bs-toggle", "tooltip");
  input3.setAttribute("data-bs-placement", "bottom");
  input3.setAttribute("title", "Escribela en formato de 24 horas");

  const input4 = document.createElement("input");
  input4.type = "text";
  input4.id = "description";
  input4.placeholder = "Decripción de la clase";

  const selectLab = document.createElement("select");
  selectLab.id = "numLab";
  const option1 = document.createElement("option");
  option1.value = "1";
  option1.text = "Lab 1";
  selectLab.appendChild(option1);

  const option2 = document.createElement("option");
  option2.value = "2";
  option2.text = "Lab 2";
  selectLab.appendChild(option2);

  const submitBtn = document.createElement("button");
  submitBtn.id = "submitForm2";
  submitBtn.classList.add("submit");
  submitBtn.textContent = "Agregar";

  form.appendChild(titleForm);
  form.appendChild(input1);
  form.appendChild(input1_1);
  form.appendChild(inputDate);
  form.appendChild(input2);
  form.appendChild(input3);
  form.appendChild(input4);
  form.appendChild(selectLab);
  form.appendChild(submitBtn);

  tableContainer.appendChild(form);

  document
    .getElementById("new-reservation")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

      // Obtén los valores de los campos del formulario
      var usuario = document.getElementById("opciones").value;
      var fecha = document.getElementById("inputDate").value;

      var horaInicio = document.getElementById("Horainicio").value;
      var horaFin = document.getElementById("Horafin").value;
      var descripcion = document.getElementById("description").value;
      var numLab = document.getElementById("numLab").value;
      console.log(formatbd(fecha, horaInicio));
      console.log(formatbd(fecha, horaFin));
      console.log(fecha);
      // Crea un objeto con los datos del formulario
      var formData = {
        start: horaInicio,
        end: horaFin,
        descripcion: descripcion,
        tipo: "clase",
        usuario: usuario,
        numLab: numLab,
      };

      // Realiza la petición al servidor utilizando Axios
      axios
        .post("http://localhost:8080/addEvento", formData)
        .then(function (response) {
          alert("Se guardó con exito");
          document.getElementById("new-reservation").reset();
          // La petición fue exitosa, puedes realizar acciones adicionales aquí si es necesario
          console.log(response.data);
        })
        .catch(function (error) {
          // Ocurrió un error durante la petición, maneja el error aquí
          alert(error);
        });
    });

  // Seccion derecha
  const section = document.createElement("section");
  section.classList.add("search-schedule");

  /*const title2 = document.createElement("h2");
  title2.textContent = "Horario Semanal";

  const input_s1 = document.createElement("input");
  input_s1.setAttribute("list", "usuarios");
  input_s1.id = "opciones";
  input_s1.placeholder = "Correo de usuario";
  const input_s1_1 = document.createElement("datalist");
  input_s1_1.id = "usuarios";
  axios
    .get("http://localhost:8080/usuarioSelect")
    .then((response) => {
      const opciones = response.data;
      opciones.forEach((opcion) => {
        const option = document.createElement("option");
        option.text = opcion.correo;
        option.value = opcion.correo;
        input_s1_1.appendChild(option);
      });
    })
    .catch((error) => {
      alert(error);
    });

  const input_s2 = document.createElement("input");
  input_s2.type = "text";
  input_s2.placeholder = "Fecha";*/

  const article = document.createElement("article");
  article.style.marginTop = "0";
  article.classList.add("search-results");

  const title2 = document.createElement("h1");
  title2.textContent = "Horario Semanal";
  article.appendChild(title2);

  let arrayDays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

  const day1 = document.createElement("p");
  day1.classList.add("day");
  day1.textContent = arrayDays[0];

  const day2 = document.createElement("p");
  day2.classList.add("day");
  day2.textContent = arrayDays[1];

  const day3 = document.createElement("p");
  day3.classList.add("day");
  day3.textContent = arrayDays[2];

  const day4 = document.createElement("p");
  day4.classList.add("day");
  day4.textContent = arrayDays[3];

  const day5 = document.createElement("p");
  day5.classList.add("day");
  day5.textContent = arrayDays[4];

  let dayhtml = [day1, day2, day3, day4, day5];

  for (let i = 0; i < 5; i++) {
    let dayc = arrayDays[i];
    article.appendChild(dayhtml[i]);
    axios
      .get("http://localhost:8080/reservasDia")
      .then((response) => {
        const horarios = response.data;
        horarios.forEach((horario) => {
          if (horario.day === dayc) {
            const p = document.createElement("div");
            p.style.marginTop = "1rem";

            const strong = document.createElement("strong");
            strong.textContent = horario.descripcion;
            p.appendChild(strong);

            const br = document.createElement("br");
            p.appendChild(br);

            const span3 = document.createElement("span");
            span3.textContent = horario.usuario;
            p.appendChild(span3);

            const br3 = document.createElement("br");
            p.appendChild(br3);

            const span1 = document.createElement("span");
            span1.textContent = horario.startTime;
            p.appendChild(span1);

            const guion = document.createTextNode(" - ");
            p.appendChild(guion);

            const span2 = document.createElement("span");
            span2.textContent = horario.endTime;
            p.appendChild(span2);

            article.appendChild(p);
          }
        });
      })
      .catch((error) => {
        alert(error);
      });
  }

  //section.appendChild(title2);
  /*section.appendChild(input_s1);
  section.appendChild(input_s2);*/
  section.appendChild(article);

  tableContainer.appendChild(section);
}

// Funcionalidad para recuperar cancelaciones
function cancelaciones(tableContainer) {
  const table = document.createElement("table");
  table.id = "myTable";
  // Crear filas del head de la tabla
  const tr = document.createElement("tr");
  // Crear columnas del head de la tabla

  const th2 = document.createElement("th");
  th2.scope = "col";
  th2.textContent = "Usuario";

  const th3 = document.createElement("th");
  th3.scope = "col";
  th3.textContent = "Tipo";

  const th4 = document.createElement("th");
  th4.scope = "col";
  th4.textContent = "Laboratorio";

  const th9 = document.createElement("th");
  th9.scope = "col";
  th9.textContent = "Fecha";

  const th5 = document.createElement("th");
  th5.scope = "col";
  th5.textContent = "Hora de entrada";

  const th6 = document.createElement("th");
  th6.scope = "col";
  th6.textContent = "Hora de salida";

  const th7 = document.createElement("th");
  th7.scope = "col";
  th7.textContent = "Descripción";

  const th8 = document.createElement("th");
  th8.scope = "col";
  th8.textContent = "Cancelada";
  // Append a la fila
  tr.appendChild(th2);
  tr.appendChild(th3);
  tr.appendChild(th4);
  tr.appendChild(th9);
  tr.appendChild(th5);
  tr.appendChild(th6);
  tr.appendChild(th7);
  tr.appendChild(th8);

  // Append al head de la tabla
  const thead = document.createElement("thead");
  thead.appendChild(tr);

  table.appendChild(thead);

  // Append de la tabla al contenedor
  tableContainer.appendChild(table);

  // ***************************************************************** //
  // Insertar las reservaciones
  const tbody = document.createElement("tbody");

  axios
    .get("http://localhost:8080/reservas", {})
    .then((response) => {
      const eventsArr = response.data;
      eventsArr.forEach((event) => {
        if (event.canceled === 1) {
          const tr = document.createElement("tr");
          tr.id = event.idreserva;
          tr.setAttribute("data-bs-toggle", "modal");
          tr.setAttribute("data-bs-target", "#exampleModal");
          // Recuperar datos
          // Usuario
          const td2 = document.createElement("td");
          td2.classList.add("user");
          td2.textContent = event.usuario;
          // Tipo
          const td3 = document.createElement("td");
          td3.classList.add("type");
          td3.textContent = event.tipo;
          // Laboratorio
          const td4 = document.createElement("td");
          td4.classList.add("lab");
          td4.textContent = event.numLab;
          //fecha
          const td9 = document.createElement("td");
          td9.classList.add("lab");
          td9.textContent = obtenerFecha(event.startDateTime);
          // Hora de llegada (startDateTime)
          const td5 = document.createElement("td");
          td5.classList.add("start");
          console.log(event.startDateTime);
          td5.textContent = roundTime(obtenerHora(event.startDateTime));
          // Hora de salida (endDateTime)
          const td6 = document.createElement("td");
          td6.classList.add("end");
          td6.textContent = roundTime(obtenerHora(event.endDateTime));
          // Descripcion
          const td7 = document.createElement("td");
          td7.classList.add("decription");
          td7.textContent = event.descripcion;
          // Cancelada
          const td8 = document.createElement("td");
          td8.classList.add("canceled");
          if (event.canceled === 0) {
            td8.textContent = "No";
          } else {
            td8.textContent = "Sí";
          }

          // Append a la fila
          tr.appendChild(td2);
          tr.appendChild(td3);
          tr.appendChild(td4);
          tr.appendChild(td9);
          tr.appendChild(td5);
          tr.appendChild(td6);
          tr.appendChild(td7);
          tr.appendChild(td8);
          createClick(tr);
          // Append al body de la tabla
          tbody.appendChild(tr);

          // Append a la tabla
          table.appendChild(tbody);
        }
      });
      // Aquí puedes hacer lo que desees con los datos recibidos
    })
    .catch((error) => {
      alert(error);
    });
}

// Funcionalidad para seleccinar opciones
function optionFunc(event) {
  const tableContainer = document.querySelector(".content");
  tableContainer.innerHTML = "";
  const title = document.getElementById("title");
  title.textContent = "";

  const searchDay = document.querySelector(".today");

  if (event.currentTarget.classList.contains("one")) {
    console.log("One");

    searchDay.classList.remove("hide");

    title.textContent = "Reservaciones";
    btnNewUser.classList.add('active');
    reservaciones(tableContainer);
  } else if (event.currentTarget.classList.contains("two")) {
    console.log("Two");

    //if (!searchDay.classList.contains("hide")) searchDay.classList.add("hide");

    title.textContent = "Usuarios";
    btnNewUser.classList.remove('active');
    usuarios(tableContainer);
  } else if (event.currentTarget.classList.contains("three")) {
    console.log("Three");
    if (!searchDay.classList.contains("hide")) searchDay.classList.add("hide");
    btnNewUser.classList.add('active');
    title.textContent = "Horarios";

    opcionesHorarios(tableContainer);
  } else if (event.currentTarget.classList.contains("four")) {
    console.log("Four");
    if (!searchDay.classList.contains("hide")) searchDay.classList.add("hide");
    btnNewUser.classList.add('active');
    searchDay.classList.remove("hide");
    title.textContent = "Cancelaciones";

    cancelaciones(tableContainer);
  }
}

const options = document.querySelectorAll(".options");
options.forEach((option) => {
  option.addEventListener("click", optionFunc);
});

document.addEventListener("DOMContentLoaded", function () {
  const button = options[0]; // Reemplaza "myButton" con el ID de tu botón
  button.click(); // Simula el clic en el botón automáticamente
  searchTable();
});

function searchTable() {
  // Obtener el valor de búsqueda
  var input = document.getElementById("searchInput");
  var filter = input.value.toUpperCase();

  // Obtener el tbody de la tabla
  var tbody = document
    .getElementById("myTable")
    .getElementsByTagName("tbody")[0];
  var rows = tbody.getElementsByTagName("tr");

  // Recorrer todas las filas del tbody y ocultar aquellas que no coincidan con la búsqueda
  for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].getElementsByTagName("td");
    var found = false;
    for (var j = 0; j < cells.length; j++) {
      var cell = cells[j];
      if (cell) {
        if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
          found = true;
          break;
        }
      }
    }
    if (found) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}

// Agregar un controlador de eventos al botón de envío

function formatearHora(input) {
  // Eliminar cualquier carácter que no sea un número
  input.value = input.value.replace(/\D/g, "");

  // Asegurarse de que el valor tenga una longitud máxima de 4 caracteres
  if (input.value.length > 4) {
    input.value = input.value.slice(0, 4);
  }

  // Formatear el valor como una hora con dos puntos
  if (input.value.length >= 3) {
    var horaFormateada = input.value.slice(0, 2) + ":" + input.value.slice(2);
    input.value = horaFormateada;
  }
}

function formatbd(fecha, time) {
  var fechaHoraInicio = new Date(fecha + "T" + time);

  // Obtiene los componentes de la fecha y hora
  var year = fechaHoraInicio.getFullYear();
  var month = ("0" + (fechaHoraInicio.getMonth() + 1)).slice(-2);
  var day = ("0" + fechaHoraInicio.getDate()).slice(-2);
  var hours = ("0" + fechaHoraInicio.getHours()).slice(-2);
  var minutes = ("0" + fechaHoraInicio.getMinutes()).slice(-2);
  var seconds = ("0" + fechaHoraInicio.getSeconds()).slice(-2);

  // Formatea la fecha y la hora en el formato deseado
  var formatoDeseado =
    year +
    "-" +
    month +
    "-" +
    day +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;
  return formatoDeseado;
}

// Funcionalidad para agregar un nuevo usuario
const btnNewUser = document.querySelector('.btnNewUser');
btnNewUser.addEventListener('click', ()=>{
  btnNewUser.classList.add('active');
  const panelNewUser = document.querySelector('.panel');
  panelNewUser.classList.add('active');


  // Funcionalidad para agregar un nuevo usuario a la BD
  const addNewUser = document.querySelector('.addNewUser');
  addNewUser.addEventListener('click', ()=>{
    // Se agrega el usuario
    const newUser = document.querySelector('.userNewUser').value;
    const passNewUser = document.querySelector('.passNewUser').value;
    console.log(newUser, passNewUser);
    
    axios
        .post("http://localhost:8080/nuevousuario", {username: newUser, password: passNewUser})
        .then(function (response) {
          alert("Se guardó con exito");
          const panelNewUser = document.querySelector('.panel');
          const newUserInput = document.querySelector('.userNewUser');
          newUserInput.value = ""; // Establecer el valor del campo de entrada a una cadena vacía
          const passNewUserInput = document.querySelector('.passNewUser');
          passNewUserInput.value = ""; // Establecer el valor del campo de entrada a una cadena vacía
        })
        .catch(function (error) {
          alert(error);
        });

    btnNewUser.classList.remove('active');
    const panelNewUser = document.querySelector('.panel');
    panelNewUser.classList.remove('active');
  });
});

// Funcionalidad para cerrar ventana de nuevo usuario
const btnCloseNewUser = document.querySelector('.closeNewUser');
btnCloseNewUser.addEventListener('click', () => {
  btnNewUser.classList.remove('active');
  const panelNewUser = document.querySelector('.panel');
  const newUserInput = document.querySelector('.userNewUser');
  newUserInput.value = ""; // Establecer el valor del campo de entrada a una cadena vacía
  const passNewUserInput = document.querySelector('.passNewUser');
  passNewUserInput.value = ""; // Establecer el valor del campo de entrada a una cadena vacía
  panelNewUser.classList.remove('active');
});