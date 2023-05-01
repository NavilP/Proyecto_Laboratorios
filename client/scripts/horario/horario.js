//Recuperar el calendario
const calendar = document.querySelector(".calendar");

// Recuperar el mes y año
const date = document.querySelector(".date");

//Recuperar los dias
const daysContainer = document.querySelector(".days");

//Recuperar los botones de siguiente y anterior
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

//Recuperar los botones para buscar un dia o regresar a "hoy"
const todayBtn = document.querySelector(".today-btn");
const gotoBtn = document.querySelector(".goto-btn");
const dateInput = document.querySelector(".date-input");

//Recuperar el boton para añadir eventos
const addEventBtn = document.querySelector(".new-event");

//Recuperar la seccion para añadir eventos
const addEventContainer = document.querySelector(".add-new-event");

//Recuperar el boton para salir
const closeBtn = document.querySelector(".close");

//Recuperar el nombre del solicitante
const addEventName = document.querySelector(".event-name");

//Recuperar la clase o carrera
const addEventCarreer = document.querySelector(".event-carreer");

//
const addEventTitle = "";

//
const addEventTime = "";

//Recuperar la clase o carrera
const addEventLab = document.querySelector(".lab");

//Recuperar la clase o carrera
const addEventModul = document.querySelector(".modul");

// Recuperar el dia del evento
const eventDay = document.querySelector(".event-day");

// Recuperar la fecha del evento
const eventDate = document.querySelector(".event-date");

// Recuperar la seccion para mostrar los eventos
const eventsContainer = document.querySelector(".events");

// Recuperar el boton para hacer una nueva reservacion
const addEventSubmit = document.querySelector(".add-event-btn");

// Recuperar el input de la nueva reservacion
const addEventInput = document.querySelector(".add-event-input");

const userName = document.querySelector(".user-name");
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
userName.textContent = id;

const inicio = document.querySelector('#user');
inicio.addEventListener("click", () =>{
    console.log("chanza")
    window.location.href = "./user.html?id=" + id;
});

//funciones propias 
function doubledigit(num) {
    if (num < 10) {
        return '0' + num.toString()
    }
    else {
        return num.toString()
    }
}


let modal = document.createElement("div");
modal.id = "myModal";
modal.className = "modal";
let modalC = document.createElement("div");
modalC.className = "modal-content";
let modalContent = document.createElement("span");
modalContent.className = "close";
modalContent.textContent = "x";

let prin = document.createElement("div");
prin.className = "principal";

let mtitle = document.createElement("h1");
mtitle.textContent = "Detalles";

let usu = document.createElement("p");

let horario = document.createElement("p");

let descripcion = document.createElement("p");

let tipo = document.createElement("p");

modalC.appendChild(modalContent);
prin.appendChild(mtitle);
prin.appendChild(usu);
prin.appendChild(horario);
prin.appendChild(descripcion);
prin.appendChild(tipo);
modalC.appendChild(prin);
modal.appendChild(modalC);
document.body.appendChild(modal);
modalContent.addEventListener("click", () => {
    modal.style.display = "none";
});


let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();

const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];

const eventsArr = [
    {
        day: 15,
        month: 04,
        year: 2023,
        events: [
            {
                title: "Reservación",
                time: "10:00 AM - 11:30 AM"
            },
        ],
    },
    {
        day: 20,
        month: 4,
        year: 2023,
        events: [
            {
                title: "Reservación",
                time: "11:00 AM - 01:00 PM"
            },
        ],
    },
];

