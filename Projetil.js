class Projetil {
	constructor(coordenadas) {
		this.x = coordenadas.x;
		this.y = coordenadas.y;
		this.cor = "#FF0000";
		this.pps = 200;
	}
	
	animar(diferencaTempo) {
		this.movimentar(diferencaTempo);
		this.desenhar();
	}
	
	movimentar(diferencaTempo) {
		let taxaMovimentacao = (diferencaTempo / 1000) * this.pps;
		this.x -= taxaMovimentacao;
	}
	
	concluiuTrajetoria() {
		return this.x <= -20;
	}
	
	desenhar() {
		var anguloInicial = 0;
		var anguloFinal = 2 * Math.PI;
		var raio = 10;
		context.beginPath();
		context.arc(this.x, this.y, raio, anguloInicial, anguloFinal);
		context.fillStyle = this.cor;
		context.fill();
		context.stroke();
	}
	
}