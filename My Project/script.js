function handle() {
    let inputs = document.querySelectorAll(".container input");

    let name = inputs[0].value;
    let email = inputs[1].value;
    let password = inputs[2].value;
    let login = inputs[3].value;

    console.log("Имя:", name);
    console.log("Email:", email);
    console.log("Пароль:", password);
    console.log("Логин:", login);

    window.location.href = "index.html";
}

document.querySelector(".btn")?.addEventListener("click", handle);

function toggleMenu(el) {
    const menu = document.querySelector("nav.mobile");

    el.classList.toggle("active");
    menu.classList.toggle("active");
}

let startX = 0;

document.addEventListener("touchstart", function(e) {
    startX = e.touches[0].clientX; 
});

document.addEventListener("touchend", function(e) {
    let endX = e.changedTouches[0].clientX; 
    const menu = document.querySelector("nav.mobile");

    if (startX - endX > 50) {
        menu.classList.add("active");
    } else if (endX - startX > 50) {
        menu.classList.remove("active");
    }
});