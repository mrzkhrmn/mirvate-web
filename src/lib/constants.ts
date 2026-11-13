export const SITE = {
  name: "MIRVATE",
  tagline: "Engineering What's Next.",
  description:
    "MIRVATE; özel yazılım, gömülü sistem ve elektronik kart tasarımını bir arada sunan bir mühendislik şirketidir. Fikirden çalışan ürüne kadar birlikte inşa ederiz.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mirvate.com",
  locale: "tr_TR",
  email: "info@mirvate.com",
} as const;

/** Ana arama niyetleri — meta keywords + şema için ortak havuz */
export const SEO_KEYWORDS = [
  "özel yazılım geliştirme",
  "özel yazılım şirketi",
  "elektronik kart tasarımı",
  "PCB tasarımı",
  "gömülü yazılım geliştirme",
  "embedded software",
  "ürün Ar-Ge",
  "yazılım şirketi Türkiye",
  "kurumsal yazılım geliştirme",
  "mobil uygulama geliştirme",
  "web uygulaması geliştirme",
  "masaüstü uygulama geliştirme",
  "SaaS geliştirme",
  "STM32",
  "ESP32",
  "SMD dizgi",
  "React Native",
  "Next.js",
  "Electron",
  ".NET yazılım geliştirme",
  "backend API geliştirme",
  "MIRVATE",
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/services", label: "Hizmetler" },
  { href: "/technologies", label: "Teknolojiler" },
  { href: "/#surec", label: "Süreç & İşleyiş" },
  { href: "/about", label: "Neden Biz?" },
  { href: "/contact", label: "İletişim" },
] as const;

export const FOOTER_SERVICES = [
  { href: "/services#custom-software", label: "Özel Yazılım Geliştirme" },
  { href: "/services#mobile", label: "Mobil Uygulama" },
  { href: "/services#web-saas", label: "Web & SaaS" },
  { href: "/services#electronics-design", label: "Elektronik Kart & PCB" },
  { href: "/services#embedded-software", label: "Gömülü Yazılım" },
  { href: "/services#product-rd", label: "Ürün Ar-Ge" },
  { href: "/services#pcb-assembly", label: "PCB & Dizgi" },
  { href: "/services#backend-api", label: "Backend & API" },
] as const;

export const FOOTER_EXPLORE = [
  { href: "/technologies", label: "Teknoloji Altyapısı & Araçlar" },
  { href: "/#surec", label: "Süreç ve Şeffaf Sprintler" },
  { href: "/about", label: "Mühendislik Yaklaşımımız" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "İletişim & Destek" },
] as const;

