


export default function ImovelPage() {
    return (
        <div className="container">
            <h1>Imóvel</h1>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://via.placeholder.com/500" alt="Imóvel" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h2>Título do Imóvel</h2>
                    <p>Descrição do imóvel.</p>
                    <p>Preço: R$ 500.000,00</p>
                    <button className="btn btn-primary">Adicionar ao Carrinho</button>
                </div>
            </div>
        </div>
    );
}