


export default function ImovelUpdate() {
    return (
        <div className="container">
            <h1>Atualizar Imóvel</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">Título</label>
                    <input type="text" className="form-control" id="titulo" />
                </div>
                <div className="mb-3">
                    <label htmlFor="descricao" className="form-label">Descrição</label>
                    <textarea className="form-control" id="descricao"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="preco" className="form-label">Preço</label>
                    <input type="number" className="form-control" id="preco" />
                </div>
                <button type="submit" className="btn btn-primary">Atualizar</button>
            </form>
        </div>
    );
}