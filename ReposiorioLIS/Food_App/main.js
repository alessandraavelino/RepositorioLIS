import dataset from "./dataset.js"


for (let item of dataset) {
  const view = `<div class="col-sm-4 p-3">
                <div class="card" style="width: 18rem;">
                  <img src=${item.image} class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.descricao}</p>
                    <p class="card-text">${item.preco}</p>
                    <a href="#" class="btn btn-danger btn-primary">Comprar</a>
                  </div>
                </div>  
              </div>`

  let menuItens = document.getElementById("menu-itens")
  menuItens.insertAdjacentHTML("beforeend", view)

  

}







