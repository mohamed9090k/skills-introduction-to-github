'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Heart, Star, Share2, Plus, Minus, ShoppingCart, Truck, Shield, RotateCcw } from 'lucide-react'
import { catalogData, type Product } from '@/data/catalog'

interface ProductDetailScreenProps {
  productId: string
  onAddToBag: () => void
  onBack: () => void
}

export function ProductDetailScreen({ productId, onAddToBag, onBack }: ProductDetailScreenProps) {
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [showFullDescription, setShowFullDescription] = useState(false)

  const product = catalogData.find(p => p.id === productId)
  
  if (!product) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-gray-500">Product not found</p>
      </div>
    )
  }

  // Mock additional images for demonstration
  const productImages = [
    product.image,
    product.image,
    product.image,
  ]

  const incrementQuantity = () => setQuantity(prev => prev + 1)
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1))

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
        
        <h1 className="text-lg font-semibold text-gray-800 truncate mx-4">
          Product Details
        </h1>
        
        <div className="flex space-x-2">
          <motion.button
            onClick={() => setIsFavorite(!isFavorite)}
            className="p-2 rounded-full glass-panel/50 hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart 
              size={20} 
              className={`${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-700'}`} 
            />
          </motion.button>
          <motion.button
            className="p-2 rounded-full glass-panel/50 hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Share2 size={20} className="text-gray-700" />
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Product Images */}
        <div className="px-4 mb-6">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden glass-panel">
              <motion.img
                key={activeImageIndex}
                src={productImages[activeImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            {/* Image indicators */}
            <div className="flex space-x-2 justify-center mt-4">
              {productImages.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === activeImageIndex ? 'bg-gold-500' : 'bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="px-4 mb-6">
          <div className="glass-panel p-4 rounded-2xl">
            <div className="flex items-start justify-between mb-2">
              <h2 className="text-xl font-bold text-gray-800 leading-tight">
                {product.name}
              </h2>
              <span className="bg-gold-100 text-gold-800 text-xs px-2 py-1 rounded-full font-medium">
                {product.category}
              </span>
            </div>

            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                <Star size={16} className="fill-gold-400 text-gold-400 mr-1" />
                <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                <span className="text-xs text-gray-500 ml-1">({product.reviewCount} reviews)</span>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-gray-800">${product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
              {product.originalPrice && (
                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-600 leading-relaxed">
                {showFullDescription ? product.description : `${product.description.slice(0, 120)}...`}
              </p>
              <motion.button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="text-gold-600 text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {showFullDescription ? 'Show Less' : 'Read More'}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="px-4 mb-6">
          <div className="glass-panel p-4 rounded-2xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Features</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="glass-panel p-3 rounded-xl mb-2">
                  <Truck size={20} className="text-gold-600 mx-auto" />
                </div>
                <p className="text-xs text-gray-600">Free Shipping</p>
              </div>
              <div className="text-center">
                <div className="glass-panel p-3 rounded-xl mb-2">
                  <Shield size={20} className="text-gold-600 mx-auto" />
                </div>
                <p className="text-xs text-gray-600">Secure Payment</p>
              </div>
              <div className="text-center">
                <div className="glass-panel p-3 rounded-xl mb-2">
                  <RotateCcw size={20} className="text-gold-600 mx-auto" />
                </div>
                <p className="text-xs text-gray-600">Easy Returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="px-4 mb-6">
          <div className="glass-panel p-4 rounded-2xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  className="bg-gold-100 text-gold-800 text-xs px-3 py-1 rounded-full font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="p-4 space-y-4">
        {/* Quantity Selector */}
        <div className="glass-panel p-4 rounded-2xl">
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-700">Quantity</span>
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={decrementQuantity}
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Minus size={16} className="text-gray-700" />
              </motion.button>
              <span className="text-lg font-semibold text-gray-800 w-8 text-center">
                {quantity}
              </span>
              <motion.button
                onClick={incrementQuantity}
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus size={16} className="text-gray-700" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Add to Cart */}
        <motion.button
          onClick={() => {
            onAddToBag()
          }}
          className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold py-4 rounded-2xl shadow-lg flex items-center justify-center space-x-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ShoppingCart size={20} />
          <span>Add to Bag - ${(product.price * quantity).toFixed(2)}</span>
        </motion.button>
      </div>
    </div>
  )
}