# Hero Section - Dokumentasi

## 🎨 Design Reference

Hero section ini terinspirasi dari [heynesh.com](https://heynesh.com/) dengan adaptasi untuk portfolio Next.js.

## 📐 Struktur Layout

```
┌─────────────────────────────────────────────────────────┐
│  HOME  |  ABOUT ME         SERVICES  |  PROJECTS  |  FAQ │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  10+                   AHMAD                  ✦ Creative │
│  Projects          (background text)          ⚡ Reliable │
│                                                ♔ Strategist│
│  2+                  [Profile]                ⚙ Builder  │
│  Years of                                     ⚡ Efficient│
│  experience             Next.js,                         │
│                         Applied                          │
│  The Web               Differently.           [Description]│
│  Developer.                                              │
│  That's Ahmad.      [Book a Call] [About Me]            │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

## 🎨 Color Palette

- **Background**: `#D9D4C8` (Beige)
- **Accent/CTA**: `#E8E35E` (Yellow)
- **Text**: `#000000` (Black)
- **Background Text**: `#E8E35E` dengan opacity 90%

## 📝 Customization Guide

### 1. Ganti Nama di Background Text

Cari di `Hero.tsx`:

```tsx
<h1 className="text-[12rem] md:text-[20rem] lg:text-[28rem] font-black text-[#E8E35E] opacity-90 select-none leading-none">
  AHMAD {/* Ganti dengan nama Anda */}
</h1>
```

### 2. Update Statistik (Kiri Atas)

```tsx
<div>
  <div className="text-6xl md:text-7xl font-bold mb-2">10+</div>
  <div className="text-lg">Projects</div>
</div>
<div>
  <div className="text-6xl md:text-7xl font-bold mb-2">2+</div>
  <div className="text-lg">Years of<br />experience</div>
</div>
```

### 3. Ganti Foto Profil

**Langkah 1:** Simpan foto Anda di `public/images/profile.jpg`

**Langkah 2:** Update src di Hero.tsx:

```tsx
<img
  src="/images/profile.jpg"  {/* Ganti path ini */}
  alt="Ahmad"
  className="w-full h-full object-cover"
/>
```

**Rekomendasi:**

- Ukuran: Minimal 400x400px
- Rasio: 1:1 (square)
- Format: JPG, PNG, atau WebP
- Background: Kontras dengan beige

### 4. Update Headline

```tsx
<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
  Next.js,
  <br /> {/* Framework/skill utama */}
  Applied
  <br />
  Differently.
</h2>
```

Contoh alternatif:

- "React, Built Beautifully."
- "TypeScript, Done Right."
- "Web Apps, Built to Scale."

### 5. Update Highlights (Kanan)

```tsx
<div className="flex items-center gap-3">
  <div className="w-8 h-8 rounded-full bg-[#E8E35E] flex items-center justify-center flex-shrink-0">
    <span className="text-xl">✦</span> {/* Ganti icon */}
  </div>
  <span className="text-lg font-medium">Creative</span> {/* Ganti text */}
</div>
```

**Icon Options:**

- ✦ (star)
- ⚡ (lightning)
- ♔ (crown)
- ⚙ (gear)
- ❤ (heart)
- ⭐ (star filled)
- 🔥 (fire)
- 💡 (bulb)

### 6. Update CTA Buttons

```tsx
<a
  href="#contact"
  className="bg-[#E8E35E] text-black px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#d4cf4a] transition-colors"
>
  Book a Call {/* Ganti text button */}
</a>
```

### 7. Update Navigation Links

```tsx
<a href="#home" className="hover:opacity-70 transition-opacity">
  HOME {/* Sesuaikan dengan section yang ada */}
</a>
```

### 8. Ganti Warna Theme

**Option 1: Ganti di component**

```tsx
bg-[#D9D4C8]  →  bg-[#warna-baru]
text-[#E8E35E]  →  text-[#warna-baru]
```

**Option 2: Gunakan Tailwind config**
Edit `tailwind.config.ts`:

```typescript
beige: {
  200: '#D9D4C8',  // Ganti ke warna lain
},
yellow: {
  accent: '#E8E35E',  // Ganti accent color
},
```

## 🎯 Tips Design

### Kontras yang Baik

- Background beige dengan text hitam = mudah dibaca
- Accent yellow yang vibrant = CTA menonjol
- Background text semi-transparent = depth tanpa mengganggu

### Typography

- Headline: Bold, besar, center
- Stats: Extra large numbers
- Body text: Medium weight, readable

### Spacing

- Gunakan padding yang generous
- Space antara elemen untuk breathing room
- Responsive spacing (lebih kecil di mobile)

### Foto Profil

- Professional tapi approachable
- Background yang bersih atau blur
- Lighting yang baik
- Posisi center atau slight off-center

## 📱 Responsive Behavior

### Mobile (< 768px)

- Background text lebih kecil (12rem)
- Stack vertical
- Stats dan highlights di atas/bawah foto
- Single column layout

### Tablet (768px - 1024px)

- Background text medium (20rem)
- 2-column layout
- Adjusted spacing

### Desktop (> 1024px)

- Full 3-column layout
- Large background text (28rem)
- All elements visible
- Optimal spacing

## 🚀 Advanced Customization

### Tambah Animasi

Install Framer Motion:

```bash
pnpm add framer-motion
```

Tambahkan fade-in animation:

```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* content */}
</motion.div>;
```

### Parallax Effect untuk Background Text

```tsx
"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      className="absolute inset-0..."
    >
      {/* Background text */}
    </div>
  );
}
```

### Ganti Font

Install Google Font di `layout.tsx`:

```tsx
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });
```

Gunakan di Hero:

```tsx
<h1 className={playfair.className}>AHMAD</h1>
```

## 🔍 Troubleshooting

### Background text terpotong

- Pastikan `overflow-hidden` ada di section
- Adjust ukuran text untuk viewport yang lebih kecil

### Foto tidak muncul

- Check path: `/images/profile.jpg` (bukan `./images`)
- Pastikan file ada di `public/images/`
- Clear cache dan restart dev server

### Layout berantakan di mobile

- Test di DevTools responsive mode
- Adjust breakpoints di Tailwind classes
- Periksa `grid-cols` configuration

### Warna tidak sesuai

- Gunakan color picker untuk exact match
- Update di semua tempat yang relevan
- Consider dark mode variant

## 📊 Performance Tips

1. **Optimize Image**
   - Gunakan Next.js `<Image>` component
   - Format WebP untuk size lebih kecil
   - Lazy load jika perlu

2. **Font Loading**
   - Use `next/font` untuk optimization
   - Preload critical fonts
   - Subset fonts jika memungkinkan

3. **Animation**
   - Use CSS transitions (lebih performant)
   - Avoid layout shift
   - Use `will-change` sparingly

## ✅ Checklist

- [ ] Ganti nama di background text
- [ ] Update statistik (projects, years)
- [ ] Upload foto profil
- [ ] Update headline
- [ ] Customize highlights/traits
- [ ] Update CTA button text & links
- [ ] Test responsive di mobile
- [ ] Test di berbagai browser
- [ ] Optimize image size
- [ ] Update navigation links

## 🎨 Color Variations

### Blue Variant

```tsx
bg-[#E8F4F8]  // Light blue background
text-[#0066CC] bg-[#0066CC]  // Blue accent
```

### Purple Variant

```tsx
bg-[#F5F0FF]  // Light purple background
text-[#7C3AED] bg-[#7C3AED]  // Purple accent
```

### Green Variant

```tsx
bg-[#F0FDF4]  // Light green background
text-[#10B981] bg-[#10B981]  // Green accent
```

---

**Created with**: Next.js 15, TypeScript, Tailwind CSS  
**Inspired by**: [heynesh.com](https://heynesh.com/)  
**Status**: ✅ Ready for customization
