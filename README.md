# Z Touch Salon — Premium Website

A luxury, mobile-first salon website for Z Touch Salon, San Francisco.

## 🚀 Deploy to Vercel

### Option 1: GitHub + Vercel (recommended)
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Vercel auto-detects Vite. Click **Deploy**. Done!

### Option 2: Vercel CLI
```bash
npm install
vercel
```

## 💻 Local Development
```bash
npm install
npm run dev
```

## 🏗 Build
```bash
npm run build
npm run preview
```

## 📁 Project Structure
```
ztouch-salon/
├── index.html          # SEO-optimized entry point
├── vercel.json         # Vercel deployment config
├── vite.config.js      # Vite build config
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css       # Design tokens & global styles
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Services.jsx
        ├── Gallery.jsx
        ├── Team.jsx
        ├── Pricing.jsx
        ├── Reviews.jsx
        ├── Instagram.jsx
        ├── FAQ.jsx
        ├── Contact.jsx
        ├── BookingCTA.jsx
        └── Footer.jsx
```

## 🎨 Design System
- **Colors**: Cream `#FAF7F2`, Gold `#C9A84C`, Charcoal `#2A2420`
- **Fonts**: Cormorant Garamond (display) + Jost (body)
- **Images**: High-quality Unsplash CDN (no local assets needed)

## 📞 Business Info Embedded
- **Address**: 1930 Ocean Ave, San Francisco, CA 94127
- **Phone**: (415) 347-7781
- **Email**: ztouchsalonsf@gmail.com
- **Instagram**: @ztouchsalonsf
- **Booking**: Square Appointments
- **Hours**: Mon–Sat 10am–7pm, Sun 10am–6pm

## ✨ Features
- Full SEO + Local Business schema markup
- Mobile-first responsive design
- Smooth animations & hover effects
- Floating WhatsApp button
- Google Maps embed
- Square booking integration
- Instagram feed grid
- Interactive FAQ accordion
- Pricing tables (women's & men's)
