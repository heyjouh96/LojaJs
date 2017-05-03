var jogos = [{nome:'Super Mario 3D Land',   preco:'120,00', plataforma:'3ds'},
             {nome:'Pokemon Sun',           preco:'150,00', plataforma:'3ds'},
             {nome:'Uncharted 4',           preco:'150,00', plataforma:'ps4'},
             {nome:'Horizon Zero Dawn',     preco:'160,00', plataforma:'ps4'},
             {nome:'Breath of the Wild',    preco:'200,00', plataforma:'switch'},
             {nome:'Mario Kart 8 Deluxe',   preco:'200,00', plataforma:'switch'},
             {nome:'Gears of Wars 4',       preco:'170,00', plataforma:'xbox'},
             {nome:'Halo Wars',             preco:'130,00', plataforma:'xbox'}];

function main(){
    
    // Lista os produtos na div Main
    for(var i in jogos){
        montaProdutos(i, jogos);
    }
    
    // Mostra total no carrinho
    var tbody = document.getElementById("carrinho").querySelector("tbody");
    var precos = tbody.querySelectorAll("td");
    var total = 0;
    for(var i in precos){
        total = total + precos[i].innerHTML;
    }
    var totalCarrinho = document.getElementById("totalCarrinho");
    totalCarrinho.innerHTML = total;
    
    
    
    // Monta a div Produtos
    function montaProdutos(i, jogos){
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
        //btn.setAttribute('onclick', 'addCarrinho(this.id)');
        btn.style.float = "right";
        pProdSmall.innerHTML = jogos[i].plataforma;
        pProd.innerHTML = ""+jogos[i].nome+"<br>";
        pPrecSmall.innerHTML = "3x de R$ "+parseInt(jogos[i].preco)/3;
        pPrec.innerHTML = "<b>"+jogos[i].preco+"</b><br>";
        // appends
        document.getElementById('produtos').appendChild(div);
        div.appendChild(img);
        div.appendChild(pProd);
        pProd.appendChild(pProdSmall);
        div.appendChild(btn);
        div.appendChild(pPrec);
        pPrec.appendChild(pPrecSmall);
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
    
    // onclicks
    
    var carrinho = document.querySelectorAll(".glyphicon-shopping-cart");
    var cArr = Array.prototype.slice.call(carrinho);
    cArr
        .forEach(function(x){
           x.addEventListener("click", function(e){
               addCarrinho(e.target.id);
           }) 
        });
}

window.onload = main;