export const TECH_CAPABILITIES = [
  {
    id: "01",
    title: "Özel Ürün Mimarisi",
    description:
      "Hazır kutuya sığmayan iş süreçleri için sıfırdan ürün mimarisi. Domain model, Clean Architecture ve uzun ömürlü kod tabanı ile markanıza özel yazılım kurarız.",
    icon: "users" as const,
    accent: "cyan" as const,
    tags: ["Domain Model", "Clean Architecture", "DDD", "Ürün Çekirdeği"],
  },
  {
    id: "02",
    title: "Mobil Uygulama Mühendisliği",
    description:
      "React Native ve Expo ile iOS/Android deneyimleri. Saha ekipleri, müşteri uygulamaları ve iç operasyon kanalları için çevrimdışı öncelikli mimari.",
    icon: "smartphone" as const,
    accent: "cyan" as const,
    tags: ["React Native", "Expo", "iOS / Android", "Offline-first"],
  },
  {
    id: "03",
    title: "Web, SaaS & Masaüstü",
    description:
      "Next.js ve React ile yönetim panelleri ve SaaS ürünleri; Electron ile masaüstü operasyon araçları. Tek iş mantığı, çoklu yüzey.",
    icon: "globe" as const,
    accent: "cyan" as const,
    tags: ["Next.js", "React", "Electron", "Admin Panel"],
  },
  {
    id: "04",
    title: "Gömülü Sistem & Elektronik",
    description:
      "Cihaz kontrolü, sensör ve haberleşme için gömülü yazılım; ürüne özel elektronik kart mimarisi. Donanım ve yazılım aynı gereksinim setinde ilerler.",
    icon: "circuit" as const,
    accent: "violet" as const,
    tags: ["STM32 / ESP32", "Firmware", "PCB Tasarım", "Haberleşme"],
  },
  {
    id: "05",
    title: "Backend & .NET Core",
    description:
      "C# ve .NET 8 / 9 üzerinde mikroservisler. Ödeme, sipariş ve iş akışları için Clean Architecture, gRPC ve optimize EF Core sorguları.",
    icon: "terminal" as const,
    accent: "violet" as const,
    tags: ["C# .NET 9", "ASP.NET Core", "gRPC / REST", "EF Core"],
  },
  {
    id: "06",
    title: "Altyapı & Entegrasyonlar",
    description:
      "PostgreSQL, Kubernetes, RabbitMQ ve ERP / muhasebe / ödeme köprüleri. Dağıtık sistemlerde güvenilir olay güdümlü koordinasyon.",
    icon: "database" as const,
    accent: "violet" as const,
    tags: ["PostgreSQL", "Kubernetes", "RabbitMQ", "ERP / Ödeme"],
  },
] as const;

export const SOFTWARE_SERVICE_SLUGS = [
  "custom-software",
  "mobile",
  "web-saas",
  "desktop",
  "backend-api",
  "crm",
  "b2b",
  "b2c",
  "payments",
  "cloud-devops",
  "integrations",
] as const;

export const ELECTRONICS_SERVICE_SLUGS = [
  "electronics-design",
  "embedded-software",
  "product-rd",
  "pcb-assembly",
  "product-assembly",
  "engineering-consulting",
] as const;

