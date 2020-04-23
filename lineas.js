var txtlineas = document.getElementById("numlineas");
var btn = document.getElementById("boton");
btn.addEventListener("click", dibujoPorClick);
var btnclear = document.getElementById("botonclear");
btnclear.addEventListener("click", cleardibujo);
var grueso = document.getElementById("grosor");
var lie = document.getElementById("canvas");
var lienzo = lie.getContext("2d");
document.addEventListener("keyup", teclaspressed);
var teclas = {
    ENTER: 13,
    SPACE: 32,
    A: 65,
    S: 83,
    D: 68,
    F: 70,
    G: 71,
    H: 72,
    J: 74,
    K: 75,
    L: 76,
    Q: 81,
    W: 87,
    E: 69,
    R: 82,
    T: 84,
    Y: 89,
    U: 85,
    I: 73,
    O: 79
};

function teclaspressed (evento) {
    // console.log(evento.keyCode);
    // if (evento.keyCode == teclas.ENTER) {
    //     dibujoPorClick ();
    // }
    // if (evento.keyCode == teclas.P) {
    //     cleardibujo ();
    // }
    switch (evento.keyCode) {
        case teclas.ENTER:
            dibujoPorClick();
        break;
        case teclas.SPACE:
            cleardibujo ();
        break;
        case teclas.A:
            savedibujo ("A");
        break;
        case teclas.S:
            savedibujo ("S");
        break;
        case teclas.D:
            savedibujo ("D");
        break;
        case teclas.F:
            savedibujo ("F");
        break;
        case teclas.G:
            savedibujo ("G");
        break;
        case teclas.H:
            savedibujo ("H");
        break;
        case teclas.J:
            savedibujo ("J");
        break;
        case teclas.K:
            savedibujo ("K");
        break;
        case teclas.L:
            savedibujo ("L");
        break;
        case teclas.Q:
            drawsaved (save1);
        break;
        case teclas.W:
            drawsaved (save2);
        break;
        case teclas.E:
            drawsaved (save3);
        break;
        case teclas.R:
            drawsaved (save4);
        break;
        case teclas.T:
            drawsaved (save5);
        break;
        case teclas.Y:
            drawsaved (save6);
        break;
        case teclas.U:
            drawsaved (save7);
        break;
        case teclas.I:
            drawsaved (save8);
        break;
        case teclas.O:
            drawsaved (save9);
        break;
    }
}   
        
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
        
    lie.style.background = "rgba(10, 10, 10, .5)";
        
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
var init1 = 0;
var init2 = 0;
var init3 = 0;
var init4 = 0;
var init5 = 0;
var init6 = 0;
var init7 = 0;
var init8 = 0;
var init9 = 0;
/* aun no funciona */
var sketchbtn1 = document.getElementById("buttonsketch1");
sketchbtn1.addEventListener("click", drawsaved(save1)) ;
/* Aun no funciona */

