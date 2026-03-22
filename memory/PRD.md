# Turma 371 - ETEP Website - Product Requirements Document

## Original Problem Statement
Create a modern, responsive and fully functional website for a school class with cyber/hacker theme featuring a Trojan Horse mascot.

**Class Information:**
- Name: Turma 371 - Informática
- School: ETEP (Portão)
- Theme: Technology / Hacker / Cyber
- Mascot: Trojan Horse (Cavalo de Troia)

## What's Been Implemented (December 2025)

### ✅ Complete Features

1. **Horse Icon Mascot**
   - Custom SVG horse icon replacing shield icon throughout the site
   - Animated with pulsing glow effect in neon green
   - Used in header, hero section, about stats, and footer

2. **Gallery with Lightbox Modal**
   - 6 images total (4 real class photos + 2 tech-themed placeholders)
   - Click to open full-screen lightbox
   - Backdrop blur (20px) with 95% dark opacity
   - Navigation: prev/next buttons, keyboard arrows, ESC to close
   - Counter display (1/6, 2/6, etc.)
   - Green neon glow on image shadows
   - Smooth animations and transitions

3. **Real Class Photos Integrated**
   - Photo 1: Class with "Troia" flag (amazing mascot design!)
   - Photo 2: Outdoor class photo
   - Photo 3: Classroom group photo
   - Photo 4: Costume party photo

4. **Theme System**
   - Dark mode: Black + Neon Green (#00FF88)
   - Light mode: White/Gray + Soft Green
   - Toggle button with smooth transitions
   - Full site color scheme updates

5. **Responsive Design**
   - Mobile menu with hamburger icon
   - Gallery grid: 1 col (mobile) → 2 col (tablet) → 3 col (desktop)
   - Lightbox optimized for all screen sizes
   - Touch-friendly interactions

6. **Animations & Effects**
   - Cyber grid animation in hero
   - Pulsing glow on horse icon
   - Smooth scroll behavior
   - Hover effects on all interactive elements
   - Gallery item zoom and brightness on hover
   - Header backdrop blur on scroll

## Social Media
- Instagram: https://www.instagram.com/etep371/ (Active)
- TikTok: Coming soon (Placeholder)

## Technical Implementation

### Frontend Stack
- React 19
- Tailwind CSS
- shadcn/ui components (Dialog, Button, Card)
- Custom SVG horse icon
- Google Fonts (Orbitron + Rajdhani)
- lucide-react icons

### Key Components
- `/app/frontend/src/pages/Home.jsx` - Main page with all sections
- `/app/frontend/src/index.css` - Custom cyber theme styles
- Lightbox with Dialog component
- Keyboard navigation support (Arrow keys, ESC)

## Prioritized Backlog

### P0 (Completed)
- ✅ Horse icon mascot - COMPLETE
- ✅ Lightbox modal with backdrop blur - COMPLETE
- ✅ Real class photos - COMPLETE
- ✅ Dark/Light mode - COMPLETE
- ✅ Responsive design - COMPLETE

### P1 (Pending)
- 🔄 Add TikTok URL when provided
- 🔄 Optional: Add more class photos to gallery

### P2 (Nice to Have)
- SEO optimization (meta tags, Open Graph)
- Image lazy loading optimization
- Theme preference persistence (localStorage)
- Gallery slideshow autoplay option
- Share buttons for social media

## Design Features

**Color Palette:**
- Dark Mode: #0D0D0D (black) + #00FF88 (neon green)
- Light Mode: #FAFAFA (white) + #4ADE80 (soft green)

**Typography:**
- Headers: Orbitron (futuristic, cyber)
- Body: Rajdhani (modern, readable)

**Effects:**
- Backdrop blur: 10-20px on modals and header
- Glow effects: drop-shadow on icons
- Transitions: 0.3s ease on hover states
- Animations: fadeIn, pulseGlow, grid-move

## Success Metrics
- ✅ Fully functional website deployed
- ✅ Mobile responsive across all devices
- ✅ Lightbox provides premium user experience
- ✅ Real class photos showcase team identity
- ✅ Theme matches cyber/hacker aesthetic perfectly

## Next Steps
1. Obtain TikTok URL from user
2. Consider adding more photos as class creates memories
3. Optional: Add testimonials or achievements section
4. Share website link with class members!
