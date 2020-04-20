var txtlineas = document.getElementById("numlineas");
var btn = document.getElementById("boton");
btn.addEventListener("click", dibujoPorClick);
var colorcito1 = "#FAA"
var grueso = document.getElementById("grosor");
var lie = document.getElementById("canvas");
var lienzo = lie.getContext("2d");


function dibujarlinea(color, xi, yi, xf, yf) {
    var wid = parseInt(grueso.value);
    
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = wid;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick () {
    var lineas = parseInt(txtlineas.value);
    var colorcito = document.getElementById("color").value;
    var espacio = 500 / lineas;
    var yi, xf;

    lie.style.background = "rgba(10, 10, 10, .3)";
    lienzo.clearRect(0, 0, 500, 500);

    for (i = 0; i < lineas; i++) {
        yi = espacio * i;
        xf = espacio * (i + 1);
        xi = espacio * i;
        yf = espacio * (i + 1);
        dibujarlinea(colorcito, 0, yi, xf, 500);
        dibujarlinea(colorcito, xi, 0, 500, yf);
    }
}