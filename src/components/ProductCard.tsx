import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

export function ProductCard({ product, onEdit, onDelete }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
          <p className="text-2xl font-bold text-blue-600 mt-2">
            {product.price.toLocaleString('fr-FR', {
              style: 'currency',
              currency: 'EUR',
            })}
          </p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(product)}
            className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Pencil size={20} />
          </button>
          <button
            onClick={() => onDelete(product.id)}
            className="p-2 text-gray-600 hover:text-red-600 transition-colors"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <div className="mt-4 flex items-center">
        <span className="text-sm text-gray-500">Stock:</span>
        <span className={`ml-2 font-semibold ${
          product.stock > 10 ? 'text-green-600' : 'text-red-600'
        }`}>
          {product.stock} unités
        </span>
      </div>
    </div>
  );
}