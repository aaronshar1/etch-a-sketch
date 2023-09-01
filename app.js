const mainDiv = document.querySelector("#main");

// create grid
for (let i = 0; i<16; i++){
    let innerDiv = document.createElement("div")
    innerDiv.classList.add("parent")
    for (let i = 0; i<16; i++){
        let cellDiv = document.createElement("div")
        cellDiv.classList.add("cell")
        innerDiv.appendChild(cellDiv);
    };
    mainDiv.appendChild(innerDiv)
};

const rows = document.querySelector(".parent");
const adjustBtn = document.querySelector("#adjust");

function updateGrid(squares){
    mainDiv.innerHTML = '';
    for (let i = 0; i < squares; i++){
        let innerDiv = document.createElement("div")
        innerDiv.classList.add("parent")
        for (let i = 0; i < squares; i++){
            let cellDiv = document.createElement("div")
            cellDiv.classList.add("cell")
            innerDiv.appendChild(cellDiv);
        };
        mainDiv.appendChild(innerDiv)
    };
    addHover()
    adjustGridSize(squares, 480)
};

function adjustGridSize(squares, size){
    let squareWidth = size / squares;
    let cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.style.width = `${squareWidth}px`;
        cell.style.height = `${squareWidth}px`;
    })
}

// practicing adding event listeners vs. changing in CSS
function addHover(){
    let cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {cell.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = "blue";
    })});    
}


adjustBtn.addEventListener('click', (e) => {
    let squares = 101
    while (squares > 100){
        squares = prompt("How many squares wide should the grid be? Pick a number <= 100.")
    }

    updateGrid(squares)
});


addHover()
