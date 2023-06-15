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
    axios
        .get("http://localhost:8080/reservas", {})
        .then((response) => {
            const eventsArr = response.data;
            eventsArr.forEach((event) => {

                // Plantilla de Bootstrap
                template = `<h1>Tus reservaciones</h1>
                <article class="reservation">
                    <button type="button" class="reser" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <span class="title">${event.descripcion}</span>
                        <span class="modul">${obtenerFecha(event.startDateTime)}</span>
                        <i class="fa-solid fa-eye fa-xl float-eye" style="color: rgb(109, 50, 79);"></i>
                    </button>
    
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">${event.descripcion}</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    Hora de inicio: <span>${roundTime(obtenerHora(event.startDateTime))}</span><br>
                                    Hora de fin: <span>${roundTime(obtenerHora(event.endDateTime))}</span><br>
                                    Laboratorio: <span>${event.numLab}</span>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn" data-bs-dismiss="modal"
                                        style="color: #fff; background-color: rgb(109, 50, 79);">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>`;
            });
            // Aquí puedes hacer lo que desees con los datos recibidos
        })
        .catch((error) => {
            alert(error);
        });
}  