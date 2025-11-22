# Kurulum ve Çalıştırma

## Gereksinimler
- Node.js (v18 veya üzeri)
- npm

## Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

3. Tarayıcınızda açın:
- Ana sayfa: http://localhost:3000
- Admin paneli: http://localhost:3000/admin

## Admin Paneli Giriş Bilgileri

**E-posta:** hcaglar17@caglar.com  
**Şifre:** 170517Bh.

## Deployment (GitHub Pages)

Projeyi GitHub Pages'e deploy etmek için:

```bash
npm run build
```

## Proje Yapısı

```
myportfolionextjs/
├── app/
│   ├── admin/          # Admin panel sayfası
│   ├── api/            # API rotaları
│   │   ├── auth/       # Kimlik doğrulama
│   │   └── content/    # İçerik yönetimi
│   └── page.tsx        # Ana sayfa
├── backend/
│   ├── auth.ts         # Kimlik doğrulama fonksiyonları
│   ├── content.ts      # Varsayılan içerik
│   ├── data.json       # Dinamik veri deposu
│   └── types.ts        # TypeScript tipleri
├── components/         # React bileşenleri
└── public/            # Statik dosyalar
```

## Özellikler

✅ Basit admin paneli  
✅ Bcrypt ile şifrelenmiş kimlik doğrulama  
✅ Dinamik içerik yönetimi  
✅ Kişisel bilgileri düzenleme  
✅ Banner/Hero yönetimi  
✅ Proje yönetimi (CRUD)  
✅ Responsive tasarım  
✅ GitHub Pages uyumlu  

## Notlar

- Veriler `backend/data.json` dosyasında saklanır
- Şifreler bcrypt ile hashlenmiş olarak tutulur
- Admin paneli cookie tabanlı oturum yönetimi kullanır
- Tüm değişiklikler anında ana sayfaya yansır