export const SERVICES = [
  {
    slug: "custom-software",
    group: "software" as const,
    title: "Özel Yazılım Geliştirme",
    description:
      "Sıfırdan tasarlanan, iş süreçlerinize birebir uyumlu kurumsal ürünler ve uzun ömürlü mimariler.",
    icon: "cpu" as const,
    accent: "cyan" as const,
    meta: "Kurumsal Çekirdek • C# / TypeScript",
    details:
      "Hazır paketlere sığmayan ihtiyaçlar için özel yazılım geliştiriyoruz. Domain odaklı mimari, Clean Architecture ve DDD ile ölçeklenebilir ürünler inşa ederiz.",
  },
  {
    slug: "mobile",
    group: "software" as const,
    title: "Mobil Uygulama Geliştirme",
    description:
      "iOS ve Android için saha, müşteri ve iç operasyon uygulamaları.",
    icon: "smartphone" as const,
    accent: "cyan" as const,
    meta: "React Native • Expo",
    details:
      "React Native ve Expo ile native performanslı mobil uygulama geliştirme. Offline-first, push bildirimleri ve mağaza yayın süreçlerini uçtan uca yönetiriz.",
  },
  {
    slug: "web-saas",
    group: "software" as const,
    title: "Web Uygulaması Geliştirme",
    description:
      "Çok kiracılı SaaS, yönetim panelleri ve bulut iş uygulamaları.",
    icon: "cloud" as const,
    accent: "cyan" as const,
    meta: "Next.js • Bulut Mimarisi",
    details:
      "React, Next.js ve Vite ile yüksek performanslı web ve SaaS ürünleri geliştiriyoruz. Multi-tenant, RBAC ve operasyon panelleri için uygun mimariler kurarız.",
  },
  {
    slug: "desktop",
    group: "software" as const,
    title: "Masaüstü Uygulama Geliştirme",
    description:
      "Electron ve yerel yığınlarla yoğun veri işleme ve operasyon panelleri.",
    icon: "laptop" as const,
    accent: "cyan" as const,
    meta: "Electron • Yerel Sistemler",
    details:
      "Electron.js ile Windows, macOS ve Linux uygulamaları geliştiriyoruz. Otomatik güncelleme, dosya sistemi erişimi ve yerel entegrasyonlar dahil.",
  },
  {
    slug: "backend-api",
    group: "software" as const,
    title: "Backend & API Mimarisi",
    description:
      "Ürün ve ödeme akışlarını besleyen düşük gecikmeli, güvenli API’ler.",
    icon: "server" as const,
    accent: "violet" as const,
    meta: ".NET 9 • gRPC / REST",
    details:
      "C#, ASP.NET Core ve EF Core ile güvenli, test edilebilir API’ler tasarlıyoruz. REST, gRPC ve event-driven desenleri birlikte kullanırız.",
  },
  {
    slug: "crm",
    group: "software" as const,
    title: "CRM Sistemleri",
    description:
      "Satış hunisi, müşteri kartı, görevler ve raporlamayı tek çatı altında toplayan özel çözümler.",
    icon: "users" as const,
    accent: "violet" as const,
    meta: "Lead • Pipeline • Raporlama",
    details:
      "Hazır kutudan çıkmayan, işinize özel CRM’ler geliştiriyoruz. Lead ve fırsat yönetimi, aktivite takibi, ekip yetkileri, panolar ve mevcut ERP / muhasebe araçlarıyla entegrasyon dahil.",
  },
  {
    slug: "b2b",
    group: "software" as const,
    title: "B2B Platformları",
    description:
      "Bayi, tedarikçi ve kurumsal müşteri portalları; sipariş, fiyat listesi ve onay akışlarıyla.",
    icon: "briefcase" as const,
    accent: "violet" as const,
    meta: "Bayi Portalı • Sipariş • Onay",
    details:
      "Kurumsal satış ve operasyon için çok kiracılı portallar tasarlıyoruz. Rol ve firma bazlı fiyatlandırma, stok görünürlüğü, toplu sipariş ve onay süreçleri dahil.",
  },
  {
    slug: "b2c",
    group: "software" as const,
    title: "B2C & Müşteri Deneyimi",
    description:
      "Tüketiciye dönük mağaza, üyelik, kampanya ve omnichannel deneyim platformları.",
    icon: "shopping-bag" as const,
    accent: "violet" as const,
    meta: "Mağaza • Üyelik • Kampanya",
    details:
      "E-ticaret ve müşteri deneyimi ürünleri geliştiriyoruz. Katalog, sepet, ödeme, üyelik, sadakat ve web + mobil tutarlı deneyim; analitik altyapısıyla birlikte.",
  },
  {
    slug: "payments",
    group: "software" as const,
    title: "Ödeme Sistemleri & FinTek",
    description:
      "Faturalama ve tahsilat için güvenli ödeme altyapıları.",
    icon: "credit-card" as const,
    accent: "violet" as const,
    meta: "Stripe • İyzico • Abonelik",
    details:
      "Stripe, İyzico ve benzeri ağ geçitleriyle entegre tahsilat, abonelik ve mutabakat altyapıları kuruyoruz.",
  },
  {
    slug: "cloud-devops",
    group: "software" as const,
    title: "Bulut & DevOps Çözümleri",
    description:
      "CI/CD, Kubernetes ve gözlemlenebilirlik ile güvenilir canlıya alma.",
    icon: "cloud-cog" as const,
    accent: "violet" as const,
    meta: "Kubernetes • Docker",
    details:
      "Docker, Kubernetes ve CI/CD hatlarıyla dağıtım altyapıları kuruyoruz. Otomatik ölçekleme ve sıfır kesintili yayın süreçleri sağlarız.",
  },
  {
    slug: "integrations",
    group: "software" as const,
    title: "Sistem Entegrasyonu & Otomasyon",
    description:
      "ERP, muhasebe, ödeme ve pazarlama araçları arasında kesintisiz veri köprüleri.",
    icon: "git-branch" as const,
    accent: "violet" as const,
    meta: "RabbitMQ • ERP • Webhook",
    details:
      "RabbitMQ ve API’lerle olay güdümlü entegrasyonlar kuruyoruz. Background processing ve güvenilir mesajlaşma dahil.",
  },
  {
    slug: "electronics-design",
    group: "electronics" as const,
    title: "Elektronik Kart & PCB Tasarımı",
    description:
      "Ürünün işlevlerine, güç ihtiyacına ve çalışma koşullarına uygun elektronik mimari.",
    icon: "circuit-board" as const,
    accent: "cyan" as const,
    meta: "Şema • PCB • Güç Yönetimi",
    details:
      "Ürüne özel elektronik kart mimarisi tasarlıyoruz. Şema, PCB yerleşimi, güç yönetimi ve giriş/çıkış kurgusu kullanım senaryonuza göre şekillenir.",
  },
  {
    slug: "embedded-software",
    group: "electronics" as const,
    title: "Gömülü Yazılım Geliştirme",
    description:
      "Donanımla birlikte ilerleyen cihaz kontrolü, veri toplama ve haberleşme yazılımı.",
    icon: "microchip" as const,
    accent: "cyan" as const,
    meta: "STM32 • ESP32 • Firmware",
    details:
      "Mikrodenetleyici tabanlı firmware geliştiriyoruz. Sensör okuma, motor/sürücü kontrolü, kablosuz veya endüstriyel haberleşme ve güvenli güncelleme senaryoları dahil.",
  },
  {
    slug: "product-rd",
    group: "electronics" as const,
    title: "Anahtar Teslim Ürün Ar-Ge",
    description:
      "İlk kullanım senaryosundan prototipe ve üretime hazırlığa uzanan ürün geliştirme.",
    icon: "flask" as const,
    accent: "cyan" as const,
    meta: "Fikir • Prototip • Üretime Hazırlık",
    details:
      "Elektronik, gömülü yazılım ve gerektiğinde uygulama katmanını tek süreçte birleştiriyoruz. Kapsam, takvim ve test kriterlerini birlikte netleştiririz.",
  },
  {
    slug: "pcb-assembly",
    group: "electronics" as const,
    title: "PCB & SMD/THT Dizgi Koordinasyonu",
    description:
      "Üretim dosyaları, bileşenler ve montaj gereksinimlerini birlikte değerlendiren süreç.",
    icon: "layers" as const,
    accent: "violet" as const,
    meta: "Gerber • BOM • Dizgi",
    details:
      "PCB üretimi ve SMD/THT dizgi için dosya setini (Gerber, BOM, yerleşim) hazırlar; üretim ve montaj ortaklarıyla koordinasyonu yönetiriz. Test ve revizyon ihtiyaçları proje özelinde tanımlanır.",
  },
  {
    slug: "product-assembly",
    group: "electronics" as const,
    title: "Ürün Montajı",
    description:
      "Elektronik kartların mekanik parçalar, kablolama ve arayüzlerle bir araya getirilmesi.",
    icon: "package" as const,
    accent: "violet" as const,
    meta: "Mekanik • Kablo • Arayüz",
    details:
      "Kart, kablolama, mekanik parçalar ve kullanıcı arayüzünü çalışan bir sistemde birleştiriyoruz. Montaj sırası, test ve kalite kontrol adımları kapsamla birlikte planlanır.",
  },
  {
    slug: "engineering-consulting",
    group: "electronics" as const,
    title: "Mühendislik Danışmanlığı",
    description:
      "Mevcut ürününüzün tasarım, yazılım veya üretime hazırlığını teknik açıdan değerlendiririz.",
    icon: "wrench" as const,
    accent: "violet" as const,
    meta: "Revizyon • Fizibilite • Yol Haritası",
    details:
      "Mevcut kart, firmware veya ürün mimarisini inceler; riskleri, maliyet ve üretim hazırlığını netleştiririz. İyileştirme yol haritasını birlikte çıkarırız.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Ortak Keşif",
    description:
      "İş hedeflerinizi, kullanım koşullarını ve teknik kısıtları ekibinizle tek masada detaylandırıyoruz.",
    output: "Ortak Ürün Şartnamesi",
    accent: "cyan" as const,
  },
  {
    step: "02",
    title: "Mimari Kurgu",
    description:
      "Yazılım yığını, elektronik mimari veya her ikisini birden; ölçeklenebilir kurguları onayınıza sunarak belirliyoruz.",
    output: "Sistem & Donanım Mimarisi",
    accent: "cyan" as const,
  },
  {
    step: "03",
    title: "Tasarım & Prototip",
    description:
      "Arayüz, şema/PCB veya firmware taslakları geri bildiriminizle iteratif ilerler; taşa kazınmış değildir.",
    output: "İteratif Tasarım & Prototip",
    accent: "cyan" as const,
  },
  {
    step: "04",
    title: "Şeffaf Sprintler",
    description:
      "Haftalık döngüler. Yazılım demoları veya çalışan kart/firmware testleriyle ilerlemeyi birlikte izlersiniz.",
    output: "Demo & Sprint Raporu",
    accent: "violet" as const,
  },
  {
    step: "05",
    title: "Doğrulama & Canlıya Alım",
    description:
      "Birlikte kararlaştırılan test ve kabul kriterleri sağlandığında üretime veya canlı ortama geçilir.",
    output: "Doğrulama & Teslim Paketi",
    accent: "violet" as const,
  },
  {
    step: "06",
    title: "Birlikte Büyüme",
    description:
      "Ürün sahaya çıktıktan sonra da yanınızdayız; metrikler ve saha geri bildirimine göre sürekli geliştiririz.",
    output: "Gelişim Yol Haritası",
    accent: "violet" as const,
  },
] as const;

