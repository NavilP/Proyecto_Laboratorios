const btn = document.querySelectorAll('.card-r');
btn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        const title = btn.querySelector('button').textContent;
        console.log(title);
        
        let template = '';
        
        const descriptionContainer = document.querySelector('.modal-body');
        const titleModal = document.querySelector('.modal-title');

        titleModal.textContent = title;

        if(title === 'Para los usuarios'){
            template = `I. Todo usuario es responsable del equipo, software, mobiliario y recursos que utilice, por lo que debe
            operarlos de manera adecuada y reportar al responsable del laboratorio cuando un equipo este dañado.<br>
            II. Sólo se permitirá la entrada a estudiantes que se hayan registrado en la bitácora del área
            correspondiente, excepto en las horas asignadas para clases, en las cuales sólo los alumnos de la misma
            podrán permanecer en el laboratorio.<br>
            III. En ningún caso, los alumnos podrán modificar o mover equipos de su lugar sin previa autorización.
            No podrán borrar o cargar software, así como conectar dispositivos o equipo ajeno sin autorización del
            personal responsable.<br>
            IV. Todo usuario podrá solicitar en préstamo el equipo y/o material que se encuentre a disposición,
            siempre y cuando proporcione su credencial de la UPIIT. El préstamo será solamente durante la sesión
            de trabajo y no podrá ser transferible.<br>
            V. La prioridad en el uso de las áreas de laboratorio y equipo, la tienen el profesor y los alumnos
            programados para atender la demanda semestral.`;

        }
        else if(title === 'Para el personal responsable del Laboratorio'){
            template = `VI. Se considera como personal responsable del laboratorio al profesor encargado de laboratorio así
            como a los alumnos en servicio social asignados a esas áreas. Durante las sesiones programadas para
            prácticas en los laboratorios, los profesores a cargo de la misma, se consideran como responsables
            inmediatos dentro de éste por lo tanto, deberán permanecer en el laboratorio durante toda la sesión.<br>
            VII. El personal responsable del laboratorio tiene derecho a solicitar al usuario se abstenga del empleo
            de recursos cuando éste denote desconocer su manejo o cuando el equipo requiera de mantenimiento.<br>
            VIII. El personal responsable del laboratorio tiene derecho a solicitar identificación, rectificación de su
            conducta o abandono del área a cualquier usuario y/o procederá a la aplicación de sanción por motivo de
            violación al presente reglamento.<br>
            IX. Es obligación del responsable del laboratorio proporcionar acceso a los profesores asignados a la
            clase. Es obligación del profesor responsable inmediato en uso del laboratorio revisar áreas y equipos al
            iniciar y una vez concluidas las sesiones.<br>`;
        }
        else if(title === 'Sanciones'){
            template = `X. Será motivo de sanción:
            <ul class="description">
                <li>Fumar dentro del laboratorio.</li>
                <li>Introducir e ingerir bebidas y/o alimentos.</li>
                <li>Faltar al respeto al personal responsable del laboratorio.</li>
                <li>Utilizar el equipo en trabajos ajenos a los autorizados dentro de la Unidad.</li>
                <li>La indisciplina o conducta inadecuada en los laboratorios, así como escuchar música dentro de
                    ellos.</li>
                <li>Dañar deliberadamente a las instalaciones, equipos, software, accesorios y/o recursos de los
                    laboratorios, así como desconfigurar equipo de cómputo.</li>
                <li>Desacato al presente reglamento.</li>
            </ul>`;
        }
        else if(title === 'Generales'){
            template = `XVII. Los responsables del laboratorio serán los encargados de verificar el cumplimiento y ejecución
            del presente reglamento.<br>
            XVIII. Cualquier caso no previsto en el presente reglamento será turnado a las Subdirección
            correspondiente. Estas recomendaciones quedan aprobadas por las autoridades de la UPIIT en el mes de
            enero del 2023.<br>`;
        }
        else {
            console.log('No hay mas info');
        }

        descriptionContainer.innerHTML = template;
    });
});