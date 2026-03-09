# Nonstop Lock & Key - Website Style Guide

## Color Palette

### Primary Color (Amber/Gold)
The brand uses a warm amber/gold color scheme that conveys trust, reliability, and professionalism.

- `primary-50`: #fffbeb - Lightest shade for subtle backgrounds
- `primary-100`: #fef3c7 - Very light for hover states and icon containers
- `primary-200`: #fde68a
- `primary-300`: #fcd34d
- `primary-400`: #fbbf24 - Accent text, hero highlights
- `primary-500`: #f59e0b
- `primary-600`: #d97706 - **Main brand color** for buttons, icons, and primary accents
- `primary-700`: #b45309 - Button hover states, darker accents
- `primary-800`: #92400e
- `primary-900`: #78350f - Darkest shade

### Neutral Colors
- **White**: #ffffff - Card backgrounds, text on dark backgrounds
- **Gray-50**: Light section backgrounds
- **Gray-100**: Light hover states
- **Gray-200-400**: Borders, disabled states, subtle dividers
- **Gray-500-600**: Secondary text, labels
- **Gray-700**: Primary navigation text
- **Gray-800**: Footer text
- **Gray-900**: Main headings and dark text

### Semantic Colors
- **Success/Green**: For success messages, confirmation states
- **Error/Red**: For error states, alerts

## Typography

### Font Family
```css
font-family: 'Inter', system-ui, -apple-system, sans-serif
```
- Loaded from Google Fonts
- Weights used: 300, 400, 500, 600, 700

### Heading Scale
- **H1 (Hero)**: `text-4xl sm:text-5xl md:text-7xl font-bold`
- **H2 (Sections)**: `text-3xl sm:text-4xl md:text-5xl font-bold`
- **H3 (Cards/Subsections)**: `text-xl sm:text-2xl font-semibold`
- **H4 (Small headings)**: `text-lg sm:text-xl font-semibold`

### Body Text
- **Large**: `text-lg sm:text-xl` - Section descriptions
- **Base**: `text-base` - Forms, general content
- **Small**: `text-sm` - Labels, metadata
- **Extra Small**: `text-xs` - Mobile labels only

### Text Colors
- **Headings**: `text-gray-900`
- **Body**: `text-gray-600`
- **Labels**: `text-gray-700`
- **Muted**: `text-gray-500`

## Component Patterns

### Buttons

#### Primary CTA
```tsx
className="px-6 sm:px-8 py-3 sm:py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg"
```

#### Secondary (Glass)
```tsx
className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white font-semibold rounded-lg transition-all"
```

#### Text Link
```tsx
className="text-gray-700 hover:text-primary-600 transition-colors"
```

### Cards

#### Standard Card
```tsx
className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
```

#### Service Card
```tsx
className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
```

### Forms

#### Input Fields
```tsx
className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
```

#### Labels
```tsx
className="block text-sm font-medium text-gray-700 mb-2"
```

#### Select Dropdown
```tsx
className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
```

#### Textarea
```tsx
className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
```

### Icons

#### Icon Container
```tsx
className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center"
```

#### Icon Style
```tsx
className="w-6 h-6 text-primary-600"
```

#### Animated Icon (in cards)
```tsx
className="w-12 h-12 text-primary-600 mb-4 transform group-hover:scale-110 transition-transform"
```

### Navigation

#### Nav Bar
```tsx
className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50"
```

#### Nav Container
```tsx
className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
```

#### Nav Links
```tsx
className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
```

#### Mobile Menu Button
```tsx
className="text-gray-700 hover:text-primary-600"
```

## Layout System

### Section Spacing
```tsx
className="py-16 sm:py-24"
```

### Container
```tsx
className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
```

### Section Headers
```tsx
<div className="text-center mb-12 sm:mb-16">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
    Section Title
  </h2>
  <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
    Description text
  </p>
</div>
```

### Grid Layouts

#### 3-Column (Services)
```tsx
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
```

#### 2-Column (Contact)
```tsx
className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12"
```

#### Stats Grid
```tsx
className="grid grid-cols-2 gap-4 sm:gap-6"
```

## Spacing Scale

### Margins/Padding
- **Tight**: `space-y-2` or `gap-2`
- **Small**: `space-y-4` or `gap-4` (mobile), `sm:space-y-6` or `sm:gap-6` (desktop)
- **Medium**: `space-y-6` or `gap-6` (mobile), `sm:space-y-8` or `sm:gap-8` (desktop)
- **Large**: `mb-12 sm:mb-16` for section headers

### Component Internal Spacing
- Card padding: `p-6 sm:p-8`
- Button padding: `px-6 sm:px-8 py-3 sm:py-4`
- Input padding: `px-4 py-2.5 sm:py-3`

## Effects & Animations

### Transitions
```tsx
// Standard color transition
className="transition-colors"

// All properties
className="transition-all duration-300"
```

### Hover Effects

#### Scale Up
```tsx
className="transform hover:scale-105 transition-all"
```

#### Lift Up
```tsx
className="transform hover:-translate-y-2 transition-all duration-300"
```

#### Icon Scale (in groups)
```tsx
className="transform group-hover:scale-110 transition-transform"
```

#### Shadow Enhancement
```tsx
className="shadow-lg hover:shadow-xl transition-all"
```

### Backdrop Effects
```tsx
className="backdrop-blur-sm"
```

## Hero Section Patterns

### Background Image with Overlay
```tsx
<div className="relative min-h-screen flex items-center">
  <div className="absolute inset-0 bg-black/60" />
  {/* Content with relative positioning */}
</div>
```

