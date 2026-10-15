# Reis, buradan başlayalım — V1 Developer Portfolio

Bu klasör **Developer Portfolio** içindir. Asman Shop dosyalarını bunun içine taşımıyoruz; iki proje ayrı kalacak.

## 1. ZIP'i Mac'inde aç

İndirilen `developer-portfolio-v1.zip` dosyasını aç. İçindeki `developer-portfolio-v1` klasörünü `Desktop/Projelerim` içine koyabilirsin.

## 2. Terminal'de klasöre gir

```bash
cd ~/Desktop/Projelerim/developer-portfolio-v1
```

Klasörü başka yere koyduysan komuttaki yolu ona göre değiştir.

## 3. Ortamı kontrol et

```bash
node -v
npm -v
```

- Node.js `v20.9.0` veya üstü olmalı.
- npm `10` veya üstü olmalı.

Sonra bağımlılıkları kur:

```bash
npm install
```

İlk kurulum internet bağlantısı gerektirir ve `package-lock.json` dosyasını oluşturur. Bu dosyayı GitHub'a da ekleyeceğiz.

## 4. Projeyi çalıştır

```bash
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini aç.

Durdurmak için Terminal'de `Control + C` tuşlarına bas.

## 5. Kontrolleri çalıştır

Önce geliştirme sunucusunu durdur, sonra sırayla:

```bash
npm run lint
npm run typecheck
npm run build
```

Üç komut da başarılı bitmeden projeyi tamamlandı diye işaretlemiyoruz.

## 6. Kişiselleştirme

`src/app/page.tsx` içinde:

- `YOUR NAME` yazısını istediğin görünen isimle değiştir.
- GitHub bağlantısını kendi profil bağlantınla değiştir.
- Planlanan projeleri, gerçekten geliştirip test edene kadar `Planned` olarak bırak.

`src/app/layout.tsx` içindeki `https://example.com` adresi gerçek alan adına geçmeden önce güncellenecek.

## 7. GitHub hesabı ve repository

Önce GitHub'da hesabını oluşturup e-posta adresini doğrula. Sonra `developer-portfolio` adında **public** bir repository oluştur. GitHub'da repository oluştururken README, `.gitignore` veya lisans ekleme; bu klasörde zaten dosyalar var.

Repository oluşturduktan sonra Terminal'de proje klasöründe:

```bash
git init
git add .
git commit -m "Build developer portfolio v1"
git branch -M main
git remote add origin https://github.com/GITHUB-KULLANICI-ADIN/developer-portfolio.git
git push -u origin main
```

`GITHUB-KULLANICI-ADIN` kısmını kendi GitHub kullanıcı adınla değiştir. GitHub kimlik doğrulama isterse ekrandaki resmi giriş adımlarını izle; parolanı veya token'ını kod dosyalarına yazma.

## Önemli

Bu çalışma ortamında npm kayıt sunucusuna DNS bağlantısı kurulamadığı için paket kurulumu ve gerçek Next.js build testi burada çalıştırılamadı. Bu yüzden ZIP, kaynak kod ve başlangıç yapısı olarak hazır; `npm install` ve kalite komutları Mac'inde çalıştırılınca sonuçlarını birlikte kontrol edeceğiz.
