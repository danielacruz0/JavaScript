let produtos = [
    {nome:'portatil',categoria:'tecnologia',preco:500},
    {nome:'Iphone15',categoria:'tecnologia',preco:800},
    {nome:'Sumo Compal',categoria:'Sumos',preco:1}
]

let table_products = document.getElementById('table_products');

for (i=0; i<produtos.length; i++){
    console.log(produtos[i]);

    let prod_row = document.createElement('tr');

    let prod_column_nome = document.createElement('td');
    prod_column_nome.innerHTML = produtos[i].nome;
    prod_row.appendChild(prod_column_nome);

    let prod_column_categoria = document.createElement('td');
    prod_column_categoria.innerHTML = produtos[i].categoria;
    prod_row.appendChild(prod_column_categoria);

    let prod_column_preco = document.createElement('td');
    prod_column_preco.innerHTML = '€' + produtos[i].preco;
    prod_row.appendChild(prod_column_preco);

    table_products.appendChild(prod_row);
}