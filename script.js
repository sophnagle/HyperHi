const cursor = document.querySelector("div.cursor")
const canvasIn = document.querySelector("canvas.in")
const canvasOut = document.querySelector("canvas.out")

let isMouseDown = false;


// Functions
// when user clicks and hold make cursor bigger
const growCursor = function () {
    cursor.classList.add("is-down");
}

// when user stops click, make cursor smaller 
const shrinkCursor = function () {
    cursor.classList.remove("is-down");
}

// move the cursor based on coordinates 
const moveCursor = function (x, y) {
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
}

// set up a canvas
const setupCanvas = function (canvas) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const dpi = window.devicePixelRatio;
// so it works on retina and high dpi screens
    // this is canvas itself
    canvas.width = w * dpi;
    canvas.height = h * dpi;
    // this is canvas in css
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";

    // which context are we talking about? 2d? 3d?
    const context = canvas.getContext("2d");
    context.scale(dpi, dpi)

    if (canvas.classList.contains("in")) {
        context.fillStyle = "#000";
        context.strokeStyle = "#fff";
    } else {
        context.fillStyle = "#fff";
        context.strokeStyle = "#000";
    }

    
    context.lineWidth = 80;
    // round the ends of the line
    context.lineCap = "round";
    // round the joins for smooth movement
    context.lineJoin = "round";

    // create white background
    context.rect(0, 0, w, h);
    context.fill();
}

// start to draw based on the canvas, x and y 
const startDraw = function (canvas, x ,y) {
    const context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(x, y);
}

// draw based on three things, canvas, X and Y
const moveDraw = function (canvas, x, y) {
    const context = canvas.getContext("2d");
    if (isMouseDown) {
        context.lineTo(x,y);
        context.stroke();
    }
}



// Events 
setupCanvas(canvasIn);
setupCanvas(canvasOut);

// Grow the cursor on click 
document.addEventListener("mousedown", function (event) {
    isMouseDown = true
    growCursor()
    startDraw(canvasIn, event.pageX, event.pageY)
    startDraw(canvasOut, event.pageX, event.pageY)
})

// shrink cursor off click 
document.addEventListener("mouseup", function () {
    isMouseDown = false
    shrinkCursor()
})

// Move cursor based on coordinates 
document.addEventListener("mousemove", function (event) {
    // event.pageX -> where we are on the page across
    // event.pageY -> where we are on the page downwards
    moveCursor(event.pageX, event.pageY);
    moveDraw(canvasIn, event.pageX, event.pageY);
    moveDraw(canvasOut, event.pageX, event.pageY);
})


// make responsive 
 
window.addEventListener("resize", function () {
    setupCanvas(canvasIn);
    setupCanvas(canvasOut);
})