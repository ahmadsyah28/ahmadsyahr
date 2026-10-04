# Ahmad Portfolio

Portfolio website pribadi yang dibangun dengan Next.js, TypeScript, dan Tailwind CSS.

## ✨ Hero Section

Hero section terinspirasi dari [heynesh.com](https://heynesh.com/) dengan:

- Background beige dengan text overlay besar
- Statistik & highlights yang menarik
- Profile photo centered
- CTA buttons yang eye-catching
- Fully responsive design

**Quick Start:** Lihat [docs/HERO_QUICK_GUIDE.md](docs/HERO_QUICK_GUIDE.md)  
**Full Docs:** Lihat [docs/HERO_SECTION.md](docs/HERO_SECTION.md)

## Teknologi

- **Framework**: Next.js 15 (App Router)
- **Bahasa**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: pnpm

## Cara Menjalankan

1. Install dependencies:

```bash
pnpm install
```

2. Jalankan development server:

```bash
pnpm dev
```

3. Buka [http://localhost:3000](http://localhost:3000) di browser.

## Struktur Folder

```
src/
├── app/              # App Router pages
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Home page
├── components/       # Reusable components
│   ├── ui/          # UI components
│   ├── sections/    # Page sections
│   └── layout/      # Layout components
├── lib/             # Utility functions
├── types/           # TypeScript types
└── styles/          # Global styles
```

## Build untuk Production

```bash
pnpm build
pnpm start
```
