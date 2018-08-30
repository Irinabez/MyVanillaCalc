let firstValue= '';
let operandValue= '';
let secondValue= '';

function digit(n) {


  if (operandValue) {
    secondValue +=n;
    write(secondValue);
  } else {
    firstValue +=n;
    write(firstValue);
  }
}

function write(n) {
  document.getElementById('display').value = n;
}
/*function read(n) {
  n = document.getElementById('display').value;
}*/

function operand(operand) {
  console.log (`operand ${operand}`);
  if (firstValue && secondValue && operandValue) getResult();
  operandValue = operand;
}

function getResult() {
  result=0;

  if(operandValue === '+') {
    result = +firstValue + +secondValue;
  }
  if(operandValue === '-') {
    result = +firstValue - +secondValue;
  }
  if(operandValue === '*') {
    result = +firstValue * +secondValue;
  }
  if(operandValue === '/') {
    result = +firstValue / +secondValue;
  }

  write(result);
  setInitialValue(result);
}

function setInitialValue(firstValueByDefault) {
  firstValue = firstValueByDefault;
  operandValue = '';
  secondValue = '';
}


function allClear() {
  //result=0;
  firstValue= '';
  operandValue= '';
  secondValue= '';
  write(0);
}

const sum = (a,b) => a+b;
module.exports = {
  sum,
    write,

};