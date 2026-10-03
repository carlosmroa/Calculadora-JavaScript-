var valor1;
var valor2;
var opera;

function adicionarValor(valor) {
    const display = document.getElementById("resposta");
    display.value += valor;
}

function limparDisplay() {
    document.getElementById("resposta").value = null;
}

function operacao(op){
    valor1 = parseFloat(document.getElementById("resposta").value);
    opera = op;
    document.getElementById("resposta").value = "";
}

function calcular(){
    var res;
    valor2 = parseFloat(document.getElementById("resposta").value);
    if(opera == 1){
        res = valor1 + valor2;
    }else if(opera == 2){
        res = valor1 - valor2;
    
    }else if(opera == 3){
        res = valor1 * valor2;
    
    }else if(opera == 4){
        res = valor1 / valor2;
    }
    document.getElementById("resposta").value = "";
    document.getElementById("resposta").value = res;
}
