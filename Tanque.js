class Tanque {
	
	constructor() {
		//Atributos do tanque
		this.x = 50;
		this.y = 50;
		// Atributos do corpo do tanque
		this.comprimento = 50;
		this.altura = 30;
		// Atributos do canhão
		this.anguloInicial = 1.23 * Math.PI;
		this.anguloFinal = 0.81 * Math.PI;
		this.raio = (Math.round(this.altura * 0.3));
		// Atributos de movimento
		this.pps = 60;
		// Atributos do tiro
		this.taxaDeTiros = 20;
		this.proximoTiro = 0;
		
	}
	
	desenhar(diferencaTempo) {
		// Movimento
		this.movimentar(diferencaTempo);
		// Desenho tanque
		context.beginPath();
		// Corpo
		this.desenharCorpoTanque();
		// Canhão
		this.desenharCanhaoTanque();
	}
	
	movimentar(diferencaTempo) {
		var taxaMovimentacao = (diferencaTempo / 1000) * this.pps;
		if (botoes.cima) {
			this.y -= taxaMovimentacao;
		}
		if (botoes.baixo) {
			this.y += taxaMovimentacao;
		}
		if (botoes.esquerda) {
			this.x -= taxaMovimentacao;
		}
		if (botoes.direita) {
			this.x += taxaMovimentacao;
		}
		if (botoes.espaco) {
			this.proximoTiro += diferencaTempo / 10;
			if (this.proximoTiro >= this.taxaDeTiros ) {
				let coordenadas = {};
				coordenadas.x = this.x - 20;
				coordenadas.y = this.y + (this.altura / 2);
				projeteisCriados.push(new Projetil(coordenadas));
				this.proximoTiro = 0;
			}
			
		}
		
	}
	
	desenharCorpoTanque() {
		context.moveTo(this.x,this.y);
		context.rect(this.x, this.y, this.comprimento, this.altura);
		context.fillStyle = "#35FF20"
		context.fill();
		context.lineWidth = 2;
		context.strokeStyle = "black";
		context.stroke();
	}
	
	desenharCanhaoTanque() {
		context.beginPath();
		context.arc(this.x + Math.round(this.comprimento * 0.7) , this.y + Math.round(this.altura * 0.5), this.raio, this.anguloInicial, this.anguloFinal);
		context.lineTo(this.x - Math.round(this.comprimento * 0.2), this.y + Math.round(this.altura * 0.65));
		context.lineTo(this.x - Math.round(this.comprimento * 0.2), this.y + Math.round(this.altura * 0.3));
		context.fillStyle = "#FF0000";
		context.fill();
		context.closePath();
		context.stroke();
	}
	
}