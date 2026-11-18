const btnColor = document.getElementById("btnColor");
const btnImagen = document.getElementById("btnImagen");

btnColor.addEventListener("click", function () {
    const colorSeleccionado = document.getElementById("selectColor").value;
    const cuadro = document.getElementById("cuadroColor");

    if (colorSeleccionado === "") {
        alert("Por favor, seleccione un color.");
        cuadro.style.backgroundColor = "transparent";
    } else {
        cuadro.style.backgroundColor = colorSeleccionado;
    }
});

btnImagen.addEventListener("click", function () {
    const opcion = document.getElementById("selectImagen").value;
    const cuadro = document.getElementById("cuadroImagen");

    const imagenes = {
        carro: "https://img.magnific.com/psd-gratis/automovil-moderno-aislado_23-2151504550.jpg?semt=ais_hybrid&w=740&q=80",
        moto: "https://png.pngtree.com/png-vector/20241106/ourmid/pngtree-motorbike-png-image_14237669.png",
        bicicleta: "https://png.pngtree.com/png-clipart/20240914/original/pngtree-bicycle-mountain-bike-png-image_16003757.png"
    };

    if (opcion === "") {
        alert("Por favor, seleccione una opción.");
        cuadro.innerHTML = "";
    } else {
        cuadro.innerHTML = `<img src="${imagenes[opcion]}" alt="${opcion}">`;
    }
});