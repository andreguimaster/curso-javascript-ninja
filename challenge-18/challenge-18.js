(function(){
	'use strict';
	/*
	1. Envolva todo o conte�do desse desafio em uma IIFE.
	2. Adicione a diretiva 'use strict';
	3. Crie um arquivo index.html e adicione esse script � ele.
	*/

	/*
	Crie uma fun��o chamada `cleanCPF`, que receba um CPF por par�metro, e
	retorne esse CPF limpo (somente os n�meros).
	Usando os CPFs abaixo, mostre no console que a limpeza funciona para todos
	eles! Use um console.log para cada CPF.
	- "049-214 3421-1"
	- "210.458.522-05"
	- "735 500 794 - 22"
	- "101.123-131x32"
	*/
	console.log( 'Limpando CPFs:' );
	
	function clearCPF(cpf){
		return cpf.match(/\d/g).join('');
	}

	console.log('049-214 3421-1 ->', clearCPF('049-214 3421-1'));
	console.log('210.458.522-05 ->', clearCPF('210.458.522-05'));
	console.log('735 500 794 - 22 ->', clearCPF('735 500 794 - 22'));
	console.log('101.123-131x32 ->', clearCPF('101.123-131x32'));

	/*
	Usando os CPFs limpos acima, deixe-os com a formata��o correta de CPF.
	Ex.: "999.999.999-99"
	Mostre o resultado no console.
	*/
	console.log( '\nFormatando CPFs corretamente:' );
	
	function formatCPF(cpf){
		var captura = cpf.match(/(\d{3})(\d{3})(\d{3})(\d{2})/);
		
		return captura[1] + '.' + captura[2] + '.' + captura[3] + '-' + captura[4];
	}

	console.log(formatCPF('10784329702'));

	/*
	Crie uma express�o regular que fa�a match com as palavras "junho" ou "julho",
	usando o m�nimo de caracteres poss�veis na regex.
	Para garantir que a regex funciona, teste-a usando o m�todo match. Se houver
	o match, o m�todo retorna um array com os matches. Caso contr�rio, ele
	retornar� null.
	Mostre no console o resultado do match para a frase:
	"Os meses de janeiro, junho e julho come�am com a letra j."
	O resultado deve ser:
	["junho", "julho"]
	*/
	console.log( '\nMatch com as palavras "junho" ou "julho" para a frase "Os meses de janeiro, junho e julho come�am com a letra j.":' );
	console.log('Os meses de janeiro, junho e julho come�am com a letra j.'.match(/j\w{3}o/g));

	/*
	Crie uma express�o regular que fa�a o match com a abertura de uma tag
	HTML qualquer.
	Ex.: "<div>", "<section>", "<blockquote>".
	Use o m�todo match e fa�a o teste com a marca��o abaixo:
	"<div><section><blockquote>Texto <img /></blockquote></section></div>"
	O resultado deve ser:
	["<div>", "<section>", "<blockquote>"]
	*/
	console.log( '\nMatch com a abertura de uma tag HTML:' );
	console.log('<div><section><blockquote>Texto <img /></blockquote></section></div>'.match(/<\w*>/g));

	/*
	Crie uma express�o regular que fa�a o match com uma tag HTML vazia, casando
	com a abertura e fechamento da tag.
	Ex.: "<div></div>", "<section></section>", "<blockquote></blockquote>".
	Use o m�todo match e fa�a o teste com a marca��o abaixo:
	"<div><ul><li></li><li></li><li><span></span></li></ul></div>"
	O resultado deve ser:
	["<li></li>", "<li></li>", "<span></span>"]
	*/
	console.log( '\nMatch com tags HTML vazias (abertura e fechamento da tag):' );
	console.log('<div><ul><li></li><li></li><li><span></span></li></ul></div>'.match(/<\w*><\/\w*>/g));

	/*
	Vamos complicar um pouco agora :D

	Crie uma express�o regular que fa�a o match com um texto existente dentro de
	uma tag HTML. O texto deve ser capturado e substitu�do por:
	'O texto dentro da tag "[NOME DA TAG]" � "[TEXTO]"'

	Use a marca��o abaixo para fazer o replace:
	"<h1>T�tulo da p�gina</h1><p>Este � um par�grafo</p><footer>Rodap�</footer>"

	A marca��o deve permanecer como est�, somente o texto deve ser substitu�do.
	No replace, utilize quebras de linha para deixar uma tag por linha.

	O resultado deve ser esse:
	<h1>O texto dentro da tag "h1" � "T�tulo da p�gina"</h1>
	<p>O texto dentro da tag "p" � "Este � um par�grafo"</p>
	<footer>O texto dentro da tag "footer" � "Rodap�"</footer>

	Uma dica: fa�a o match aos poucos. Para facilitar o teste, use o site
	https://regex101.com/#javascript e verifique se as capturas est�o
	corretas, para depois aplicar no c�digo ;)
	*/
	console.log( '\nFazer replace dos textos das tags:' );

	var replaceTags = '<h1>T�tulo da p�gina</h1><p>Este � um par�grafo</p><footer>Rodap�</footer>'.replace(/(<(\w*)>)([\w\s�-�]*)(<\/\w*>)/g, 
		function(acumulado, captura1, captura2, captura3, captura4){

		return captura1 + 'O texto dentro da tag \"' + captura2 + '\" � \"'+ captura3 +'\"' + captura4 + '\n';
	})

	console.log(replaceTags);
	
})();