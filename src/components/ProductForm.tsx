import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface ProductFormProps {
  onSubmit: (product: Omit<Product, 'id'>) => void;
  onClose: () => void;
  initialProduct?: Product;
  isEdit?: boolean;
}

export function ProductForm({ onSubmit, onClose, initialProduct, isEdit }: ProductFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    stock: '',
  });

  useEffect(() => {
    if (initialProduct) {
      setFormData({
        name: initialProduct.name,
        price: initialProduct.price.toString(),
        description: initialProduct.description,
        stock: initialProduct.stock.toString(),
      });
    }
  }, [initialProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name: formData.name,
      price: Number(formData.price),
      description: formData.description,
      stock: Number(formData.stock),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-6">
          {isEdit ? 'Modifier le produit' : 'Ajouter un produit'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nom</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Prix</label>
            <input
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
              min="0"
              step="0.01"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
              rows={3}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Stock</label>
            <input
              type="number"
              value={formData.stock}
              onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
              min="0"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            {isEdit ? 'Mettre à jour' : 'Ajouter'}
          </button>
        </form>
      </div>
    </div>
  );
}