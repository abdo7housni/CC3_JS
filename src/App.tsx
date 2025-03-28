import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import type { Product } from './types';
import { ProductForm } from './components/ProductForm';
import { ProductCard } from './components/ProductCard';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { DashboardStats } from './components/DashboardStats';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleAddProduct = (productData: Omit<Product, 'id'>) => {
    const newProduct = {
      ...productData,
      id: crypto.randomUUID(),
    };
    setProducts([...products, newProduct]);
  };

  const handleEditProduct = (productData: Omit<Product, 'id'>) => {
    if (!editingProduct) return;
    
    const updatedProducts = products.map((product) =>
      product.id === editingProduct.id
        ? { ...productData, id: product.id }
        : product
    );
    setProducts(updatedProducts);
    setEditingProduct(null);
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
                <p className="mt-1 text-sm text-gray-500">
                  Gérez vos produits et suivez vos stocks en temps réel
                </p>
              </div>
              <button
                onClick={() => setIsFormOpen(true)}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                <Plus size={20} />
                Ajouter un produit
              </button>
            </div>

            <DashboardStats />

            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Liste des produits
              </h2>
              
              {products.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    Aucun produit n'a été ajouté. Commencez par en ajouter un !
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onEdit={(product) => {
                        setEditingProduct(product);
                        setIsFormOpen(true);
                      }}
                      onDelete={handleDeleteProduct}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {isFormOpen && (
        <ProductForm
          onSubmit={editingProduct ? handleEditProduct : handleAddProduct}
          onClose={() => {
            setIsFormOpen(false);
            setEditingProduct(null);
          }}
          initialProduct={editingProduct || undefined}
          isEdit={!!editingProduct}
        />
      )}
    </div>
  );
}

export default App;