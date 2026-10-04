# 🚀 Quick Start Guide

## Langkah Cepat Memulai

### 1. Jalankan Development Server

```bash
pnpm dev
```

Buka browser: [http://localhost:3000](http://localhost:3000)

### 2. Customize Portfolio Anda

#### ✏️ Update Informasi Pribadi

**Nama & Intro** → [src/components/sections/Hero.tsx](src/components/sections/Hero.tsx)

```typescript
<h1>Hi, Saya <span>Ahmad</span></h1>  // Ganti "Ahmad"
<p>Full Stack Web Developer</p>        // Ganti role Anda
```

**About** → [src/components/sections/About.tsx](src/components/sections/About.tsx)

- Edit paragraf deskripsi
- Update angka statistik (Projects, Pengalaman, dll)

**Skills** → [src/components/sections/Skills.tsx](src/components/sections/Skills.tsx)

```typescript
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 }, // Tambah/ubah skills
    ],
  },
];
```

**Projects** → [src/components/sections/Projects.tsx](src/components/sections/Projects.tsx)

```typescript
const projects = [
  {
    title: "Nama Project",
    description: "Deskripsi...",
    tech: ["Next.js", "TypeScript"],
    image: "/images/project.jpg", // Tambahkan gambar
    link: "https://demo.com",
    github: "https://github.com/...",
  },
];
```

**Contact Info** → [src/components/sections/Contact.tsx](src/components/sections/Contact.tsx)

```typescript
<a href="mailto:ahmad@example.com">   // Ganti email
  ahmad@example.com
</a>
<a href="tel:+628123456789">          // Ganti nomor
  +62 812-3456-789
</a>
```

**Social Links** → [src/components/layout/Footer.tsx](src/components/layout/Footer.tsx)

```typescript
<a href="https://github.com/username"> // Ganti username
  GitHub
</a>
```

#### 🎨 Ubah Warna Theme

**Primary Color** → [tailwind.config.ts](tailwind.config.ts)

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        // ... dst
        600: '#2563eb',  // Warna utama
      }
    }
  }
}
```

Atau langsung ubah di components: `bg-blue-600` → `bg-purple-600`

#### 📸 Tambah Gambar Project

1. Buat folder `public/images/`
2. Simpan gambar: `project1.jpg`, `project2.jpg`, dll
3. Update di `Projects.tsx`:

```typescript
image: "/images/project1.jpg";
```

### 3. Deploy ke Production

#### Deploy ke Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Manual Build

```bash
pnpm build
pnpm start
```

## 📋 Checklist Customization

- [ ] Update nama di Hero section
- [ ] Tulis deskripsi About
- [ ] Update skills sesuai keahlian
- [ ] Tambah minimal 3 projects
- [ ] Ganti email & phone di Contact
- [ ] Update social media links
- [ ] Tambahkan gambar projects
- [ ] Ganti favicon (tambah di `public/`)
- [ ] Update metadata di `layout.tsx`
- [ ] Test responsive di mobile/tablet
- [ ] Deploy ke production

## 🎯 Tips

1. **Gambar**: Gunakan format WebP untuk performa optimal
2. **SEO**: Update metadata di `src/app/layout.tsx`
3. **Performance**: Gunakan Next.js `<Image>` component
4. **Animations**: Pertimbangkan tambah Framer Motion
5. **Forms**: Integrasikan dengan EmailJS atau SendGrid

## 🔗 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs)

## 📞 Need Help?

Lihat [ARCHITECTURE.md](ARCHITECTURE.md) untuk detail lengkap arsitektur project.

---

**Happy Coding! 🚀**
