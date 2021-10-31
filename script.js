const cursor = document.querySelector("div.cursor")
const canvasTag = document.querySelector("canvas.in")


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
}

// Events 
setupCanvas(canvasTag);

// Grow the cursor on click 
document.addEventListener("mousedown", function () {
    growCursor()
})

// shrink cursor off click 
document.addEventListener("mouseup", function () {
    shrinkCursor()
})

// Move cursor based on coordinates 
document.addEventListener("mousemove", function (event) {
    // event.pageX -> where we are on the page across
    // event.pageY -> where we are on the page downwards
    moveCursor(event.pageX, event.pageY)
})