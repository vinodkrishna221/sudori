import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { 
  CreditCard, Smartphone, Wallet, Building, Plus, Edit,
  Star, Trash2, CheckCircle, ChevronDown, AlertTriangle,
  Shield, AlertCircle, Lock
} from 'lucide-react';
import { paymentMethods } from '../../mockData/addressesData';

interface PaymentMethod {
  id: string;
  type: 'card' | 'upi' | 'wallet' | 'netbanking';
  title: string;
  details: string;
  expiryDate?: string;
  isDefault: boolean;
  isVerified: boolean;
  lastUsed?: string;
  addedOn: string;
  icon: React.ReactNode;
}

const CustomerPaymentMethodsPage: React.FC = () => {
  const [userPaymentMethods, setUserPaymentMethods] = useState<PaymentMethod[]>(paymentMethods);
  
  const [showAddForm, setShowAddForm] = useState(false);
  const [activePaymentType, setActivePaymentType] = useState<string>('card');

  const handleSetDefault = (methodId: string) => {
    setUserPaymentMethods(
      userPaymentMethods.map(method => ({
        ...method,
        isDefault: method.id === methodId
      }))
    );
  };

  const handleDeleteMethod = (methodId: string) => {
    setUserPaymentMethods(userPaymentMethods.filter(method => method.id !== methodId));
  };

  const handleVerifyMethod = (methodId: string) => {
    setUserPaymentMethods(
      userPaymentMethods.map(method => 
        method.id === methodId ? { ...method, isVerified: true } : method
      )
    );
  };

  return (
    <DashboardLayout
      title="Payment Methods"
      subtitle="Manage your saved payment options"
      userType="customer"
    >
      <div className="space-y-6">
        {!showAddForm ? (
          <>
            {/* Add New Payment Method Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowAddForm(true)}
              className="w-full p-4 border-2 border-dashed border-saffron-300 rounded-xl text-saffron-600 hover:bg-saffron-50 transition-colors duration-200 flex items-center justify-center"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add New Payment Method
            </motion.button>

            {/* Payment Methods List */}
            <div className="grid grid-cols-1 gap-4">
              {userPaymentMethods.map((method) => (
                <motion.div
                  key={method.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`bg-white rounded-xl border ${
                    method.isDefault
                      ? 'border-saffron-500 shadow-sm'
                      : 'border-warm-gray-200 hover:border-saffron-200'
                  } p-6 relative ${method.isDefault ? 'bg-saffron-50/50' : ''}`}
                >
                  {method.isDefault && (
                    <div className="absolute top-4 right-4 bg-saffron-100 text-saffron-700 px-2 py-1 rounded text-xs font-medium flex items-center">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Default
                    </div>
                  )}
                  
                  <div className="flex items-start">
                    <div className="p-3 rounded-xl bg-warm-gray-100 mr-4">
                      {method.icon}
                    </div>
                    
                    <div>
                      <div className="flex items-center">
                        <h3 className="font-semibold text-warm-gray-900">{method.title}</h3>
                        {!method.isVerified && (
                          <span className="ml-2 text-xs text-amber-700 bg-amber-100 px-2 py-0.5 rounded flex items-center">
                            <AlertTriangle className="w-3 h-3 mr-1" />
                            Unverified
                          </span>
                        )}
                      </div>
                      
                      <div className="mt-2 text-warm-gray-700 space-y-1">
                        <p className="font-mono">{method.details}</p>
                        {method.expiryDate && (
                          <p className="text-sm">Expires: {method.expiryDate}</p>
                        )}
                      </div>
                      
                      <div className="mt-2 flex items-center space-x-3 text-xs text-warm-gray-500">
                        <span>Added {method.addedOn}</span>
                        {method.lastUsed && (
                          <span>Last used {method.lastUsed}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-warm-gray-100 flex justify-between items-center">
                    <div className="flex space-x-2">
                      <button 
                        className="btn-ghost text-sm py-1.5 px-3 text-warm-gray-600 hover:bg-warm-gray-50"
                      >
                        <Edit className="w-3.5 h-3.5 mr-1" />
                        Edit
                      </button>
                      
                      <button 
                        onClick={() => handleDeleteMethod(method.id)}
                        className="btn-ghost text-sm py-1.5 px-3 text-red-600 hover:bg-red-50"
                        disabled={method.isDefault}
                      >
                        <Trash2 className="w-3.5 h-3.5 mr-1" />
                        Delete
                      </button>
                    </div>
                    
                    <div>
                      {!method.isDefault ? (
                        <button 
                          onClick={() => handleSetDefault(method.id)}
                          className="btn-primary text-sm py-1.5 px-3"
                        >
                          <Star className="w-3.5 h-3.5 mr-1" />
                          Set as Default
                        </button>
                      ) : null}
                      
                      {!method.isVerified && (
                        <button 
                          onClick={() => handleVerifyMethod(method.id)}
                          className="btn-secondary text-sm py-1.5 px-3 ml-2"
                        >
                          <CheckCircle className="w-3.5 h-3.5 mr-1" />
                          Verify
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {paymentMethods.length === 0 && (
                <div className="bg-white rounded-xl border border-warm-gray-200 p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-warm-gray-100 rounded-full flex items-center justify-center mb-4">
                    <CreditCard className="w-8 h-8 text-warm-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-warm-gray-900 mb-2">No payment methods yet</h3>
                  <p className="text-warm-gray-500 mb-6">
                    Add a payment method to make checkout faster
                  </p>
                  <button
                    onClick={() => setShowAddForm(true)}
                    className="btn-primary"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Payment Method
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          /* Payment Method Form */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl border border-warm-gray-200 p-6"
          >
            <h2 className="text-xl font-semibold text-warm-gray-900 mb-6">
              Add New Payment Method
            </h2>
            
            <form className="space-y-6">
              {/* Payment Type Selection */}
              <div>
                <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                  Payment Method Type
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { id: 'card', label: 'Credit/Debit Card', icon: <CreditCard className="w-5 h-5" /> },
                    { id: 'upi', label: 'UPI', icon: <Smartphone className="w-5 h-5" /> },
                    { id: 'wallet', label: 'Wallet', icon: <Wallet className="w-5 h-5" /> },
                    { id: 'netbanking', label: 'Net Banking', icon: <Building className="w-5 h-5" /> },
                  ].map(type => (
                    <div
                      key={type.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        activePaymentType === type.id
                          ? 'border-saffron-500 bg-saffron-50'
                          : 'border-warm-gray-300 hover:border-saffron-300'
                      }`}
                      onClick={() => setActivePaymentType(type.id)}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className={`p-2 rounded-lg ${
                          activePaymentType === type.id 
                            ? 'bg-saffron-100 text-saffron-600' 
                            : 'bg-warm-gray-100 text-warm-gray-600'
                        } mb-2`}>
                          {type.icon}
                        </div>
                        <span className="text-sm font-medium">{type.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Form Fields based on payment type */}
              {activePaymentType === 'card' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-2 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-2 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="password"
                        placeholder="123"
                        maxLength={4}
                        className="w-full px-4 py-2 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                      Name on Card
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-2 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}
              
              {activePaymentType === 'upi' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                      UPI ID
                    </label>
                    <input
                      type="text"
                      placeholder="yourname@upi"
                      className="w-full px-4 py-2 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                      UPI App
                    </label>
                    <div className="relative">
                      <select
                        className="w-full px-4 py-2 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent appearance-none"
                      >
                        <option value="">Select UPI App</option>
                        <option value="phonepe">PhonePe</option>
                        <option value="gpay">Google Pay</option>
                        <option value="paytm">Paytm</option>
                        <option value="bhim">BHIM</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-warm-gray-500 pointer-events-none" />
                    </div>
                  </div>
                </div>
              )}
              
              {activePaymentType === 'wallet' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                      Wallet Provider
                    </label>
                    <div className="relative">
                      <select
                        className="w-full px-4 py-2 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent appearance-none"
                      >
                        <option value="">Select Wallet</option>
                        <option value="paytm">Paytm</option>
                        <option value="phonepe">PhonePe</option>
                        <option value="amazonpay">Amazon Pay</option>
                        <option value="mobikwik">MobiKwik</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-warm-gray-500 pointer-events-none" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 9876543210"
                      className="w-full px-4 py-2 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}
              
              {activePaymentType === 'netbanking' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                      Bank
                    </label>
                    <div className="relative">
                      <select
                        className="w-full px-4 py-2 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent appearance-none"
                      >
                        <option value="">Select Bank</option>
                        <option value="sbi">State Bank of India</option>
                        <option value="hdfc">HDFC Bank</option>
                        <option value="icici">ICICI Bank</option>
                        <option value="axis">Axis Bank</option>
                        <option value="kotak">Kotak Mahindra Bank</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-warm-gray-500 pointer-events-none" />
                    </div>
                  </div>
                </div>
              )}
              
              {/* Default Payment Method */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="default-payment"
                  className="w-5 h-5 rounded text-saffron-500 focus:ring-saffron-500"
                />
                <label htmlFor="default-payment" className="ml-2 text-warm-gray-700">
                  Set as default payment method
                </label>
              </div>

              {/* Security Notice */}
              <div className="bg-blue-50 rounded-lg p-4 text-blue-800">
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="ml-3">
                    <h4 className="font-medium">Secure Payment Storage</h4>
                    <p className="text-sm text-blue-700 mt-1">
                      Your payment information is securely stored with bank-level encryption. We never store your CVV or PIN.
                    </p>
                  </div>
                </div>
              </div>

              {/* Form Buttons */}
              <div className="flex space-x-3 justify-end pt-4 border-t border-warm-gray-200">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="btn-secondary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                >
                  <Lock className="w-4 h-4 mr-2" />
                  Save Payment Method
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default CustomerPaymentMethodsPage;