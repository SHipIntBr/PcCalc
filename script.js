document.addEventListener('DOMContentLoaded', (event) => {
    const pointsInputsDiv = document.getElementById('pointsInputs');
    for (let i = 0; i < 8; i++) {
        const label = document.createElement('label');
        label.setAttribute('for', `point${i}`);
        label.textContent = `Enter 8 point value ${i}:`;
        pointsInputsDiv.appendChild(label);

        const input = document.createElement('input');
        input.setAttribute('type', 'number');
        input.setAttribute('id', `point${i}`);
        input.setAttribute('name', `point${i}`);
        input.setAttribute('inputmode', 'numeric');
        input.required = true;
        pointsInputsDiv.appendChild(input);
    }
});

function calculate() {
    const active = getActiveSet();
    let minVal = getVariable(active + '_min');
    let maxVal = getVariable(active + '_max');
    let total = 0;

    for (let i = 0; i < 8; i++) {
        let num = parseInt(document.getElementById(`point${i}`).value);
        total += num;
    }

    let avgWallActual = total / 8;
    let wallSpecAvg = (minVal + maxVal) / 2;
    let wallVariance = (avgWallActual / wallSpecAvg) * 100;

    document.getElementById('avgSpec').textContent = "Average spec: " + wallSpecAvg;
    document.getElementById('avgWall').textContent = "Average wall actual: " + avgWallActual;
    document.getElementById('variance').textContent = "Wall variance: " + wallVariance.toFixed(2) + "%";
}

function getVariable(key) {
    let value = localStorage.getItem(key);
    return value ? parseInt(value) : 0;
}

function setVariable(key, value) {
    localStorage.setItem(key, value);
}

function getActiveSet() {
    return localStorage.getItem('activeSet') || 'A';
}

function setActiveSet(set) {
    localStorage.setItem('activeSet', set);
}

function updateUI() {
    const active = getActiveSet();
    const minA = getVariable('A_min');
    const maxA = getVariable('A_max');
    const minB = getVariable('B_min');
    const maxB = getVariable('B_max');

    document.getElementById('btnMinA').innerHTML = `<span>Min Wall A (${minA})</span>`;
    document.getElementById('btnMaxA').innerHTML = `<span>Max Wall A (${maxA})</span>`;
    document.getElementById('btnMinB').innerHTML = `<span>Min Wall B (${minB})</span>`;
    document.getElementById('btnMaxB').innerHTML = `<span>Max Wall B (${maxB})</span>`;

    // Show only the active row, hide the other
    document.getElementById('rowA').style.display = active === 'A' ? 'flex' : 'none';
    document.getElementById('rowB').style.display = active === 'B' ? 'flex' : 'none';

    // Update swap button label
    document.getElementById('swapButton').textContent = active === 'A' ? 'A ⇄ B' : 'B ⇄ A';
}

// Button event listeners
document.getElementById('btnMinA').addEventListener('click', () => {
    let val = prompt("Enter Min Wall A:", getVariable('A_min'));
    if (val !== null && !isNaN(val)) { setVariable('A_min', parseInt(val)); updateUI(); }
});

document.getElementById('btnMaxA').addEventListener('click', () => {
    let val = prompt("Enter Max Wall A:", getVariable('A_max'));
    if (val !== null && !isNaN(val)) { setVariable('A_max', parseInt(val)); updateUI(); }
});

document.getElementById('btnMinB').addEventListener('click', () => {
    let val = prompt("Enter Min Wall B:", getVariable('B_min'));
    if (val !== null && !isNaN(val)) { setVariable('B_min', parseInt(val)); updateUI(); }
});

document.getElementById('btnMaxB').addEventListener('click', () => {
    let val = prompt("Enter Max Wall B:", getVariable('B_max'));
    if (val !== null && !isNaN(val)) { setVariable('B_max', parseInt(val)); updateUI(); }
});

// Swap: toggle active set between A and B
document.getElementById('swapButton').addEventListener('click', () => {
    const current = getActiveSet();
    setActiveSet(current === 'A' ? 'B' : 'A');
    updateUI();
});

