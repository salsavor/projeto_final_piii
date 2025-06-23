import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

export default function ImovelPage() {
  const { id } = useParams();
  const [imovel, setImovel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Substitui pelo endpoint real do teu backend
    fetch(`http://localhost:5000/api/imovel/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setImovel(data.data); // ajusta conforme a estrutura da tua resposta
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <Typography color="blue">A carregar...</Typography>;
  if (!imovel) return <Typography color="red" sx={{ fontWeight: 'bold' }}>Imóvel não encontrado.</Typography>;

  return (
    <div className="container">
      <h1>{imovel.nome}</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            src={imovel.image || "https://via.placeholder.com/500"}
            alt={imovel.nome}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>{imovel.titulo || "Título do Imóvel"}</h2>
          <p>{imovel.descricao || "Descrição do imóvel."}</p>
          <p>Preço: {imovel.preco ? `€ ${imovel.preco}` : "N/A"}</p>
          <button className="btn btn-primary">Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
  );
};
