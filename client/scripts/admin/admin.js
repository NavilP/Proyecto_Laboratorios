const eventsArr = [
    {
        idReserva: 1,
        startDateTime: '07:00:10',
        endDateTime: '08:29:50',
        descripcion: 'Reservación',
        tipo: 'Personal',
        usuario: 'navil@gmail.com',
        numLab: 1,
        canceled: 0
    },
    {
        idReserva: 2,
        startDateTime: '07:00:10',
        endDateTime: '08:29:50',
        descripcion: 'Reservación',
        tipo: 'Personal',
        usuario: 'navil@gmail.com',
        numLab: 1,
        canceled: 1
    },
    {
        idReserva: 2,
        startDateTime: '07:00:10',
        endDateTime: '08:29:50',
        descripcion: 'Reservación',
        tipo: 'Personal',
        usuario: 'navil@gmail.com',
        numLab: 1,
        canceled: 1
    },
    {
        idReserva: 2,
        startDateTime: '07:00:10',
        endDateTime: '08:29:50',
        descripcion: 'Reservación',
        tipo: 'Personal',
        usuario: 'navil@gmail.com',
        numLab: 1,
        canceled: 1
    },
    {
        idReserva: 2,
        startDateTime: '07:00:10',
        endDateTime: '08:29:50',
        descripcion: 'Reservación',
        tipo: 'Personal',
        usuario: 'navil@gmail.com',
        numLab: 1,
        canceled: 1
    },
    {
        idReserva: 2,
        startDateTime: '07:00:10',
        endDateTime: '08:29:50',
        descripcion: 'Reservación',
        tipo: 'Personal',
        usuario: 'navil@gmail.com',
        numLab: 1,
        canceled: 1
    },
    {
        idReserva: 2,
        startDateTime: '07:00:10',
        endDateTime: '08:29:50',
        descripcion: 'Reservación',
        tipo: 'Personal',
        usuario: 'navil@gmail.com',
        numLab: 1,
        canceled: 1
    },
    {
        idReserva: 2,
        startDateTime: '07:00:10',
        endDateTime: '08:29:50',
        descripcion: 'Reservación',
        tipo: 'Personal',
        usuario: 'navil@gmail.com',
        numLab: 1,
        canceled: 1
    },
    {
        idReserva: 2,
        startDateTime: '07:00:10',
        endDateTime: '08:29:50',
        descripcion: 'Reservación',
        tipo: 'Personal',
        usuario: 'navil@gmail.com',
        numLab: 1,
        canceled: 1
    },
    {
        idReserva: 2,
        startDateTime: '07:00:10',
        endDateTime: '08:29:50',
        descripcion: 'Reservación',
        tipo: 'Personal',
        usuario: 'navil@gmail.com',
        numLab: 1,
        canceled: 1
    },
    {
        idReserva: 2,
        startDateTime: '07:00:10',
        endDateTime: '08:29:50',
        descripcion: 'Reservación',
        tipo: 'Personal',
        usuario: 'navil@gmail.com',
        numLab: 1,
        canceled: 1
    },
    {
        idReserva: 2,
        startDateTime: '07:00:10',
        endDateTime: '08:29:50',
        descripcion: 'Reservación',
        tipo: 'Personal',
        usuario: 'navil@gmail.com',
        numLab: 1,
        canceled: 1
    },
    {
        idReserva: 2,
        startDateTime: '07:00:10',
        endDateTime: '08:29:50',
        descripcion: 'Reservación',
        tipo: 'Personal',
        usuario: 'navil@gmail.com',
        numLab: 1,
        canceled: 1
    },
];

const usuario = [
    {
        correo: 'navil@gmail.com',
        tipo: 'usuario',
        numfaltas: 0
    },
    {
        correo: 'navil@gmail.com',
        tipo: 'usuario',
        numfaltas: 1
    },
];

