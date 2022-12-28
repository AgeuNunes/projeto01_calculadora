var n1 = '0';
var operacao = null;
var n2 = '';

function mostrarDisplay(valor) {
    document.querySelector('#display').innerHTML = valor;
}

function incluirDigito(digito) {
    if (n2 && operacao && clickIgual) {
        limpar();
        clickIgual = false;
        n1 = digito;
        mostrarDisplay(n1);
        return;
    }
    if (operacao !== null) {
        n2 += digito;
        mostrarDisplay(n2);
    } else {
        if (n1 === '0') {
            n1 = digito;
        } else {
            n1 += digito;
        }
        mostrarDisplay(n1);
    }
}

function calcular() {
    var _n1 = parseFloat(n1);
    var _n2 = parseFloat(n2);
    var calculo = 0

    switch (operacao) {
        case '+':
            calculo = _n1 + _n2;
            break;
        case '-':
            calculo = _n1 - _n2;
            break;
        case '*':
            calculo = _n1 * _n2;
            break;
        case '/':
            calculo = _n1 / _n2;
            break;
    }
    return calculo;
}

var clickIgual = false;

function iniciarCalculo(simbolo) {
    if (clickIgual) {
        clickIgual = false;
        n2 = '';
    }
    if (operacao === null || n2 === '') {
        operacao = simbolo;
    } else {
        var resultado = calcular();
        n1 = resultado;
        operacao = simbolo;
        n2 = '';
        mostrarDisplay(n1);
    }
}

function finalizarCalculo() {
    clickIgual = true;
    var resultado = calcular();
    n1 = resultado;
    mostrarDisplay(n1);
}

function incluirPonto() {
    if (operacao && n2 === '') {
        n2 = '0.';
    } else if (operacao && n2) {
        n2 += '.';
    } else {
        n1 += '.';
    }
}

function limpar() {
    n1 = '0';
    operacao = null;
    n2 = '';
    mostrarDisplay(n1);
}

function obterPorcento() {
    if (!n2) {
        limpar();
        mostrarDisplay(n1);
    } else {
        if (operacao === '+' || operacao === '-') {
            var porcento = n1 * n2 / 100;
        } else {
            var porcento = n2 / 100;
        }
        n2 = porcento;
        mostrarDisplay(n2);
    }
}