
var num1;
var pressionouOperacao = "nao";
var op1;
var terminouOperacao = "n";
var cont = 0;

function botao(num) {

    if (pressionouOperacao == "sim" || terminouOperacao == "s") {
        document.calc.visor.value = "";
        document.calc.visor.value = num;
        cont = 1; // reinicia o visor da segunda setença//
        pressionouOperacao = "nao"; // retonar não para a variavel//
        terminouOperacao = "n"; // retonar não para a variavel//
    }
    else {
        var salvo = document.calc.visor.value;

        cont++;//com esse contador limito a quantidade de caracteres no visor para 10//
        if (cont <= 10) { //limitador de numeros no visor//
            document.calc.visor.value = salvo + num;
        } //este trecho serve para que possa ser digitado mais de um numero no visor, ex. 123//
        else
            alert("Maximo de 10 numeros");
    }
}

function operacao(op) {
    op1 = op; // recebe a operação//
    num1 = document.calc.visor.value; // salva o primeiro numero antes da operação//
    pressionouOperacao = "sim"; //verificação se ouve um operador matematico apertado//
}

function calcule() {
    var total = 0;
    if (op1 == "/") {
        total = (parseFloat(num1) / parseFloat(document.calc.visor.value));
    }

    if (op1 == "*") {
        total = (parseFloat(num1) * parseFloat(document.calc.visor.value));
    }

    if (op1 == "+") {
        total = (parseFloat(num1) + parseFloat(document.calc.visor.value));
    }

    if (op1 == "-") {
        total = (parseFloat(num1) - parseFloat(document.calc.visor.value));
    }
    document.calc.visor.value = total;
    terminouOperacao = "s";
}