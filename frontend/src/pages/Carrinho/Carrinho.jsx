

export default function Carrinho() {
    return (
        <div className="container">
            <h1 className="text-center">Carrinho</h1>
            <div className="row">
                <div className="col-md-8">
                    <h2>Imóveis no Carrinho</h2>
                    <ul className="list-group">
                        <li className="list-group-item">Imóvel 1</li>
                        <li className="list-group-item">Imóvel 2</li>
                        <li className="list-group-item">Imóvel 3</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h2>Total</h2>
                    <p>R$ 1000,00</p>
                    <button className="btn btn-primary">Finalizar Compra</button>
                </div>
            </div>
        </div>
    )
}