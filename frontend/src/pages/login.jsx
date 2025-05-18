import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => setIsLogin(!isLogin);

  return (
    <main className="min-h-screen bg-gray-900 text-black-100 flex items-center justify-center px-4">
      <motion.div
        className="bg-gray-800 rounded-2xl shadow-lg p-8 w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl text-black font-bold text-center mb-6">
          {isLogin ? "Entrar na conta" : "Criar uma conta"}
        </h1>

        <form className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block mb-1">Nome completo</label>
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              placeholder="seu@email.com"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1">Senha</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-black font-semibold py-2 px-4 rounded-md transition"
          >
            {isLogin ? "Entrar" : "Cadastrar"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-4">
          {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"} {" "}
          <button onClick={toggleMode} className="text-blue-400 hover:underline">
            {isLogin ? "Cadastre-se" : "Entrar"}
          </button>
        </p>
      </motion.div>
    </main>
  );
}
