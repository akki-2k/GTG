# GTG Perfumes

A responsive e-commerce website for a perfume brand. Built with vanilla HTML, CSS, and JavaScript.

## What is this?

It's a modern perfume shop website with an interactive product gallery, subscription options, and a product comparison feature. Works great on desktop, tablet, and mobile.

## How's it structured?

```
GTG/
├── index.html              # Main page
├── css/                    # All styling
│   ├── global.css         # General styles
│   ├── header.css         # Nav and menu
│   ├── hero.css           # Top banner section
│   ├── product.css        # Product gallery
│   ├── collection.css     # Collections area
│   ├── comparison.css     # Comparison table
│   ├── stats.css          # Number stats
│   ├── percentage-stats.css
│   ├── footer.css         # Footer
│   └── ingredients.css
└── js/                    # JavaScript stuff
    ├── mobile-menu.js     # Hamburger menu
    ├── gallery.js         # Image gallery
    ├── product-options.js # Product selection
    ├── counter-animation.js
    ├── lazy-loading.js
    └── smooth-scroll.js
```

## Main Features

**Header & Navigation**
- Desktop menu at the top
- Dropdown for Shop categories
- Hamburger menu on mobile/tablet (appears when screen is 768px or smaller)
- Responsive padding and sizing

**Hero Section**
- Large background image with text overlay
- Some animated stats
- CTA button
- Heights scale down on smaller screens

**Product Gallery**
- Main image with left/right arrows to navigate
- Dots below the image showing which one you're on
- Thumbnails at bottom (4 on desktop, 2 on tablet, 1 on mobile)
- Click thumbnails to jump to that image

**Subscription vs One-Time Purchase**
- Two radio button options
- Subscription shows recurring details and pricing
- One-time shows single purchase details
- Price comparison between both
- Shows benefits when you select each option

**Fragrance Selection**
- Visual cards of different fragrances
- "Best Seller" badge on popular ones
- Radio buttons to select
- Responsive grid that stacks on mobile

**Product Comparison Table**
- Shows 4 products side-by-side
- Feature checklist with yes/no indicators
- On mobile it scrolls horizontally (you swipe/scroll to see all products)
- Hover over a column to highlight it

**Footer**
- Links section
- Newsletter signup
- Social icons
- Responsive layout

## The JavaScript Files (What They Do)

**mobile-menu.js**
Opens/closes the mobile navigation menu. When you tap the hamburger button, it shows the full menu. Closes automatically when you click a link.

**gallery.js**
Handles the product image gallery. Manages the arrows, dots, and thumbnails. When you click an arrow or dot or thumbnail, it updates all three.

**product-options.js**
Controls the subscription/one-time purchase selection. When you click a radio button, it shows the relevant details and prices.

**counter-animation.js**
Animates the big numbers in the stats sections. They count up smoothly from 0 to the final number when you scroll to that section.

**lazy-loading.js**
Makes images load only when they're about to appear on screen. Speeds up initial page load.

**smooth-scroll.js**
When you click an anchor link (like #section), it smoothly scrolls to that part of the page instead of jumping.

## Responsive Design

The site adapts to different screen sizes:

- **Desktop** (1024px+): Everything visible, full layout
- **Tablet** (768px - 1024px): Hamburger menu appears, single column for some sections
- **Mobile** (480px - 768px): Optimized spacing, smaller fonts, stacked layouts
- **Small Mobile** (<480px): Minimal padding, compact grids

Key breakpoints are set up in media queries at the bottom of each CSS file.

## Colors

Just three main colors throughout:
- Dark green: #032e15
- Medium green: #016630
- Bright green: #09c950

Text is usually dark gray (#333 or #666). Borders are light gray.

## Typography

Using Inter font mostly, with Oxanium for some headings.
- Headings get smaller on mobile
- Body text scales down too
- Line heights adjusted for readability

## How to Customize

**Change the colors?**
Search for those hex codes (#032e15, #016630, #09c950) in the CSS and swap them out.

**Adjust the breakpoints?**
The media queries use 1024px, 768px, and 480px. Change these numbers if you want different breakpoints.

**Add more products?**
Add images to the assets folder and update the HTML. The gallery will adapt automatically.

**Modify fonts?**
Check global.css and the individual CSS files for font-size values.

## Performance

- Images use lazy loading (they load as you scroll)
- All CSS and JS are pretty minimal - no bloat
- No external frameworks, just vanilla stuff
- Works fine without JavaScript too (progressive enhancement)

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge). Uses CSS Grid and Flexbox, so older browsers might not show it perfectly, but it'll still work.

## Things to Know

- All CSS is organized by component - one file per section
- Media queries are at the bottom of each CSS file
- No CSS framework - pure CSS3 for better control
- JavaScript files are independent and can be used separately
- Images should be optimized before uploading

## Future Ideas

- Connect to a backend for actual cart functionality
- Payment processing
- User accounts
- Search and filters
- Customer reviews
- More product categories

## Notes

The site is mobile-first by design. Everything starts with mobile styling and scales up. Touch targets are at least 44x44px for mobile accessibility. Forms are full-width on small screens for easier use.

---

That's basically it. It's a solid foundation for an e-commerce site. feel free to reach out on akshaybp7@gmail.com for anything.
