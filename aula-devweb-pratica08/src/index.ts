// Implementar um algoritmo recursivo que imprima os N primeiros itens da sequência de Fibonacci.
// Exemplo da sequência de Fibonacci com os 10 primeiros números:
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

import { input } from "@inquirer/prompts";

(async () => {

    let n: number = parseInt(await input({message: "Informe a quantidade de elementos de fibonacci deseja gerar:"}));
    let sequencia: number[] = [];

    function fibonacci(sequencia: number[], n: number, anterior: number = 0, atual: number = 1): void {
        if (sequencia.length == n) return;  
        sequencia.push(atual)
        fibonacci(sequencia, n, atual, atual + anterior)
    }
    
    fibonacci(sequencia, n)
    console.log(sequencia);
})();

