let coord = { x: 0, y: 0 };
let isDrawing = false
let x = 0
let y = 0
let cor = "#00000"
let tamanho = 3

function listeners(){
  var canvasDesenho = document.getElementById("desenho")
  canvasDesenho.width = 492;
  canvasDesenho.height = 492;
  var canvasPokemon = document.getElementById("pokemon")
  canvasPokemon.width = canvasDesenho.width
  canvasPokemon.height = canvasDesenho.height
  var color = document.getElementById("color")
  var reset = document.getElementById("reset")
  var grossura = document.getElementById("brushSize")
  grossura.addEventListener("change", e=>{
    tamanho = e.target.value
  })
  reset.addEventListener("click", ()=>{
    const canvasDesenho = document.getElementById("desenho")
    const ctxDesenho = canvasDesenho.getContext("2d")
    ctxDesenho.clearRect(0,0,500,500)
    console.log("feito")
  })
  color.addEventListener("change", e=>{
    cor = e.target.value;
    console.log(cor)
  })
  canvasDesenho.addEventListener("mousedown", e=>{
    x = e.offsetX
    y = e.offsetY
    isDrawing = true
  })
  canvasDesenho.addEventListener("mousemove", e=>{
    if(isDrawing){
      drawLine(document.getElementById("desenho").getContext("2d"), x, y, e.offsetX, e.offsetY);
      x = e.offsetX
      y = e.offsetY
    }
  })
  canvasDesenho.addEventListener("mouseup", ()=>{
      x = 0
      y = 0
      isDrawing = false
  })
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

function pokemonDraw(){
    let pokedex = getRandomInt(1,649)
    console.log(pokedex)
    var canvas_pokemon = document.getElementById("pokemon")
    var ctx_pokemon = canvas_pokemon.getContext("2d")
    ctx_pokemon.clearRect(0,0,500,500)
    var foto = new Image(200, 200)
    foto.src = "/black-white/" + pokedex + ".png"   
    foto.addEventListener('load', ()=>{
    console.log(foto.src)
    ctx_pokemon.drawImage(foto,50,50,400,400)
    console.log("feito")
    });
}
function drawLine(context, x1, y1, x2, y2){
  context.beginPath();
  context.lineCap = 'round'
  context.strokeStyle = cor
  context.lineWidth = tamanho;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}
function salvar(){
  var canvasDesenho = document.getElementById("desenho")
  var img = canvasDesenho.toDataURL("image/png");
  var a = document.createElement('a')
  a.download = "pokemon.png"
  a.href = img
  a.textContent = "baixar o pokemon"
  a.click()

}