export const WHY_PILLARS = [
  {
    title: "Sürece Dahilsiniz",
    description:
      "Projeyi tek taraflı yapıp teslim etmiyoruz. Her sprintte ve her kararda sizinle şeffaf ve uyumlu ilerleriz.",
    icon: "handshake" as const,
    accent: "cyan" as const,
  },
  {
    title: "Esnek Tasarım Revizyonları",
    description:
      "Tasarım süreci kalıplara hapsolmaz. Yazılım veya elektronik tarafta geri bildirimlerinize göre revize edilir.",
    icon: "pen-tool" as const,
    accent: "cyan" as const,
  },
  {
    title: "Düzenli Demo & Canlı Testler",
    description:
      "Her aşamada çalışan çıktı görürsünüz. Yazılım demoları veya kart/firmware testleriyle ilerlemeyi takip edersiniz.",
    icon: "eye" as const,
    accent: "cyan" as const,
  },
  {
    title: "Modern & Geleceğe Hazır Mimari",
    description:
      "Teknik borç bırakmadan; modern yazılım yığınları ve üretime hazır elektronik mimarilerle sağlam temeller kuruyoruz.",
    icon: "cpu" as const,
    accent: "violet" as const,
  },
  {
    title: "Yazılım + Donanım Bütünlüğü",
    description:
      "Uygulama, gömülü yazılım ve elektronik kartı aynı ürün hedefinde birleştirerek tutarlı deneyim sunuyoruz.",
    icon: "network" as const,
    accent: "violet" as const,
  },
  {
    title: "Doğrudan Mühendis İletişimi",
    description:
      "Aracı temsilciler yok. Kodunuzu veya kartınızı geliştiren mühendislerle doğrudan iletişim kurarsınız.",
    icon: "messages-square" as const,
    accent: "violet" as const,
  },
] as const;

