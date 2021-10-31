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

// run fuction


