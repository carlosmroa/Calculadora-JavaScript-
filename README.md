# Calculadora-JavaScript-
Atividade realizada em sala de aula
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Calculadora</title>
    <script src="calculo.js"></script>
    <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
    <h1>Calculadora</h1>
    <center>
        <div id="grande">
    <div id="primeira">
    </div>
   
    <div id="segunda">
        <input type="text" placeholder="0" id="resposta">
    </div>
   
    <div id="primeira">
    </div>
   
    <div id="separa">
        <button id="azul" onclick="limparDisplay()">AC</button>
        <button id="rosa" onclick="operacao(4)">/</button>
    </div>
   
    <div id="terceira">
        <button id="azul" onclick="adicionarValor(7)">7</button>
        <button id="azul" onclick="adicionarValor(8)">8</button>
        <button id="azul" onclick="adicionarValor(9)">9</button>
        <button id="rosa" onclick="operacao(3)">*</button>
    </div>
    
    <div id="terceira">
        <button id="azul" onclick="adicionarValor(4)">4</button>
        <button id="azul" onclick="adicionarValor(5)">5</button>
        <button id="azul" onclick="adicionarValor(6)">6</button>
        <button id="rosa" onclick="operacao(2)">-</button>
    </div>
   
    <div id="terceira">
        <button id="azul" onclick="adicionarValor(1)">1</button>
        <button id="azul" onclick="adicionarValor(2)">2</button>
        <button id="azul" onclick="adicionarValor(3)">3</button>
        <button id="rosa" onclick="operacao(1)">+</button>
    </div>
    
    <div id="direita">
        <button id="azul" onclick="adicionarValor(0)">0</button>
        <button id="azul" onclick="adicionarValor('.')">.</button>
        <button id="roxo" onclick="calcular()">=</button>
    </div>
    
    <div id="primeira">
    </div>

    </div>
    </center>
</body>
</html>