const horarios = [
    {
        usuario: 'jrojas@ipn.mx',
        startDateTime: '07:00:10',
        endDateTime: '08:29:50',
        day: 'Lunes'
    },
    {
        usuario: 'esau@ipn.mx',
        startDateTime: '07:00:10',
        endDateTime: '08:29:50',
        day: 'Lunes'
    },
    {
        usuario: 'jrojas@ipn.mx',
        startDateTime: '07:00:10',
        endDateTime: '08:29:50',
        day: 'Martes'
    },
    {
        usuario: 'esau@ipn.mx',
        startDateTime: '07:00:10',
        endDateTime: '08:29:50',
        day: 'Miercoles'
    },
    {
        usuario: 'jrojas@ipn.mx',
        startDateTime: '07:00:10',
        endDateTime: '08:29:50',
        day: 'Jueves'
    },
];

// Funcionalidad para recuperar reservaciones
function reservaciones(tableContainer){
    const table = document.createElement('table');

        // Crear filas del head de la tabla
        const tr = document.createElement('tr');
        // Crear columnas del head de la tabla
        const th1 = document.createElement('th');
        th1.scope = 'col';
        th1.textContent = 'ID';

        const th2 = document.createElement('th');
        th2.scope = 'col';
        th2.textContent = 'Usuario';

        const th3 = document.createElement('th');
        th3.scope = 'col';
        th3.textContent = 'Tipo';

        const th4 = document.createElement('th');
        th4.scope = 'col';
        th4.textContent = 'Laboratorio';

        const th5 = document.createElement('th');
        th5.scope = 'col';
        th5.textContent = 'Hora de entrada';

        const th6 = document.createElement('th');
        th6.scope = 'col';
        th6.textContent = 'Hora de salida';

        const th7 = document.createElement('th');
        th7.scope = 'col';
        th7.textContent = 'Descripción';

        const th8 = document.createElement('th');
        th8.scope = 'col';
        th8.textContent = 'Cancelada';
        // Append a la fila
        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        tr.appendChild(th4);
        tr.appendChild(th5);
        tr.appendChild(th6);
        tr.appendChild(th7);
        tr.appendChild(th8);

        // Append al head de la tabla
        const thead = document.createElement('thead');
        thead.appendChild(tr);

        table.appendChild(thead);

        // Append de la tabla al contenedor
        tableContainer.appendChild(table);


        // ***************************************************************** //
        // Insertar las reservaciones
        const tbody = document.createElement('tbody');

        eventsArr.forEach(event => {
            const tr = document.createElement('tr');

            // Recuperar datos
            // ID de la reserva
            const td1 = document.createElement('td');
            td1.classList.add('id-reserva');
            td1.textContent = event.idReserva;
            // Usuario
            const td2 = document.createElement('td');
            td2.classList.add('user');
            td2.textContent = event.usuario;
            // Tipo
            const td3 = document.createElement('td');
            td3.classList.add('type');
            td3.textContent = event.tipo;
            // Laboratorio
            const td4 = document.createElement('td');
            td4.classList.add('lab');
            td4.textContent = event.numLab;
            // Hora de llegada (startDateTime)
            const td5 = document.createElement('td');
            td5.classList.add('start');
            td5.textContent = event.startDateTime;
            // Hora de salida (endDateTime)
            const td6 = document.createElement('td');
            td6.classList.add('end');
            td6.textContent = event.endDateTime;
            // Descripcion
            const td7 = document.createElement('td');
            td7.classList.add('decription');
            td7.textContent = event.descripcion;
            // Cancelada
            const td8 = document.createElement('td');
            td8.classList.add('canceled');
            if (event.canceled === 0) {
                td8.textContent = 'No';
            } else {
                td8.textContent = 'Sí';
            }

            // Append a la fila
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);
            tr.appendChild(td8);

            // Append al body de la tabla
            tbody.appendChild(tr);

            // Append a la tabla
            table.appendChild(tbody);
        });
}

