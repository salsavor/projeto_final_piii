


export default function Pagamento() {
    return (
        <div className="container">
            <h1>Pagamento</h1>
            <div className="row">
                <div className="col-md-6">
                    <h2>Detalhes do Pagamento</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="cardNumber" className="form-label">Número do Cartão</label>
                            <input type="text" className="form-control" id="cardNumber" placeholder="Número do Cartão" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="expiryDate" className="form-label">Data de Validade</label>
                            <input type="text" className="form-control" id="expiryDate" placeholder="MM/AA" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cvv" className="form-label">CVV</label>
                            <input type="text" className="form-control" id="cvv" placeholder="CVV" />
                        </div>
                        <button type="submit" className="btn btn-primary">Pagar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}