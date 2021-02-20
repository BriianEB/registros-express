(function () {
    const boton_color = document.getElementById("boton_color");
    const color_container = document.getElementById("color_container");
    const colores = ["#C23F61", "#C23F9E", "#9C3FC2", "#7D3FC2", "#3F4BC2", "#40C7D7", "#3FC296", "#3FC245", "#CED740", "#D7A040"];

    boton_color.addEventListener("click", function () {
        var random_num = Math.floor(Math.random() * colores.length);
        color_container.style.backgroundColor = colores[random_num];
    });
})();
