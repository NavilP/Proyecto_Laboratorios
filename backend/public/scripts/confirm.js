function cambios() {
    var userUpdate = document.getElementById('user').value;
    var oldPassword = document.getElementById('actual').value;
    var newPassword = document.getElementById('new').value;
    var confirmPassword = document.getElementById('confirm').value;
    

    if(newPassword === confirmPassword){
        // Realizar la solicitud POST al servidor
        axios.post('http://localhost:8080/changePassword', {userUpdate, oldPassword, newPassword})
        .then(function(response) {
            console.log(response.data);
            // Redirigir a la página horario.html después de un cambio de contraseña exitoso
            //window.location.href = './horario.html';
            alert('Contraseña guardada con éxito, ahora puedes iniciar sesión');
        })
        .catch(function(error) {
            console.error(error);
        });
    }
    else {
        alert('Contraseña incorrecta, confirma contraseña nuevamente');
    }
}

const submitBtn = document.querySelector('#sbmt');
submitBtn.addEventListener('click', cambios);