# Arsitektur Website Portfolio

## 📁 Struktur Folder

```
web portofolio/
├── src/                          # Source code utama
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx           # Root layout (metadata, font, struktur HTML)
│   │   ├── page.tsx             # Homepage (mengimpor semua sections)
│   │   └── globals.css          # Global styles (Tailwind directives)
│   │
│   ├── components/               # React components
│   │   ├── layout/              # Layout components
│   │   │   ├── Header.tsx       # Navigation bar (sticky header)
│   │   │   └── Footer.tsx       # Footer dengan social links
│   │   │
│   │   └── sections/            # Section components untuk homepage
│   │       ├── Hero.tsx         # Hero section (intro + CTA)
│   │       ├── About.tsx        # About section (profil + statistik)
│   │       ├── Skills.tsx       # Skills section (skill bars)
│   │       ├── Projects.tsx     # Projects section (portfolio grid)
│   │       └── Contact.tsx      # Contact form section
│   │
│   ├── lib/                      # Utility functions
│   │   └── utils.ts             # Helper functions (cn, formatDate, dll)
│   │
│   └── types/                    # TypeScript type definitions
│       └── index.ts             # Interface & type definitions
│
├── public/                       # Static assets (akan ditambahkan)
│   └── images/                  # Gambar untuk portfolio
│
├── node_modules/                 # Dependencies (auto-generated)
│
├── package.json                  # Dependencies & scripts
├── tsconfig.json                # TypeScript configuration
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── postcss.config.mjs           # PostCSS configuration
├── .eslintrc.json              # ESLint configuration
├── .gitignore                  # Git ignore rules
└── README.md                    # Project documentation

```

## 🏗️ Arsitektur Komponen

### 1. Layout Components (`src/components/layout/`)

**Header.tsx**

- Navigation bar dengan sticky positioning
- Responsive menu (desktop & mobile)
- Scroll detection untuk background blur effect
- Smooth scroll ke sections

**Footer.tsx**

- Copyright info
- Social media links (GitHub, LinkedIn, Twitter)

### 2. Section Components (`src/components/sections/`)

**Hero.tsx**

- Full-screen hero section
- Gradient background
- Call-to-action buttons
- Intro text & title

**About.tsx**

- Profil diri
- Statistik (Projects, Pengalaman, Teknologi, Kepuasan Klien)
- Background card dengan shadow

**Skills.tsx**

- 3 kategori skills (Frontend, Backend, Tools)
- Progress bars animasi
- Percentage display

**Projects.tsx**

- Grid layout responsive (3 kolom di desktop)
- Project cards dengan:
  - Gambar project
  - Deskripsi
  - Tech stack tags
  - Live demo & GitHub links

**Contact.tsx**

- Contact form (Nama, Email, Pesan)
- Form validation
- Contact info (Email & Phone)

## 🎨 Design System

### Tailwind CSS Classes

- **Colors**: Blue (`blue-600`) sebagai primary color
- **Dark Mode**: Mendukung dark mode dengan `dark:` prefix
- **Spacing**: Menggunakan sistem spacing Tailwind (px-6, py-20, dll)
- **Typography**: Heading sizes (text-4xl, text-5xl, text-7xl)

### Responsive Breakpoints

- Mobile: Default
- Tablet: `md:` (768px)
- Desktop: `lg:` (1024px)

## 🔧 Teknologi Stack

### Framework & Library

- **Next.js 15.5.22**: React framework dengan App Router
- **React 18.3.1**: UI library
- **TypeScript 5**: Type-safe JavaScript

### Styling

- **Tailwind CSS 3.4**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **Autoprefixer**: Vendor prefixing

### Development Tools

- **ESLint**: Code linting
- **pnpm**: Package manager

## 📝 File Configuration

### `package.json`

- Scripts: `dev`, `build`, `start`, `lint`
- Dependencies management

### `tsconfig.json`

- TypeScript compiler options
- Path aliases: `@/*` → `./src/*`
- Strict mode enabled

### `next.config.ts`

