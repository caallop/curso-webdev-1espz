
// // Array literal (forma mais comum)
// const tarefas = [
//   "Estudar JavaScript",
//   "Criar projeto TaskMaster",
//   "Preparar apresentação",
//   "Revisar código"
// ];
// console.log("Array de tarefas:", tarefas);

// // Usando o construtor Array
// const categorias = new Array("Trabalho", "Estudo", "Pessoal", "Projetos");
// console.log("Array de categorias:", categorias);

// // Array.of (ES6)
// const prioridades = Array.of("Baixa", "Média", "Alta");
// console.log("Array de prioridades:", prioridades);

// // Array.from (ES6) - cria array a partir de uma string
// const letras = Array.from("TaskMaster");
// console.log("Array de letras:", letras);

// // Acesso por índice
// console.log("Primeira tarefa:", tarefas[0]);
// console.log("Última tarefa:", tarefas[tarefas.length - 1]);


// //para adicionar, ou tirar do ultimo indice do array
// const nomes = ["daniel"]
// nomes[0] = "matheus"
// console.log(nomes)

// nomes.push("daniel")
// console.log(nomes)

// nomes.push("sem nome")
// console.log(nomes)
// nomes.pop()
// console.log(nomes)

// //para adicionar, ou tirar do primeiro indice do array

// nomes.unshift("felipe")
// console.log(nomes)

// nomes.shift()
// console.log(nomes)

// //metodo para adicionar ou remover algo do array, utilizando splice

// nomes.push("augusto")
// nomes.push("everaldo")
// nomes.push("jose")
// nomes.push("roberto")
// nomes.push("gustavo")

// console.log(nomes)
// nomes.splice(4,1)
// console.log(nomes)

// nomes.splice(4,0,"jose")
// console.log(nomes)

// nomes.splice(4,1,"josefina")
// console.log(nomes)


// //exemplo de loop para o console
// nomes.forEach((t, i) => {
//   console.log(`${i + 1}.${t}`)
// })

// const nomesComLetraMaiscula = 
// nomes.map(t => t.toLocaleUpperCase())

// console.log(nomesComLetraMaiscula)


// //metodo para filtrar tudo
// const nomesComL = nomes.filter(t => t.toLocaleLowerCase().includes("l"))
// console.log(nomesComL)


// const indiceNomeComL = nomes.findIndex(t => t.toLocaleLowerCase().includes("l"))
// console.log(indiceNomeComL)

// //reduce()

// const somaComprimentos = nomes.reduce((total, t) => total + t.length, 0)

// console.log(somaComprimentos)

//Criação de objeto usando sintaxe literal
// const tarefas = {
//   id: 1,
//   titulo: "Aprender sobre objetos",
//   descricao: "Estudar propriedades e métodos",
//   concluida: false,
//   prioridade: "alta",
//   dataCriacao: new Date()
// };
// console.log("Objeto tarefa:", tarefas);
// console.log("Título (ponto):", tarefas.titulo);
// console.log("Prioridade (colchetes):", tarefas["prioridade"]);


// const projetoTaskMaster = {
//   nome: "TaskMaster",
//   version: "1.0",
//   autor: "Curso JavaScript",
//   tarefas: [],
//   adicionarTarefa(titulo, prioridade = "média") {
//     const novaTarefa = {
//       id: this.tarefas.length + 1,
//       titulo,
//       prioridade,
//       concluida: false,
//       criada: new Date()
//     };
//     this.tarefas.push(novaTarefa);
//     console.log(`Tarefa "${titulo}" adicionada.`);
//     return novaTarefa;
//   },
//   listarTarefas() {
//     console.log(`Projeto ${this.nome} - Lista de Tarefas:`);
//     this.tarefas.forEach(t => console.log(`- ${t.id}: ${t.titulo} (${t.prioridade})`));
//   }
// };

// projetoTaskMaster.adicionarTarefa("Estudar Objetos", "alta");
// projetoTaskMaster.adicionarTarefa("Criar interface");
// projetoTaskMaster.listarTarefas();

// projetoTaskMaster.adicionarTarefa("estudar js", "alta", "alta")
// projetoTaskMaster.listarTarefas();


// for(let prop in tarefas) {
//   console.log(`${prop}: ${tarefas}`)
// }

// console.log(Object.keys(tarefas))
// console.log(Object.values(tarefas))

const prioridade = ["baixa", "media", "alta"]

const [baixa, media, alta] = prioridade