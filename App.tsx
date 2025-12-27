
import React from 'react';
import { BANKS } from './constants';
import BankCard from './components/BankCard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4 sm:p-6 md:p-8">
      <header className="w-full max-w-5xl text-center mb-8 md:mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-cyan-400">
          Portal de Bancos
        </h1>
        <p className="text-lg text-gray-400 mt-2">
          Acesso rápido e seguro aos principais bancos do Brasil.
        </p>
      </header>
      
      <main className="w-full max-w-5xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {BANKS.map((bank) => (
            <BankCard key={bank.name} bank={bank} />
          ))}
        </div>
      </main>
      
      <footer className="w-full max-w-5xl text-center mt-12 text-gray-500 text-sm">
        <p>Clique em um logo para ser redirecionado ao site oficial do banco em uma nova aba.</p>
        <p className="mt-1">&copy; {new Date().getFullYear()} Portal de Bancos. Todos os logos são marcas registradas de suas respectivas empresas.</p>
      </footer>
    </div>
  );
};

export default App;
