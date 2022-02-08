var vp = document.getElementById("yucatan");
var papel = vp.getContext("2d");

var btnReiniciar = document.getElementById("btnReiniciar");
btnReiniciar.addEventListener("click", reiniciar);

function reiniciar()
{
  dibujar();
  //dibujarPersonajesFor();
}

document.addEventListener("mousedown", pulsarMouse);

document.addEventListener("touchstart", pulsarTouch);

var fondo = {
  url: "tile.png",
  cargaOK: false
}

var personajes = {
  
  url: "gabo-remove-resize-final.png",
  url1: "felix-remove-resize-final.png",
  url2: "lili01-remove-resize-final.png",
  url3: "mau-remove-resize-final.png",
  url4: "mari-remove-resize-final.png",
  url5: "chardri-remove-resize-final.png",

  cargaOK: false
}

var cantidad = aleatorio(30,40);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

personajes.gabo = new Image();
personajes.gabo.src = personajes.url;
personajes.gabo.addEventListener("load", cargarPersonajes);

personajes.duko = new Image();
personajes.duko.src = personajes.url1;
personajes.duko.addEventListener("load", cargarPersonajes);

personajes.lili = new Image();
personajes.lili.src = personajes.url2;
personajes.lili.addEventListener("load", cargarPersonajes);

personajes.mau = new Image();
personajes.mau.src = personajes.url3;
personajes.mau.addEventListener("load", cargarPersonajes);

personajes.mari = new Image();
personajes.mari.src = personajes.url4;
personajes.mari.addEventListener("load", cargarPersonajes);

personajes.chardri = new Image();
personajes.chardri.src = personajes.url5;
personajes.chardri.addEventListener("load", cargarPersonajes);


function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarPersonajes()
{
  personajes.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(personajes.cargaOK)
  {
    console.log(cantidad);
    for(var v=0; v < cantidad; v++)
    {
      dibujarPersonajesFor(personajes.gabo);
    }
    for(var v=0; v < cantidad; v++)
    {
      dibujarPersonajesFor(personajes.mau);
    }
    for(var v=0; v < cantidad; v++)
    {
      dibujarPersonajesFor(personajes.mari);
    }
    for(var v=0; v < cantidad; v++)
    {
      dibujarPersonajesFor(personajes.duko);
    }
    for(var v=0; v < cantidad; v++)
    {
      dibujarPersonajesFor(personajes.lili);
    }
    // Sacado para testear a quién encontrar
    
    //for(var v=0; v < cantidad; v++)
    //{
      
      dibujarPersonajesFor(personajes.chardri);
    //}
    
  }
}
 var xChardri = 0;
 var yChardri = 0;

function dibujarPersonajesFor(personajes)
{
  var x = aleatorio(0, 7);
  var y = aleatorio(0, 10);
  var x = x * 60;
  var y = y * 40;
  papel.drawImage(personajes, x, y);
  xChardri = x;
  yChardri = y;
  if (x > 500 || y > 500)
  {
    alert("ERROR: hay una coordenada mayor a 500");
  }
  console.log("personajes: "+personajes+ ",  +x: " + x + ", " + "y: " + y );
}

function pulsarMouse(evento)
{
  var xLim_SUP = xChardri;
  var yLim_SUP = yChardri;
  var xLim_INF = xChardri + 80;
  var yLim_INF = yChardri + 80;

  var x = evento.offsetX;
  var y = evento.offsetY;
  console.log("SUP: " + xLim_SUP, yLim_SUP);
  console.log("INF: " + xLim_INF, yLim_INF);
  console.log(x, y);
  if ((x > xLim_SUP && y > yLim_SUP) && (x < xLim_INF && y < yLim_INF))
  {
    console.log("GANASTE");
    reiniciar();
  }
}

function pulsarTouch(evento)
{
    var xLim_SUP = xChardri;
    var yLim_SUP = yChardri;
    var xLim_INF = xChardri + 80;
    var yLim_INF = yChardri + 80;

    var touch = evento.targetTouches[0];
    var x = touch.clientX;
    var y = touch.clientY;
    console.log("SUP: " + xLim_SUP, yLim_SUP);
    console.log("INF: " + xLim_INF, yLim_INF);
    console.log(x, y);
    if ((x > xLim_SUP && y > yLim_SUP) && (x < xLim_INF && y < yLim_INF))
    {
      console.log("GANASTE");
      reiniciar();
    }
}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}