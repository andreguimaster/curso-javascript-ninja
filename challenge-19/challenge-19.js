(function(){
	'use strict';
	/*
	1. Envolva todo o conte�do desse desafio em uma IIFE.
	2. Adicione a diretiva 'use strict';
	3. Crie um arquivo index.html e adicione esse script � ele.
	*/

	/*
	Alguns detalhes importantes que faltou falar na aula:
	1. O objeto RegExp() pode receber um segundo par�metro, que s�o as flags:
	- var justNumbersAndLetters = new RegExp( '[\\da-z]', 'gi' );
	2. Como a express�o regular passada para o objeto RegExp() � uma string,
	ela pode ser concatenada para gerar uma regex em tempo de execu��o,
	diferente da regex literal, onde toda a regex precisa estar pronta antes
	da utiliza��o.
	*/

	/*
	- Usando o construtor de Regex, crie uma regex que case somente com n�meros
	no in�cio da string. O match precisa ser feito para todas as
	correspond�ncias de qualquer string, n�o somente para a primeira, ainda que
	esta tenha muitas linhas, deve sempre casar com n�meros no in�cio de cada
	linha, independente de quantos caracteres de n�mero estiverem juntos.
	- Atribua essa regex � uma vari�vel chamada `justNumbersRegex` e mostre-a
	no console:
	*/
	console.log( 'Regex para n�meros usando o construtor:' );
	var justNumbersRegex = new RegExp('^\\d+','gm');
	console.log(justNumbersRegex);

	/*
	Verifique se a regex acima casa com o texto na vari�vel `text`, mostrando o
	resultado no console. O resultado deve ser:
	"[ '10', '50' ]"
	*/
	var text = '10 anos.\n50 discos vendidos.\nE nem 10% dos meus amigos o conhece.';
	console.log( '\nN�meros no in�cio da linha do texto:\n' + text, '\n' );
	console.log(text.match(justNumbersRegex));

	/*
	- Crie uma regex que case com n�meros no final de uma string. Atribua a
	regex � uma vari�vel chamada `numbersAtTheEnd`.
	- A regex deve casar com todas as correspond�ncias de qualquer string, ainda
	que esta tenha muitas linhas, deve sempre casar com n�meros no fim de cada
	linha, independente de quantos caracteres de n�mero estiverem juntos.
	Mostre a regex no console:
	*/
	console.log( '\nRegex para n�meros somente no final das linhas:' );
	var numbersAtTheEnd = new RegExp('(\\d+)$','gm');
	console.log(numbersAtTheEnd);

	/*
	Verifique se a regex acima casa com o texto na vari�vel `otherText`,
	mostrando o resultado no console.
	O resultado deve ser:
	"[ '12', '6' ]"
	*/
	var otherText = 'Silvio Santos, nome art�stico de Senor Abravanel (Rio de Janeiro, 12\n de dezembro de 1930), � um apresentador de televis�o e empres�rio brasileiro.\n Propriet�rio do Grupo Silvio Santos, que inclui empresas como a Lideran�a\n Capitaliza��o (administradora da loteria Tele Sena), a Jequiti Cosm�ticos e o\n Sistema Brasileiro de Televis�o (mais conhecido como SBT), Silvio Santos possui\n um patrim�nio avaliado em aproximadamente 6\n bilh�es de reais.';
	console.log( '\nN�meros no final da linha:\n\n', otherText, '\n' );
	console.log(otherText.match(numbersAtTheEnd));

	/*
	Vamos criar um m�todo que vai testar se uma classe CSS existe em uma
	marca��o HTML.
	- Primeiro, crie uma fun��o chamada `hasClass`;
	- Essa fun��o receber� dois par�metros: o primeiro chamado `markup`, que
	ser� a marca��o HTML testada, e o segundo `cssClass`, que ser� a classe que
	iremos testar;
	- A fun��o deve retornar `true` se a classe existir na marca��o e `false`
	caso contr�rio;
	- A marca��o usada para testar deve ser a que est� na vari�vel `markup`
	abaixo;
	- N�o altere a marca��o na vari�vel markup!
	- Fa�a o teste, mostrando no console o resultado para as seguintes classes:
	- "container", "text", "date", "excerpt" e "main".
	- O console deve exibir a frase:
	"[RESULTADO] para a classe [CLASSE]"
	- Ex. de resposta:
	"true para a classe container"
	- Teste uma classe por vez (um console.log por classe).
	- Lembrando que a fun��o deve funcionar para qualquer marca��o HTML e para
	qualquer classe que for testada. Os dados passados no exerc�cio s�o somente
	para exemplificar.
	*/
	var markup = '<main>\n  <div class="container">\n    <span class="text date"></span>\n    <p class=\'excerpt\'></p>\n  </div>\n</main>';
	console.log( '\nQuais classes CSS existem na marca��o abaixo?\n\n', markup, '\n' );
	
	function hasClass(markup, cssClass){
		var regex = new RegExp('(?:.+)(?:class=[\"\'](.*?' + cssClass + '.*?)[\"\'])', 'gm');

		return regex.test(markup);
	}

	console.log(hasClass(markup, 'text'), 'para a classe text');
	console.log(hasClass(markup, 'date'), 'para a classe date');
	console.log(hasClass(markup, 'excerpt'), 'para a classe excerpt');
	console.log(hasClass(markup, 'main'), 'para a classe main');

})();