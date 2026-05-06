/**
const { createContext } = require("react")

const titulo = document.querySelector('h1')

console.log(`titulo representa ${titulo}`)

titulo.textContent = "titulo novo"

//const container = document.getElementById("container")
const container = document.querySelector("#container")

console.log(container)

container.textContent = "<p>p</p>" //errado
container.innerHTML = "<p>p</p>" //certo, esta interpretenado como codigo html

const imagem = document.querySelector('img')
console.log(imagem)
//troca a imagem
imagem.setAttribute('src','./img/images2.jpg')
imagem.alt = "foto show"

const caixa = document.querySelector('.box')
console.log(caixa)

caixa.classList.add('oculto')

const botao = document.getElementById('botao')

botao.addEventListener('click', () =>{
    caixa.classList.toggle('oculto')
})

const novoItem = document.createElement('li')

novoItem.textContent = "novo item"

document.querySelector('ul').appendChild(novoItem)

novoItem.remove()

document.querySelector("#addItem").addEventListener('click', () => {
const novoItem2 = createContext("li")
novoItem2 
}) 
 */

/** 
const usuario = {nome: "daniel", idade: "36"}
localStorage.setItem("usuario",JSON.stringify(usuario))

const valorRecuperado = JSON.parse(localStorage.getItem("usuario"))

console.log(valorRecuperado)
*/

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

const renderizarTarefas = () => {
    const lista = document.getElementById("lista-tarefas")
    lista.innerHTML = ""
    tarefas.forEach((t, i) => {

        const li = document.createElement("li")
        li.textContent = lista.appendChild(li)
    })
}

renderizarTarefas


document.getElementById("form-tarefa").onsubmit = (e) => {
   e.preventDefault()

   const input = document.getElementById("input-tarefas")
   tarefas.push(input.value)
   localStorage.setItem("tarefas", JSON.stringify(tarefas))
   input.value =""
   renderizarTarefas()

}

