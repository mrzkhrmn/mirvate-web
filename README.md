# MIRVATE

Kurumsal yazılım mühendisliği web sitesi — Next.js App Router, TypeScript, Tailwind CSS, Framer Motion.

## Geliştirme

```bash
npm install
cp .env.example .env.local
npm run dev
```

http://localhost:3000

## Üretim

```bash
npm run build
npm start
```

### Docker (Ubuntu VPS)

```bash
docker build -t mirvate --build-arg NEXT_PUBLIC_SITE_URL=https://mirvate.com .
docker run -d -p 3000:3000 \
  -e RESEND_API_KEY=... \
  -e CONTACT_TO_EMAIL=info@mirvate.com \
  mirvate
```

Nginx reverse proxy ile `localhost:3000` üzerine HTTPS sonlandırın. Gizli anahtarları image içine koymayın.

## İletişim formu (e-posta)

Ayrı bir backend yazmanız gerekmez. Form `/api/contact` üzerinden çalışır.

1. [Resend](https://resend.com) hesabı açın, API key alın
2. `mirvate.com` domain’ini Resend’de doğrulayın
3. `.env.local` içine:

```env
RESEND_API_KEY=re_xxx
CONTACT_TO_EMAIL=info@mirvate.com
CONTACT_FROM_EMAIL=MIRVATE <info@mirvate.com>
```

Domain doğrulanana kadar Resend test adresi (`onboarding@resend.dev`) kullanılabilir.

## Ortam değişkenleri

| Değişken | Açıklama |
|----------|----------|
| `NEXT_PUBLIC_SITE_URL` | Canonical domain |
| `NEXT_PUBLIC_API_BASE_URL` | İleride ASP.NET Core API |
| `CONTACT_TO_EMAIL` | Formun gideceği adres (varsayılan: info@mirvate.com) |
| `RESEND_API_KEY` | Resend ile e-posta gönderimi |
| `CONTACT_FROM_EMAIL` | Gönderen adresi (doğrulanmış domain) |
| `CONTACT_WEBHOOK_URL` | Alternatif: harici webhook |
| `CONTACT_API_KEY` | Webhook auth (opsiyonel) |

## Tasarım

Görsel referans: `design/` (Obsidian Precision + landing HTML). Görseller `public/images/` altında.
