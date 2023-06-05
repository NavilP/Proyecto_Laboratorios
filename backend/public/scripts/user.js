const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const user = document.querySelector(".name");
user.textContent = id;