(function(win, doc, DOM) {
  'use strict';
  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

  var app = (function appController(){
    return {
      init : function init(){
        this.carregarDadosCompanhia();
        this.initEvents();
      },

      initEvents : function initEvents(){
        DOM('[data-js="form-registro"]').on('submit', this.handleSubmit);
      },

      carregarDadosCompanhia : function carregarDadosCompanhia(){
        var ajax = new XMLHttpRequest();
        ajax.open('GET','company.json');
        ajax.send();
        ajax.addEventListener('readystatechange', this.handleDadosCompanhia, false);
      },

      handleDadosCompanhia : function handleDadosCompanhia(){
        if(!app.isRequestOk.call(this))
          return;

        var dados = JSON.parse(this.responseText);
        var $nomeCompanhia = new DOM('[data-js="nomeCompanhia"]').get();
        var $telefoneCompanhia = new DOM('[data-js="telefoneCompanhia"]').get();
        $nomeCompanhia.innerHTML = dados.name;
        $telefoneCompanhia.innerHTML = dados.phone;
      },

      handleSubmit : function handleSubmit(event){
        event.preventDefault();

        var $corpoTabela = new DOM('[data-js="corpoTabela"]').get();
        $corpoTabela.appendChild(app.criarNovoCarro());
      },

      criarNovoCarro : function criarNovoCarro(){
        var $fragment = doc.createDocumentFragment();
        var $tr = doc.createElement('tr');

        var $tdModelo = doc.createElement('td');
        var $tdAno = doc.createElement('td');
        var $tdPlaca = doc.createElement('td');
        var $tdCor = doc.createElement('td');

        $tdModelo.textContent = new DOM('[data-js="modelo"]').get().value;
        $tdAno.textContent = new DOM('[data-js="ano"]').get().value;
        $tdPlaca.textContent = new DOM('[data-js="placa"]').get().value;
        $tdCor.textContent = new DOM('[data-js="cor"]').get().value;

        $tr.appendChild($tdModelo);
        $tr.appendChild($tdAno);
        $tr.appendChild($tdPlaca);
        $tr.appendChild($tdCor);

        return $fragment.appendChild($tr);
      },

      isRequestOk : function isRequestOk(){
        return this.readyState === 4 && this.status === 200;
      }
    }
  })();

  app.init();

})(window, document, window.DOM);