- Next.js configuration
- Can be extended for custom settings

### `tailwind.config.ts`

- Tailwind customization
- Theme extension
- Content paths untuk purging

## 🚀 Cara Kerja

### 1. Entry Point

`src/app/page.tsx` adalah homepage yang mengimpor semua sections

### 2. Layout Hierarchy

```
layout.tsx (Root Layout)
└── page.tsx (Home)
    ├── Header
    ├── Hero
    ├── About
    ├── Skills
    ├── Projects
    ├── Contact
    └── Footer
```

### 3. Client vs Server Components

- **Server Components** (default): Layout, sections yang static
- **Client Components** (`"use client"`): Header, Contact (karena ada state)

### 4. Routing

Single page application dengan smooth scroll ke sections:

- `#home` → Hero section
- `#about` → About section
- `#skills` → Skills section
- `#projects` → Projects section
- `#contact` → Contact section

## 🎯 Fitur Utama

1. **Responsive Design**: Optimized untuk mobile, tablet, desktop
2. **Dark Mode Support**: Auto dark mode berdasarkan system preference
3. **Smooth Scroll**: Navigation dengan smooth scrolling
4. **Interactive Header**: Sticky header dengan blur effect on scroll
5. **Contact Form**: Functional contact form dengan validation
6. **Skill Progress Bars**: Animated skill level indicators
7. **Project Showcase**: Grid layout untuk portfolio projects

## 📦 Instalasi & Development

### Install Dependencies

```bash
pnpm install
```

### Run Development Server

```bash
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000)

### Build Production

```bash
pnpm build
pnpm start
```

## 🔄 Customization Guide

### 1. Update Personal Info

Edit konten di:

- `Hero.tsx` → Nama & intro
- `About.tsx` → Profil & statistik
- `Footer.tsx` → Social media links
- `Contact.tsx` → Email & phone

### 2. Add Projects

Edit array `projects` di `Projects.tsx`:

```typescript
{
  title: "Project Name",
  description: "Description",
  tech: ["Tech1", "Tech2"],
  image: "/images/project.jpg",
  link: "https://demo.com",
  github: "https://github.com/..."
}
```

### 3. Update Skills

Edit array `skillCategories` di `Skills.tsx`:

```typescript
{
  title: "Category",
  skills: [
    { name: "Skill Name", level: 90 }
  ]
}
```

### 4. Change Colors

Edit `tailwind.config.ts` untuk custom theme:

```typescript
theme: {
  extend: {
    colors: {
      primary: "#your-color",
    }
  }
}
```

## 🎨 Asset Management

### Gambar

- Simpan di folder `public/images/`
- Reference: `/images/filename.jpg`
- Gunakan Next.js `<Image>` component untuk optimasi

### Fonts

- Bisa tambahkan custom fonts di `layout.tsx`
- Gunakan `next/font` untuk optimasi

## 🔐 Environment Variables

Buat file `.env.local` untuk API keys:

```env
NEXT_PUBLIC_EMAIL_SERVICE_ID=xxx
NEXT_PUBLIC_CONTACT_EMAIL=xxx
```

## 📈 Future Enhancements

1. **Blog Section**: Tambah routing `/blog`
2. **CMS Integration**: Headless CMS untuk content management
3. **Analytics**: Google Analytics atau Vercel Analytics
4. **Email Service**: Integrasi EmailJS atau SendGrid
5. **Animations**: Framer Motion untuk micro-interactions
6. **SEO**: Metadata optimization & sitemap
7. **Performance**: Image optimization & lazy loading
8. **Internationalization**: Multi-language support

## 🐛 Troubleshooting

### Port sudah digunakan

```bash
# Gunakan port lain
pnpm dev -p 3001
```

### Build error

```bash
# Clear cache
rm -rf .next
pnpm build
```

### Type errors

```bash
# Check TypeScript
pnpm tsc --noEmit
```

---

**Created with**: Next.js, TypeScript, Tailwind CSS
**Package Manager**: pnpm
**License**: MIT