// Funcion para inicializar el mes y los dias del calendario
function actualCalendar() {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);
    const prevDays = prevLastDay.getDate();
    const lastDate = lastDay.getDate();
    const day = firstDay.getDay();
    const nextDays = 7 - lastDay.getDay() - 1;

    date.innerHTML = months[month] + " " + year;

    //Agregar los dias
    let days = "";

    //Días del mes anterior
    for (let i = day; i > 0; i--) {
        days += `<p class="day prev-date">${prevDays - i + 1}</p>`;
    }

    for (let i = 1; i <= lastDate; i++) {
        //Marcar los eventos
        let event = false;
        eventsArr.forEach((eventObj) => {
            if (
                eventObj.day === i &&
                eventObj.month === month + 1 &&
                eventObj.year === year
            ) {
                event = true;
            }
        });

        if (i === new Date().getDate() && year === new Date().getFullYear() && month === new Date().getMonth()) {
            activeDay = i;
            getActiveDay(i);
            updateEvents(i);

            if (event) {
                days += `<div class="day day-today active event">${i}</div>`;
            } else {
                days += `<div class="day day-today active">${i}</div>`;
            }
        } else {
            if (event) {
                days += `<div class="day event">${i}</div>`;
            } else {
                days += `<div class="day ">${i}</div>`;
            }
        }
    }

    for (let i = 1; i <= nextDays; i++) {
        days += `<p class="day next-date">${i}</p>`;
    }
    daysContainer.innerHTML = days;

    addListener();
}

//Funcion para los meses anteriores
function prevMonth() {
    month--;
    if (month < 0) {
        month = 11;
        year--;
    }
    actualCalendar();
}

//Funcion para los meses siguientes
function nextMonth() {
    month++;
    if (month > 11) {
        month = 0;
        year++;
    }
    actualCalendar();
}

//Agregar los listener a los botones
prev.addEventListener("click", prevMonth);
next.addEventListener("click", nextMonth);


// Inicializar calendario
actualCalendar();

// Eventos (derecha)

//Agregar funcionalidad para abrir y cerrar la ventana
//Abrir la ventana
function open() {
    addEventContainer.classList.toggle("active-n");
}

addEventBtn.addEventListener("click", open);

//Cerrar la ventana
function close() {
    console.log('Cerrado');
    const requeridos = document.querySelector("#errorMensaje");
    const error = document.querySelector("#error-title");
    const errorContainer = document.querySelector("#error");

    addEventName.value = '';
    addEventCarreer.value = '';
    addEventModul.value = 'selectModul';
    addEventLab.value = '1';

    if (!requeridos.classList.contains('hide-message')) {
        requeridos.classList.add('hide-message');
        error.classList.add('hide-message');
        errorContainer.classList.add('hide-message');
    }
    addEventSubmit.classList.remove("send-error");
    addEventContainer.classList.remove("active-n");
}

closeBtn.addEventListener("click", close);

// Mover el dia actual
// No funcionó :'(
function addListener() {
    const days = document.querySelectorAll(".day");
    days.forEach((day) => {
        day.addEventListener("click", (e) => {
            activeDay = Number(e.target.innerHTML);

            //Al hacer clic cambiar el dia y la fecha en el lado derecho
            getActiveDay(e.target.innerHTML);
            updateEvents(Number(e.target.innerHTML));

            days.forEach((day) => {
                day.classList.remove("active");
            });

            //Si se da clic a un día del mes anterior ir al mes anterior
            if (e.target.classList.contains("prev-date")) {
                prevMonth();
                setTimeout(() => {
                    const days = document.querySelectorAll(".day");

                    days.forEach((day) => {
                        if (!day.classList.contains("prev-date") && day.innerHTML === e.target.innerHTML) {
                            day.classList.add("active");
                        }
                    });
                }, 100);
            }
            //Si se da clic a un día del mes siguiente ir al mes iguiente
            else if (e.target.classList.contains("next-date")) {
                nextMonth();
                setTimeout(() => {
                    const days = document.querySelectorAll(".day");

                    days.forEach((day) => {
                        if (!day.classList.contains("next-date") && day.innerHTML === e.target.innerHTML) {
                            day.classList.add("active");
                        }
                    });
                }, 100);
            }
            //Si se da clic a un día del mes actual
            else {
                e.target.classList.add("active");
            }

        });
    });
}

