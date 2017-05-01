// 

// Monta a div Produtos
function montaProdutos(i){
    // cria elementos
    var div = document.createElement('div');
    var img = document.createElement('img');
    var pProd = document.createElement('p');
    var pPrec = document.createElement('p');
    var pProdSmall = document.createElement('small');
    var pPrecSmall = document.createElement('small');
    var btn = document.createElement('button');
    // passa atributos e innerHTML
    div.setAttribute('class', 'col-lg-4 col-xs-6 clearfix produtos');
    img.setAttribute('src', 'img/sd.jpg');
    img.setAttribute('class', 'img-responsive');
    img.setAttribute('alt', 'produto');
    btn.setAttribute('id', ''+i);
    btn.setAttribute('class', 'btn btn-success glyphicon glyphicon-shopping-cart');
    btn.setAttribute('onclick', 'addCarrinho(this.id)')
    btn.style.float = "right";
    pProdSmall.innerHTML = "PS4";
    pProd.innerHTML = "Nome Produto <br>";
    pPrecSmall.innerHTML = "3x de R$ 50,00";
    pPrec.innerHTML = "<b>R$ 150,00</b><br>";
    // appends
    document.getElementById('produtos').appendChild(div);
    div.appendChild(img);
    div.appendChild(pProd);
    pProd.appendChild(pProdSmall);
    div.appendChild(btn);
    div.appendChild(pPrec);
    pPrec.appendChild(pPrecSmall);
}

// Lista os produtos na div Main
function listaProdutos(){
    for(var i = 1; i <= 9; i++){
        montaProdutos(i);
    }
}

function addCarrinho(id){
    var tab = document.getElementById("carrinho");
    var tbody = tab.querySelector("tbody");
    var tr = document.createElement("tr");
    var tdI = document.createElement("td");
    var tdProd = document.createElement("td");
    var tdPrec = document.createElement("td");
    tdI.innerHTML = "1";
    tdProd.innerHTML = "Nome do Produto";
    tdPrec.innerHTML = 150,00;
    tr.appendChild(tdI);
    tr.appendChild(tdProd);
    tr.appendChild(tdPrec);
    tbody.appendChild(tr);
}