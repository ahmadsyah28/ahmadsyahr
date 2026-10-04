# 🚀 Hero Section - Quick Customization

## 3 Langkah Cepat

### 1️⃣ Ganti Informasi Dasar

**File:** `src/components/sections/Hero.tsx`

```tsx
// Line 17: Background text - NAMA ANDA
AHMAD  →  NAMA_ANDA

// Line 25-34: Statistik
10+  →  jumlah_projects_anda
2+   →  jumlah_tahun_pengalaman

// Line 37: Tagline
"The Web Developer. That's Ahmad."  →  "The [role]. That's [nama]."

// Line 46-50: Headline
Next.js,
Applied
Differently.
→ [Framework/Skill],
  [Action Word]
  [Uniqueness].
```

### 2️⃣ Upload Foto Profil

1. Simpan foto di: `public/images/profile.jpg`
2. Line 44: Update src
   ```tsx
   src = "/images/profile.jpg";
   ```

### 3️⃣ Sesuaikan Highlights

**Line 72-106:** Edit 5 highlights di kanan

```tsx
✦ Creative    →  Icon & text anda
⚡ Reliable   →  Icon & text anda
♔ Strategist  →  Icon & text anda
⚙ Builder     →  Icon & text anda
⚡ Efficient   →  Icon & text anda
```

---

## 🎨 Ganti Warna (Optional)

**Background:** Line 6

```tsx
bg-[#D9D4C8]  →  bg-[#warna-baru]
```

**Accent/Buttons:** Line 18, 60, 67

```tsx
#E8E35E  →  #warna-accent-baru
```

---

## ✅ Checklist Cepat

- [ ] Nama di background text (Line 17)
- [ ] Statistik projects & experience (Line 25-34)
- [ ] Foto profil di public/images/ (Line 44)
- [ ] Headline utama (Line 52)
- [ ] CTA button text (Line 60, 67)
- [ ] 5 Highlights (Line 72-106)
- [ ] Test di browser: http://localhost:3001

---

**Dokumentasi lengkap:** [docs/HERO_SECTION.md](../docs/HERO_SECTION.md)
