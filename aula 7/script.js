
// const listarProdutos = async () => {
//   const response = await fetch('https://6a03aeaa2afe8349b4b56c57.mockapi.io/products');
//   const produtos = await response.json();
//   const ul = document.getElementById("lista-produtos");
//   ul.innerHTML = "";

//   produtos.forEach(p => {
//     const li = document.createElement("li");
//     li.innerHTML = `
//       <img src="${p.image}" width="50">
//       <strong>${p.name}</strong> - R$ ${p.price} <em>(${p.seller})</em>
//     `;
//     ul.appendChild(li);
//   });
// }

// listarProdutos();



document.getElementById("btn-buscar").onclick = async ()=> {
    const username = document.getElementById("input-usuario").value.trim()
    const info = document.getElementById("info-usuario")

    if (!username) {
        info.innerHTML = "<span class=\"text-danger\">digite um usuario! </span>"
        return
    }

    info.innerHTML = "carregando"

    const response = await fetch (`https://api.github.com/users/caallop`)
    if (!response.ok) throw new Error("usuario nâo encontrado");
    
    const data = await response.json()

    info.innerHTML = `
    <p><strong>nome: </strong> ${data.login || "(sem nome)"}</p>
    <img src="${data.avatar_url}" width = "100">
    <p><strong>repositorios publicos: </strong> ${data.public_repos}</p>
    `
}