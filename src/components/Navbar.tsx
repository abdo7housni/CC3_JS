import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Bell, Settings, LogOut } from 'lucide-react';

export function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <ShoppingBag className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">ECO.STOCK</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Tableau de bord
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Produits
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Catégories
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Rapports
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-blue-600">
              <Bell className="h-6 w-6" />
            </button>
            
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-3 focus:outline-none"
              >
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                />
                <span className="hidden md:block text-sm font-medium text-gray-700">ABDO HOUSNI</span>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Settings className="h-4 w-4 mr-2" />
                    Paramètres
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <LogOut className="h-4 w-4 mr-2" />
                    Déconnexion
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}