// Funcionalidad para recuperar usuarios
function usuarios(tableContainer){
    const table = document.createElement('table');

        // Crear filas del head de la tabla
        const tr = document.createElement('tr');
        // Crear columnas del head de la tabla
        const th1 = document.createElement('th');
        th1.scope = 'col';
        th1.textContent = 'Correo';

        const th2 = document.createElement('th');
        th2.scope = 'col';
        th2.textContent = 'Tipo';

        const th3 = document.createElement('th');
        th3.scope = 'col';
        th3.textContent = 'Numero de Faltas';

        // Append a la fila
        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);

        // Append al head de la tabla
        const thead = document.createElement('thead');
        thead.appendChild(tr);

        table.appendChild(thead);

        // Append de la tabla al contenedor
        tableContainer.appendChild(table);


        // ***************************************************************** //
        // Insertar los usuarios
        const tbody = document.createElement('tbody');

        usuario.forEach(user => {
            const tr = document.createElement('tr');

            // Recuperar datos
            // Correo
            const td1 = document.createElement('td');
            td1.classList.add('mail');
            td1.textContent = user.correo;
            // Tipo
            const td2 = document.createElement('td');
            td2.classList.add('type-user');
            td2.textContent = user.tipo;
            // Numero de Faltas (numFaltas)
            const td3 = document.createElement('td');
            td3.classList.add('num-faltas');
            td3.textContent = user.numfaltas;

            // Append a la fila
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);

            // Append al body de la tabla
            tbody.appendChild(tr);

            // Append a la tabla
            table.appendChild(tbody);
        });
}

// Funcionalidad para agregar y consultar horarios
function opcionesHorarios(tableContainer){
    // Seccion izquierda
    const form = document.createElement('form');
    const titleForm = document.createElement('h2');
    titleForm.textContent = 'Agregar horario nuevo';

    const input1 = document.createElement('input');
    input1.type = 'text';
    input1.placeholder = 'Usuario de profesor';

    const input2 = document.createElement('input');
    input2.type = 'text';
    input2.placeholder = 'Hora de inicio';

    const input3 = document.createElement('input');
    input3.type = 'text';
    input3.placeholder = 'Hora de fin';

    const input4 = document.createElement('input');
    input4.type = 'text';
    input4.placeholder = 'Decripción de la clase';

    const submitBtn = document.createElement('button');
    submitBtn.classList.add('submit');
    submitBtn.textContent = 'Agregar';

    form.appendChild(titleForm);
    form.appendChild(input1);
    form.appendChild(input2);
    form.appendChild(input3);
    form.appendChild(input4);
    form.appendChild(submitBtn);

    tableContainer.appendChild(form);

    // Seccion derecha
    const section = document.createElement('section');
    section.classList.add('search-schedule');

    const title2 = document.createElement('h2');
    title2.textContent = 'Buscar horario';

    const input_s1 = document.createElement('input');
    input_s1.type = 'text';
    input_s1.placeholder = 'Usuario';

    const input_s2 = document.createElement('input');
    input_s2.type = 'text';
    input_s2.placeholder = 'Fecha';

    const article = document.createElement('article');
    article.classList.add('search-results');
    article.textContent = 'Resultados';

    let arrayDays = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];

    const day1 = document.createElement('p');
    day1.classList.add('day');
    day1.textContent = arrayDays[0];

    const day2 = document.createElement('p');
    day2.classList.add('day');
    day2.textContent = arrayDays[1];

    const day3 = document.createElement('p');
    day3.classList.add('day');
    day3.textContent = arrayDays[2];

    const day4 = document.createElement('p');
    day4.classList.add('day');
    day4.textContent = arrayDays[3];

    const day5 = document.createElement('p');
    day5.classList.add('day');
    day5.textContent = arrayDays[4];

    let dayhtml = [day1, day2, day3, day4, day5];

    for (let i = 0; i < 5; i++) {
        let dayc = arrayDays[i];
        article.appendChild(dayhtml[i]);

        horarios.forEach(horario => {
            if (horario.day === dayc) {
                const p = document.createElement('p');
                p.textContent = 'Clase ';

                const span1 = document.createElement('span');
                span1.textContent = horario.startDateTime;
                p.appendChild(span1);

                p.textContent += '- ';

                const span2 = document.createElement('span');
                span2.textContent = horario.endDateTime;
                p.appendChild(span2);
                article.appendChild(p);
            }
        });
    }

    section.appendChild(title2);
    section.appendChild(input_s1);
    section.appendChild(input_s2);
    section.appendChild(article);

    tableContainer.appendChild(section);
}

