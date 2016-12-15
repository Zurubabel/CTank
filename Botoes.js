class Botoes {
	
	constructor() {
		this.cima = false;
		this.baixo = false;
		this.esquerda = false;
		this.direita = false;
		this.espaco = false;
	}
	
	botaoPressionado(e) {
		this.alterarBotao(e, true);
	}
	
	botaoSolto(e) {
		this.alterarBotao(e, false);
	}
	
	alterarBotao(input, bool) {
		var botao = input.keyCode;
		if (botao == 87) { // w
			this.cima = bool;
		}
		if (botao == 83) { // s
			this.baixo = bool;
		}
		if (botao == 65) { // a
			this.esquerda = bool;
		}
		if (botao == 68) { // d
			this.direita = bool;
		}
		if (botao == 32) { // Espaço
			this.espaco = bool;
		}		
	}
	
}