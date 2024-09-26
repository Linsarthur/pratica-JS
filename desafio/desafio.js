//Fazer o crud de um gerenciamento de estoque 

let produtos = []

function criarProduto(nome, preco, categoria) {
    const adicionarProduto = {
        id: produtos.length,
        nome,
        preco,
        categoria
    }
    if (nome.length >= 3 && preco > 0 && categoria === 'Eletrônico' || categoria === 'Alimentos' || categoria === 'Vestuário') {
        produtos.push(adicionarProduto)
    } else {
        console.log(`Erro ao adicionar ${adicionarProduto.nome}. Nome deve ter 3 caracteres, preço deve ser maior que 0 e categoria está limitado a Eletronicos, Alimentos ou Vestuários.`);
    }
}
criarProduto('Arroz', 4.99, 'Alimentos')
criarProduto('Celular', 2500, 'Eletrônico')
criarProduto('HB20', 50000.00, 'Automotivo')
criarProduto('Camisa Social', 120, 'Vestuário')
console.log('----------------------------------');
console.log('Listando Produtos: ');
console.log(produtos);

function lerProdutos() {
    return produtos
}


function buscarProduto(id) {
    const produtoPeloId = produtos.find((produto) => {
        return produto.id === id
    })

    if (!produtoPeloId) {
        console.log('Não achei o produto');
    } else {
        console.log(produtoPeloId);
    }
    return produtoPeloId
}

console.log('----------------------------------');
console.log('Achei o produto:');
buscarProduto(2)
buscarProduto(100)

console.log('----------------------------------');

function atualizarProduto(id, nome, preco, categoria) {
    const produtoEspecifico = lerProdutos().find((produto) => {
        return produto.id === id
    })
    if (!produtoEspecifico) {
        console.log('Não achei o produto para realizar a alteração.');
    } else {
        produtoEspecifico.nome = nome
        produtoEspecifico.preco = preco
        produtoEspecifico.categoria = categoria
    }
}

atualizarProduto(2, 'iphone', 4000.00, 'Eletrônico')
atualizarProduto(100, 'Carreta', 100000.00, 'Carros')
console.log(produtos);
console.log('----------------------------------');


function deletarProduto(id) {
    const produtoDeletado = lerProdutos().find((produto) => {
        return produto.id === id
    })
    if (!produtoDeletado) {
        console.log('Produto não existe, falha ao deletar');
    } else { produtos.splice(produtoDeletado, 1) }

}

console.log(`Produto deletado com sucesso`);
deletarProduto(2)
console.log(produtos);
deletarProduto(100)