//Agregar los listener de los botones
todayBtn.addEventListener("click", () => {
    today = new Date();
    month = today.getMonth();
    year = today.getFullYear();
    actualCalendar();
});

dateInput.addEventListener("input", (e) => {
    dateInput.value = dateInput.value.replace(/[^0-9/]/g, "");
    if (dateInput.value.length === 2) {
        dateInput.value += "/";
    }
    if (dateInput.value.length > 7) {
        dateInput.value = dateInput.value.slice(0, 7);
    }
    if (e.inputType === "deleteContentBackward") {
        if (dateInput.value.length === 3) {
            dateInput.value = dateInput.value.slice(0, 2);
        }
    }
});

gotoBtn.addEventListener("click", gotoDate);

function gotoDate() {
    const dateList = dateInput.value.split("/");
    if (dateList.length === 2) {
        if (dateList[0] > 0 && dateList[0] < 13 && dateList[1].length === 4) {
            month = dateList[0] - 1;
            year = dateList[1];
            actualCalendar();
            return;
        }
    }
    alert("Introduce una fecha válida");
}

// Cambiar los dias seleccionados en el apartado derecho
function getActiveDay(date) {
    const day = new Date(year, month, date);
    const dayName = day.toString().split(" ")[0];
    if (dayName == "Sun") {
        eventDay.innerHTML = "Domingo";
    }
    if (dayName == "Mon") {
        eventDay.innerHTML = "Lunes";
    }
    if (dayName == "Tue") {
        eventDay.innerHTML = "Martes";
    }
    if (dayName == "Wed") {
        eventDay.innerHTML = "Miércoles";
    }
    if (dayName == "Thu") {
        eventDay.innerHTML = "Jueves";
    }
    if (dayName == "Fri") {
        eventDay.innerHTML = "Viernes";
    }
    if (dayName == "Sat") {
        eventDay.innerHTML = "Sábado";
    }
    eventDate.innerHTML = date + " " + months[month] + " " + year;
}


function showPop(data) {
    const nEvents = document.querySelectorAll(".event-n");
    nEvents.forEach(function (eve, i) {
        eve.addEventListener("click", function () {
            document.querySelector("#myModal").style.display = "block";
            usu.textContent = data[i].usuario;
            horario.textContent = data[i].startTime + "-" + roundTime(data[i].endTime);
            descripcion.textContent = data[i].descripcion;
            tipo.textContent = data[i].tipo;
            console.log(data[i]);
        })
    });
}


function roundTime(time) {
    const [hours, minutes] = time.split(':').map(Number);
    const roundedMinutes = Math.ceil(minutes / 10) * 10;
    const roundedHours = hours + Math.floor((minutes + roundedMinutes) / 60);
    return `${roundedHours.toString().padStart(2, '0')}:${(roundedMinutes % 60).toString().padStart(2, '0')}`;
  }


const selectElement = document.querySelector("#labCal");
selectElement.addEventListener('change', (event) => {
    updateEvents(activeDay);
});


