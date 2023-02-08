function start() {
  var buttonCalculateImc = document.querySelector("#button-calculate-imc");
  buttonCalculateImc.addEventListener("click", buttonClick);

  var inputPeso = document.querySelector("#input-peso");
  var inputAltura = document.querySelector("#input-altura");

  inputPeso.addEventListener("input", buttonClick);
  inputAltura.addEventListener("input", buttonClick);

  buttonClick();
}

function calculateImc(peso, altura) {
  return peso / (altura * altura);
}

function buttonClick() {
  var inputPeso = document.querySelector("#input-peso");
  var inputAltura = document.querySelector("#input-altura");
  var imcResult = document.querySelector("#imcResult");

  var peso = Number(inputPeso.value);
  var altura = Number(inputAltura.value);

  var imc = calculateImc(peso, altura);
  var formatarIMC = imc.toFixed(2).replace(".", ",");
  imcResult.textContent = formatarIMC;

  if (imc < 18.5) {
    classficacao.textContent = "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 25) {
    classficacao.textContent = "Peso ideal";
  } else if (imc >= 25 && imc < 30) {
    classficacao.textContent = "Levemente acima do peso";
  } else if (imc >= 30 && imc < 35) {
    classficacao.textContent = "Obesidade grau I";
  } else if (imc >= 35 && imc < 40) {
    classficacao.textContent = "Obesidade grau II (severa)";
  } else if (imc >= 40) {
    classficacao.textContent = "Obesidade grau III (mórbida)";
  }
}

start();


/*
IMC Calculator é um projeto simples escrito em JavaScript, 
criado com o objetivo de treinar e aprimorar conhecimentos na 
linguagem. Este projeto permite ao usuário calcular seu Índice de 
Massa Corpórea (IMC) a partir da inserção de seu peso e altura. O 
resultado é exibido com uma mensagem simples, indicando se o usuário 
está abaixo, dentro ou acima do peso ideal.
*/