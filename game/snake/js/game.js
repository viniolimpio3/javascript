//variáveis do jogo
var canvas, context/*associado com o canvas - serve para estilizar todo o 2d do canvas*/, altura, largura/*altura e largura da tela do user*/, frames = 0;
var maxPulos = 3;

//objetos
var chao = {//props do chão
    y:550,
    h:50,
    color: "#0ee00eec",
    desenhaChao: function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(0, this.y, largura, this.h);//desenha o chão com a API 2d do canvas
    }

};

var bloco = {
    x:50,//posição inicial do block no eixo x
    y:0,
    h:50,
    w:50,
    color:'#f53232',
    gravity:1,
    velocidade: 0,
    forcaPulo:15,
    qtdPulos:0,
    atualizaVelocidade: function(){
        //velocidade está em função da gravidade
        //e a altura muda de acordo com a velocidade!!!!
        this.velocidade += this.gravity;
        this.y += this.velocidade;
        if( this.y > chao.y - this.h ) this.y = chao.y - this.h;//se o yBloco == yChao - altura do bloco ? yBloco = yChao - altura do bloco
    },
    pula:function(){
        if(this.y == chao.y - this.h) this.qtdPulos = 0;
        this.qtdPulos++;
        if(this.qtdPulos <= maxPulos) this.velocidade = - this.forcaPulo;
        
    },
    desenhaBloco: function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
};

var inimigos = {
    individuos:[],
    cores:['#196f4b', '#595559', '#98c1e9', '#1786cb', '#14936f', '#ef936f'],
    insereIndividuos:function(){
        this.individuos.push({//objeto bloco do individuo
            x: largura,//faz com que os blocos começem no x - largura máxima - dentro do canvas
            w: 30 + Math.floor(21 * Math.random()),//.floor() = pega a parte inteira | . random() = sorteia um número (entre 0 e 50 px)
            h: 30 + Math.floor(91 * Math.random()),
            color: this.cores[6 * Math.random()]
        });
    },
    atualizaInimigo:function(){

    },
    desenhaIndividuos:function(){
        for(individuo of this.individuos){
            ctx.fillStyle = this.color;
            var y = chao.y - this.individuos.h;
            ctx.fillRect(this.individuos.x, y, this.individuos.w, this.individuos.h);
        }
    }
}


//função constructor
function main(){

    var body = document.body;

    altura = window.innerHeight;
    largura = window.innerWidth;

    if(largura >= 500){
        largura = 600;
        altura = 600;
    }

    

    canvas = document.createElement('canvas');
    canvas.width = largura;
    canvas.height = altura;
    canvas.style.border = "1px solid #000";

    body.appendChild(canvas);

    ctx = canvas.getContext('2d');//The getContext() method returns an object that provides methods and properties for drawing on the canvas.

    var clique = document.addEventListener('mousedown', clicou);//toda vez que tiver um clique, ele chama a function clicou!
    
    var up = document.onkeydown = function(e){
        var arrow = e.keyCode;
        if(arrow == 38) clicou();
    }

    roda();

}

// outras functions
function clicou(e){
    bloco.pula();
}

function roda(){//loop - atualiza e desenha na canvas
    atualiza();
    desenha();

    window.requestAnimationFrame(roda);// como setInterval - continua rodando
}

function atualiza(){//atualiza status do personagem
    frames++;
    bloco.atualizaVelocidade();
}

function desenha(){//desenha personagens, blocos...
    ctx.fillStyle = "#46a8ce";
    ctx.fillRect(0,0,largura, altura);//params -> (x-posicao inicial, y-posicao inicial, largura, altura) - API Do canvas 2d
    
    chao.desenhaChao();//props do tipo método do objeto chão
    inimigos.desenhaIndividuos();
    bloco.desenhaBloco();
}

main();