
function handle() {
    let inputs = document.querySelectorAll(".container input");
    let input_values = [];

    for (let i = 0; i < inputs.length; i++) {
        input_values.push(inputs[i].value);
    }

    let name = input_values[0];
    let email = input_values[1];

    console.log("Имя:", name);
    console.log("Email:", email);
    console.log("Пароль:", password);
    console.log("Логин:", login);

    alert("Регистрация успешна!");
    let button = document.querySelector('.btn');
    button.addEventListener('click', handle);
    window.location.href = "index.html";
}