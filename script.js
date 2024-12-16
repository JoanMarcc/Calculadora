class Calculator {
    constructor() {
    this.history = [];
    }
    add(num1, num2) {
    const result = num1 + num2;
    this.addToHistory(num1, num2, 'add', result);
    return result;
    }
    subtract(num1, num2) {
    const result = num1 - num2;
    this.addToHistory(num1, num2, 'subtract', result);
    return result;
    }
    multiply(num1, num2) {
    const result = num1 * num2;
    this.addToHistory(num1, num2, 'multiply', result);
    return result;
    }
    divide(num1, num2) {
    if (num2 === 0) {
    this.addToHistory(num1, num2, 'divide', 'Error: División por cero');
    return 'Error: División por cero';
    }
    const result = num1 / num2;
    this.addToHistory(num1, num2, 'divide', result);
    return result;
    }
    addToHistory(num1, num2, operation, result) {
    this.history.push({ num1, num2, operation, result });
    }
    getHistory() {
    return this.history;
    }
   }
   const calculator = new Calculator();
   document.getElementById('calculatorForm').addEventListener('submit',
   function (event) {
    event.preventDefault();
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;
    switch (operation) {
    case 'add':
    result = calculator.add(num1, num2);
    break;
    case 'subtract':
    result = calculator.subtract(num1, num2);
    break;
    case 'multiply':
    result = calculator.multiply(num1, num2);
    break;
    case 'divide':
    result = calculator.divide(num1, num2);
    break;
    default:
    result = 'Operación no válida';
    }
    displayResult(result);
    updateHistory(calculator.getHistory());
   });
   function displayResult(result) {
    const resultElement = document.getElementById('result');
    if (typeof result === 'number') {
    resultElement.textContent = `El resultado es: ${result}`;
    } else {
    resultElement.textContent = result;
    }
   }
   function updateHistory(history) {
    const historyElement = document.getElementById('history');
    historyElement.innerHTML = '';
    history.forEach(entry => {
    const li = document.createElement('li');
    li.textContent = `Operación: ${entry.operation}, Números: ${entry.num1} y
   ${entry.num2}, Resultado: ${entry.result}`;
    historyElement.appendChild(li);
    });
   }