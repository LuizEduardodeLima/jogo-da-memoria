var posicoes = [];

var apertou = 0;

var desativar = false;

var figura1, figura2;

var id_1, id_2;

var figuras = ['imagens/01.png', 'imagens/02.png', 'imagens/03.png', 'imagens/04.png', 'imagens/05.png', 'imagens/06.png', 'imagens/07.png', 'imagens/08.png', 'imagens/09.png', 'imagens/10.jpg'];

var copias = ['imagens/01.png', 'imagens/02.png', 'imagens/03.png', 'imagens/04.png', 'imagens/05.png', 'imagens/06.png', 'imagens/07.png', 'imagens/08.png', 'imagens/09.png', 'imagens/10.jpg'];

//Gerar numero aleatório:
var aleatorio = Math.random();
var regressiva = 10;

//Tornandoo valor inteiro:
aleatorio = aleatorio * regressiva;

//Tirando as casas decimais;
aleatorio = Math.floor(aleatorio);

var contador = 0;

var embaralhar = [];

//Pontuação:
var pontos_atuais = 0;


while(contador <= 10){
		//Pega um elemento aleatorio dentro do array:
		aleatorio = figuras[Math.floor(Math.random() * figuras.length)]	
			
		//Controle do loop:
		contador += 1;
			
		//Remove o elemento que foi escolhido aleatoriamente da lista:
		figuras.splice(figuras.indexOf(aleatorio), 1);

		//Adiciona o elemento aleatorio a lista chamada embaralhar:
		embaralhar.push(aleatorio);
		if (contador == 10) {
			contador = 0;
			break;
		}
	}
		