export const PROJECT_TYPES = [
  { value: "custom-software", label: "Özel Yazılım Geliştirme" },
  { value: "mobile", label: "Mobil Uygulama (React Native / iOS & Android)" },
  { value: "web-saas", label: "Web & SaaS Platformu (React / Next.js)" },
  { value: "desktop", label: "Masaüstü Uygulaması (Electron.js / OS Entegre)" },
  { value: "backend-api", label: "Backend & API Geliştirme (C# / .NET 9)" },
  { value: "ecosystem", label: "Kapsamlı Ürün (Web + Mobil + Backend)" },
  { value: "electronics-design", label: "Elektronik Kart & PCB Tasarımı" },
  { value: "embedded-software", label: "Gömülü Yazılım / Firmware" },
  { value: "product-rd", label: "Anahtar Teslim Ürün Ar-Ge" },
  { value: "pcb-assembly", label: "PCB & SMD/THT Dizgi" },
  { value: "product-assembly", label: "Ürün Montajı" },
  { value: "engineering-consulting", label: "Mühendislik Danışmanlığı" },
  { value: "crm", label: "CRM Sistemi" },
  { value: "b2b", label: "B2B Platformu (Bayi / Tedarik / Portal)" },
  { value: "b2c", label: "B2C Platformu (Mağaza / Üyelik / Deneyim)" },
  { value: "payments", label: "Ödeme Sistemleri & FinTek" },
  { value: "cloud-devops", label: "Bulut Altyapısı, DevOps & Mikroservisler" },
  { value: "integrations", label: "Sistem Entegrasyonu & Otomasyon" },
] as const;

