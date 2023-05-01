function submitForm(event) {
    event.preventDefault();

    const usuario = document.querySelector('input[type="text"]').value;
    const contraseña = document.querySelector('input[type="password"]').value;
    const messageElement = document.getElementById('message');

    console.log("chi1");
    const validUsername = '123';
    const validPassword = '123';

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
}
