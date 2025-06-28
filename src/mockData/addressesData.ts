// Customer addresses data
export const customerAddresses = [
  {
    id: 'addr1',
    type: 'Home',
    name: 'John Doe',
    phone: '+91 98765 43210',
    line1: '123 Heritage Street',
    line2: 'Near Cultural Center',
    city: 'Mumbai',
    state: 'Maharashtra',
    zipCode: '400001',
    isDefault: true,
    isVerified: true,
    instructions: 'Please deliver in the morning between 9-12'
  },
  {
    id: 'addr2',
    type: 'Office',
    name: 'John Doe',
    phone: '+91 98765 43210',
    line1: '456 Business District',
    landmark: 'Opposite Central Park',
    city: 'Mumbai',
    state: 'Maharashtra',
    zipCode: '400051',
    isDefault: false,
    isVerified: false
  }
];

// Payment methods data
export const paymentMethods = [
  {
    id: 'pm1',
    type: 'card',
    title: 'HDFC Credit Card',
    details: '****4242',
    expiryDate: '12/25',
    isDefault: true,
    isVerified: true,
    lastUsed: '3 days ago',
    addedOn: '2 months ago',
    icon: 'visa'
  },
  {
    id: 'pm2',
    type: 'upi',
    title: 'PhonePe UPI',
    details: 'user@phonepe',
    isDefault: false,
    isVerified: true,
    lastUsed: '2 weeks ago',
    addedOn: '3 months ago',
    icon: 'phonepe'
  },
  {
    id: 'pm3',
    type: 'netbanking',
    title: 'SBI Net Banking',
    details: 'SBI Account',
    isDefault: false,
    isVerified: false,
    addedOn: '1 week ago',
    icon: 'bank'
  }
];