'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Plus, Minus, Trash2, Tag, ShoppingCart, CreditCard } from 'lucide-react'
import { catalogData, type CartItem } from '@/data/catalog'

interface ShoppingBagScreenProps {
  onCheckout: () => void
  onBack: () => void
}

export function ShoppingBagScreen({ onCheckout, onBack }: ShoppingBagScreenProps) {
  // Mock cart data - in a real app this would come from context/state management
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: catalogData[0], // Wireless Headphones
      quantity: 1,
    },
    {
      product: catalogData[2], // Smart Fitness Watch  
      quantity: 2,
    },
  ])
  
  const [promoCode, setPromoCode] = useState('')
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null)
  const [showPromoInput, setShowPromoInput] = useState(false)

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(productId)
      return
    }
    
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }

  const removeItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId))
  }

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'save10') {
      setAppliedPromo('SAVE10')
      setPromoCode('')
      setShowPromoInput(false)
    } else {
      alert('Invalid promo code')
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
  const discount = appliedPromo ? subtotal * 0.1 : 0 // 10% discount
  const shipping = subtotal > 50 ? 0 : 5.99
  const tax = (subtotal - discount) * 0.08 // 8% tax
  const total = subtotal - discount + shipping + tax

  if (cartItems.length === 0) {
    return (
      <div className="h-full flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Header */}
        <div className="flex items-center justify-between p-4 glass-panel m-4 rounded-xl">
          <motion.button
            onClick={onBack}
            className="p-2 rounded-full glass-panel/50 hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft size={20} className="text-gray-700" />
          </motion.button>
          
          <h1 className="text-lg font-semibold text-gray-800">
            Shopping Bag
          </h1>
          
          <div className="w-10"></div>
        </div>

        {/* Empty State */}
        <div className="flex-1 flex items-center justify-center px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="glass-panel p-12 rounded-2xl">
              <ShoppingCart className="mx-auto text-gray-400 mb-4" size={64} />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Your bag is empty</h3>
              <p className="text-gray-500 mb-6">Add some products to get started</p>
              <motion.button
                onClick={onBack}
                className="bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold py-3 px-6 rounded-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Continue Shopping
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="flex items-center justify-between p-4 glass-panel m-4 rounded-xl">
        <motion.button
          onClick={onBack}
          className="p-2 rounded-full glass-panel/50 hover:bg-white/30 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft size={20} className="text-gray-700" />
        </motion.button>
        
        <h1 className="text-lg font-semibold text-gray-800">
          Shopping Bag ({cartItems.length})
        </h1>
        
        <motion.button
          className="p-2 rounded-full glass-panel/50 hover:bg-white/30 transition-colors text-gold-600"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <CreditCard size={20} />
        </motion.button>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="space-y-4">
          <AnimatePresence>
            {cartItems.map((item, index) => (
              <motion.div
                key={item.product.id}
                className="glass-panel p-4 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex space-x-4">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight pr-2">
                        {item.product.name}
                      </h3>
                      <motion.button
                        onClick={() => removeItem(item.product.id)}
                        className="p-1 rounded-full hover:bg-red-100 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Trash2 size={14} className="text-red-500" />
                      </motion.button>
                    </div>

                    <p className="text-xs text-gray-600 mb-3">
                      ${item.product.price} each
                    </p>

                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <motion.button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full glass-panel flex items-center justify-center hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Minus size={14} className="text-gray-700" />
                        </motion.button>
                        <span className="text-sm font-semibold text-gray-800 w-8 text-center">
                          {item.quantity}
                        </span>
                        <motion.button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full glass-panel flex items-center justify-center hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Plus size={14} className="text-gray-700" />
                        </motion.button>
                      </div>

                      {/* Item Total */}
                      <div className="text-right">
                        <p className="font-semibold text-gray-800">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Promo Code Section */}
        <div className="mt-6">
          <div className="glass-panel p-4 rounded-2xl">
            {!showPromoInput && !appliedPromo && (
              <motion.button
                onClick={() => setShowPromoInput(true)}
                className="flex items-center space-x-2 text-gold-600 hover:text-gold-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Tag size={16} />
                <span className="text-sm font-medium">Apply Promo Code</span>
              </motion.button>
            )}

            {showPromoInput && !appliedPromo && (
              <div className="space-y-3">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 px-3 py-2 glass-panel bg-white/30 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400 text-sm"
                    onKeyPress={(e) => e.key === 'Enter' && applyPromoCode()}
                  />
                  <motion.button
                    onClick={applyPromoCode}
                    className="px-4 py-2 bg-gold-500 text-white rounded-lg font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Apply
                  </motion.button>
                </div>
                <motion.button
                  onClick={() => {
                    setShowPromoInput(false)
                    setPromoCode('')
                  }}
                  className="text-xs text-gray-500 hover:text-gray-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Cancel
                </motion.button>
              </div>
            )}

            {appliedPromo && (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Tag size={16} className="text-green-600" />
                  <span className="text-sm font-medium text-green-700">
                    {appliedPromo} applied
                  </span>
                </div>
                <motion.button
                  onClick={() => setAppliedPromo(null)}
                  className="text-xs text-red-500 hover:text-red-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Remove
                </motion.button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="p-4 space-y-4">
        {/* Order Details */}
        <div className="glass-panel p-4 rounded-2xl">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-800">${subtotal.toFixed(2)}</span>
            </div>
            
            {appliedPromo && (
              <div className="flex justify-between text-sm">
                <span className="text-green-600">Discount (10%)</span>
                <span className="text-green-600">-${discount.toFixed(2)}</span>
              </div>
            )}
            
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Shipping</span>
              <span className={`${shipping === 0 ? 'text-green-600' : 'text-gray-800'}`}>
                {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
              </span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Tax</span>
              <span className="text-gray-800">${tax.toFixed(2)}</span>
            </div>
            
            <div className="border-t pt-3">
              <div className="flex justify-between">
                <span className="text-lg font-semibold text-gray-800">Total</span>
                <span className="text-lg font-bold text-gray-800">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Free Shipping Notice */}
        {subtotal < 50 && (
          <motion.div
            className="bg-blue-50 border border-blue-200 p-3 rounded-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs text-blue-700 text-center">
              Add ${(50 - subtotal).toFixed(2)} more for free shipping!
            </p>
          </motion.div>
        )}

        {/* Checkout Button */}
        <motion.button
          onClick={onCheckout}
          className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold py-4 rounded-2xl shadow-lg flex items-center justify-center space-x-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <CreditCard size={20} />
          <span>Checkout - ${total.toFixed(2)}</span>
        </motion.button>
      </div>
    </div>
  )
}