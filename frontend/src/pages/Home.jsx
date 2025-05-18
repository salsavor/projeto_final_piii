import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import CardCasa from "../components/Card";
import { motion } from "framer-motion";

const properties = [
  {
    id: 1,
    title: "Apartamento Moderno no Centro",
    image: "https://via.placeholder.com/400x250",
    price: "R$ 850.000",
    description: "3 quartos, 2 banheiros, 1 vaga - 120m²",
    details:
      "Localizado próximo a metrô, supermercados e escolas. Recém-reformado, com varanda gourmet e acabamento de alto padrão."
  },
  {
    id: 2,
    title: "Casa com Jardim em Bairro Tranquilo",
    image: "/frontend/src/assets/d31ca31fcf0535c2c6855f56e5d43365.jpg",
    price: "R$ 1.200.000",
    description: "4 quartos, 3 banheiros, 2 vagas - 250m²",
    details:
      "Amplo quintal, área de lazer com churrasqueira, sala de estar com lareira, excelente iluminação natural."
  }
];

export default function Home() {
  const [selectedProperty, setSelectedProperty] = React.useState(null);

  if (selectedProperty) {
    return (
      <main className="min-h-screen bg-gray-900 text-gray-100 px-6 py-10 dark">
        <Button
          onClick={() => setSelectedProperty(null)}
          className="mb-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl shadow-md hover:shadow-lg hover:from-blue-500 hover:to-blue-400 transition duration-300"
        >
          Voltar
        </Button>
        <motion.section
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={selectedProperty.image}
            alt={selectedProperty.title}
            className="rounded-xl w-full h-80 object-cover mb-6"
          />
          <h1 className="text-3xl font-bold mb-2">{selectedProperty.title}</h1>
          <p className="text-lg text-gray-400 mb-2">{selectedProperty.description}</p>
          <p className="text-xl text-primary font-semibold mb-4">{selectedProperty.price}</p>
          <p className="text-gray-300 leading-relaxed">{selectedProperty.details}</p>
        </motion.section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 px-6 py-10 dark">
      <motion.header
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold">GS Imobiliária</h1>
        <p className="text-gray-400 mt-2">Conectando você ao imóvel dos seus sonhos</p>
      </motion.header>

      <div className="flex flex-col md:flex-row items-center gap-4 mb-8 justify-center">
        <Input
          placeholder="Buscar imóveis..."
          className="max-w-md bg-gray-800 text-white border-gray-700"
        />
        <Button className="bg-gradient-to-r from-green-600 to-green-500 text-white rounded-2xl px-6 py-2 shadow-md hover:shadow-lg hover:from-green-500 hover:to-green-400 transition duration-300">
          Buscar
        </Button>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {properties.map((property) => (
          <Card key={property.id} className="rounded-2xl bg-gray-800 shadow-md">
            <img
              src={property.image}
              alt={property.title}
              className="rounded-t-2xl w-full h-60 object-cover"
            />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">{property.title}</h2>
              <p className="text-gray-400 mt-1">{property.description}</p>
              <p className="text-primary font-bold mt-2">{property.price}</p>
              <Button
                className="mt-4 w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-2xl px-5 py-2 shadow-md hover:shadow-lg hover:from-purple-500 hover:to-purple-400 transition duration-300"
                onClick={() => setSelectedProperty(property)}
              >
                Ver detalhes
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
