# Admin Panel Kullanım Kılavuzu

## Giriş Bilgileri

**Admin Panel URL:** `/admin`

**Kullanıcı Adı:** hcaglar17@caglar.com  
**Şifre:** 170517Bh.

## Özellikler

Admin panelinden aşağıdaki içerikleri yönetebilirsiniz:

### 1. Kişisel Bilgiler
- E-posta adresi
- Telefon numarası
- LinkedIn profil URL'i
- Instagram profil URL'i
- GitHub profil URL'i
- CV dosyası URL'i

### 2. Banner (Hero) Ayarları
- Ana başlık
- Alt başlık
- Açıklama metni
- Profil görseli URL'i

### 3. Projeler
- Yeni proje ekleme
- Mevcut projeleri düzenleme
- Proje silme
- Her proje için:
  - Başlık
  - Açıklama
  - Görsel
  - GitHub URL'i
  - Önizleme URL'i

## Kullanım

1. Tarayıcınızda `/admin` adresine gidin
2. Giriş bilgilerinizi girin
3. İstediğiniz sekmeyi seçin (Kişisel Bilgiler, Banner, Projeler)
4. Değişikliklerinizi yapın
5. "Değişiklikleri Kaydet" butonuna tıklayın
6. Değişiklikler anında ana sayfaya yansıyacaktır

## Teknik Detaylar

- Veriler `backend/data.json` dosyasında saklanır
- Şifreler bcrypt ile hashlenmiş olarak tutulur
- Oturum yönetimi cookie tabanlıdır
- API rotaları `/api/auth` ve `/api/content` altındadır

## Güvenlik Notu

Bu sistem basit bir kimlik doğrulama kullanır. Üretim ortamında daha güvenli bir sistem kullanmanız önerilir.
