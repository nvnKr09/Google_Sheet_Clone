let columns = 26;
let rows = 100;

const headerContainer = document.getElementById("dataHead");
const serialNumberContainer = document.getElementById("sNo");
const mainContainer = document.getElementById("cellContainer");

// creating headerCells
function createHeaderCells() {

    for (let i = 0; i <= columns; i++) {
        const headerCell = document.createElement("div");
        headerCell.className = "header-cell";
        if (i == 0) {
            headerCell.className = "corner-blankCell";
        }

        if (i !== 0) {
            headerCell.innerText = String.fromCharCode(64 + i);
        }
        headerContainer.appendChild(headerCell);
    }
}

// creating s.no cells
function createSnoCells() {
    for (let i = 1; i <= rows; i++) {
       const sNoCells = document.createElement("div");
        sNoCells.innerText = i;
        sNoCells.className="sNo-cells";
        serialNumberContainer.appendChild(sNoCells);
    }
}

// creating single rows fn:
function createRow(rowNumber){
    // creating row each having 26 columns
    const row = document.createElement("div");
    row.className = "row";

    for (let i = 1; i <= columns ; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.contentEditable = true;
        row.appendChild(cell);  
        
        cell.id = String.fromCharCode(64+i) + rowNumber;

        // focus event for every cell
        cell.addEventListener("focus", onCellFocus);
    }
    mainContainer.appendChild(row);
}

// creating rest rows
function createMainSection(){
    // 100 rows
    for (let i = 1; i <= rows; i++) {
        createRow(i);  // invoking createRow fn in loop all rows
    }
} 


createHeaderCells();  // invoking createHeaderCells
createSnoCells();  // invoking createSnoCells
createMainSection();  // invoking createMainSection