// Funcionalidad para recuperar cancelaciones
function cancelaciones(tableContainer){
    const table = document.createElement('table');

        // Crear filas del head de la tabla
        const tr = document.createElement('tr');
        // Crear columnas del head de la tabla
        const th1 = document.createElement('th');
        th1.scope = 'col';
        th1.textContent = 'ID';

        const th2 = document.createElement('th');
        th2.scope = 'col';
        th2.textContent = 'Usuario';

        const th3 = document.createElement('th');
        th3.scope = 'col';
        th3.textContent = 'Tipo';

        const th4 = document.createElement('th');
        th4.scope = 'col';
        th4.textContent = 'Laboratorio';

        const th5 = document.createElement('th');
        th5.scope = 'col';
        th5.textContent = 'Hora de entrada';

        const th6 = document.createElement('th');
        th6.scope = 'col';
        th6.textContent = 'Hora de salida';

        const th7 = document.createElement('th');
        th7.scope = 'col';
        th7.textContent = 'Descripción';

        const th8 = document.createElement('th');
        th8.scope = 'col';
        th8.textContent = 'Cancelada';
        // Append a la fila
        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        tr.appendChild(th4);
        tr.appendChild(th5);
        tr.appendChild(th6);
        tr.appendChild(th7);
        tr.appendChild(th8);

        // Append al head de la tabla
        const thead = document.createElement('thead');
        thead.appendChild(tr);

        table.appendChild(thead);

        // Append de la tabla al contenedor
        tableContainer.appendChild(table);

        // ***************************************************************** //
        // Insertar las reservaciones
        const tbody = document.createElement('tbody');

        eventsArr.forEach(event => {
            if (event.canceled === 1) {
                const tr = document.createElement('tr');

                // Recuperar datos
                // ID de la reserva
                const td1 = document.createElement('td');
                td1.classList.add('id-reserva');
                td1.textContent = event.idReserva;
                // Usuario
                const td2 = document.createElement('td');
                td2.classList.add('user');
                td2.textContent = event.usuario;
                // Tipo
                const td3 = document.createElement('td');
                td3.classList.add('type');
                td3.textContent = event.tipo;
                // Laboratorio
                const td4 = document.createElement('td');
                td4.classList.add('lab');
                td4.textContent = event.numLab;
                // Hora de llegada (startDateTime)
                const td5 = document.createElement('td');
                td5.classList.add('start');
                td5.textContent = event.startDateTime;
                // Hora de salida (endDateTime)
                const td6 = document.createElement('td');
                td6.classList.add('end');
                td6.textContent = event.endDateTime;
                // Descripcion
                const td7 = document.createElement('td');
                td7.classList.add('decription');
                td7.textContent = event.descripcion;
                // Cancelada
                const td8 = document.createElement('td');
                td8.classList.add('canceled');
                if (event.canceled === 0) {
                    td8.textContent = 'No';
                } else {
                    td8.textContent = 'Sí';
                }

                // Append a la fila
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                tr.appendChild(td6);
                tr.appendChild(td7);
                tr.appendChild(td8);

                // Append al body de la tabla
                tbody.appendChild(tr);

                // Append a la tabla
                table.appendChild(tbody);
            }

        });
}

// Funcionalidad para seleccinar opciones
function optionFunc(event) {
    const tableContainer = document.querySelector('.content');
    tableContainer.innerHTML = '';
    const title = document.getElementById('title');
    title.textContent = '';

    const searchDay = document.querySelector('.today');


    if (event.currentTarget.classList.contains('one')) {
        console.log("One");

        searchDay.classList.remove('hide');

        title.textContent = 'Reservaciones';

        reservaciones(tableContainer);
        
    }
    else if (event.currentTarget.classList.contains('two')) {
        console.log("Two");

        if (!searchDay.classList.contains('hide')) searchDay.classList.add('hide');

        title.textContent = 'Usuarios';

        usuarios(tableContainer);
        
    }
    else if (event.currentTarget.classList.contains('three')) {
        console.log("Three");
        if (!searchDay.classList.contains('hide')) searchDay.classList.add('hide');

        title.textContent = 'Horarios';
        
        opcionesHorarios(tableContainer);

    }
    else if (event.currentTarget.classList.contains('four')) {
        console.log("Four");
        if (!searchDay.classList.contains('hide')) searchDay.classList.add('hide');

        searchDay.classList.remove('hide');
        title.textContent = 'Reservaciones';

        cancelaciones(tableContainer);
    }
}

const options = document.querySelectorAll('.options');
options.forEach(option => {
    option.addEventListener('click', optionFunc);
});