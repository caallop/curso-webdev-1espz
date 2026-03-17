console.log("Mensagem normal");

//da informaçoes importandtes
console.info("eu estou informando que vou surtar em 4 minutis");

//avisa que vai dar ruim por n motivos
console.warn("c pa vai dar ruim");

//errou
console.error("eita, deu ruim em");

//array no console
console.table([
  {
    id: 1,
    tarefa: "estudarJS",
  },
  {
    id: 2,
    tarefa: "estudarHTML",
  },
]);
/** 
 //aqui mostra uma pancada de console.log, beeeeeeeem util
console.group("Grupo de logs")

console.log("console.log 1")
console.log("console.log 2")
console.log("console.log 3")
console.log("console.log 4")

console.groupEnd()

*/
/* 
console.time("timer")

let casa = 1
if (casa == 1 ){
    console.log(casa)
}

console.timeEnd() 
*/

let texto = "ola";

console.log("nome = " + texto + " tipo = " + typeof texto);

let number = 41;

console.log("numero = " + number + " tipo = " + typeof number);

let noValue;

console.log("indefinidamente = " + noValue + " tipo = " + typeof noValue);

let nulo = null;

console.log("nulo = " + nulo + " tipo = " + typeof nulo);

let uniqueId = Symbol("id");

console.log(uniqueId);
console.log(typeof uniqueId);

let bigNumber = 50239503;

console.log("numero grande = " + bigNumber + " tipo = " + typeof bigNumber);

let task = {
  id: 1,
  title: "Aprender JavaScript",
  completed: false,
  assignee: {
    name: "João",
    email: "joao@example.com",
  },
  toggleComplete() {
    this.completed = !this.completed;
  },
};

let tasks = [
  {
    id: 1,
    title: "Aprender JavaScript",
    completed: false,
    assignee: {
      name: "João",
      email: "joao@example.com",
    }
  },
  {
    id: 1,
    title: "Aprender python",
    completed: true,
    assignee: {
      name: "joana",
      email: "joana@example.com",
    },
  },
];

console.table(tasks);

let hoje = new Date ("03-18-2026")
console.log(hoje)