let formulario = document.querySelector("form");
let campos = document.querySelectorAll("input, textarea")

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    campos.forEach(element => {
        if (element.value.trim() === "") {
            element.classList.add("borda-vermelha");
            element.nextElementSibling.style.visibility = "visible";
        } else {
            element.classList.remove("borda-vermelha");
            element.classList.add("borda-verde");
            element.nextElementSibling.style.visibility = "hidden";
        }

    });
})

campos.forEach(element => {
    element.addEventListener("input", () => {
        if (element.value.trim() === "") {
            element.classList.add("borda-vermelha");
            element.nextElementSibling.style.visibility = "visible";
        } else {
            element.classList.remove("borda-vermelha")
            element.classList.add("borda-verde");
            element.nextElementSibling.style.visibility = "hidden";
        }
    })
})