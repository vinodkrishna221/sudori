import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { 
  Search, Filter, AlertCircle, ChevronDown, 
  Edit, Plus, Minus, Check, AlertTriangle, Package,
  History, RotateCcw, Download, Archive, ArrowUpDown
} from 'lucide-react';

interface InventoryItem {
  id: string;
  productId: string;
  name: string;
  image: string;
  sku: string;
  category: string;
  currentStock: number;
  reservedStock: number;
  lowStockThreshold: number;
  status: 'in-stock' | 'low-stock' | 'out-of-stock';
  lastUpdated: string;
  unitCost: number;
  retailPrice: number;
}

const ArtisanInventoryPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [editingItem, setEditingItem] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<number>(0);
  
  // Mock inventory data
  const inventoryItems: InventoryItem[] = [
    {
      id: 'inv1',
      productId: 'prod1',
      name: 'Handwoven Silk Tassel',
      image: '/images/products/Whisk_storyboard3b3d67f7b6a448328ea85f9c.png',
      sku: 'HST-001',
      category: 'Textiles',
      currentStock: 32,
      reservedStock: 3,
      lowStockThreshold: 10,
      status: 'in-stock',
      lastUpdated: '2 days ago',
      unitCost: 1200,
      retailPrice: 2499
    },
    {
      id: 'inv2',
      productId: 'prod2',
      name: 'Traditional Silk Scarf',
      image: '/images/products/Whisk_storyboard22d127129b164e319ca7dd50.png',
      sku: 'TSS-002',
      category: 'Textiles',
      currentStock: 15,
      reservedStock: 2,
      lowStockThreshold: 8,
      status: 'in-stock',
      lastUpdated: '1 week ago',
      unitCost: 2000,
      retailPrice: 3999
    },
    {
      id: 'inv3',
      productId: 'prod3',
      name: 'Heritage Pattern Tapestry',
      image: '/images/products/Whisk_storyboarde3d063b7068249a38d4a80ec.png',
      sku: 'HPT-003',
      category: 'Textiles',
      currentStock: 8,
      reservedStock: 0,
      lowStockThreshold: 10,
      status: 'low-stock',
      lastUpdated: '3 days ago',
      unitCost: 5000,
      retailPrice: 8999
    },
    {
      id: 'inv4',
      productId: 'prod4',
      name: 'Hand-Embroidered Cushion Cover',
      image: '/images/products/Whisk_storyboardeb7b550068594c50b54bdbf4.png',
      sku: 'HCC-004',
      category: 'Home Decor',
      currentStock: 20,
      reservedStock: 0,
      lowStockThreshold: 5,
      status: 'in-stock',
      lastUpdated: '5 days ago',
      unitCost: 800,
      retailPrice: 1999
    },
    {
      id: 'inv5',
      productId: 'prod5',
      name: 'Zari Embroidered Potli Bag',
      image: '/images/products/Whisk_storyboarda8bddf974e2447e9872bab59.png',
      sku: 'ZPB-005',
      category: 'Accessories',
      currentStock: 0,
      reservedStock: 0,
      lowStockThreshold: 5,
      status: 'out-of-stock',
      lastUpdated: '2 weeks ago',
      unitCost: 600,
      retailPrice: 1499
    }
  ];

  // Filter inventory items based on active filter and search term
  const filteredItems = inventoryItems.filter(item => {
    // Filter by status
    if (activeFilter !== 'all' && item.status !== activeFilter) {
      return false;
    }
    
    // Filter by search term
    if (searchTerm && !item.name.toLowerCase().includes(searchTerm.toLowerCase()) && !item.sku.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  const getStatusClasses = (status: string) => {
    switch (status) {
      case 'in-stock':
        return 'bg-green-100 text-green-800';
      case 'low-stock':
        return 'bg-amber-100 text-amber-800';
      case 'out-of-stock':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-warm-gray-100 text-warm-gray-800';
    }
  };

  const handleEdit = (itemId: string, currentValue: number) => {
    setEditingItem(itemId);
    setEditValue(currentValue);
  };

  const handleSaveEdit = (itemId: string) => {
    // Save updated inventory value logic would go here
    console.log('Updating inventory for', itemId, 'to', editValue);
    setEditingItem(null);
  };

  const handleCancelEdit = () => {
    setEditingItem(null);
  };

  // Count items by status
  const inventoryCounts = {
    all: inventoryItems.length,
    'in-stock': inventoryItems.filter(item => item.status === 'in-stock').length,
    'low-stock': inventoryItems.filter(item => item.status === 'low-stock').length,
    'out-of-stock': inventoryItems.filter(item => item.status === 'out-of-stock').length
  };

  return (
    <DashboardLayout
      title="Inventory Management"
      subtitle="Track and manage your product stock levels"
      userType="artisan"
    >
      <div className="space-y-6">
        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-warm-gray-400" />
            <input
              type="text"
              placeholder="Search by product or SKU..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button className="btn-primary text-sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Inventory
            </button>
            
            <button className="btn-secondary text-sm">
              <Download className="w-4 h-4 mr-2" />
              Export Inventory
            </button>
            
            <button className="btn-ghost inline-flex items-center text-sm">
              <Filter className="w-4 h-4 mr-1" />
              Filter
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
        
        {/* Status Filters */}
        <div className="flex overflow-x-auto scrollbar-hide space-x-2 border-b border-warm-gray-200 pb-2">
          {Object.entries(inventoryCounts).map(([status, count]) => (
            <button
              key={status}
              onClick={() => setActiveFilter(status)}
              className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                activeFilter === status
                  ? 'bg-saffron-100 text-saffron-700'
                  : 'text-warm-gray-600 hover:bg-warm-gray-100 hover:text-warm-gray-900'
              }`}
            >
              {status === 'all' ? 'All Items' : 
               status === 'in-stock' ? 'In Stock' : 
               status === 'low-stock' ? 'Low Stock' : 'Out of Stock'} ({count})
            </button>
          ))}
        </div>

        {/* Low Stock Alerts */}
        {inventoryItems.some(item => item.status === 'low-stock' || item.status === 'out-of-stock') && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-medium text-warm-gray-900">Inventory Alerts</h3>
                <p className="text-warm-gray-600 text-sm">
                  {inventoryItems.filter(item => item.status === 'low-stock').length} products are running low and{' '}
                  {inventoryItems.filter(item => item.status === 'out-of-stock').length} are out of stock.
                </p>
              </div>
              <button className="btn-secondary text-xs py-1.5 px-3">
                View All Alerts
              </button>
            </div>
          </div>
        )}
        
        {/* Inventory Table */}
        <div className="bg-white rounded-xl border border-warm-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-full divide-y divide-warm-gray-200">
              <thead className="bg-warm-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-warm-gray-500 uppercase tracking-wider">
                    <div className="flex items-center">
                      Product
                      <ArrowUpDown className="w-3.5 h-3.5 ml-1 text-warm-gray-400" />
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-warm-gray-500 uppercase tracking-wider">
                    <div className="flex items-center">
                      SKU
                      <ArrowUpDown className="w-3.5 h-3.5 ml-1 text-warm-gray-400" />
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-warm-gray-500 uppercase tracking-wider">
                    <div className="flex items-center">
                      Stock
                      <ArrowUpDown className="w-3.5 h-3.5 ml-1 text-warm-gray-400" />
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-warm-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-warm-gray-500 uppercase tracking-wider">
                    <div className="flex items-center">
                      Value
                      <ArrowUpDown className="w-3.5 h-3.5 ml-1 text-warm-gray-400" />
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-warm-gray-500 uppercase tracking-wider">
                    Last Updated
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-warm-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-warm-gray-200">
                {filteredItems.map((item) => (
                  <tr key={item.id} className="hover:bg-warm-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded object-cover" src={item.image} alt={item.name} />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-warm-gray-900">{item.name}</div>
                          <div className="text-xs text-warm-gray-500">{item.category}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-mono text-warm-gray-600">{item.sku}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {editingItem === item.id ? (
                        <div className="flex items-center">
                          <input
                            type="number"
                            value={editValue}
                            onChange={(e) => setEditValue(parseInt(e.target.value) || 0)}
                            min={0}
                            className="w-16 p-1 border rounded text-center"
                          />
                          <div className="ml-2 flex space-x-1">
                            <button 
                              onClick={() => handleSaveEdit(item.id)}
                              className="p-1 text-green-600 hover:bg-green-50 rounded"
                            >
                              <Check className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={handleCancelEdit}
                              className="p-1 text-red-600 hover:bg-red-50 rounded"
                            >
                              ✕
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-warm-gray-900">{item.currentStock}</div>
                          {item.reservedStock > 0 && (
                            <div className="ml-2 text-xs text-warm-gray-500">({item.reservedStock} reserved)</div>
                          )}
                          <button 
                            onClick={() => handleEdit(item.id, item.currentStock)}
                            className="ml-2 text-saffron-600 hover:text-saffron-700 p-1"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClasses(item.status)}`}>
                        {item.status === 'in-stock' ? 'In Stock' : 
                        item.status === 'low-stock' ? 'Low Stock' : 'Out of Stock'}
                      </span>
                      {item.status === 'low-stock' && (
                        <div className="text-xs text-amber-600 flex items-center mt-1">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          Below threshold ({item.lowStockThreshold})
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-warm-gray-900">
                        ₹{(item.currentStock * item.unitCost).toLocaleString()}
                      </div>
                      <div className="text-xs text-warm-gray-500">
                        ₹{item.unitCost} per unit
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-warm-gray-500">
                      {item.lastUpdated}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button className="text-saffron-600 hover:text-saffron-700 p-1">
                          <History className="w-4 h-4" />
                        </button>
                        {item.status === 'out-of-stock' && (
                          <button className="text-green-600 hover:text-green-700 p-1">
                            <RotateCcw className="w-4 h-4" />
                          </button>
                        )}
                        <button className="text-warm-gray-600 hover:text-warm-gray-700 p-1">
                          <Archive className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredItems.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center">
                      <div className="w-12 h-12 mx-auto bg-warm-gray-100 rounded-full flex items-center justify-center mb-4">
                        <Package className="w-6 h-6 text-warm-gray-400" />
                      </div>
                      <p className="text-warm-gray-500">No inventory items found</p>
                      {searchTerm && (
                        <p className="text-warm-gray-500 text-sm mt-1">
                          Try adjusting your search or filters
                        </p>
                      )}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ArtisanInventoryPage;