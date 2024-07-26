fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log("Imprimindo produtos");
    let str = "";
    for (let i = 0; i < data.length; i++) {
      let produto = data[i];
      str += `<div class="card">
                    <img id="img" src="${produto.image}" />
                    <div class="card-body">
                        <h5 class="card-title">${produto.title}</h5>
                        <p id="price">$${produto.price}</p>
                        <p id="rating">Rate: ${produto.rating.rate}</p>
                        <button id="detalhes" onclick="redirecionarParaDetalhes(${produto.id})">details</button>
                    </div>
             </div>`;
    }
    document.getElementById("tela").innerHTML = str;
  });
  function redirecionarParaDetalhes(id) {
    window.location.href = `detalhes.html?id=${id}`;
  }

  