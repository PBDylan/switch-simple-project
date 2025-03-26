function calculadora(num1, num2, operacao) {
    switch (operacao) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero!";
        default:
            return "Operação inválida";
    }
}

// Testando com valores fixos
console.log(calculadora(10, 5, "+")); // 15
console.log(calculadora(8, 2, "-")); // 6
console.log(calculadora(6, 3, "*")); // 18
console.log(calculadora(9, 0, "/")); // Erro: Divisão por zero!
console.log(calculadora(7, 3, "x")); // Operação inválida
