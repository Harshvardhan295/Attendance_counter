let displayEl = document.getElementById("display-el");
let countEl = document.getElementById("count-el");
let totalElInput = document.getElementById("total-el");
let totalEl = 0;

let count = 1; 
let presentStudents = []; 

function storeTotal() {
    totalEl = parseInt(totalElInput.value); 
    count = 1; 
    countEl.textContent = "Roll Number: " + count; 
    displayEl.textContent = "Absent Roll Numbers: "; 
    presentStudents = []; 
}

function increment() {
    if (count <= totalEl) {
        presentStudents.push(count); 
        count += 1; 
        countEl.textContent = "Roll Number: " + count; 
    } else {
        alert("Roll Number " + count + " does not exist. You have taken the attendance of all students.");
    }
}

function save() {
    if (count > totalEl) {
        highlightAbsentNumbers(); 
    } else if (count >= 1) { // Exclude the initial roll number
        let countStr = (count) + " , "; // Store the last valid count
        displayEl.textContent += countStr; 
        count += 1; 
        countEl.textContent = "Roll Number: " + count; 
    } 
}

function highlightAbsentNumbers() {
    let absentNumbers = [];
    for (let i = 1; i <= totalEl; i++) {
        if (!presentStudents.includes(i)) { 
            absentNumbers.push(i); 
        }
    }
    if (absentNumbers.length ===0) {
    displayEl.textContent = "All students are present.";
    }else {
        displayEl.textContent = "Absent Roll Numbers: " + absentNumbers.join(", ");
    } 
}
