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
        {title: "Reservación",
        time: "10:00 AM - 11:30 AM"},
    ],
   },
   {
    day: 20,
    month: 4,
    year: 2023,
    events: [
        {title: "Reservación",
        time: "11:00 AM - 01:00 PM"},
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
    for (let i = day; i > 0; i--){
        days += `<p class="day prev-date">${prevDays -i + 1}</p>`;
    }
    
    for(let i = 1; i <= lastDate; i++){
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

    for(let i = 1; i <= nextDays; i++){
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
addEventBtn.addEventListener("click", () => {
    addEventContainer.classList.toggle("active-n");
});

closeBtn.addEventListener("click", () => {
    addEventContainer.classList.remove("active-n");
});

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
            if(e.target.classList.contains("prev-date")){
                prevMonth();
                setTimeout(() =>{
                    const days = document.querySelectorAll(".day");

                    days.forEach((day) =>{
                        if(!day.classList.contains("prev-date") && day.innerHTML === e.target.innerHTML){
                            day.classList.add("active");
                        }
                    });
                }, 100);
            }
            //Si se da clic a un día del mes siguiente ir al mes iguiente
            else if(e.target.classList.contains("next-date")){
                nextMonth();
                setTimeout(() =>{
                    const days = document.querySelectorAll(".day");

                    days.forEach((day) =>{
                        if(!day.classList.contains("next-date") && day.innerHTML === e.target.innerHTML){
                            day.classList.add("active");
                        }
                    });
                }, 100);
            }
            //Si se da clic a un día del mes actual
            else{
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
    if(dateList.length === 2){
        if(dateList[0] > 0 && dateList[0] < 13 && dateList[1].length === 4){
            month = dateList[0] - 1;
            year = dateList[1];
            actualCalendar();
            return;
        }
    }
    alert("Introduce una fecha válida");
}

// Cambiar los dias seleccionados en el apartado derecho
function getActiveDay(date){
    const day = new Date(year,month,date);
    const dayName = day.toString().split(" ")[0];
    if (dayName == "Sun"){
        eventDay.innerHTML = "Domingo";
    }
    if (dayName == "Mon"){
        eventDay.innerHTML = "Lunes";
    }
    if (dayName == "Tue"){
        eventDay.innerHTML = "Martes";
    }
    if (dayName == "Wed"){
        eventDay.innerHTML = "Miércoles";
    }
    if (dayName == "Thu"){
        eventDay.innerHTML = "Jueves";
    }
    if (dayName == "Fri"){
        eventDay.innerHTML = "Viernes";
    }
    if (dayName == "Sat"){
        eventDay.innerHTML = "Sábado";
    }
    eventDate.innerHTML = date + " " + months[month] + " " + year;
}

// Mostrar los eventos del dia seleccionado
function updateEvents(date){
    let events = "";
    eventsArr.forEach((event) =>{
        if(date === event.day && month + 1 === event.month && year === event.year){
            event.events.forEach((event) => {
                events += `
                <section class="event-n">
                    <h3 class="event-title">${event.title}</h3>
                    <p class="event-time"><time>${event.time}</time></p>
                    <button class="cancel-btn">Cancelar Reservacion</button>
                </section>
                `;
            });
        }
    });

    if(events === ""){
        events = `
        <section class="no-event">
            <p>No hay reservaciones</p>
        </section>
        `;
    }
    console.log(events);
    eventsContainer.innerHTML = events;
}

// Funcionalidad para crear eventos
addEventSubmit.addEventListener("click", () =>{
    const eventName = addEventName.value;
    const eventCarreer = addEventCarreer.value;
    
    if(eventName === "" || eventCarreer === ""){
        let requeridos = document.querySelector("#error");
        requeridos.classList.remove('hide-message');
        addEventContainer.classList.add('error-add-new-event');
        addEventSubmit.classList.add('send-error');
        addEventInput.classList.add('error-add-event-input');
        requeridos.classList.add('error-message');
        let mensajeError = document.querySelector("#errorMensaje");
        mensajeError.textContent = "Debes proporcionar todos los campos";   
        return;
    }

    const newEvent = {
        title: "Reservación",
        name: eventName,
        carreer: eventCarreer,
        time: "----",
    };

    let eventAdded = false;
    if(eventsArr.length > 0){
        eventsArr.forEach((item) => {
            if(item.day === activeDay && item.month === month + 1 && item.year === year){
                item.events.push(newEvent);
                eventAdded = true;
            }
        });
    }

    if(!eventAdded){
        eventsArr.push({
            day: activeDay,
            month: month + 1,
            year: year,
            events: [newEvent],
        });
    }

    addEventContainer.classList.remove("active");
    addEventTitle.value = "";
    addEventName.value = "";
    addEventCarreer = "";
    addEventTime = "";

    updateEvents(activeDay);

    const activeDayElem = document.querySelector(".day .active");
    if(!activeDayElem.classList.contains("event")){
        activeDayElem.classList.add("event");
    }
});

