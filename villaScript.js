var vp = document.getElementById("yucatan");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.png",
  cargaOK: false
}
var chardri = {
  url: "chardri-remove-resize-final.png",
  //url: "gabo-remove-resize.png",

  cargaOK: false
};

var gabo = {
  url: "gabo-remove-resize-final.png",
  url1: "felix-remove-resize-final.png",
  url2: "lili01-remove-resize-final.png",
  url3: "mau-remove-resize-final.png",
  url4: "mari-remove-resize-final.png",

  cargaOK: false
}

var cantidad = aleatorio(1, 10);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

chardri.imagen = new Image();
chardri.imagen.src = chardri.url;
chardri.imagen.addEventListener("load", cargarChardri);

gabo.imagen = new Image();
gabo.imagen.src = gabo.url;
gabo.imagen.addEventListener("load", cargarChardri);

gabo.duko = new Image();
gabo.duko.src = gabo.url1;
gabo.duko.addEventListener("load", cargarChardri);

gabo.lili = new Image();
gabo.lili.src = gabo.url2;
gabo.lili.addEventListener("load", cargarChardri);

gabo.mau = new Image();
gabo.mau.src = gabo.url3;
gabo.mau.addEventListener("load", cargarChardri);

gabo.mari = new Image();
gabo.mari.src = gabo.url4;
gabo.mari.addEventListener("load", cargarChardri);


function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarChardri()
{
  chardri.cargaOK = true;
  dibujar();

  gabo.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(chardri.cargaOK)
  {
    console.log(cantidad);
    for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 10);
      var x = x * 60;
      var y = y * 40;
      papel.drawImage(chardri.imagen, x, y);
      papel.drawImage(gabo.imagen, x+50, y+50);
      papel.drawImage(gabo.duko, x+65, y-10);
      papel.drawImage(gabo.lili, x-50, y+20);
      papel.drawImage(gabo.mau, x-10, y+70);
      papel.drawImage(gabo.mari, x+40, y+110);
    }
  }
}
function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}