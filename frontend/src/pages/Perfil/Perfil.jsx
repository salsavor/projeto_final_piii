


export default function Perfil() {
  return (
    <div className="container">
      <h1>Perfil</h1>
      <div className="row">
        <div className="col-md-4">
          <h2>Informações Pessoais</h2>
          <p>Nome: Andrade Pereira</p>
          <p>Email: andradepereira@gmail.com</p>
          <p>Telefone: (+351) 919 808 595</p>
          <p>Endereço: Rua A, 123</p>
          <p>Cidade: Coimbra</p>
        </div>
        <div className="col-md-4">
          <h2>Histórico de Compras</h2>
          <ul>
            <li>Imóvel 1 - Data: 01/01/2023</li>
            <li>Imóvel 2 - Data: 15/02/2023</li>
            <li>Imóvel 3 - Data: 20/03/2023</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h2>Configurações da Conta</h2>
          <button className="btn btn-primary">Alterar Senha</button>
          <button className="btn btn-secondary">Editar Perfil</button>
          <button className="btn btn-danger">Excluir Conta</button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h2>Notificações</h2>
          <ul>
            <li>Você tem uma nova mensagem.</li>
            <li>Seu pagamento foi processado com sucesso.</li>
            <li>Seu imóvel foi atualizado.</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h2>Suporte</h2>
          <p>
            Se você tiver alguma dúvida ou precisar de ajuda, entre em contato
            com nosso suporte ao cliente.
          </p>
          <button className="btn btn-info">Contato</button>
        </div>
      </div>
    </div>
  );
}
