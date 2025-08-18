function Produto({ nome, preco, emEstoque }) {
return (
    <div>
        <h2>{nome}</h2>
        <p>Preço: R${preco}</p>
        <p>Estoque: {emEstoque ? 'Em estoque' : 'Esgotado'}</p>
    </div>
  )
}
export default Produto