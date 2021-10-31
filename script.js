// Selct the cursor div 
const cursor = document.querySelector("div.cursor")

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


// run fuctions
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