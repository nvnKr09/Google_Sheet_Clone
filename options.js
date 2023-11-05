const cellPosition = document.querySelector(".position");
const fontSizeInput = document.querySelector("#fontsize");
const fontFamilyInput = document.querySelector("#fontfamily");
const form = document.getElementById("form");

let activeElement = null;

const state = {};

const defaultProperties = {
    fontFamily: 'sans',
    fontSize: 12,
    color: "#000000",
    textAlign: "left",
    backgroundColor: "#ffffff",
    isBold: false,
    isItalics: false,
    isUnderlined: false,
    value: '',
};

// active cell position Fn:
function onCellFocus(event) {
    console.log(event.target.id);
    const elementId = event.target.id;
    cellPosition.innerText = event.target.id;
 
    activeElement = event.target;

    if (state[elementId]) {
        // if already selected cell
        // fill options with the state of that cell
        resetOptions(state[elementId]);
    } else {
        // if selected for the 1st time
        // fill the options with the default state 
        resetOptions(defaultProperties);
    }
}

function resetOptions(optionsState) {
    // updates the UI as per the option state
    form.fontfamily.value = optionsState.fontFamily;
    form.fontsize.value = optionsState.fontSize;
    form.textalign.value = optionsState.textAlign; // "right" | "left" | "center"
    form.bold.checked = optionsState.isBold
    form.italic.checked = optionsState.isItalic;
    form.underlined.checked = optionsState.isUnderlined;
    form.textcolor.value = optionsState.color;
    form.bgcolor.value = optionsState.backgroundColor;
}

function onFormChange() {
    if (!activeElement) {
        form.reset();
        return;
    }
    let currentState = {
        textColor: form.textcolor.value,
        backgroundColor: form.bgcolor.value,
        fontSize: form.fontsize.value,
        fontFamily: form.fontfamily.value,
        isBold: form.bold.checked,
        isItalic: form.italic.checked,
        isUnderlined: form.underlined.checked,
        textAlign: form.textalign.value // "left" , "right" , "center"
    };

    // below function applies all the styles to the active cell.
    applyStylesToCell(currentState);

    // update the state object for the current cell.
    // state = {} 
    // state["C2"] = currentState ;
    // state = { C2: currentState }
    state[activeElement.id] = { ...currentState, value: activeElement.innerText };
}

function applyStylesToCell(styleObject) {
    // it will take the style object and applies it to the currently selected cell.
    activeElement.style.fontSize = `${styleObject.fontSize}px`;
    activeElement.style.fontFamily = styleObject.fontFamily;
    activeElement.style.color = styleObject.textColor;
    activeElement.style.backgroundColor = styleObject.backgroundColor;
    activeElement.style.textAlign = styleObject.textAlign;

    activeElement.style.fontWeight = styleObject.isBold ? "bold" : "normal";
    activeElement.style.fontStyle = styleObject.isItalic ? "italic" : "normal";
    activeElement.style.textDecoration = styleObject.isUnderlined ? "underline" : "none";
}


// add sheet btn
const addSheetBtn = document.querySelector(".add-sheet-btn");
let counter = 2; // Starting number

addSheetBtn.addEventListener("click", () => {
  const newDiv = document.createElement("div");
  newDiv.innerText = `Sheet ${counter++}`;
  const sheets = document.querySelector(".sheets");
  sheets.appendChild(newDiv);
});