export type ProjectTypeValue = (typeof PROJECT_TYPES)[number]["value"];

export function isProjectType(value: string | null | undefined): value is ProjectTypeValue {
  return PROJECT_TYPES.some((type) => type.value === value);
}

export const BUDGET_RANGES = [
  { value: "10k-50k", label: "10 – 50 Bin ₺" },
  { value: "100k-150k", label: "100 – 150 Bin ₺" },
  { value: "200k-300k", label: "200 – 300 Bin ₺" },
  { value: "500k-800k", label: "500 – 800 Bin ₺" },
  { value: "1m+", label: "1M+ ₺" },
  { value: "discuss", label: "Birlikte belirleyelim" },
] as const;

export const SAMPLE_PROJECTS = [
  {
    slug: "saas-platform",
    title: "Çok Kiracılı SaaS Platformu",
    summary:
      "Rol tabanlı erişim, abonelik yönetimi ve yönetim paneli içeren örnek bulut platformu.",
    stack: ["Next.js", "ASP.NET Core", "PostgreSQL"],
    category: "Web",
    placeholder: true,
  },
  {
    slug: "mobile-commerce",
    title: "Mobil Ticaret Uygulaması",
    summary:
      "iOS ve Android için çevrimdışı öncelikli alışveriş deneyimi — örnek proje placeholder.",
    stack: ["React Native", "Expo", "RabbitMQ"],
    category: "Mobil",
    placeholder: true,
  },
  {
    slug: "ops-desktop",
    title: "Operasyon Masaüstü Paneli",
    summary:
      "Yoğun veri işleme ve yerel sistem entegrasyonlu masaüstü operasyon aracı — örnek.",
    stack: ["Electron", ".NET 9", "SQLite"],
    category: "Masaüstü",
    placeholder: true,
  },
] as const;

export const ABOUT_VALUES = [
  {
    title: "Vizyon",
    description:
      "Yazılım ve elektronik mühendisliğini şeffaf, iş birliğine dayalı ve uzun ömürlü ürünler üreten bir disiplin olarak konumlandırmak.",
  },
  {
    title: "Misyon",
    description:
      "Startuplar ve işletmeler için özel yazılım ile elektronik / gömülü ürün geliştirmeyi uçtan uca hayata geçirmek.",
  },
  {
    title: "Mühendislik Yaklaşımı",
    description:
      "Keşiften teslime kadar her adımı müşteriyle birlikte planlar; demolar, prototip testleri ve esnek revizyonlarla ilerleriz.",
  },
] as const;
