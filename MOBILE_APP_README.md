# Mobile Catalog App

A beautiful mobile-first shopping experience built with Next.js 14, featuring glass morphism design and smooth animations.

## Features

### 🛍️ Three Main Screens
1. **Search Screen** - Product discovery with live search and filtering
2. **Product Detail Screen** - Detailed product information with image gallery  
3. **Shopping Bag Screen** - Cart management with promo codes and checkout

### 📱 Mobile-First Design
- 430px device frame simulation
- Touch-friendly interactions (44px minimum button size)
- Responsive design that adapts to mobile screens
- Device frame with status bar and home indicator

### 🎨 Design System
- **Glass Morphism**: Translucent panels with backdrop blur
- **Gold Accents**: Elegant gold color palette (#f59e0b)
- **Smooth Animations**: Framer Motion powered transitions
- **Gradient Backgrounds**: Beautiful gradient backgrounds
- **Rounded Corners**: Modern, soft design language

### ⚡ Technical Features
- **Next.js 14** with App Router
- **React 18** with TypeScript
- **Framer Motion** for animations
- **Tailwind CSS** for styling
- **Radix UI** components
- **Lucide React** icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Architecture

```
/app/mobile/page.tsx          # Main mobile route with device frame
/components/screens/          # Three main screen components
  - SearchScreen.tsx         # Product search and discovery
  - ProductDetailScreen.tsx  # Detailed product view
  - ShoppingBagScreen.tsx    # Shopping cart management
/components/ui/               # Reusable UI components
  - tabs.tsx                # Radix UI tabs component
/data/catalog.ts             # Product catalog data
/lib/utils.ts                # Utility functions
```

## Design Highlights

### Glass Morphism Components
- Translucent panels with backdrop blur
- Subtle borders and shadows
- Hover and interaction states

### Animation System
- Page transitions with AnimatePresence
- Touch feedback with scale animations
- Staggered animations for lists
- Smooth scrolling and interactions

### Touch-Friendly Design
- Minimum 44px touch targets
- Clear visual feedback
- Intuitive gestures and navigation
- Responsive hover states

## Usage

1. **Search Products**: Use the search bar and category filters
2. **View Details**: Tap any product to see detailed information
3. **Manage Cart**: Add items, adjust quantities, apply promo codes
4. **Checkout**: Complete purchase with secure checkout flow

## Demo Data

The app includes 6 sample products across categories:
- Electronics (Wireless Headphones, Fitness Watch, Bluetooth Speaker)
- Accessories (Leather Wallet)
- Clothing (Organic Cotton T-Shirt)
- Home & Kitchen (Ceramic Coffee Mug Set)

## Promo Code
Use `SAVE10` for 10% discount on your order!

---

Built with ❤️ using Next.js, React, and Framer Motion