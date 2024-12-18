/**
 * Clase que representa una calculadora
 */
class Calculator {
    /**
     * El constructor contiene un array donde almacena el historial
     */
    constructor() {
    this.history = [];
    }

    /**
     * Realiza una suma
     * @param {number} num1 - El primer número.
     * @param {number} num2 - El segundo número.
     * @returns {number} El resultado de la operación de las dos variables
     */
    add(num1, num2) {
    const result = num1 + num2;
    this.addToHistory(num1, num2, 'add', result);
    return result;
    }

    /**
     * Realiza una resta
     * @param {number} num1 - El primer número.
     * @param {number} num2 - El segundo número.
     * @returns {number} El resultado de la operación de las dos variables
     */
    subtract(num1, num2) {
    const result = num1 - num2;
    this.addToHistory(num1, num2, 'subtract', result);
    return result;
    }

    /**
     * Realiza una multiplicación
     * @param {number} num1 - El primer número.
     * @param {number} num2 - El segundo número.
     * @returns {number} El resultado de la operación de las dos variables
     */
    multiply(num1, num2) {
    const result = num1 * num2;
    this.addToHistory(num1, num2, 'multiply', result);
    return result;
    }

    /**
     * Realiza una división
     * @param {number} num1 - El primer número.
     * @param {number} num2 - El segundo número.
     * @returns {number} El resultado de la operación de las dos variables
     */
    divide(num1, num2) {
    if (num2 === 0) {
    this.addToHistory(num1, num2, 'divide', 'Error: División por cero');
    return 'Error: División por cero';
    }
    const result = num1 / num2;
    this.addToHistory(num1, num2, 'divide', result);
    return result;
    }

    /**
     * Guarda la operación en el historial
     * @param {number} num1 - El primer número.
     * @param {number} num2 - El segundo número.
     * @param {string} operation - La operación que se ha hecho.
     * @param {number} result - El resultado de la operación.
     */
    addToHistory(num1, num2, operation, result) {
    this.history.push({ num1, num2, operation, result });
    }
    /**
     * Recibe el historial de las operaciones.
     * @returns {array} - Muestra las operaciones anteriores.
     */
    getHistory() {
    return this.history;
    }
   }
   /**
    * Se crea una variable con la clase calculator.
    */
   const calculator = new Calculator();

   /**
    * Una vez que se hace submit se ejecuta esta función.
    */
   document.getElementById('calculatorForm').addEventListener('submit',
   function (event) {
    
    /**
     * No ejecuta lo que habitualmente hace.
     */
    event.preventDefault();

    /**
     * Coge los parametros para la operación
     * @param {number} num1 - El primer número.
     * @param {number} num2 - El segundo número.
     * @param {string} operation - El valor de la operación.
     * @param {number} result - El resultado de la operación.
     */
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    /**
     * Dependiendo del valor de la operation ejecutará diferentes casos.
     */
    switch (operation) {

    /**
     * En el caso de suma
     * @param {number} num1 - El primer número.
     * @param {number} num2 - El segundo número.
     */
    case 'add':
    result = calculator.add(num1, num2);
    break;

    /**
     * En el caso de resta
     * @param {number} num1 - El primer número.
     * @param {number} num2 - El segundo número.
     */
    case 'subtract':
    result = calculator.subtract(num1, num2);
    break;

    /**
     * En el caso de multiplicación
     * @param {number} num1 - El primer número.
     * @param {number} num2 - El segundo número.
     */
    case 'multiply':
    result = calculator.multiply(num1, num2);
    break;

    /**
     * En el caso de división
     * @param {number} num1 - El primer número.
     * @param {number} num2 - El segundo número.
     */
    case 'divide':
    result = calculator.divide(num1, num2);
    break;

    /**
     * Si el valor es incorrecto no se ejecuta.
     */
    default:
    result = 'Operación no válida';
    }

    /**
     * Muestra el resultado de la operación.
     */
    displayResult(result);

    /**
     * Actualiza el historial después de cada operación.
     */
    updateHistory(calculator.getHistory());
   });

   /**
    * Muestra el resultado acompañado de un texto.
    * @param {*} result 
    */
   function displayResult(result) {
    const resultElement = document.getElementById('result');
    if (typeof result === 'number') {
    resultElement.textContent = `El resultado es: ${result}`;
    } else {
    resultElement.textContent = result;
    }
   }

   /**
    * Añade la nueva operación al array del historial.
    * @param {*} history 
    */
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

   /**
    * Exporta las funciones y los modulos.
    * @module - Calculator
    */
   module.exports = {Calculator,
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b !== 0 ? a / b : 'Error: División por cero'
};