// Mostrar los eventos del dia seleccionado
function updateEvents(date) {
    eventsContainer.innerHTML = '';
    const labSearch = document.querySelector("#labCal").value;
    console.log(labSearch);
    //<section class="events"></section>
    console.log(doubledigit(date) + " " + doubledigit(month + 1) + " " + year);
    const s = year + '-' + doubledigit(month + 1) + '-' + doubledigit(date)
    axios.get(`http://localhost:8080/reserva/${s}`)
        .then(response => {
            const datos = response.data;
            const datosFil = datos.filter(dato => dato.numLab == labSearch);
            if (datosFil.length > 0) {
                if (datosFil.length >= 8) {
                    let p = document.createElement("p");
                    p.className = "mesage";
                    p.textContent = "Reservaciones llenas";
                    eventsContainer.append(p);
                }
                for (var k in datosFil) {
                    let eveN = document.createElement("section");
                    eveN.className = "event-n";
                    let h3 = document.createElement("h3");
                    h3.className = "event-title";
                    h3.textContent = datos[k].descripcion;
                    let p = document.createElement("p");
                    p.className = "event-time";
                    p.textContent = datos[k].startTime + "-" + roundTime(datos[k].endTime);
                    let time = document.createElement("time");
                    p.appendChild(time);
                    eveN.appendChild(h3);
                    eveN.appendChild(p);
                    if (datos[k].usuario == id) {
                        let btn = document.createElement("button");
                        btn.className = "cancel-btn";
                        btn.textContent = "Cancelar reservacion";
                        eveN.appendChild(btn);
                        cancelbtn(btn, datos[k].idreserva);
                    }
                    eventsContainer.append(eveN);
                }
                showPop(datos);
            }
            else {
                let eveNop = document.createElement("section");
                eveNop.className = "no-event";
                let p = document.createElement("p");
                p.textContent = "No hay reservaciones";
                eveNop.appendChild(p);
                eventsContainer.append(eveNop);
            }
            console.log(JSON.stringify(datos));
        })
        .catch(error => {
            console.log(error);
        });
}

function cancelbtn(btn, id) {
    btn.addEventListener("click", (event) => {
        event.stopPropagation();
        console.log("cancelar");
        let text;
        if (confirm("Está seguro de cancelar su reservación?") == true) {
            text = "You pressed OK! " + id;
            axios.delete(`http://localhost:8080/registro/${id}`)
                .then(response => {
                    alert(response.data);
                    updateEvents(activeDay);
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            text = "You canceled!";
        }
        console.log(text);
    })
}


function gettime(modul) {
    const hours = ['', ''];
    switch (modul) {
        case 'mod1':
            hours[0] = '07:00:10';
            hours[1] = '08:29:50';
            break;
        case 'mod2':
            hours[0] = '08:30:10';
            hours[1] = '09:59:50';
            break;
        case 'mod3':
            hours[0] = '10:00:10';
            hours[1] = '11:29:50';
            break;
        case 'mod4':
            hours[0] = '11:30:10';
            hours[1] = '12:59:50';
            break;
        case 'mod5':
            hours[0] = '13:00:10';
            hours[1] = '14:29:50';
            break;
        case 'mod6':
            hours[0] = '14:30:10';
            hours[1] = '15:59:50';
            break;
        case 'mod7':
            hours[0] = '16:00:10';
            hours[1] = '17:29:50';
            break;
        case 'mod8':
            hours[0] = '17:30:10';
            hours[1] = '18:59:50';
            break;
    }
    return hours;
}

// Funcionalidad para crear eventos
addEventSubmit.addEventListener("click", () => {
    const eventName = addEventName.value;
    const eventCarreer = addEventCarreer.value;
    const user = document.querySelector(".user-name").textContent;
    console.log('dia activo' + doubledigit(activeDay) + ' ' + doubledigit(month + 1) + ' ' + year);
    console.log(eventName);
    console.log(eventCarreer);
    console.log(doubledigit(activeDay) + " " + doubledigit(month + 1) + " " + year);
    const lab = document.querySelector(".lab");
    console.log(lab.value);
    const modul = document.querySelector(".modul");
    const times = gettime(modul.value);

    axios.post('http://localhost:8080/addEvento', {
        start: year + '-' + doubledigit(month + 1) + '-' + doubledigit(activeDay) + ' ' + times[0],
        end: year + '-' + doubledigit(month + 1) + '-' + doubledigit(activeDay) + ' ' + times[1],
        descripcion: eventName,
        tipo: eventCarreer,
        usuario: user,
        numLab: lab.value
    })
        .then(response => {
            if (response.status === 200) {
                if (response.data.sqlMessage !== undefined) {
                    alert(response.data.sqlMessage);
                }
                else {
                    alert("Reservación creada con exito")
                }
                updateEvents(activeDay);
            }
        })
        .catch(error => {
            console.log(error);
        });
    //

});





