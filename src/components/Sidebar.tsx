import React from 'react';
import { LayoutDashboard, Package, Tags, BarChart3, Users, Settings } from 'lucide-react';

export function Sidebar() {
  return (
    <div className="hidden lg:flex flex-col w-64 bg-white shadow-lg">
      <div className="flex-1 flex flex-col pt-5 pb-4">
        <nav className="mt-5 flex-1 px-2 space-y-1">
          <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-blue-600 bg-blue-50 rounded-md group">
            <LayoutDashboard className="h-5 w-5 mr-3" />
            Tableau de bord
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md group">
            <Package className="h-5 w-5 mr-3" />
            Produits
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md group">
            <Tags className="h-5 w-5 mr-3" />
            Catégories
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md group">
            <BarChart3 className="h-5 w-5 mr-3" />
            Rapports
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md group">
            <Users className="h-5 w-5 mr-3" />
            Utilisateurs
          </a>
        </nav>
        <div className="border-t border-gray-200 p-4">
          <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md group">
            <Settings className="h-5 w-5 mr-3" />
            Paramètres
          </a>
        </div>
      </div>
    </div>
  );
}