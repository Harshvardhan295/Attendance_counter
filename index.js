const displayEl = document.getElementById("display-el");
const countEl = document.getElementById("count-el");
const totalElInput = document.getElementById("total-el");

let totalEl = 0;
let count = 1;
let presentStudents = [];

function storeTotal() {
    const inputVal = parseInt(totalElInput.value);
    if (isNaN(inputVal) || inputVal <= 0) {
        alert("Please enter a valid number of students.");
        return;
    }

    totalEl = inputVal;
    count = 1;
    countEl.textContent = "Roll Number: " + count;
    displayEl.textContent = "Absent Roll Numbers: ";
    presentStudents = [];
}

function Present() {
    if (count <= totalEl) {
        presentStudents.push(count);
        count++;
        countEl.textContent = "Roll Number: " + count;
    } else {
        alert("You have taken attendance for all students.");
        displayEl.textContent = "All students are present.";
    }
}

function Absent() {
    if (count <= totalEl) {
        displayEl.textContent += count + ", ";
        count++;
        countEl.textContent = "Roll Number: " + count;
    }
    
    if (count > totalEl) {
        alert("You have taken attendance for all students.");
        highlightAbsentNumbers();
    }
}

function highlightAbsentNumbers() {
    const absentNumbers = [];

    for (let i = 1; i <= totalEl; i++) {
        if (!presentStudents.includes(i)) {
            absentNumbers.push(i);
        }
    }

    if (absentNumbers.length === 0) {
        displayEl.textContent = "All students are present.";
    } else {
        displayEl.textContent = "Absent Roll Numbers: " + absentNumbers.join(", ");
    }
}
