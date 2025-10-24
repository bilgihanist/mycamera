# Kamera Kontrol Platformu

Modern, güvenli ve ölçeklenebilir kamera yönetim sistemi. Canlı cihaz takibi, şifre yönetimi ve bayi destekli kurulumlar için tek panel.

## 🚀 Özellikler

- **Canlı İzleme**: Kameralarınızı gerçek zamanlı olarak izleyin ve kontrol edin
- **Güvenli Erişim**: Rol bazlı erişim kontrolü ile güvenli yönetim
- **Kullanıcı Yönetimi**: Admin paneli ile kullanıcıları kolayca yönetin
- **Analitik**: Detaylı raporlar ve performans analizi
- **Responsive Tasarım**: Mobil ve masaüstü uyumlu modern arayüz
- **Dark Mode**: Karanlık ve aydınlık tema desteği

## 🛠️ Teknolojiler

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Backend**: Supabase (PostgreSQL, Auth, Real-time)
- **State Management**: Zustand
- **Authentication**: JWT + httpOnly cookies
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Theme**: next-themes

## 📦 Kurulum

1. Projeyi klonlayın:
```bash
git clone <repository-url>
cd mycamera
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Environment variables dosyasını oluşturun:
```bash
cp .env.example .env.local
```

5. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

## 🗄️ Veritabanı Yapısı

### Supabase Tabloları

```sql
-- Kullanıcı profilleri
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT,
  role TEXT CHECK (role IN ('admin', 'vendor', 'client')) DEFAULT 'client',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Cihazlar
CREATE TABLE devices (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  brand TEXT NOT NULL,
  model TEXT NOT NULL,
  ip_address INET NOT NULL,
  location TEXT NOT NULL,
  status TEXT CHECK (status IN ('online', 'offline')) DEFAULT 'offline',
  user_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Olaylar/Loglar
CREATE TABLE events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  device_id UUID REFERENCES devices(id),
  event_type TEXT NOT NULL,
  message TEXT NOT NULL,
  severity TEXT CHECK (severity IN ('info', 'warning', 'error')) DEFAULT 'info',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 🔐 Güvenlik

- **JWT Authentication**: Güvenli token tabanlı kimlik doğrulama
- **Role-based Access Control**: Admin, Bayi ve Müşteri rolleri
- **httpOnly Cookies**: XSS saldırılarına karşı koruma
- **Input Validation**: Zod ile güçlü veri doğrulama
- **Middleware Protection**: Route bazlı erişim kontrolü

## 📱 Sayfalar

- **Ana Sayfa** (`/`): Landing page ve özellik tanıtımı
- **Giriş** (`/login`): Kullanıcı girişi
- **Kayıt** (`/register`): Yeni kullanıcı kaydı
- **Dashboard** (`/dashboard`): Ana kontrol paneli
- **Cihazlar** (`/products`): Kamera ve cihaz yönetimi
- **Admin Panel** (`/admin`): Sistem yönetimi
- **Kullanıcılar** (`/admin/users`): Kullanıcı yönetimi

## 🚀 Deployment

### Vercel (Önerilen)

1. Projeyi GitHub'a push edin
2. Vercel'e bağlayın
3. Environment variables'ları ekleyin
4. Deploy edin

### Diğer Platformlar

- **Netlify**: Static export ile
- **Railway**: Full-stack deployment
- **DigitalOcean**: App Platform

## 🔧 Geliştirme

### Scripts

```bash
npm run dev          # Geliştirme sunucusu
npm run build        # Production build
npm run start        # Production sunucusu
npm run lint         # ESLint kontrolü
```

### Proje Yapısı

```
src/
├── lib/             # Utility fonksiyonları
│   ├── supabase.ts  # Supabase client
│   ├── jwt.ts       # JWT işlemleri
│   ├── cookies.ts   # Cookie yönetimi
│   └── utils.ts     # Genel utilities
├── store/           # Zustand store
│   └── ui.ts        # UI state
└── middleware.ts    # Route koruma

app/
├── (auth)/          # Auth sayfaları
├── api/             # API routes
├── admin/           # Admin paneli
├── dashboard/       # Dashboard
└── products/        # Cihaz yönetimi
```

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📞 Destek

Herhangi bir sorunuz için:
- GitHub Issues
- Email: support@example.com
- Dokümantasyon: [docs.example.com](https://docs.example.com)