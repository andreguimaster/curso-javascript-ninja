(function(win, doc){
  'use strict';
  /*
  Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
  As regras são:

  - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
  diretamente;
  - O input deve iniciar com valor zero;
  - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
  - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
  multiplicação(x) e divisão(÷);
  - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
  que irá limpar o input, deixando-o com valor 0;

  - A cada número pressionado, o input deve atualizar concatenando cada valor
  digitado, como em uma calculadora real;
  - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
  operação no input. Se o último caractere no input já for um símbolo de alguma
  operação, esse caractere deve ser substituído pelo último pressionado.
  Exemplo:
  - Se o input tem os valores: "1+2+", e for pressionado o botão de
  multiplicação (x), então no input deve aparecer "1+2x".
  - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
  input;
  - Ao pressionar o botão "CE", o input deve ficar zerado.
  */
  var $display = doc.querySelector('[data-js="display"]');

  var $btDivisao = doc.querySelector('[data-js="btDivisao"]');
  var $btMultiplicacao = doc.querySelector('[data-js="btMultiplicacao"]');
  var $btSubtracao = doc.querySelector('[data-js="btSubtracao"]');
  var $btSoma = doc.querySelector('[data-js="btSoma"]');
  var $btResultado = doc.querySelector('[data-js="btResultado"]');

  var functions = [];
  functions.push(function(){ putInDisplay(0) });
  functions.push(function(){ putInDisplay(1) });
  functions.push(function(){ putInDisplay(2) });
  functions.push(function(){ putInDisplay(3) });
  functions.push(function(){ putInDisplay(4) });
  functions.push(function(){ putInDisplay(5) });
  functions.push(function(){ putInDisplay(6) });
  functions.push(function(){ putInDisplay(7) });
  functions.push(function(){ putInDisplay(8) });
  functions.push(function(){ putInDisplay(9) });

  var operation = {
    '+' : function(a, b){return (+a) + (+b);},
    '-' : function(a, b){return (+a) - (+b);},
    '*' : function(a, b){return (+a) * (+b);},
    '/' : function(a, b){return (+a) / (+b);}
  }

  $btDivisao.addEventListener('click', function(){
    putInDisplay('/');
  }, false);

  $btMultiplicacao.addEventListener('click', function(){
    putInDisplay('*');
  }, false);

  $btSubtracao.addEventListener('click', function(){
    putInDisplay('-');
  }, false);

  $btSoma.addEventListener('click', function(){
    putInDisplay('+');
  }, false);

  $btResultado.addEventListener('click', function(){
    calc();
  }, false);

  for(var i = 0; i < 10; i++){
    var btn = doc.querySelector('[data-js="bt'+ i +'"]');

    btn.addEventListener('click', functions[i], false);
  }

  function calc(){
    removeLastIfOperator();

    var numbers = getNumbers();
    var operators = getOperators();

    var total = numbers[0];

    operators.forEach(function(item, index){
      total = operation[item](total, numbers[(index + 1)])
    })

    $display.value = total;
  }

  function getNumbers(){
    return $display.value.match(/[\d.]+/g);
  }

  function getOperators(){
    return $display.value.match(/[+-/*]/g);
  }

  function putInDisplay(valor){
    if(operation[valor] && isLastAnOperator()){
       $display.value = $display.value.replace(/[+\-\/*]$/, valor);
      return;
    }

    if(isDisplayClean()){
      $display.value = valor;
      return;
    }

    $display.value += valor;
  }

  function isDisplayClean(){
    return $display.value === '0';
  }

  function isLastAnOperator(){
    return /[+\-\/*]$/.test($display.value);
  }

  function removeLastIfOperator(){
    $display.value = $display.value.replace(/[+\-\/*]$/, '');
  }

})(window, document);
