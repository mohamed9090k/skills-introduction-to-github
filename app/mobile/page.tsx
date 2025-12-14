'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SearchScreen } from '@/components/screens/SearchScreen'
import { ProductDetailScreen } from '@/components/screens/ProductDetailScreen'
import { ShoppingBagScreen } from '@/components/screens/ShoppingBagScreen'
import { Search, ShoppingBag, Package } from 'lucide-react'

const screens = [
  { id: 'search', label: 'Search', icon: Search },
  { id: 'product', label: 'Product', icon: Package },
  { id: 'bag', label: 'Bag', icon: ShoppingBag },
]

export default function MobilePage() {
  const [activeScreen, setActiveScreen] = useState('search')
  const [selectedProductId, setSelectedProductId] = useState('1')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8 px-4">
      <div className="mobile-container relative">
        {/* Device Frame */}
        <div className="relative mx-auto max-w-[430px]">
          {/* Phone Frame */}
          <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
            <div className="bg-white rounded-[2.5rem] overflow-hidden relative">
              {/* Status Bar */}
              <div className="bg-black h-6 rounded-t-[2.5rem] flex items-center justify-center">
                <div className="w-16 h-1 bg-white rounded-full"></div>
              </div>
              
              {/* Screen Content */}
              <div className="h-[calc(100vh-3rem)] bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeScreen}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="h-full"
                  >
                    {activeScreen === 'search' && (
                      <SearchScreen
                        onProductSelect={(productId) => {
                          setSelectedProductId(productId)
                          setActiveScreen('product')
                        }}
                      />
                    )}
                    {activeScreen === 'product' && (
                      <ProductDetailScreen
                        productId={selectedProductId}
                        onAddToBag={() => setActiveScreen('bag')}
                        onBack={() => setActiveScreen('search')}
                      />
                    )}
                    {activeScreen === 'bag' && (
                      <ShoppingBagScreen
                        onCheckout={() => alert('Checkout functionality would be implemented here')}
                        onBack={() => setActiveScreen('product')}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mt-8 space-x-4">
          {screens.map((screen) => {
            const Icon = screen.icon
            return (
              <motion.button
                key={screen.id}
                onClick={() => setActiveScreen(screen.id)}
                className={`
                  flex flex-col items-center space-y-2 p-4 rounded-2xl transition-all duration-200
                  ${activeScreen === screen.id 
                    ? 'glass-panel text-primary-800' 
                    : 'glass-panel/50 text-gray-600 hover:text-primary-700'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={24} />
                <span className="text-sm font-medium">{screen.label}</span>
              </motion.button>
            )
          })}
        </div>
      </div>
    </div>
  )
}