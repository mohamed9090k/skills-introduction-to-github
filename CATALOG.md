# Perfume Catalog Implementation

This document describes the perfume catalog implementation with filters, product cards, and 95 perfumes.

## Overview

The catalog features a premium perfume browsing experience with:
- 95 perfume products with complete metadata
- Advanced filtering system (search, scent families, concentrations, price range)
- Responsive product cards with hover effects and animations
- Client-side filtering without page reloads
- Smooth Framer Motion animations
- Responsive grid layout (4→3→2→1 columns)

## File Structure

```
/data
  └── perfumes.ts           # 95 perfume objects with complete data
/types
  └── perfume.ts            # TypeScript interfaces for Perfume and FilterState
/components
  ├── Catalog.tsx           # Main catalog page component
  ├── CatalogFilters.tsx    # Filter controls component
  └── ProductCard.tsx       # Individual product card with animations
/hooks
  └── useCatalog.ts         # Custom hook for catalog state management
/pages
  ├── _app.tsx              # Next.js app wrapper
  └── index.tsx             # Home page rendering the catalog
/styles
  └── globals.css           # Global styles with Tailwind directives
```

## Features

### Data Structure (data/perfumes.ts)
- **95 perfume objects** with the following fields:
  - `id`: Unique identifier
  - `name`: Perfume name
  - `house`: Brand/designer house
  - `notes`: Top, heart, and base notes
  - `price`: Price in USD
  - `rating`: Rating out of 5
  - `reviewCount`: Number of reviews
  - `image`: Image path
  - `scentFamily`: Category (Floral, Citrus, Woody, Oriental, Fresh, Gourmand)
  - `concentration`: Type (Eau de Parfum, Eau de Toilette, Parfum, Eau de Cologne)
  - `description`: Optional product description

### Product Cards (components/ProductCard.tsx)
- **Floating bottle effect** with hover animation
- **Glow/shadow effects** based on scent family (color-coded)
- **Star rating display** with visual stars and review count
- **Price display** prominently shown
- **Hover "Add to Bag" action** that slides up from bottom
- **Responsive design** maintaining premium styling at all breakpoints
- **Framer Motion animations** for smooth entrance and hover states
- **Fallback image** for missing product images

### Catalog Filters (components/CatalogFilters.tsx)
- **Search bar**: Filter by name, house, or notes
- **Scent family chips**: Multi-select filterable chips with animations
- **Concentration toggles**: Grid of toggleable concentration types
- **Price slider**: Dual-range slider for min/max price filtering
- **Sort order**: Dropdown for sorting by name, price, or rating
- **Result count**: Shows number of matching fragrances
- **Clear filters**: Quick reset button when filters are active

### State Management (hooks/useCatalog.ts)
- Custom React hook managing all filter state
- **Client-side filtering** using useMemo for performance
- **Real-time filtering** without page reloads
- Filters work together (AND logic)
- Calculates min/max prices from data

### Main Catalog (components/Catalog.tsx)
- Responsive grid: 4 columns (XL) → 3 columns (LG) → 2 columns (SM) → 1 column (mobile)
- **Empty state** with icon and message when no results
- **Smooth transitions** using Framer Motion's AnimatePresence
- Header with title and description
- Result summary at bottom

## Responsive Breakpoints

- **Mobile (default)**: 1 column
- **sm (640px+)**: 2 columns
- **lg (1024px+)**: 3 columns
- **xl (1280px+)**: 4 columns

All components maintain premium styling across breakpoints.

## Color Coding by Scent Family

Product cards feature dynamic glow effects based on scent family:
- **Floral**: Pink/Purple/Rose gradient
- **Citrus**: Yellow/Orange/Amber gradient
- **Woody**: Amber/Brown/Stone gradient
- **Oriental**: Red/Orange/Yellow gradient
- **Fresh**: Blue/Cyan/Teal gradient
- **Gourmand**: Pink/Purple/Indigo gradient

## Technologies Used

- **React 18**: Component framework
- **TypeScript**: Type safety
- **Next.js 14**: React framework
- **Framer Motion 10**: Animation library
- **Tailwind CSS 3**: Utility-first CSS
- **Custom Hooks**: State management

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

## Acceptance Criteria ✅

- ✅ 90+ perfumes render by default (95 perfumes included)
- ✅ Filters immediately narrow results (client-side, no reload)
- ✅ Cards retain premium styling at all breakpoints
- ✅ Search functionality across name, house, and notes
- ✅ Scent family chips with multi-select
- ✅ Concentration toggles
- ✅ Price slider with dual range
- ✅ Sort order options
- ✅ Floating bottle effects with glow/shadow
- ✅ Hover "Add to Bag" action
- ✅ Framer Motion transitions
- ✅ Empty state handling
- ✅ Responsive grid (4→1 columns)

## Notes

- All perfume data is mock data for demonstration purposes
- Image paths reference `/images/perfumes/` but include fallback for missing images
- Filters use client-side computation for instant results
- Component architecture is modular and reusable
