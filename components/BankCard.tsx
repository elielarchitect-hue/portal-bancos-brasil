
import React from 'react';
import type { Bank } from '../types';

interface BankCardProps {
  bank: Bank;
}

const BankCard: React.FC<BankCardProps> = ({ bank }) => {
  return (
    <a
      href={bank.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg aspect-square
                 transition-all duration-300 ease-in-out
                 hover:bg-gray-700 hover:shadow-cyan-500/20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-400"
    >
      <div className="w-2/3 h-2/3">
        {bank.logo}
      </div>
      <span className="mt-3 font-semibold text-center text-gray-300 group-hover:text-white transition-colors">
        {bank.name}
      </span>
    </a>
  );
};

export default BankCard;
