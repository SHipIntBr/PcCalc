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

