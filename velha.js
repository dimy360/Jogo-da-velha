
var jogador, vencedor = null;
var jogadorselecionado = document.getElementById(elementid = 'jogadorselecionado');
var vencedorselecionado= document.getElementById (elementid = 'vencedorselecionado')
var quadrados = document.getElementsByClassName(ClassName = 'quadrado')
mudarjogador(valor = 'x');

function escolherQuadrado(id){
    
    if(vencedor !==null){
        return;
    }

    var quadrado = document.getElementById(id);
    if(quadrado.innerHTML !== '-'){
        return;
    }

    quadrado.innerHTML = jogador;
    
    if (jogador === 'x'){
        jogador = 'o';
    }
    else{

        jogador ='x';
    }
    mudarjogador(jogador);
    checarvencedor();
}

function mudarjogador (valor){
    jogador = valor;
    jogadorselecionado.innerHTML = jogador;

}

function checarvencedor(){
    
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if(checasequencia(quadrado1,quadrado2,quadrado3)){
        mudarcordoquadrado(quadrado1,quadrado2,quadrado3);
        mudarvencedor(quadrado1);
        return;
    }
    
    if(checasequencia(quadrado4,quadrado5,quadrado6)){
        mudarcordoquadrado(quadrado4,quadrado5,quadrado6);
        mudarvencedor(quadrado4);
        return;
    }
    
    if(checasequencia(quadrado7,quadrado8,quadrado9)){
        mudarcordoquadrado(quadrado7,quadrado8,quadrado9);
        mudarvencedor(quadrado7);
        return;
    }
    
    if(checasequencia(quadrado1,quadrado4,quadrado7)){
        mudarcordoquadrado(quadrado1,quadrado4,quadrado7);
        mudarvencedor(quadrado1);
        return;
    }
    if(checasequencia(quadrado2,quadrado5,quadrado8)){
        mudarcordoquadrado(quadrado2,quadrado5,quadrado8);
        mudarvencedor(quadrado2);
        return;
    }
    if(checasequencia(quadrado3,quadrado6,quadrado9)){
        mudarcordoquadrado(quadrado3,quadrado6,quadrado9);
        mudarvencedor(quadrado3);
        return;
    }
    if(checasequencia(quadrado3,quadrado5,quadrado7)){
        mudarcordoquadrado(quadrado3,quadrado5,quadrado7);
        mudarvencedor(quadrado3);
        return;
    }
    if(checasequencia(quadrado1,quadrado5,quadrado9)){
        mudarcordoquadrado(quadrado1,quadrado5,quadrado9);
        mudarvencedor(quadrado1);
        return;
    }
}

function mudarvencedor(quadrado){

    vencedor = quadrado.innerHTML;
    vencedorselecionado.innerHTML = vencedor;
}


function mudarcordoquadrado(quadrado1,quadrado2,quadrado3){


    quadrado1.style.background = 'rgb(6, 223, 35)';
    quadrado2.style.background = 'rgb(6, 223, 35)';
    quadrado3.style.background = 'rgb(6, 223, 35)';
}

   
function checasequencia(quadrado1,quadrado2,quadrado3)
{

    var velha = false;

    if(quadrado1.innerHTML !=='-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        var velha = true;
    }

    return velha;}

function reiniciar()
    {
        vencedor = null;
        vencedorselecionado.innerHTML = '';

        for(var i = 1; i <=9 ; i++){
        var quadrado = document.getElementById(i);    
        quadrado.style.background = 'rgb(226, 224, 222)';
    
        quadrado.innerHTML = '-';
        }

    mudarjogador(valor = 'x');

    }