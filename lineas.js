var txtlineas = document.getElementById("numlineas");
var btn = document.getElementById("boton");
btn.addEventListener("click", dibujoPorClick);
var btnclear = document.getElementById("botonclear");
btnclear.addEventListener("click", cleardibujo);
var grueso = document.getElementById("grosor");
var lie = document.getElementById("canvas");
var lienzo = lie.getContext("2d");

function cleardibujo (){
    lienzo.clearRect(0, 0, 500, 500);
    }
    
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
        // var yi, xf;
        
        lie.style.background = "rgba(10, 10, 10, .3)";
        
    var xini = parseInt(document.getElementById("xinicial").value);
    var yini = parseInt(document.getElementById("yinicial").value);
    var xfin = parseInt(document.getElementById("xfinal").value);
    var yfin = parseInt(document.getElementById("yfinal").value);
    var inifloat = parseInt(document.getElementById("iniflotante").value);
    var finfloat = parseInt(document.getElementById("finflotante").value);
    
    // for (i = 0; i < lineas; i++) {
        //     yi = espacio * i;
        //     xf = 2 * (i + 1);
        //     xi = espacio * i;
        //     yf = espacio * (i + 1);
        //     dibujarlinea(colorcito, 0, yi, xf, 500);
        //     dibujarlinea(colorcito, xi, 0, 500, yf);
        // }

        for (i = 0; i < lineas; i++) {
        xi = espacio * (i + xini);
        yi = espacio * (i + yini);
        xf = espacio * (i + xfin);
        yf = espacio * (i + yfin);
        // xf = 500 - espacio * (i + xfin);
        // yf = 500 - espacio * (i + yfin);
        // dibujarlinea(colorcito, 0, yi, xf, 500);
        // dibujarlinea(colorcito, xi, 0, 500, yf);
        dibujarlinea(colorcito, inifloat, yi, xf, finfloat);
        dibujarlinea(colorcito, xi, inifloat, finfloat, yf);
    }
}