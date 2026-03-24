// https://www.curso-webdev.com/?page=condicionais-loops

/*
let idade = 18

if(idade>=18){
console.log("maior de idade")
}else {
console.log("menor de idade")
}

// OUUUUUUUUUUUUUUU
//ternario
idade = 18

let status = idade >= 18 ?
"maior de idade":"Menor de idade"

console.log(status)

//coalescencia nula
let valor = null

let resultado = valor ?? "valor padrao"
//apenas checa se TEM ou NAO um valor
//basicamente, se, o "valor" = false, então adicione o valor das "" ou int
//caso o valor de "valor" = true, resultado pega o valor de "valor"
//(caso queira entender, troque o valor de "valor" para um valor verdadeiro)

console.log(resultado)
*/

//----------------------------------------------------------------------------------------------------

/*
let a = 5
let b = 10

console.log(a == b);   // false (igualdade)
console.log(a === b);  // false (igualdade estrita)
console.log(a != b);   // true (diferente)
console.log(a !== b);  // true (diferente estrito)
console.log(a < b);    // true (menor que)
console.log(a > b);    // false (maior que)
console.log(a <= b);   // true (menor ou igual)
console.log(a >= b);   // false (maior ou igual)
*/

// let idade = 18;
// let temCarteira = true;

// if (idade >= 18 && temCarteira) {
//   console.log("Pode Dirigir");
// } else {
//   console.log("nao pode digirir");
// }

// if (idade < 18 || !temCarteira) {
//   console.log("nao pode dirigir");
// } else {
//   console.log("Pode Dirigir");
// }

// let tarefaConcluida = true

// if(tarefaConcluida) {
//     console.log("a tarefa está concluida")
// }

// let prioridade = 2;

// if (prioridade === 3){
//     console.log("prioridade alta")
// } else {
//     console.log("prioridade baixa")
// }

// console.log(prioridade2 = prioridade === 3 ?"prioridade alta" : "prioridade não é alta")

// if (prioridade === 1) {
//   console.log("prioridade baixa");
// } else if (prioridade === 2) {
//   console.log("prioridade prioridade normal");
// } else if (prioridade === 3) {
//   console.log("prioridade alta");
// } else {
//   console.log("prioridade desconhecida");
// }

// let diaSemana = new Date().getDay();

// if (diaSemana == 0) {
//   console.log("domingo");
// } else if (diaSemana == 1) {
//   console.log("segunda");
// } else if (diaSemana == 2) {
//   console.log("terça");
// } else if (diaSemana == 3) {
//   console.log("quarta");
// } else if (diaSemana == 4) {
//   console.log("quinta");
// } else if (diaSemana == 5) {
//   console.log("sexta");
// } else if (diaSemana == 6) {
//   console.log("sabado");
// }
// //nao vale a pena ficar usando o else if em casos como esse.

// switch (diaSemana) {
//   case 0:
//     console.log("domingo");
//     break;
//   case 0:
//     console.log("segunda");
//     break;
//   case 0:
//     console.log("terça");
//     break;
//   case 0:
//     console.log("quarta");
//     break;
//   case 0:
//     console.log("quinta");
//     break;
//   case 0:
//     console.log("sexta");
//     break;
//   case 0:
//     console.log("sabado");
//     break;

//   default:
//     console.log("dia invalido");
//     break;
// }

//  for (let i = 1;i = 50000000000000000000000000;i++){
//  console.log("infinito")

// }

// let contador = -10
// while (contador<100) {
//     console.log("contador:", contador)
//     contador = contador + 1
// }

// let numero = 5

// do {
//     console.log("numero é", numero)
//     numero--
// } while (numero > 0)

//exercicio da apostila (link na linha 1)

// let acesso = 1;

// switch (acesso) {
//   case 1:
//     console.log("nivel de acesso: negado")
//     break;
//   case 2:
//     console.log("nivel de acesso: parcial")
//     break;
//   case 3:
//     console.log("nivel de acesso: maximo")
//     break;
//   default:
//     console.log("nivel de acesso: desconhecido (erro)")
//     break;
// }

//exercicio 2 -------------------------------------------------------------
let nota = 10;

switch (nota) {
  case 10:
    console.log("Nota Máxima");
    break;
  case 8 || 9:
    console.log("muito bom");
    break;
  case 6 || 7:
    console.log("bom");
    break;
  case 5:
    console.log("passou");
    break;
  default:
    console.log("nota: nao passou");
    break;
}
