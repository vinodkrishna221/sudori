import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { 
  Home, Building, MapPin, Plus, Edit, Trash2, Star,
  Check, ChevronDown, Globe, Phone, AlertTriangle, Info 
} from 'lucide-react';
import { customerAddresses } from '../../mockData/addressesData';

interface Address {
  id: string;
  type: 'Home' | 'Office' | 'Other';
  name: string;
  phone: string;
  line1: string;
  line2?: string;
  landmark?: string;
  city: string;
  state: string;
  zipCode: string;
  isDefault: boolean;
  isVerified: boolean;
  instructions?: string;
}

const CustomerAddressesPage: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>(customerAddresses);
  
  const [showForm, setShowForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);

  const handleSetDefault = (addressId: string) => {
    setAddresses(
      addresses.map(addr => ({
        ...addr,
        isDefault: addr.id === addressId
      }))
    );
  };

  const handleDeleteAddress = (addressId: string) => {
    setAddresses(addresses.filter(addr => addr.id !== addressId));
  };

  const handleEditAddress = (address: Address) => {
    setEditingAddress(address);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingAddress(null);
  };

  const handleVerifyAddress = (addressId: string) => {
    setAddresses(
      addresses.map(addr => 
        addr.id === addressId ? { ...addr, isVerified: true } : addr
      )
    );
  };

  return (
    <DashboardLayout
      title="My Addresses"
      subtitle="Manage your shipping addresses"
      userType="customer"
    >
      <div className="space-y-6">
        {!showForm ? (
          <>
            {/* Add New Address Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowForm(true)}
              className="w-full p-4 border-2 border-dashed border-saffron-300 rounded-xl text-saffron-600 hover:bg-saffron-50 transition-colors duration-200 flex items-center justify-center"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add New Address
            </motion.button>

            {/* Addresses List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {addresses.map((address) => (
                <motion.div
                  key={address.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`bg-white rounded-xl border ${
                    address.isDefault
                      ? 'border-saffron-500 shadow-sm'
                      : 'border-warm-gray-200 hover:border-saffron-200'
                  } p-6 relative ${address.isDefault ? 'bg-saffron-50/50' : ''}`}
                >
                  {address.isDefault && (
                    <div className="absolute top-4 right-4 bg-saffron-100 text-saffron-700 px-2 py-1 rounded text-xs font-medium flex items-center">
                      <Check className="w-3 h-3 mr-1" />
                      Default
                    </div>
                  )}
                  
                  <div className="flex items-start">
                    <div className={`p-3 rounded-full ${
                      address.type === 'Home'
                        ? 'bg-green-100 text-green-600'
                        : address.type === 'Office'
                          ? 'bg-blue-100 text-blue-600'
                          : 'bg-purple-100 text-purple-600'
                    } mr-4`}>
                      {address.type === 'Home' && <Home className="w-5 h-5" />}
                      {address.type === 'Office' && <Building className="w-5 h-5" />}
                      {address.type === 'Other' && <MapPin className="w-5 h-5" />}
                    </div>
                    
                    <div>
                      <div className="flex items-center">
                        <h3 className="font-semibold text-warm-gray-900">{address.type}</h3>
                        {!address.isVerified && (
                          <span className="ml-2 text-xs text-amber-700 bg-amber-100 px-2 py-0.5 rounded flex items-center">
                            <AlertTriangle className="w-3 h-3 mr-1" />
                            Unverified
                          </span>
                        )}
                      </div>
                      
                      <div className="mt-2 text-warm-gray-700 space-y-1">
                        <p className="font-medium">{address.name}</p>
                        <p>{address.line1}</p>
                        {address.line2 && <p>{address.line2}</p>}
                        {address.landmark && <p>Landmark: {address.landmark}</p>}
                        <p>{address.city}, {address.state} {address.zipCode}</p>
                        <p className="flex items-center">
                          <Phone className="w-3.5 h-3.5 mr-1 text-warm-gray-500" />
                          {address.phone}
                        </p>
                      </div>
                      
                      {address.instructions && (
                        <div className="mt-3 bg-warm-gray-50 p-3 rounded-lg text-sm">
                          <div className="flex items-center text-warm-gray-800 mb-1">
                            <Info className="w-3.5 h-3.5 mr-1" />
                            <span className="font-medium">Delivery Instructions:</span>
                          </div>
                          <p className="text-warm-gray-600 text-sm">{address.instructions}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-warm-gray-100 flex justify-between items-center">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleEditAddress(address)}
                        className="btn-ghost text-sm py-1.5 px-3 text-warm-gray-600 hover:bg-warm-gray-50"
                      >
                        <Edit className="w-3.5 h-3.5 mr-1" />
                        Edit
                      </button>
                      
                      <button 
                        onClick={() => handleDeleteAddress(address.id)}
                        className="btn-ghost text-sm py-1.5 px-3 text-red-600 hover:bg-red-50"
                        disabled={address.isDefault}
                      >
                        <Trash2 className="w-3.5 h-3.5 mr-1" />
                        Delete
                      </button>
                    </div>
                    
                    <div>
                      {!address.isDefault ? (
                        <button 
                          onClick={() => handleSetDefault(address.id)}
                          className="btn-primary text-sm py-1.5 px-3"
                        >
                          <Star className="w-3.5 h-3.5 mr-1" />
                          Set as Default
                        </button>
                      ) : null}
                      
                      {!address.isVerified && (
                        <button 
                          onClick={() => handleVerifyAddress(address.id)}
                          className="btn-secondary text-sm py-1.5 px-3 ml-2"
                        >
                          <Check className="w-3.5 h-3.5 mr-1" />
                          Verify
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          /* Address Form */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl border border-warm-gray-200 p-6"
          >
            <h2 className="text-xl font-semibold text-warm-gray-900 mb-6">
              {editingAddress ? 'Edit Address' : 'Add New Address'}
            </h2>
            
            <form className="space-y-6">
              {/* Address Type Selection */}
              <div>
                <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                  Address Type
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {(['Home', 'Office', 'Other'] as const).map(type => (
                    <div
                      key={type}
                      className={`border rounded-lg p-4 text-center cursor-pointer transition-colors ${
                        editingAddress?.type === type
                          ? 'border-saffron-500 bg-saffron-50'
                          : 'border-warm-gray-300 hover:border-saffron-300'
                      }`}
                    >
                      <div className="flex flex-col items-center">
                        {type === 'Home' && <Home className="w-5 h-5 mb-2" />}
                        {type === 'Office' && <Building className="w-5 h-5 mb-2" />}
                        {type === 'Other' && <MapPin className="w-5 h-5 mb-2" />}
                        <span className="text-sm font-medium">{type}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Name and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue={editingAddress?.name}
                    className="w-full px-4 py-2 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    defaultValue={editingAddress?.phone}
                    className="w-full px-4 py-2 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Address Lines */}
              <div>
                <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                  Address Line 1
                </label>
                <input
                  type="text"
                  defaultValue={editingAddress?.line1}
                  placeholder="House No., Building Name, Street"
                  className="w-full px-4 py-2 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                  Address Line 2 (Optional)
                </label>
                <input
                  type="text"
                  defaultValue={editingAddress?.line2}
                  placeholder="Area, Colony, Street"
                  className="w-full px-4 py-2 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                  Landmark (Optional)
                </label>
                <input
                  type="text"
                  defaultValue={editingAddress?.landmark}
                  placeholder="Nearby landmark"
                  className="w-full px-4 py-2 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                />
              </div>

              {/* City, State, ZIP */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    defaultValue={editingAddress?.city}
                    className="w-full px-4 py-2 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                    State
                  </label>
                  <div className="relative">
                    <select
                      defaultValue={editingAddress?.state}
                      className="w-full px-4 py-2 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent appearance-none"
                    >
                      <option value="">Select State</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Gujarat">Gujarat</option>
                      {/* More states would be listed here */}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-warm-gray-500 pointer-events-none" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                    PIN Code
                  </label>
                  <input
                    type="text"
                    defaultValue={editingAddress?.zipCode}
                    className="w-full px-4 py-2 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                    maxLength={6}
                  />
                </div>
              </div>

              {/* Delivery Instructions */}
              <div>
                <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                  Delivery Instructions (Optional)
                </label>
                <textarea
                  defaultValue={editingAddress?.instructions}
                  placeholder="E.g., Ring the bell twice, leave at the door, etc."
                  className="w-full px-4 py-2 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                  rows={3}
                ></textarea>
              </div>

              {/* Default Address Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="default-address"
                  defaultChecked={editingAddress?.isDefault}
                  className="w-5 h-5 rounded text-saffron-500 focus:ring-saffron-500"
                />
                <label htmlFor="default-address" className="ml-2 text-warm-gray-700">
                  Set as default address
                </label>
              </div>

              {/* Geolocation Button */}
              <button
                type="button"
                className="w-full flex items-center justify-center py-3 border border-warm-gray-300 text-warm-gray-700 rounded-lg hover:bg-warm-gray-50 transition-colors"
              >
                <Globe className="w-5 h-5 mr-2" />
                Detect My Location
              </button>

              {/* Form Buttons */}
              <div className="flex space-x-3 justify-end pt-4 border-t border-warm-gray-200">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="btn-secondary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                >
                  {editingAddress ? 'Update Address' : 'Save Address'}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default CustomerAddressesPage;