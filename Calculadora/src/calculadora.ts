// Variáveis que guardam o estado da calculadora
let valorAtual: string = '0';
let valorAnterior: number | null = null;
let operacaoPendente: string | null = null;
let limpandoVisor: boolean = false;

// Retorna o valor atual do visor
export function getVisor(): string {
    return valorAtual;
}

// Reseta todo o estado (Botão AC)
export function limparTudo(): void {
    valorAtual = '0';
    valorAnterior = null;
    operacaoPendente = null;
    limpandoVisor = false;
}

// Inserção de números e ponto decimal
export function inserirNumero(numero: string): void {
    if (valorAtual === '0' || limpandoVisor) {
        if (numero === '.') {
            valorAtual = '0.';
        } else {
            valorAtual = numero;
        }
        limpandoVisor = false;
        return;
    }

    if (numero === '.' && valorAtual.includes('.')) {
        return;
    }

    valorAtual = valorAtual + numero;
}

// Define a operação (+, -, *, /)
export function definirOperacao(operacao: string): void {
    if (operacaoPendente !== null && !limpandoVisor) {
        calcular();
    }
    valorAnterior = parseFloat(valorAtual);
    operacaoPendente = operacao;
    limpandoVisor = true;
}

// Realiza o cálculo da operação selecionada
export function calcular(): void {
    if (operacaoPendente === null || valorAnterior === null) {
        return;
    }

    let num1: number = valorAnterior;
    let num2: number = parseFloat(valorAtual);
    let resultado: number = 0;

    if (operacaoPendente === '+') {
        resultado = num1 + num2;
    } else if (operacaoPendente === '-') {
        resultado = num1 - num2;
    } else if (operacaoPendente === '*') {
        resultado = num1 * num2;
    } else if (operacaoPendente === '/') {
        if (num2 === 0) {
            resultado = 0; // Proteção contra divisão por 0
        } else {
            resultado = num1 / num2;
        }
    }

    valorAtual = resultado.toString();
    operacaoPendente = null;
    valorAnterior = null;
    limpandoVisor = true;
}