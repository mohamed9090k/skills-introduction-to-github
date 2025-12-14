import { motion } from 'framer-motion';
import { useState } from 'react';
import { Perfume } from '../types/perfume';

interface ProductCardProps {
  perfume: Perfume;
  index: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ perfume, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <motion.div
          animate={{
            y: isHovered ? -10 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="relative w-full h-full flex items-center justify-center p-6"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${
              perfume.scentFamily === 'Floral'
                ? 'from-pink-200/20 via-purple-200/20 to-rose-200/20'
                : perfume.scentFamily === 'Citrus'
                ? 'from-yellow-200/20 via-orange-200/20 to-amber-200/20'
                : perfume.scentFamily === 'Woody'
                ? 'from-amber-200/20 via-brown-200/20 to-stone-200/20'
                : perfume.scentFamily === 'Oriental'
                ? 'from-red-200/20 via-orange-200/20 to-yellow-200/20'
                : perfume.scentFamily === 'Fresh'
                ? 'from-blue-200/20 via-cyan-200/20 to-teal-200/20'
                : 'from-pink-200/20 via-purple-200/20 to-indigo-200/20'
            } transition-opacity duration-300`}
          />

          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            <div
              className={`absolute inset-0 blur-2xl opacity-40 ${
                perfume.scentFamily === 'Floral'
                  ? 'bg-pink-300'
                  : perfume.scentFamily === 'Citrus'
                  ? 'bg-yellow-300'
                  : perfume.scentFamily === 'Woody'
                  ? 'bg-amber-300'
                  : perfume.scentFamily === 'Oriental'
                  ? 'bg-orange-300'
                  : perfume.scentFamily === 'Fresh'
                  ? 'bg-cyan-300'
                  : 'bg-purple-300'
              }`}
            />
            <img
              src={perfume.image}
              alt={perfume.name}
              className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="300" viewBox="0 0 200 300"%3E%3Crect fill="%23f3f4f6" width="200" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="16" fill="%239ca3af"%3EPerfume%3C/text%3E%3C/svg%3E';
              }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20,
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent"
        >
          <button className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
            Add to Bag
          </button>
        </motion.div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              {perfume.house}
            </p>
            <h3 className="text-lg font-semibold text-gray-900 truncate">
              {perfume.name}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(perfume.rating)
                  ? 'text-yellow-400 fill-current'
                  : i < perfume.rating
                  ? 'text-yellow-400 fill-current opacity-50'
                  : 'text-gray-300 fill-current'
              }`}
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
          <span className="text-sm text-gray-600 ml-1">
            ({perfume.reviewCount.toLocaleString()})
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-gray-900">
              ${perfume.price}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full font-medium">
              {perfume.scentFamily}
            </span>
            <span className="text-xs text-gray-500">{perfume.concentration}</span>
          </div>
        </div>

        {perfume.description && (
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">
            {perfume.description}
          </p>
        )}
      </div>
    </motion.div>
  );
};
