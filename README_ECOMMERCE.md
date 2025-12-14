# Luxury Scents eCommerce Platform

A modern, accessible eCommerce website built with Next.js, featuring a reviews carousel, newsletter signup, and luxury footer.

## Features

### 🎠 Reviews Carousel
- **Keyboard Accessible**: Navigate through reviews using arrow buttons with full keyboard support
- **Auto-play**: Automatically cycles through testimonials every 5 seconds
- **Manual Controls**: Previous/Next buttons and dot indicators for navigation
- **Star Ratings**: Visual 5-star rating system
- **Product Information**: Shows scent purchased with each review
- **Portrait Thumbnails**: Displays reviewer profile images
- **Depth Shadows**: Modern shadow effects for visual depth
- **Smooth Animations**: Fade-in effects and smooth transitions

### 📧 Newsletter Signup
- **Gradient Background**: Eye-catching purple-to-pink gradient
- **Rounded Corners**: Modern, polished design
- **Input Validation**: 
  - Email format validation
  - Required field validation
  - Real-time inline error messages
- **API Integration**: Connected to `/api/newsletter` endpoint
- **Success/Error States**: Clear user feedback with icons and messages
- **Loading State**: Visual feedback during submission
- **Accessible Forms**: Proper ARIA labels and error announcements

### 🦶 Luxury Footer
- **Navigation Links**: 
  - Shop (New Arrivals, Best Sellers, Collections, Gift Sets)
  - About (Our Story, Craftsmanship, Sustainability, Press)
  - Support (Contact, FAQ, Shipping, Returns)
- **Contact Information**: Phone, email, and address
- **Social Media Links**: Instagram, Facebook, Twitter, Pinterest
- **Policy Links**: Privacy Policy, Terms of Service, Cookie Policy, Accessibility
- **Responsive Design**: Works on all screen sizes
- **Hover Effects**: Smooth transitions and transform effects

## API Endpoints

### POST /api/newsletter
Subscribe to the newsletter with name and email.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Success Response:**
```json
{
  "message": "Successfully subscribed to our newsletter!",
  "success": true
}
```

**Error Response:**
```json
{
  "error": "Invalid email format",
  "success": false
}
```

## Accessibility Features

- ✅ Keyboard navigation for all interactive elements
- ✅ ARIA labels and roles for screen readers
- ✅ Focus indicators for keyboard users
- ✅ Live regions for dynamic content updates
- ✅ Semantic HTML structure
- ✅ Form validation with error announcements
- ✅ Alt text for all images

## Technologies Used

- **Next.js 16**: React framework with App Router
- **React 19**: Latest React features
- **TypeScript**: Type-safe code
- **Tailwind CSS 4**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **ESLint**: Code linting
- **TypeScript ESLint**: TypeScript-specific linting rules

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## Project Structure

```
/home/engine/project/
├── app/
│   ├── api/
│   │   └── newsletter/
│   │       └── route.ts          # Newsletter API endpoint
│   ├── globals.css               # Global styles and animations
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/
│   ├── ReviewsCarousel.tsx       # Reviews carousel component
│   ├── NewsletterSignup.tsx      # Newsletter form component
│   └── LuxuryFooter.tsx          # Footer component
├── eslint.config.mjs             # ESLint configuration
├── next.config.mjs               # Next.js configuration
├── package.json                  # Dependencies and scripts
├── postcss.config.mjs            # PostCSS configuration
├── tailwind.config.ts            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

## Design System

### Colors
- Primary: Purple (600-900)
- Secondary: Pink (500-800)
- Accent: Rose
- Neutral: Slate (50-900)

### Typography
- Headings: Bold, large sizes (3xl-7xl)
- Body: Regular weight, comfortable line-height
- Accents: Gradient text for emphasis

### Spacing
- Consistent padding: 4, 8, 12, 16, 20 units
- Section spacing: py-20
- Container max-width: 4xl-6xl

### Shadows
- Cards: shadow-2xl
- Buttons: shadow-lg
- Hover states: Enhanced shadows

## Testing Checklist

- ✅ Reviews carousel auto-plays
- ✅ Carousel navigation buttons work
- ✅ Carousel dot indicators work
- ✅ Keyboard navigation works (Tab, Enter, Space, Arrows)
- ✅ Newsletter form validates email format
- ✅ Newsletter form shows inline errors
- ✅ Newsletter form shows success confirmation
- ✅ Newsletter API endpoint returns correct responses
- ✅ Footer links are functional
- ✅ Social media links work
- ✅ Responsive design on mobile, tablet, and desktop
- ✅ All animations are smooth
- ✅ No accessibility warnings
- ✅ TypeScript compiles without errors
- ✅ ESLint passes without errors

## Future Enhancements

- Add real newsletter service integration (e.g., Mailchimp, SendGrid)
- Implement actual product pages
- Add shopping cart functionality
- Integrate payment processing
- Add user authentication
- Implement product search
- Add more product filters
- Create admin dashboard for managing products and orders
