import Card from "../components/Card";

export default function Home() {

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Bem-vindo ao Gs</h1>
          <p>Encontre o seu imóvel ideal.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h2>Imóveis em Destaque</h2>
        </div>
      </div>
      <div className="row">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );

}