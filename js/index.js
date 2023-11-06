const operand1Input = document.getElementById('numero-1');
const operand2Input = document.getElementById('numero-2');
const resultInput = document.getElementById('total');

const reset = () => {
  operand1Input.value = '';
  operand2Input.value = '';
  resultInput.value = '';
};

const sumar = () => {
  const operand1 = parseFloat(operand1Input.value);
  const operand2 = parseFloat(operand2Input.value);
  if (!isNaN(operand1) && !isNaN(operand2)) {
    resultInput.value = operand1 + operand2;
  }
};

const restar = () => {
  const operand1 = parseFloat(operand1Input.value);
  const operand2 = parseFloat(operand2Input.value);
  if (!isNaN(operand1) && !isNaN(operand2)) {
    resultInput.value = operand1 - operand2;
  }
};

const multiplicar = () => {
  const operand1 = parseFloat(operand1Input.value);
  const operand2 = parseFloat(operand2Input.value);
  if (!isNaN(operand1) && !isNaN(operand2)) {
    resultInput.value = operand1 * operand2;
  }
};

const dividir = () => {
  const operand1 = parseFloat(operand1Input.value);
  const operand2 = parseFloat(operand2Input.value);
  
  if (isNaN(operand1) || isNaN(operand2)) {
    resultInput.value = 'Indeterminado';
  } else if (operand2 === 0) {
    resultInput.value = 'Error: División por cero';
  } else {
    resultInput.value = operand1 / operand2;
  }
};
