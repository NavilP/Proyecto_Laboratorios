/*function submitForm(event) {
    event.preventDefault();

    const usuario = document.querySelector('input[type="text"]').value;
    const contraseña = document.querySelector('input[type="password"]').value;
    const messageElement = document.getElementById('message');

    axios.post('http://localhost:8080/login', { usuario, contraseña })
        .then(response => {
            if (response.data == 'Usuario ingresado correctamente') {
                const id = usuario;
                window.location.href = "./horario.html?id=" + id;
                //window.location.assign('./horario.html');
            }
            else {
                messageElement.style.color = 'red';
                messageElement.textContent = response.data;
            }
        })
        .catch(error => console.error(error));


    /*if (username === validUsername && password === validPassword) {
        window.location.assign('./user.html');
    } else {
        messageElement.style.color = 'red';
        messageElement.textContent = 'Matrícula o contraseña incorrectos';
    }*/


function login() {
    var email = document.getElementById('email').value;
    var contraseña = document.getElementById('contraseña').value;

    console.log(email);
    // Realizar la solicitud POST al servidor
    axios.post('http://localhost:8080/login', {email, contraseña })
      .then(function(response) {
        console.log(response.data);
        // Redirigir a la página horario.html después de un inicio de sesión exitoso
        window.location.href = './horario.html';
      })
      .catch(function(error) {
        console.error(error);
        // Manejar el error en caso de inicio de sesión fallido
      });
  }