//Pegando evento de click:
$('.pegar_click').click(function(event){
	//Pegando o valor do id:
	id = event.target.id;
			
	if (id == 'um'){
		if(apertou == 0){
			$('#um').attr('src', embaralhar[0]);
			apertou += 1;
			desativar = true;
			figura1 = embaralhar[0];
			id_1 = 'um';

		}else if(apertou == 1 && desativar == true){
			$('#um').attr('src', embaralhar[0]);
			apertou += 1;
			figura2 = embaralhar[0];
			id_2 = 'um';
			verificacao(id_1, id_2);
		}

	}else if (id == 'dois'){
		if(apertou == 0){
			$('#dois').attr('src', embaralhar[1]);
			apertou += 1;
			desativar = true;
			figura1 = embaralhar[1];
			id_1 = 'dois';

		}else if(apertou == 1 && desativar == true){
			$('#dois').attr('src', embaralhar[1]);
			apertou += 1;
			figura2 = embaralhar[1];
			id_2 = 'dois';
			verificacao(id_1, id_2);
		}

	}else if (id == 'tres'){
		if(apertou == 0){
			$('#tres').attr('src', embaralhar[2]);
			apertou += 1;
					desativar = true;
			figura1 = embaralhar[2];
			id_1 = 'tres';

		}else if(apertou == 1 && desativar == true){
			$('#tres').attr('src', embaralhar[2]);
			apertou += 1;
			figura2 = embaralhar[2];
			id_2 = 'tres';
			verificacao(id_1, id_2);
		}

	}else if (id == 'quatro'){
		if(apertou == 0){
			$('#quatro').attr('src', embaralhar[3]);
			apertou += 1;
			desativar = true;
			figura1 = embaralhar[3];
			id_1 = 'quatro';

		}else if(apertou == 1 && desativar == true){
			$('#quatro').attr('src', embaralhar[3]);
			apertou += 1;
			figura2 = embaralhar[3];
			id_2 = 'quatro';
			verificacao(id_1, id_2);
		}


	}else if (id == 'cinco'){
		if(apertou == 0){
			$('#cinco').attr('src', embaralhar[4]);
			apertou += 1;
			desativar = true;
			figura1 = embaralhar[4];
			id_1 = 'cinco';

		}else if(apertou == 1 && desativar == true){
			$('#cinco').attr('src', embaralhar[4]);
			apertou += 1;
			figura2 = embaralhar[4];
			id_2 = 'cinco';
			verificacao(id_1, id_2);
		}

	}else if (id == 'seis'){
		if(apertou == 0){
			$('#seis').attr('src', embaralhar[5]);
			apertou += 1;
			desativar = true;
			figura1 = embaralhar[5];
			id_1 = 'seis';
		}else if(apertou == 1 && desativar == true){
			$('#seis').attr('src', embaralhar[5]);
			apertou += 1;
			figura2 = embaralhar[5];
			id_2 = 'seis';
			verificacao(id_1, id_2);
		}

	}else if (id == 'sete'){
		if(apertou == 0){
			$('#sete').attr('src', embaralhar[6]);
			apertou += 1;
			desativar = true;
			figura1 = embaralhar[6];
			id_1 = 'sete';
		}else if(apertou == 1 && desativar == true){
			$('#sete').attr('src', embaralhar[6]);
			apertou += 1;
			figura2 = embaralhar[6];
			id_2 = 'sete';
			verificacao(id_1, id_2);
		}

	}else if (id == 'oito'){
		if(apertou == 0){
			$('#oito').attr('src', embaralhar[7]);
			apertou += 1;
			desativar = true;
			figura1 = embaralhar[7];
			id_1 = 'oito';
		}else if(apertou == 1 && desativar == true){
			$('#oito').attr('src', embaralhar[7]);
			apertou += 1;
			figura2 = embaralhar[7];
			id_2 = 'oito';
			verificacao(id_1, id_2);
		}


	}else if (id == 'nove'){
		if(apertou == 0){
			$('#nove').attr('src', embaralhar[8]);
			apertou += 1;
			desativar = true;
			figura1 = embaralhar[8];
			id_1 = 'nove';
		}else if(apertou == 1 && desativar == true){
			$('#nove').attr('src', embaralhar[8]);
			apertou += 1;
			figura2 = embaralhar[8];
			id_2 = 'nove';dez
			verificacao(id_1, id_2);
		}


	}else if (id == 'dez'){
		if(apertou == 0){
			$('#dez').attr('src', embaralhar[9]);
			apertou += 1;
			desativar = true;
			figura1 = embaralhar[9];
			id_1 = 'dez';
		}else if(apertou == 1 && desativar == true){
			$('#dez').attr('src', embaralhar[9]);
			apertou += 1;
			figura2 = embaralhar[9];
			id_2 = 'dez';
			verificacao(id_1, id_2);
		}

	}else if (id == 'onze'){
		if(apertou == 0){
			$('#onze').attr('src', embaralhar_copias[0]);
			apertou += 1;
			desativar = true;
			figura1 = embaralhar_copias[0];
			id_1 = 'onze';
		}else if(apertou == 1 && desativar == true){
			$('#onze').attr('src', embaralhar_copias[0]);
			apertou += 1;
			figura2 = embaralhar_copias[0];
			id_2 = 'onze';
			verificacao(id_1, id_2);
		}

	}else if (id == 'doze'){
		if(apertou == 0){
			$('#doze').attr('src', embaralhar_copias[1]);
			apertou += 1;
			desativar = true;
			figura1 = embaralhar_copias[1];
			id_1 = 'doze';
		}else if(apertou == 1 && desativar == true){
			$('#doze').attr('src', embaralhar_copias[1]);
			apertou += 1;
			figura2 = embaralhar_copias[1];
			id_2 = 'doze';
			verificacao(id_1, id_2);
		}

	}else if (id == 'treze'){
		if(apertou == 0){
			$('#treze').attr('src', embaralhar_copias[2]);
			apertou += 1;
			desativar = true;
			figura1 = embaralhar_copias[2];
			id_1 = 'treze';
		}else if(apertou == 1 && desativar == true){
			$('#treze').attr('src', embaralhar_copias[2]);
			apertou += 1;
			figura2 = embaralhar_copias[2];
			id_2 = 'treze';
			verificacao(id_1, id_2);
		}

	}else if (id == 'quatorze'){
		if(apertou == 0){
			$('#quatorze').attr('src', embaralhar_copias[3]);
			apertou += 1;
			desativar = true;
			figura1 = embaralhar_copias[3];
			id_1 = 'quatorze';
		}else if(apertou == 1 && desativar == true){
			$('#quatorze').attr('src', embaralhar_copias[3]);
			apertou += 1;
			figura2 = embaralhar_copias[3];
			id_2 = 'quatorze';
			verificacao(id_1, id_2);
		}


	}else if (id == 'quinze'){
		if(apertou == 0){
			$('#quinze').attr('src', embaralhar_copias[4]);
			apertou += 1;
			desativar = true;
			figura1 = embaralhar_copias[4];
			id_1 = 'quinze';
		}else if(apertou == 1 && desativar == true){
			$('#quinze').attr('src', embaralhar_copias[4]);
			apertou += 1;
			figura2 = embaralhar_copias[4];
			id_2 = 'quinze';
			verificacao(id_1, id_2);
		}


	}else if (id == 'dezesseis'){
		if(apertou == 0){
			$('#dezesseis').attr('src', embaralhar_copias[5]);
			apertou += 1;
			desativar = true;
			figura1 = embaralhar_copias[5];
			id_1 = 'dezesseis';
		}else if(apertou == 1 && desativar == true){
			$('#dezesseis').attr('src', embaralhar_copias[5]);
			apertou += 1;
			figura2 = embaralhar_copias[5];
			id_2 = 'dezesseis';
			verificacao(id_1, id_2);
		}


	}else if (id == 'dezessete'){
		if(apertou == 0){
			$('#dezessete').attr('src', embaralhar_copias[6]);
			apertou += 1;
			desativar = true;
			figura1 = embaralhar_copias[6];
			id_1 = 'dezessete';
		}else if(apertou == 1 && desativar == true){
			$('#dezessete').attr('src', embaralhar_copias[6]);
			apertou += 1;
			figura2 = embaralhar_copias[6];
			id_2 = 'dezessete';
			verificacao(id_1, id_2);
		}


	}else if (id == 'dezoito'){
		if(apertou == 0){
			$('#dezoito').attr('src', embaralhar_copias[7]);
			apertou += 1;
			desativar = true;
			figura1 = embaralhar_copias[7];
			id_1 = 'dezoito';
		}else if(apertou == 1 && desativar == true){
			$('#dezoito').attr('src', embaralhar_copias[7]);
			apertou += 1;
			figura2 = embaralhar_copias[7];
			id_2 = 'dezoito';
			verificacao(id_1, id_2);
		}


	}else if (id == 'dezenove'){
		if(apertou == 0){
			$('#dezenove').attr('src', embaralhar_copias[8]);
			apertou += 1;
			desativar = true;
			figura1 = embaralhar_copias[8];
			id_1 = 'dezenove';
		}else if(apertou == 1 && desativar == true){
			$('#dezenove').attr('src', embaralhar_copias[8]);
			apertou += 1;
			figura2 = embaralhar_copias[8];
			id_2 = 'dezenove';
			verificacao(id_1, id_2);
		}

	}else if (id == 'vinte'){
		if(apertou == 0){
			$('#vinte').attr('src', embaralhar_copias[9]);
			apertou += 1;
			desativar = true;
			figura1 = embaralhar_copias[9];
			id_1 = 'vinte';
		}else if(apertou == 1 && desativar == true){
			$('#vinte').attr('src', embaralhar_copias[9]);
			apertou += 1;
			figura2 = embaralhar_copias[9];
			id_2 = 'vinte';
			verificacao(id_1, id_2);
		}

	}
			
});
		
var embaralhar_copias = []

while(contador <= 10){
	//Pega um elemento aleatorio dentro do array:
	aleatorio = copias[Math.floor(Math.random() * copias.length)]	
			
	//Controle do loop:
	contador += 1;
			
	//Remove o elemento que foi escolhido aleatoriamente da lista:
	copias.splice(copias.indexOf(aleatorio), 1);

	//Adiciona o elemento aleatorio a lista chamada embaralhar:
	embaralhar_copias.push(aleatorio);
	}

$('.pontos').text('(Pontuação): ' + pontos_atuais);

		
function verificacao(id_1, id_2){
	if(figura1 == figura2){
		console.log('ganhou 1 ponto');
		apertou = 0;
		desativar = false;
		pontos_atuais += 10;
		$('.pontos').text('(Pontuação): ' + pontos_atuais);
		if(pontos_atuais == 100){
			alert('Fim de jogo');
		}
	}else{
		console.log('errou');
		setTimeout(function(){
			$('#'+ id_1).attr('src', 'imagens/fundo.jpg');
			$('#'+ id_2).attr('src', 'imagens/fundo.jpg');
			apertou = 0;
			desativar = false;
				}, 2000);
		}
	}