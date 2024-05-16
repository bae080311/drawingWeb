const canvas = document.querySelector("canvas");
const width = document.querySelector("#line-width");
const color = document.querySelector("#color");
const ctx = canvas.getContext("2d");
const coloroption = Array.from(document.getElementsByClassName("color-option"));
const modebtn = document.querySelector("#mode-btn");

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = width.value;
ctx.strokeStyle = color.value; 
let isPainting = false;
let filling = false;


function onMove(event) {
    if (isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
}

function onMouseDown() {
    isPainting = true;
}

function onMouseUp() {
    isPainting = false;
}

function onMouseLeave() {
    isPainting = false;
}

function onLineWidthChange(event) {
    ctx.lineWidth = event.target.value;
}

function onColorChange(event) {
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}

function onColorClick(event){
    const colorvalue = event.target.dataset.color;
    ctx.strokeStyle = colorvalue;
    ctx.fillStyle = colorvalue;
    color.value = colorvalue;
}

function onmodeclick(){
    if (filling){
        filling = false;
        modebtn.innerText = "Fill";
    } else{
        filling = true;
        modebtn.innerText = "Draw";
    }
}
function oncanvasclick(){
    if (filling){
        ctx.fillRect(0, 0, 800,800);
    }
}
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("mouseleave", onMouseLeave);
width.addEventListener("input", onLineWidthChange);
color.addEventListener("input", onColorChange);
canvas.addEventListener("click", oncanvasclick);

coloroption.forEach(color => color.addEventListener("click", onColorClick));
    
modebtn.addEventListener("click", onmodeclick);
