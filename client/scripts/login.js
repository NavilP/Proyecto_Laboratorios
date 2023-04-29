function submitForm(event) {
    event.preventDefault();

    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    const validUsername = '123';
    const validPassword = '123';

    const messageElement = document.getElementById('message');

    if (username === validUsername && password === validPassword) {
        window.location.assign('./user.html');
    } else {
        messageElement.style.color = 'red';
        messageElement.textContent = 'Matrícula o contraseña incorrectos';
    }
}
