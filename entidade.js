const canvas = document.getElementById('JogoCanvas');
const ctx = canvas.getContext('2d');

class Entidade {
    constructor(x,y, largura, altura, cor){
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
        this.cor = cor;
    }
    desenhar(){
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
    colideCom(outro) {
        return this.x < outro.x + outro.largura &&
               this.x + this.largura > outro.x &&
               this.y < outro.y + outro.altura &&
               this.y + this.altura > outro.y;
    }
}
class Jogador extends Entidade {
    constructor(x, y){
        super(x, y, 40, 20, 'cyan');
        this.velocidade = 5
        }
        mover(direção){
            if (direção === 'esquerda' && this.x > 0) this.x -= this.velocidade;
            if (direção === 'direita' && this.x + this.largura < canvas.width) this.x += this.velocidade;
        }
    }
class Projeteis {
    constructor(){
        this.lista = [];
    }
    atirar (x, y){
        this.lista.push(new Entidade(x + 15, y, 10, 10, 'yellow'));

    }
}