function savedibujo (cond) {
    document.getElementById("memorias").style.background = "rgba(180, 180, 255, .4)";
    if (cond == "A"){
        save1 = {
            par1: document.getElementById("color").value,
            par2: parseInt(document.getElementById("numlineas").value),
            par3: parseInt(document.getElementById("grosor").value),
            par4: parseInt(document.getElementById("xinicial").value),
            par5: parseInt(document.getElementById("yinicial").value),
            par6: parseInt(document.getElementById("xfinal").value),
            par7: parseInt(document.getElementById("yfinal").value),
            par8: parseInt(document.getElementById("iniflotante").value),
            par9: parseInt(document.getElementById("finflotante").value)
        }
        while (init1 == 0) {
            var sketch1 = document.createElement("div");
            sketch1.className = "memories";
            sketch1.id = "sketch1";
            document.getElementById("memorias").appendChild(sketch1);
            var btnsketch1 = document.createElement("button");
            btnsketch1.className = "btnsketch";
            btnsketch1.id = "buttonsketch1";
            btnsketch1.textContent = "Save A Draw Q";
            btnsketch1.style.background = save1.par1;
            document.getElementById("sketch1").appendChild(btnsketch1);
            init1++;
        }
    }
    if (cond == "S") {
        save2 = {
            par1: document.getElementById("color").value,
            par2: parseInt(document.getElementById("numlineas").value),
            par3: parseInt(document.getElementById("grosor").value),
            par4: parseInt(document.getElementById("xinicial").value),
            par5: parseInt(document.getElementById("yinicial").value),
            par6: parseInt(document.getElementById("xfinal").value),
            par7: parseInt(document.getElementById("yfinal").value),
            par8: parseInt(document.getElementById("iniflotante").value),
            par9: parseInt(document.getElementById("finflotante").value)
        }
        while (init2 == 0) {
            var sketch2 = document.createElement("div");
            sketch2.className = "memories";
            sketch2.id = "sketch2";
            document.getElementById("memorias").appendChild(sketch2);
            var btnsketch2 = document.createElement("button");
            btnsketch2.className = "btnsketch";
            btnsketch2.id = "buttonsketch2";
            btnsketch2.textContent = "Save S Draw W";
            btnsketch2.style.background = save2.par1;
            document.getElementById("sketch2").appendChild(btnsketch2);
            init2++;
        }
    }
    if (cond == "D") {
        save3 = {
            par1: document.getElementById("color").value,
            par2: parseInt(document.getElementById("numlineas").value),
            par3: parseInt(document.getElementById("grosor").value),
            par4: parseInt(document.getElementById("xinicial").value),
            par5: parseInt(document.getElementById("yinicial").value),
            par6: parseInt(document.getElementById("xfinal").value),
            par7: parseInt(document.getElementById("yfinal").value),
            par8: parseInt(document.getElementById("iniflotante").value),
            par9: parseInt(document.getElementById("finflotante").value)
        }
        while (init3 == 0) {
            var sketch3 = document.createElement("div");
            sketch3.className = "memories";
            sketch3.id = "sketch3";
            document.getElementById("memorias").appendChild(sketch3);
            var btnsketch3 = document.createElement("button");
            btnsketch3.className = "btnsketch";
            btnsketch3.id = "buttonsketch3";
            btnsketch3.textContent = "Save D Draw E";
            btnsketch3.style.background = save3.par1;
            document.getElementById("sketch3").appendChild(btnsketch3);
            init3++;
        }
    }
    if (cond == "F") {
        save4 = {
            par1: document.getElementById("color").value,
            par2: parseInt(document.getElementById("numlineas").value),
            par3: parseInt(document.getElementById("grosor").value),
            par4: parseInt(document.getElementById("xinicial").value),
            par5: parseInt(document.getElementById("yinicial").value),
            par6: parseInt(document.getElementById("xfinal").value),
            par7: parseInt(document.getElementById("yfinal").value),
            par8: parseInt(document.getElementById("iniflotante").value),
            par9: parseInt(document.getElementById("finflotante").value)
        }
        while (init4 == 0) {
            var sketch4 = document.createElement("div");
            sketch4.className = "memories";
            sketch4.id = "sketch4";
            document.getElementById("memorias").appendChild(sketch4);
            var btnsketch4 = document.createElement("button");
            btnsketch4.className = "btnsketch";
            btnsketch4.id = "buttonsketch4";
            btnsketch4.textContent = "Save F Draw R";
            btnsketch4.style.background = save4.par1;
            document.getElementById("sketch4").appendChild(btnsketch4);
            init4++;
        }
    }
    if (cond == "G") {
        save5 = {
            par1: document.getElementById("color").value,
            par2: parseInt(document.getElementById("numlineas").value),
            par3: parseInt(document.getElementById("grosor").value),
            par4: parseInt(document.getElementById("xinicial").value),
            par5: parseInt(document.getElementById("yinicial").value),
            par6: parseInt(document.getElementById("xfinal").value),
            par7: parseInt(document.getElementById("yfinal").value),
            par8: parseInt(document.getElementById("iniflotante").value),
            par9: parseInt(document.getElementById("finflotante").value)
        }
        while (init5 == 0) {
            var sketch5 = document.createElement("div");
            sketch5.className = "memories";
            sketch5.id = "sketch5";
            document.getElementById("memorias").appendChild(sketch5);
            var btnsketch5 = document.createElement("button");
            btnsketch5.className = "btnsketch";
            btnsketch5.id = "buttonsketch5";
            btnsketch5.textContent = "Save G Draw T";
            btnsketch5.style.background = save5.par1;
            document.getElementById("sketch5").appendChild(btnsketch5);
            init5++;
        }
    }
    if (cond == "H") {
        save6 = {
            par1: document.getElementById("color").value,
            par2: parseInt(document.getElementById("numlineas").value),
            par3: parseInt(document.getElementById("grosor").value),
            par4: parseInt(document.getElementById("xinicial").value),
            par5: parseInt(document.getElementById("yinicial").value),
            par6: parseInt(document.getElementById("xfinal").value),
            par7: parseInt(document.getElementById("yfinal").value),
            par8: parseInt(document.getElementById("iniflotante").value),
            par9: parseInt(document.getElementById("finflotante").value)
        }
        while (init6 == 0) {
            var sketch6 = document.createElement("div");
            sketch6.className = "memories";
            sketch6.id = "sketch6";
            document.getElementById("memorias").appendChild(sketch6);
            var btnsketch6 = document.createElement("button");
            btnsketch6.className = "btnsketch";
            btnsketch6.id = "buttonsketch6";
            btnsketch6.textContent = "Save H draw Y";
            btnsketch6.style.background = save6.par1;
            document.getElementById("sketch6").appendChild(btnsketch6);
            init++;
        }
    }
    if (cond == "J") {
        save7 = {
            par1: document.getElementById("color").value,
            par2: parseInt(document.getElementById("numlineas").value),
            par3: parseInt(document.getElementById("grosor").value),
            par4: parseInt(document.getElementById("xinicial").value),
            par5: parseInt(document.getElementById("yinicial").value),
            par6: parseInt(document.getElementById("xfinal").value),
            par7: parseInt(document.getElementById("yfinal").value),
            par8: parseInt(document.getElementById("iniflotante").value),
            par9: parseInt(document.getElementById("finflotante").value)
        }
        while (init7 == 0) {
            var sketch7 = document.createElement("div");
            sketch7.className = "memories";
            sketch7.id = "sketch7";
            document.getElementById("memorias").appendChild(sketch7);
            var btnsketch7 = document.createElement("button");
            btnsketch7.className = "btnsketch";
            btnsketch7.id = "buttonsketch7";
            btnsketch7.textContent = "Save J Draw U";
            btnsketch7.style.background = save7.par1;
            document.getElementById("sketch7").appendChild(btnsketch7);
            init7++;
        }
    }
    if (cond == "K") {
        save8 = {
            par1: document.getElementById("color").value,
            par2: parseInt(document.getElementById("numlineas").value),
            par3: parseInt(document.getElementById("grosor").value),
            par4: parseInt(document.getElementById("xinicial").value),
            par5: parseInt(document.getElementById("yinicial").value),
            par6: parseInt(document.getElementById("xfinal").value),
            par7: parseInt(document.getElementById("yfinal").value),
            par8: parseInt(document.getElementById("iniflotante").value),
            par9: parseInt(document.getElementById("finflotante").value)
        }
        while (init8 == 0) {
            var sketch8 = document.createElement("div");
            sketch8.className = "memories";
            sketch8.id = "sketch8";
            document.getElementById("memorias").appendChild(sketch8);
            var btnsketch8 = document.createElement("button");
            btnsketch8.className = "btnsketch";
            btnsketch8.id = "buttonsketch8";
            btnsketch8.textContent = "Save K Draw I";
            btnsketch8.style.background = save8.par1;
            document.getElementById("sketch8").appendChild(btnsketch8);
            init8++;
        }
    }
    if (cond == "L") {
        save9 = {
            par1: document.getElementById("color").value,
            par2: parseInt(document.getElementById("numlineas").value),
            par3: parseInt(document.getElementById("grosor").value),
            par4: parseInt(document.getElementById("xinicial").value),
            par5: parseInt(document.getElementById("yinicial").value),
            par6: parseInt(document.getElementById("xfinal").value),
            par7: parseInt(document.getElementById("yfinal").value),
            par8: parseInt(document.getElementById("iniflotante").value),
            par9: parseInt(document.getElementById("finflotante").value)
        }
        while (init9 == 0) {
            var sketch9 = document.createElement("div");
            sketch9.className = "memories";
            sketch9.id = "sketch9";
            document.getElementById("memorias").appendChild(sketch9);
            var btnsketch9 = document.createElement("button");
            btnsketch9.className = "btnsketch";
            btnsketch9.id = "buttonsketch9";
            btnsketch9.textContent = "Save L Draw O";
            btnsketch9.style.background = save9.par1;
            document.getElementById("sketch9").appendChild(btnsketch9);
            init9++;
        }
    }
}

function drawsaved (saved) {
    console.log(saved);
    colorcito = saved.par1;
    lineas = saved.par2;
    grueso = saved.par3;
    xini = saved.par4;
    yini = saved.par5;
    xfin = saved.par6;
    yfin = saved.par7;
    inifloat = saved.par8;
    finfloat = saved.par9;
    var espacio = 500 / lineas;

    for (i = 0; i < lineas; i++) {
        xi = espacio * (i + xini);
        yi = espacio * (i + yini);
        xf = espacio * (i + xfin);
        yf = espacio * (i + yfin);

        dibujarlinea(colorcito, inifloat, yi, xf, finfloat);
        dibujarlinea(colorcito, xi, inifloat, finfloat, yf);
    }
}