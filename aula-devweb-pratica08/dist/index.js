"use strict";
// Implementar um algoritmo recursivo que imprima os N primeiros itens da sequência de Fibonacci.
// Exemplo da sequência de Fibonacci com os 10 primeiros números:
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompts_1 = require("@inquirer/prompts");
(() => __awaiter(void 0, void 0, void 0, function* () {
    let n = parseInt(yield (0, prompts_1.input)({ message: "Informe a quantidade de elementos de fibonacci deseja gerar:" }));
    let sequencia = [];
    function fibonacci(sequencia, n, anterior = 0, atual = 1) {
        if (sequencia.length == n)
            return;
        sequencia.push(atual);
        fibonacci(sequencia, n, atual, atual + anterior);
    }
    fibonacci(sequencia, n);
    console.log(sequencia);
}))();