// Init
updateUI();

// navigation script
document.getElementById('option1').addEventListener('click', function() {
    window.location.href = 'Home.html';
});
document.getElementById('option2').addEventListener('click', function() {
    window.location.href = 'len-adjustment.html';
});
document.getElementById('option3').addEventListener('click', function() {
    window.location.href = 'wall-adjustment.html';
});
document.getElementById('option4').addEventListener('click', function() {
    window.location.href = 'stopwatch.html';
});document.addEventListener('DOMContentLoaded', (event) => {
    const pointsInputsDiv = document.getElementById('pointsInputs');
    for (let i = 0; i < 8; i++) {
        const label = document.createElement('label');
        label.setAttribute('for', `point${i}`);
        label.textContent = `Enter 8 point value ${i}:`;
        pointsInputsDiv.appendChild(label);

        const input = document.createElement('input');
        input.setAttribute('type', 'number');
        input.setAttribute('id', `point${i}`);
        input.setAttribute('name', `point${i}`);
        input.setAttribute('inputmode', 'numeric');
        input.required = true;
        pointsInputsDiv.appendChild(input);
    }
});

function calculate() {
    let variable1 = getVariable('variable1');
    let variable2 = getVariable('variable2');
    let total = 0;

    for (let i = 0; i < 8; i++) {
        let num = parseInt(document.getElementById(`point${i}`).value);
        total += num;
    }

    let avgWallActual = total / 8;
    let wallSpecAvg = (variable1 + variable2) / 2;
    let wallVariance = (avgWallActual / wallSpecAvg) * 100;

    document.getElementById('avgSpec').textContent = "Average spec: " + wallSpecAvg;
    document.getElementById('avgWall').textContent = "Average wall actual: " + avgWallActual;
    document.getElementById('variance').textContent = "Wall variance: " + wallVariance.toFixed(2) + "%";
};

// Function to get the variable from localStorage or initialize it if it doesn't exist
function getVariable(key) {
    let value = localStorage.getItem(key);
    return value ? parseInt(value) : 0;
}

// Function to update the variable in localStorage
function setVariable(key, value) {
    localStorage.setItem(key, value);
}

// Initialize the variables
let variable1 = getVariable('variable1');
let variable2 = getVariable('variable2');

// Display the current values of the variables
document.getElementById('updateButton1').innerHTML = `<span>Minimum Wall (${variable1})</span>`;
document.getElementById('updateButton2').innerHTML = `<span>Maximum Wall (${variable2})</span>`;

// Add event listener to the first button to update the first variable
document.getElementById('updateButton1').addEventListener('click', () => {
    let newValue = prompt("Enter Minimum:", variable1);
    if (newValue !== null && !isNaN(newValue)) {
        variable1 = parseInt(newValue);
        setVariable('variable1', variable1);
        document.getElementById('updateButton1').innerHTML = `<span>Minimum Wall (${variable1})</span>`;
    }
});

// Add event listener to the second button to update the second variable
document.getElementById('updateButton2').addEventListener('click', () => {
    let newValue = prompt("Enter Maximum:", variable2);
    if (newValue !== null && !isNaN(newValue)) {
        variable2 = parseInt(newValue);
        setVariable('variable2', variable2);
        document.getElementById('updateButton2').innerHTML = `<span>Maximum Wall (${variable2})</span>`;
    }
});



// navigation script
document.getElementById('option1').addEventListener('click', function() {
window.location.href = 'index.html'; // Link to the 8 Point Check page
});

document.getElementById('option2').addEventListener('click', function() {
window.location.href = 'len-adjustment.html'; // Link to the Saw Adjustment page
});

document.getElementById('option3').addEventListener('click', function() {
window.location.href = 'wall-adjustment.html'; // Link to the Wall Adjustment page
});

document.getElementById('option4').addEventListener('click', function() {
window.location.href = 'stopwatch.html'; // Link to the Stopwatch page
});


// length script

