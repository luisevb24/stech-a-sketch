let container = document.querySelector(".container");
let gridRow = document.createElement("div");
gridRow.classList.add("gridRow");
let gridSquare = document.createElement("div");
gridSquare.classList.add("gridSquare");
let newGridBtn = document.querySelector(".newGridBtn");
let eraser = document.querySelector(".eraseCurrent");
let currentGridSize = 16;

//buttons
newGridBtn.addEventListener('click', () => {
    let gridPrompt = prompt('Grid Size');
    emptyGrid(container);
    createGrid(gridPrompt);
})

eraser.addEventListener('click', ()=>{
    emptyGrid(container);
    createGrid(currentGridSize);
})
//main function
function createGrid(gridSize = 16) {
    if (gridSize > 100){
        gridSize = 100;
        alert('100 is the max size');
    } else if (gridSize < 1){
        gridSize = 1;
        alert('1 is the min size');
    }
    for (i = 0; i < gridSize; i++) {
        let gridRowClone = gridRow.cloneNode(true);
        container.appendChild(gridRowClone);
        for (e = 0; e < gridSize; e++) {
            let gridSquareClone = gridSquare.cloneNode(true);
            gridRowClone.appendChild(gridSquareClone);
        }
    }
    currentGridSize = gridSize;
    makeSquaresPaintable();
}




//Helper functions
function makeSquaresPaintable() {
    let gridSquareNodes = document.querySelectorAll(".gridSquare");
    for (let square of gridSquareNodes) {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = "black";
            console.log('mouseenter event fired');
        })
    }
}
function emptyGrid(container) {
    while (container.firstElementChild) {
        container.firstElementChild.remove();
    }
}


//initial grid
createGrid();