export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  description: string;
  tags: string[];
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export const catalogData: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    category: 'Electronics',
    rating: 4.8,
    reviewCount: 124,
    description: 'High-quality wireless headphones with active noise cancellation, premium sound quality, and 30-hour battery life. Perfect for music lovers and professionals.',
    tags: ['wireless', 'noise-cancelling', 'premium', 'bluetooth'],
    inStock: true,
  },
  {
    id: '2',
    name: 'Minimalist Leather Wallet',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80',
    category: 'Accessories',
    rating: 4.6,
    reviewCount: 89,
    description: 'Handcrafted genuine leather wallet with multiple card slots and RFID protection. Slim profile fits comfortably in your pocket.',
    tags: ['leather', 'wallet', 'rfid', 'handcrafted'],
    inStock: true,
  },
  {
    id: '3',
    name: 'Smart Fitness Watch',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
    category: 'Electronics',
    rating: 4.4,
    reviewCount: 203,
    description: 'Advanced fitness tracking with heart rate monitoring, GPS, and waterproof design. Track your health goals with precision.',
    tags: ['fitness', 'smartwatch', 'health', 'gps'],
    inStock: true,
  },
  {
    id: '4',
    name: 'Organic Cotton T-Shirt',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80',
    category: 'Clothing',
    rating: 4.3,
    reviewCount: 67,
    description: 'Soft, breathable organic cotton t-shirt. Available in multiple colors. Ethically sourced and sustainably produced.',
    tags: ['organic', 'cotton', 'sustainable', 'comfortable'],
    inStock: true,
  },
  {
    id: '5',
    name: 'Ceramic Coffee Mug Set',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=500&q=80',
    category: 'Home & Kitchen',
    rating: 4.7,
    reviewCount: 145,
    description: 'Set of 4 handcrafted ceramic coffee mugs. Perfect for your morning coffee or evening tea. Microwave and dishwasher safe.',
    tags: ['ceramic', 'coffee', 'mug', 'handcrafted'],
    inStock: true,
  },
  {
    id: '6',
    name: 'Bluetooth Speaker',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80',
    category: 'Electronics',
    rating: 4.5,
    reviewCount: 178,
    description: 'Portable Bluetooth speaker with rich sound quality, 12-hour battery life, and waterproof design. Perfect for outdoor adventures.',
    tags: ['bluetooth', 'speaker', 'portable', 'waterproof'],
    inStock: true,
  },
];

export const categories = ['All', 'Electronics', 'Accessories', 'Clothing', 'Home & Kitchen'];