### Hero Text Styling
```tsx
<h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6">
  Your Trusted <span className="text-primary-400">Locksmith</span>
</h1>
```

## Responsive Breakpoints

- **Mobile**: Default (< 640px)
- **sm**: 640px (tablets)
- **md**: 768px
- **lg**: 1024px (desktops)
- **xl**: 1280px
- **2xl**: 1536px

### Common Responsive Patterns
- Text sizes: `text-base sm:text-lg md:text-xl`
- Padding: `p-4 sm:p-6 lg:p-8`
- Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Heights: `h-16 sm:h-20`

## Business Identity & Facts

### Core Business Information
- **Legal Business Name**: Nonstop Lock & Key Co.
- **Common Name**: Nonstop Lock & Key
- **Business Type**: Mobile locksmith service (100% mobile -- NO storefront, NO physical location)
- **Phone**: (314) 532-1112
- **Email**: Nonstoplockandkeyco@gmail.com
- **Website**: https://nonstoplockandkey.com
- **Hours**: 24/7, 365 days a year (including weekends and holidays)
- **Price Range**: $$ (mid-range, competitive)
- **Licensing**: Fully licensed and insured in the state of Missouri

### Service Model
This is a **mobile-only** locksmith business. Technicians are dispatched directly to the customer's location. There is NO shop, NO storefront, and NO walk-in location.

**Content rules:**
- NEVER use language like "visit our location," "stop by our shop," "walk-in welcome," "our store," or similar storefront language
- ALWAYS frame the service as "we come to you"
- Maps on the site represent the **service area**, NOT a store location
- The phone number is the primary conversion action -- it should always be prominent and easy to tap/click

### Service Areas (20 Cities)
All within the St. Louis metropolitan area, Missouri:
1. St. Louis
2. Creve Coeur
3. Chesterfield
4. Maryland Heights
5. Town and Country
6. Clayton
7. Brentwood
8. Richmond Heights
9. University City
10. Ladue
11. Kirkwood
12. Webster Groves
13. Ballwin
14. Manchester
15. Des Peres
16. Overland
17. St. Ann
18. Maplewood
19. Shrewsbury
20. Frontenac

Note: "Don't see your area? We serve the entire St. Louis metro area!"

### Response Times
- **Central locations** (Clayton, Maplewood, Brentwood): 15-25 minutes
- **Mid-range** (Creve Coeur, Kirkwood, University City): 20-30 minutes
- **Outlying areas** (Chesterfield, Ballwin, Manchester): 25-35 minutes
- **Average across all areas**: 20-30 minutes

### Starting Prices
- **Car lockouts**: from $50
- **House lockouts**: from $65
- **Lock rekeying**: from $25 per lock
- **Emergency lockouts**: generally $75-$150
- Transparent pricing with no hidden fees

### Service Categories
1. **Emergency Lockout Service** -- 24/7 emergency lockout assistance for homes, cars, and businesses
2. **Residential Locksmith** -- Home lock installation, rekeying, deadbolt upgrades, smart lock installation
3. **Commercial Locksmith** -- Master key systems, access control, panic bars, high-security locks
4. **Automotive Locksmith** -- Car key replacement, key fob programming, transponder key cutting, ignition repair
5. **Lock Rekeying** -- Professional lock rekeying without replacing hardware
6. **Security Systems** -- Installation and maintenance of advanced security systems

### Lock Brands Carried
- Medeco
- Mul-T-Lock
- Schlage Primus
- Smart lock brands (various)

### Reputation & Social Proof
- **Star Rating**: 4.9 / 5 stars
- **Review Count**: 100+ reviews
- **Customers Served**: 1,000+
- **Satisfaction Guarantee**: 100%

### Social Media
Currently placeholder links (no live URLs configured):
- Facebook
- Twitter
- Instagram
- LinkedIn

### Key Messaging
- "Your Trusted Locksmith in St. Louis"
- "Fast, Reliable, Professional"
- "24/7 Emergency Service"
- "20-30 Minute Average Response Time"
- "Licensed & Insured Technicians"
- "We Come to You"
- "No Hidden Fees"

## Accessibility

### Focus States
All interactive elements use:
```tsx
focus:ring-2 focus:ring-primary-500 focus:border-transparent
```

### Color Contrast
- Ensure text on primary-600 background maintains WCAG AA standards
- Gray-600 on white backgrounds for body text
- Gray-900 on white backgrounds for headings

### Semantic HTML
- Use proper heading hierarchy (h1 → h2 → h3)
- Form labels properly associated with inputs
- Semantic section elements

## Footer Pattern

```tsx
<footer className="bg-gray-900 text-gray-300 py-12 sm:py-16">
  {/* Light text on dark background */}
  {/* Primary color for links: text-primary-400 hover:text-primary-300 */}
</footer>
```

## Success/Confirmation States

```tsx
<div className="bg-green-50 border border-green-200 rounded-lg p-6">
  {/* Success icon in green-500 */}
  {/* Confirmation text */}
</div>
```

---

## Implementation Notes

1. **Consistency**: Always use the established color classes (primary-*, gray-*)
2. **Responsive**: Include mobile-first responsive classes (sm:, md:, lg:)
3. **Transitions**: Add smooth transitions to all interactive elements
4. **Spacing**: Follow the 8px spacing system (p-2, p-4, p-6, p-8)
5. **Shadows**: Use shadow-lg for cards, shadow-md for navigation
6. **Rounding**: Use rounded-lg for buttons/inputs, rounded-xl for cards

## Tailwind Configuration

The custom primary color is defined in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  }
}
```
