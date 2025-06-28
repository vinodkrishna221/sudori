import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { 
  MapPin, CreditCard, Eye, CheckCircle, ChevronRight, ChevronLeft,
  Truck, Shield, Phone, User, Home, Building, Plus, Edit3
} from 'lucide-react';

interface CheckoutStep {
  id: string;
  title: string;
  icon: React.ElementType;
  completed: boolean;
}

interface Address {
  id: string;
  name: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  type: 'Home' | 'Office' | 'Other';
  isDefault: boolean;
}

interface PaymentMethod {
  id: string;
  type: 'card' | 'upi' | 'netbanking' | 'wallet';
  title: string;
  subtitle?: string;
  icon: string;
}

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  const [processing, setProcessing] = useState(false);

  const steps: CheckoutStep[] = [
    { id: 'shipping', title: 'Shipping Address', icon: MapPin, completed: false },
    { id: 'payment', title: 'Payment Method', icon: CreditCard, completed: false },
    { id: 'review', title: 'Review Order', icon: Eye, completed: false }
  ];

  const mockAddresses: Address[] = [
    {
      id: 'addr-1',
      name: 'John Doe',
      line1: '123 Heritage Street',
      line2: 'Near Cultural Center',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400001',
      phone: '+91 98765 43210',
      type: 'Home',
      isDefault: true
    },
    {
      id: 'addr-2',
      name: 'John Doe',
      line1: '456 Business District',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400051',
      phone: '+91 98765 43210',
      type: 'Office',
      isDefault: false
    }
  ];

  const paymentMethods: PaymentMethod[] = [
    {
      id: 'card',
      type: 'card',
      title: 'Credit/Debit Card',
      subtitle: 'Visa, Mastercard, RuPay',
      icon: '💳'
    },
    {
      id: 'upi',
      type: 'upi',
      title: 'UPI',
      subtitle: 'Pay using any UPI app',
      icon: '📱'
    },
    {
      id: 'netbanking',
      type: 'netbanking',
      title: 'Net Banking',
      subtitle: 'All major banks supported',
      icon: '🏦'
    },
    {
      id: 'wallet',
      type: 'wallet',
      title: 'Digital Wallet',
      subtitle: 'Paytm, PhonePe, Google Pay',
      icon: '💰'
    }
  ];

  const orderSummary = {
    items: 3,
    subtotal: 13897,
    shipping: 0,
    taxes: 2501,
    discount: 1389,
    total: 15009
  };

  const handleStepContinue = () => {
    if (currentStep === 0 && !selectedAddress) {
      alert('Please select a shipping address');
      return;
    }
    if (currentStep === 1 && !selectedPayment) {
      alert('Please select a payment method');
      return;
    }
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handlePlaceOrder();
    }
  };

  const handleStepBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePlaceOrder = async () => {
    setProcessing(true);
    
    // Mock order processing
    setTimeout(() => {
      const orderId = 'ORD-' + Date.now();
      navigate(`/order-confirmation/${orderId}`);
    }, 2000);
  };

  return (
    <>
      <Helmet>
        <title>Checkout - Sudori</title>
        <meta name="description" content="Complete your order securely with multiple payment options." />
      </Helmet>

      <div className="min-h-screen bg-warm-gray-50">
        <Header />
        
        <main className="pt-20 pb-16">
          <div className="max-w-6xl mx-auto container-padding">
            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex justify-center">
                <div className="flex items-center">
                  {steps.map((step, index) => (
                    <React.Fragment key={step.id}>
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                          index <= currentStep
                            ? 'bg-saffron-500 text-white'
                            : 'bg-warm-gray-200 text-warm-gray-500'
                        }`}>
                          {index < currentStep ? (
                            <CheckCircle className="w-5 h-5" />
                          ) : (
                            <step.icon className="w-5 h-5" />
                          )}
                        </div>
                        <span className={`ml-3 font-medium ${
                          index <= currentStep ? 'text-warm-gray-900' : 'text-warm-gray-500'
                        }`}>
                          {step.title}
                        </span>
                      </div>
                      {index < steps.length - 1 && (
                        <div className={`w-16 h-1 mx-4 rounded-full ${
                          index < currentStep ? 'bg-saffron-500' : 'bg-warm-gray-200'
                        }`} />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl border border-warm-gray-200 p-8">
                  <AnimatePresence mode="wait">
                    {/* Shipping Address Step */}
                    {currentStep === 0 && (
                      <motion.div
                        key="shipping"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div>
                          <h2 className="text-2xl font-bold text-warm-gray-900 mb-2">
                            Shipping Address
                          </h2>
                          <p className="text-warm-gray-600">
                            Choose where you'd like your order delivered
                          </p>
                        </div>

                        {/* Saved Addresses */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-warm-gray-800">Saved Addresses</h3>
                          <div className="grid gap-4">
                            {mockAddresses.map((address) => (
                              <div
                                key={address.id}
                                onClick={() => setSelectedAddress(address.id)}
                                className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                                  selectedAddress === address.id
                                    ? 'border-saffron-500 bg-saffron-50'
                                    : 'border-warm-gray-200 hover:border-saffron-300'
                                }`}
                              >
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                      <h4 className="font-semibold text-warm-gray-900">{address.name}</h4>
                                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                        address.type === 'Home' ? 'bg-green-100 text-green-700' :
                                        address.type === 'Office' ? 'bg-blue-100 text-blue-700' :
                                        'bg-purple-100 text-purple-700'
                                      }`}>
                                        {address.type}
                                      </span>
                                      {address.isDefault && (
                                        <span className="bg-saffron-100 text-saffron-700 px-2 py-1 rounded-full text-xs font-medium">
                                          Default
                                        </span>
                                      )}
                                    </div>
                                    <div className="text-warm-gray-700 space-y-1">
                                      <p>{address.line1}</p>
                                      {address.line2 && <p>{address.line2}</p>}
                                      <p>{address.city}, {address.state} {address.zipCode}</p>
                                      <p className="flex items-center gap-1">
                                        <Phone className="w-3 h-3" />
                                        {address.phone}
                                      </p>
                                    </div>
                                  </div>
                                  <input
                                    type="radio"
                                    name="address"
                                    checked={selectedAddress === address.id}
                                    onChange={() => setSelectedAddress(address.id)}
                                    className="mt-1"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Add New Address */}
                        <div>
                          {!showNewAddressForm ? (
                            <button
                              onClick={() => setShowNewAddressForm(true)}
                              className="w-full p-4 border-2 border-dashed border-warm-gray-300 rounded-xl text-warm-gray-600 hover:border-saffron-400 hover:text-saffron-600 transition-colors duration-200 flex items-center justify-center gap-2"
                            >
                              <Plus className="w-5 h-5" />
                              Add New Address
                            </button>
                          ) : (
                            <div className="border-2 border-warm-gray-200 rounded-xl p-6 space-y-4">
                              <h4 className="font-semibold text-warm-gray-900">Add New Address</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                  type="text"
                                  placeholder="Full Name"
                                  className="w-full px-3 py-2 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                                />
                                <input
                                  type="tel"
                                  placeholder="Phone Number"
                                  className="w-full px-3 py-2 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                                />
                                <input
                                  type="text"
                                  placeholder="Address Line 1"
                                  className="md:col-span-2 w-full px-3 py-2 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                                />
                                <input
                                  type="text"
                                  placeholder="Address Line 2 (Optional)"
                                  className="md:col-span-2 w-full px-3 py-2 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                                />
                                <input
                                  type="text"
                                  placeholder="City"
                                  className="w-full px-3 py-2 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                                />
                                <select className="w-full px-3 py-2 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent">
                                  <option>Select State</option>
                                  <option>Maharashtra</option>
                                  <option>Delhi</option>
                                  <option>Karnataka</option>
                                </select>
                                <input
                                  type="text"
                                  placeholder="PIN Code"
                                  className="w-full px-3 py-2 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                                />
                              </div>
                              <div className="flex gap-3">
                                <button
                                  onClick={() => setShowNewAddressForm(false)}
                                  className="btn-secondary"
                                >
                                  Cancel
                                </button>
                                <button className="btn-primary">
                                  Save Address
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}

                    {/* Payment Method Step */}
                    {currentStep === 1 && (
                      <motion.div
                        key="payment"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div>
                          <h2 className="text-2xl font-bold text-warm-gray-900 mb-2">
                            Payment Method
                          </h2>
                          <p className="text-warm-gray-600">
                            Choose your preferred payment option
                          </p>
                        </div>

                        <div className="grid gap-4">
                          {paymentMethods.map((method) => (
                            <div
                              key={method.id}
                              onClick={() => setSelectedPayment(method.id)}
                              className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                                selectedPayment === method.id
                                  ? 'border-saffron-500 bg-saffron-50'
                                  : 'border-warm-gray-200 hover:border-saffron-300'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <span className="text-2xl">{method.icon}</span>
                                  <div>
                                    <h4 className="font-semibold text-warm-gray-900">{method.title}</h4>
                                    <p className="text-sm text-warm-gray-600">{method.subtitle}</p>
                                  </div>
                                </div>
                                <input
                                  type="radio"
                                  name="payment"
                                  checked={selectedPayment === method.id}
                                  onChange={() => setSelectedPayment(method.id)}
                                />
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Security Notice */}
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                          <div className="flex items-center gap-2 text-blue-800">
                            <Shield className="w-5 h-5" />
                            <span className="font-medium">Secure Payment</span>
                          </div>
                          <p className="text-blue-700 text-sm mt-1">
                            Your payment information is encrypted and secure. We never store your card details.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {/* Review Order Step */}
                    {currentStep === 2 && (
                      <motion.div
                        key="review"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div>
                          <h2 className="text-2xl font-bold text-warm-gray-900 mb-2">
                            Review Your Order
                          </h2>
                          <p className="text-warm-gray-600">
                            Please review your order before placing it
                          </p>
                        </div>

                        {/* Order Details */}
                        <div className="space-y-4">
                          <div className="bg-warm-gray-50 rounded-xl p-4">
                            <h4 className="font-semibold text-warm-gray-900 mb-2">Shipping Address</h4>
                            <p className="text-warm-gray-700">
                              John Doe<br />
                              123 Heritage Street<br />
                              Near Cultural Center<br />
                              Mumbai, Maharashtra 400001<br />
                              +91 98765 43210
                            </p>
                          </div>

                          <div className="bg-warm-gray-50 rounded-xl p-4">
                            <h4 className="font-semibold text-warm-gray-900 mb-2">Payment Method</h4>
                            <p className="text-warm-gray-700">
                              {paymentMethods.find(m => m.id === selectedPayment)?.title}
                            </p>
                          </div>

                          <div className="bg-warm-gray-50 rounded-xl p-4">
                            <h4 className="font-semibold text-warm-gray-900 mb-2">Order Items</h4>
                            <div className="space-y-2 text-sm text-warm-gray-700">
                              <div className="flex justify-between">
                                <span>Handwoven Silk Tassel × 2</span>
                                <span>₹4,998</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Blue Pottery Vase × 1</span>
                                <span>₹2,899</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Kundan Polki Earrings × 1</span>
                                <span>₹8,499</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6 mt-6 border-t border-warm-gray-200">
                    <button
                      onClick={handleStepBack}
                      disabled={currentStep === 0}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${
                        currentStep === 0
                          ? 'text-warm-gray-400 cursor-not-allowed'
                          : 'text-warm-gray-700 hover:bg-warm-gray-100'
                      }`}
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Back
                    </button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleStepContinue}
                      disabled={processing}
                      className="btn-primary px-8 py-3"
                    >
                      {processing ? (
                        'Processing...'
                      ) : currentStep === steps.length - 1 ? (
                        'Place Order'
                      ) : (
                        <>
                          Continue
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Order Summary Sidebar */}
              <div className="bg-white rounded-xl border border-warm-gray-200 p-6 h-fit sticky top-24">
                <h3 className="text-lg font-semibold text-warm-gray-900 mb-6">
                  Order Summary
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-warm-gray-600">Subtotal ({orderSummary.items} items)</span>
                    <span>₹{orderSummary.subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-warm-gray-600">Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-warm-gray-600">Taxes</span>
                    <span>₹{orderSummary.taxes.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-₹{orderSummary.discount.toLocaleString()}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>₹{orderSummary.total.toLocaleString()}</span>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="space-y-2 text-sm text-warm-gray-600">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>SSL Secured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-blue-500" />
                    <span>Free Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500" />
                    <span>Authenticity Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CheckoutPage;