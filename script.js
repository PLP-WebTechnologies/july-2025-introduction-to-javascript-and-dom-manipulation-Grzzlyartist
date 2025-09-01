// =============================================
// Part 1: Variable declarations and conditionals
// =============================================

// Variable declarations
const ageInput = document.getElementById('ageInput');
const checkAgeBtn = document.getElementById('checkAgeBtn');
const ageResult = document.getElementById('ageResult');

// Event listener with conditional logic
checkAgeBtn.addEventListener('click', function() {
    const age = parseInt(ageInput.value);
    
    // Input validation
    if (isNaN(age) || age <= 0) {
        ageResult.textContent = 'Please enter a valid age.';
        ageResult.style.color = '#ff4757';
        return;
    }
    
    // Conditional logic
    let message;
    if (age < 13) {
        message = 'You are a child.';
    } else if (age < 18) {
        message = 'You are a teenager.';
    } else if (age < 65) {
        message = 'You are an adult.';
    } else {
        message = 'You are a senior.';
    }
    
    ageResult.textContent = message;
    ageResult.style.color = '#2ed573';
});

// =============================================
// Part 2: Custom functions
// =============================================

// Function to calculate area
function calculateArea(width, height) {
    return width * height;
}

// Function to convert temperature
function convertTemperature(temp, unit) {
    if (unit === 'celsius') {
        return (temp * 9/5) + 32; // Celsius to Fahrenheit
    } else {
        return (temp - 32) * 5/9; // Fahrenheit to Celsius
    }
}

// Using the functions with DOM
const widthInput = document.getElementById('widthInput');
const heightInput = document.getElementById('heightInput');
const calculateAreaBtn = document.getElementById('calculateAreaBtn');
const areaResult = document.getElementById('areaResult');

calculateAreaBtn.addEventListener('click', function() {
    const width = parseFloat(widthInput.value);
    const height = parseFloat(heightInput.value);
    
    if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
        areaResult.textContent = 'Please enter valid dimensions.';
        areaResult.style.color = '#ff4757';
        return;
    }
    
    const area = calculateArea(width, height);
    areaResult.textContent = `The area is: ${area}`;
    areaResult.style.color = '#2ed573';
});

// Temperature conversion
const tempInput = document.getElementById('tempInput');
const tempUnit = document.getElementById('tempUnit');
const convertTempBtn = document.getElementById('convertTempBtn');
const tempResult = document.getElementById('tempResult');

convertTempBtn.addEventListener('click', function() {
    const temp = parseFloat(tempInput.value);
    
    if (isNaN(temp)) {
        tempResult.textContent = 'Please enter a valid temperature.';
        tempResult.style.color = '#ff4757';
        return;
    }
    
    const convertedTemp = convertTemperature(temp, tempUnit.value);
    const fromUnit = tempUnit.value === 'celsius' ? 'Celsius' : 'Fahrenheit';
    const toUnit = tempUnit.value === 'celsius' ? 'Fahrenheit' : 'Celsius';
    
    tempResult.textContent = `${temp}° ${fromUnit} = ${convertedTemp.toFixed(2)}° ${toUnit}`;
    tempResult.style.color = '#2ed573';
});

// =============================================
// Part 3: Loop examples
// =============================================

// First loop example: Multiplication table
const multiplierInput = document.getElementById('multiplierInput');
const generateTableBtn = document.getElementById('generateTableBtn');
const tableResult = document.getElementById('tableResult');

generateTableBtn.addEventListener('click', function() {
    const multiplier = parseInt(multiplierInput.value);
    
    if (isNaN(multiplier) || multiplier < 1 || multiplier > 12) {
        tableResult.textContent = 'Please enter a number between 1 and 12.';
        tableResult.style.color = '#ff4757';
        return;
    }
    
    let tableHTML = '<h3>Multiplication Table:</h3>';
    
    // For loop to generate multiplication table
    for (let i = 1; i <= 10; i++) {
        tableHTML += `<p>${multiplier} × ${i} = ${multiplier * i}</p>`;
    }
    
    tableResult.innerHTML = tableHTML;
    tableResult.style.color = '#2ed573';
});

// Second loop example: Count even numbers
const evenInput = document.getElementById('evenInput');
const countEvenBtn = document.getElementById('countEvenBtn');
const evenResult = document.getElementById('evenResult');

countEvenBtn.addEventListener('click', function() {
    const limit = parseInt(evenInput.value);
    
    if (isNaN(limit) || limit <= 0) {
        evenResult.textContent = 'Please enter a valid number.';
        evenResult.style.color = '#ff4757';
        return;
    }
    
    let count = 0;
    let evenNumbers = [];
    
    // While loop to count even numbers
    let i = 1;
    while (i <= limit) {
        if (i % 2 === 0) {
            count++;
            evenNumbers.push(i);
        }
        i++;
    }
    
    evenResult.innerHTML = `
        <p>There are ${count} even numbers between 1 and ${limit}.</p>
        <p>Even numbers: ${evenNumbers.join(', ')}</p>
    `;
    evenResult.style.color = '#2ed573';
});

// =============================================
// Part 4: DOM interactions
// =============================================

// First DOM interaction: Add items to list
const itemInput = document.getElementById('itemInput');
const addItemBtn = document.getElementById('addItemBtn');
const userList = document.getElementById('userList');

addItemBtn.addEventListener('click', function() {
    const itemText = itemInput.value.trim();
    
    if (itemText === '') {
        alert('Please enter an item name.');
        return;
    }
    
    // Create new list item
    const newItem = document.createElement('li');
    newItem.textContent = itemText;
    
    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    
    // Add event listener to delete button
    deleteBtn.addEventListener('click', function() {
        userList.removeChild(newItem);
    });
    
    // Append delete button to list item
    newItem.appendChild(deleteBtn);
    
    // Append new item to list
    userList.appendChild(newItem);
    
    // Clear input
    itemInput.value = '';
});

// Second DOM interaction: Toggle theme
const themeToggleBtn = document.getElementById('themeToggleBtn');

themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        themeToggleBtn.textContent = 'Switch to Light Mode';
    } else {
        themeToggleBtn.textContent = 'Switch to Dark Mode';
    }
});

// Third DOM interaction: Change page title on blur
const originalTitle = document.title;

window.addEventListener('blur', function() {
    document.title = 'Come back! 😢';
});

window.addEventListener('focus', function() {
    document.title = originalTitle;
});