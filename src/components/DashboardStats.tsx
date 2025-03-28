import React from 'react';
import { Package, TrendingUp, AlertCircle, DollarSign } from 'lucide-react';

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Package className="h-8 w-8 text-blue-600" />
          </div>
          <div className="ml-4">
            <h2 className="text-sm font-medium text-gray-500">Total Produits</h2>
            <p className="text-2xl font-semibold text-gray-900">245</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center text-sm text-green-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>12% de plus ce mois</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <AlertCircle className="h-8 w-8 text-red-600" />
          </div>
          <div className="ml-4">
            <h2 className="text-sm font-medium text-gray-500">Stock Faible</h2>
            <p className="text-2xl font-semibold text-gray-900">12</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center text-sm text-red-600">
            <span>5 produits en rupture</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <DollarSign className="h-8 w-8 text-green-600" />
          </div>
          <div className="ml-4">
            <h2 className="text-sm font-medium text-gray-500">Valeur Stock</h2>
            <p className="text-2xl font-semibold text-gray-900">45,250 €</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center text-sm text-green-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>8% d'augmentation</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Package className="h-8 w-8 text-purple-600" />
          </div>
          <div className="ml-4">
            <h2 className="text-sm font-medium text-gray-500">Catégories</h2>
            <p className="text-2xl font-semibold text-gray-900">15</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center text-sm text-purple-600">
            <span>3 nouvelles ce mois</span>
          </div>
        </div>
      </div>
    </div>
  );
}