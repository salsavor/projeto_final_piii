


export default function Register() {
    return (
        <div className="container">
        <h1 className="text-center">Registrar</h1>
        <form>
            <div className="mb-3">
            <label htmlFor="username" className="form-label">Nome de Usuário</label>
            <input type="text" className="form-control" id="username" />
            </div>
            <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
            <label htmlFor="password" className="form-label">Senha</label>
            <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-primary">Registrar</button>
        </form>
        </div>
    );
}