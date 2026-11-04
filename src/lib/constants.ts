export const SITE = {
  name: "MIRVATE",
  tagline: "Engineering What's Next.",
  description:
    "MIRVATE; mobil uygulama geliştirme, web uygulaması geliştirme, masaüstü yazılım, CRM, B2B ve B2C platformları sunan bir yazılım mühendisliği şirketidir.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mirvate.com",
  locale: "tr_TR",
  email: "info@mirvate.com",
} as const;

/** Ana arama niyetleri — meta keywords + şema için ortak havuz */
export const SEO_KEYWORDS = [
  "mobil uygulama geliştirme",
  "web uygulaması geliştirme",
  "masaüstü uygulama geliştirme",
  "iOS uygulama geliştirme",
  "Android uygulama geliştirme",
  "React Native",
  "Next.js",
  "Electron",
  "özel yazılım geliştirme",
  "CRM yazılımı",
  "B2B platform geliştirme",
  "B2C e-ticaret yazılımı",
  "SaaS geliştirme",
  "yazılım şirketi Türkiye",
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
  { href: "/services#crm", label: "CRM Sistemleri" },
  { href: "/services#b2b", label: "B2B Platformları" },
  { href: "/services#b2c", label: "B2C & Müşteri Deneyimi" },
  { href: "/services#custom-software", label: "Özel Yazılım Geliştirme" },
  { href: "/services#web-saas", label: "Web & SaaS Geliştirme" },
  { href: "/services#mobile", label: "Mobil Uygulama Çözümleri" },
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
    title: "CRM & İş Uygulamaları",
    description:
      "Satış, müşteri ilişkileri ve operasyon süreçlerini tek panelde toplayan özel CRM ve iş uygulamaları. Pipeline, lead yönetimi, görevler, raporlama ve ekip iş birliği uçtan uca tasarlanır.",
    icon: "users" as const,
    accent: "cyan" as const,
    tags: ["CRM Çekirdeği", "Pipeline", "Lead & Deal", "Raporlama"],
  },
  {
    id: "02",
    title: "B2B & B2C Platformları",
    description:
      "Kurumsal (B2B) sipariş, bayi ve tedarik portalları ile tüketici (B2C) mağaza, üyelik ve deneyim platformları. Rol tabanlı erişim, katalog, sepet ve çok kiracılı yapılar.",
    icon: "store" as const,
    accent: "cyan" as const,
    tags: ["B2B Portal", "B2C Mağaza", "Bayi Ağı", "Multi-tenant"],
  },
  {
    id: "03",
    title: "Mobil Uygulama Mühendisliği",
    description:
      "React Native ve Expo ile yerel mobil deneyimler. Saha ekipleri, müşteri uygulamaları ve B2B/B2C mobil kanallar için çevrimdışı öncelikli mimari.",
    icon: "smartphone" as const,
    accent: "cyan" as const,
    tags: ["React Native", "Expo Services", "iOS / Android", "Hermes V8"],
  },
  {
    id: "04",
    title: "Web, SaaS & Masaüstü",
    description:
      "Next.js ve React ile yönetim panelleri, SaaS ürünleri; Electron ile masaüstü operasyon araçları. Tek iş mantığı, çoklu yüzey.",
    icon: "globe" as const,
    accent: "violet" as const,
    tags: ["Next.js", "React 19", "Electron.js", "Admin Panel"],
  },
  {
    id: "05",
    title: "Backend & .NET Core",
    description:
      "C# ve .NET 8 / 9 üzerinde mikroservisler. CRM, B2B/B2C ve ödeme akışları için Clean Architecture, gRPC ve optimize EF Core sorguları.",
    icon: "terminal" as const,
    accent: "violet" as const,
    tags: ["C# .NET 9", "ASP.NET Core", "gRPC / REST", "EF Core"],
  },
  {
    id: "06",
    title: "Altyapı & Entegrasyonlar",
    description:
      "PostgreSQL, Kubernetes, RabbitMQ ve ödeme / ERP / muhasebe entegrasyonları. Dağıtık sistemlerde güvenilir olay güdümlü koordinasyon.",
    icon: "database" as const,
    accent: "violet" as const,
    tags: ["PostgreSQL", "Kubernetes", "RabbitMQ", "ERP / Ödeme"],
  },
] as const;

export const SERVICES = [
  {
    slug: "crm",
    title: "CRM Sistemleri",
    description:
      "Satış hunisi, müşteri kartı, görevler ve raporlamayı tek çatı altında toplayan özel CRM çözümleri.",
    icon: "users" as const,
    accent: "cyan" as const,
    meta: "Lead • Pipeline • Raporlama",
    details:
      "Hazır kutudan çıkmayan, işinize özel CRM’ler geliştiriyoruz. Lead ve fırsat yönetimi, aktivite takibi, ekip yetkileri, panolar ve mevcut ERP / muhasebe / iletişim araçlarıyla entegrasyon uçtan uca kurulur.",
  },
  {
    slug: "b2b",
    title: "B2B Platformları",
    description:
      "Bayi, tedarikçi ve kurumsal müşteri portalları; sipariş, fiyat listesi ve onay akışlarıyla.",
    icon: "briefcase" as const,
    accent: "cyan" as const,
    meta: "Bayi Portalı • Sipariş • Onay",
    details:
      "B2B satış ve operasyon için çok kiracılı portallar tasarlıyoruz. Rol ve firma bazlı fiyatlandırma, stok görünürlüğü, toplu sipariş, teklif/onay süreçleri ve saha ekipleri için mobil destek dahil.",
  },
  {
    slug: "b2c",
    title: "B2C & Müşteri Deneyimi",
    description:
      "Tüketiciye dönük mağaza, üyelik, kampanya ve omnichannel deneyim platformları.",
    icon: "shopping-bag" as const,
    accent: "cyan" as const,
    meta: "Mağaza • Üyelik • Kampanya",
    details:
      "B2C e-ticaret ve müşteri deneyimi ürünleri geliştiriyoruz. Katalog, sepet, ödeme, üyelik, sadakat, bildirimler ve web + mobil tutarlı deneyim; analitik ve kişiselleştirme altyapısıyla birlikte.",
  },
  {
    slug: "custom-software",
    title: "Özel Yazılım Geliştirme",
    description:
      "Sıfırdan tasarlanan, iş süreçlerinize birebir uyumlu ve teknik mükemmelliğe sahip kurumsal mimariler.",
    icon: "cpu" as const,
    accent: "cyan" as const,
    meta: "Kurumsal Çekirdek • C# / TypeScript",
    details:
      "İş süreçlerinize özel, ölçeklenebilir yazılım mimarileri tasarlıyor ve geliştiriyoruz. CRM’den operasyon panellerine kadar Clean Architecture ve DDD ile uzun ömürlü ürünler inşa ederiz.",
  },
  {
    slug: "mobile",
    title: "Mobil Uygulama Geliştirme",
    description:
      "iOS ve Android mobil uygulama geliştirme: B2B saha, B2C müşteri ve iç operasyon.",
    icon: "smartphone" as const,
    accent: "violet" as const,
    meta: "React Native • Expo",
    details:
      "React Native ve Expo ile native performanslı mobil uygulama geliştirme. Offline-first, push bildirimleri ve mağaza yayın süreçlerini uçtan uca yönetiriz.",
  },
  {
    slug: "web-saas",
    title: "Web Uygulaması Geliştirme",
    description:
      "Çok kiracılı SaaS, yönetim panelleri ve bulut iş uygulamaları.",
    icon: "cloud" as const,
    accent: "violet" as const,
    meta: "Next.js • Bulut Mimarisi",
    details:
      "React, Next.js ve Vite ile yüksek performanslı web ve SaaS ürünleri geliştiriyoruz. Multi-tenant, RBAC ve CRM / B2B / B2C panelleri için uygun mimariler kurarız.",
  },
  {
    slug: "desktop",
    title: "Masaüstü Uygulama Geliştirme",
    description:
      "Electron ve yerel yığınlarla masaüstü uygulama geliştirme: yoğun veri işleme ve operasyon panelleri.",
    icon: "laptop" as const,
    accent: "violet" as const,
    meta: "Electron • Yerel Sistemler",
    details:
      "Electron.js ile Windows, macOS ve Linux uygulamaları geliştiriyoruz. Otomatik güncelleme, dosya sistemi erişimi ve yerel entegrasyonlar dahil.",
  },
  {
    slug: "backend-api",
    title: "Backend & API Mimarisi",
    description:
      "CRM, B2B/B2C ve ödeme akışlarını besleyen düşük gecikmeli API’ler.",
    icon: "server" as const,
    accent: "violet" as const,
    meta: ".NET 9 • gRPC / REST",
    details:
      "C#, ASP.NET Core ve EF Core ile güvenli, test edilebilir API’ler tasarlıyoruz. REST, gRPC ve event-driven desenleri birlikte kullanırız.",
  },
  {
    slug: "payments",
    title: "Ödeme Sistemleri & FinTek",
    description:
      "B2B faturalama ve B2C tahsilat için güvenli ödeme altyapıları.",
    icon: "credit-card" as const,
    accent: "violet" as const,
    meta: "Stripe • İyzico • Abonelik",
    details:
      "Stripe, İyzico ve benzeri ağ geçitleriyle entegre tahsilat, abonelik ve mutabakat altyapıları kuruyoruz.",
  },
  {
    slug: "cloud-devops",
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
    title: "Sistem Entegrasyonu & Otomasyon",
    description:
      "CRM, ERP, muhasebe ve pazarlama araçları arasında kesintisiz veri köprüleri.",
    icon: "git-branch" as const,
    accent: "violet" as const,
    meta: "RabbitMQ • ERP • Webhook",
    details:
      "RabbitMQ ve API’lerle olay güdümlü entegrasyonlar kuruyoruz. Background processing ve güvenilir mesajlaşma dahil.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Ortak Keşif",
    description:
      "İş hedeflerinizi, kullanıcı ihtiyaçlarını ve teknik kısıtları ekibinizle tek masada detaylandırıyoruz.",
    output: "Ortak Ürün Şartnamesi",
    accent: "cyan" as const,
  },
  {
    step: "02",
    title: "Mimari Kurgu",
    description:
      "Sistemin ölçeklenebilir altyapısını, veritabanı kurgusunu ve teknoloji yığınını onayınıza sunarak belirliyoruz.",
    output: "C4 Sistem Mimarisi",
    accent: "cyan" as const,
  },
  {
    step: "03",
    title: "Esnek Tasarım",
    description:
      "Tasarım taşa kazınmış değildir. Geri bildirimleriniz ve talepleriniz doğrultusunda esnekçe revize edilir.",
    output: "İteratif UI/UX & Prototip",
    accent: "cyan" as const,
  },
  {
    step: "04",
    title: "Şeffaf Sprintler",
    description:
      "Haftalık sprint döngüleri. Geliştirilen her modülü canlı test ortamlarında düzenli olarak demolarla incelersiniz.",
    output: "Canlı Demo & Sprint Raporu",
    accent: "violet" as const,
  },
  {
    step: "05",
    title: "Canlıya Alım",
    description:
      "Birlikte kararlaştırılan kriterler sağlandığında sıfır kesintiyle üretim ortamına geçiş sağlanır.",
    output: "Üretim Dağıtım Paketi",
    accent: "violet" as const,
  },
  {
    step: "06",
    title: "Birlikte Büyüme",
    description:
      "Ürün yayımlandıktan sonra da yanınızdayız; gerçek kullanıcı metriklerine göre sistemi sürekli geliştiriyoruz.",
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
      "Tasarım süreci kalıplara hapsolmaz. İş modelinize ve kullanıcı geri bildirimlerinize göre revize edilir, tam içinize sinene kadar şekillenir.",
    icon: "pen-tool" as const,
    accent: "cyan" as const,
  },
  {
    title: "Düzenli Demo & Canlı Testler",
    description:
      "Her aşamada çalışan yazılım görürsünüz. Canlı test ortamları ve düzenli demolar ile projenin gelişimini anbean takip edersiniz.",
    icon: "eye" as const,
    accent: "cyan" as const,
  },
  {
    title: "Modern & Geleceğe Hazır Mimari",
    description:
      "Teknik borç bırakmadan; modern .NET 9, React, Next.js, konteyner mimarileri ve yüksek verimli veritabanlarıyla sağlam temeller kuruyoruz.",
    icon: "cpu" as const,
    accent: "violet" as const,
  },
  {
    title: "Çoklu Platform Bütünlüğü",
    description:
      "Mobil, web ve masaüstü sistemlerde aynı iş mantığını kusursuz performans ve tutarlı kullanıcı deneyimiyle birleştiriyoruz.",
    icon: "network" as const,
    accent: "violet" as const,
  },
  {
    title: "Doğrudan Mühendis İletişimi",
    description:
      "Aracı temsilciler yok. Kodunuzu yazan, mimariyi tasarlayan kıdemli yazılım mühendisleri ve mimarlarla doğrudan iletişim kurarsınız.",
    icon: "messages-square" as const,
    accent: "violet" as const,
  },
] as const;

export const PROJECT_TYPES = [
  { value: "ecosystem", label: "Kapsamlı Ekosistem (CRM + Web + Mobil + Backend)" },
  { value: "crm", label: "CRM Sistemi" },
  { value: "b2b", label: "B2B Platformu (Bayi / Tedarik / Portal)" },
  { value: "b2c", label: "B2C Platformu (Mağaza / Üyelik / Deneyim)" },
  { value: "custom-software", label: "Özel Yazılım Geliştirme" },
  { value: "mobile", label: "Mobil Uygulama (React Native / iOS & Android)" },
  { value: "web-saas", label: "Web & SaaS Platformu (React / Next.js)" },
  { value: "desktop", label: "Masaüstü Uygulaması (Electron.js / OS Entegre)" },
  { value: "backend-api", label: "Backend & API Geliştirme (C# / .NET 9)" },
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
      "Yazılım mühendisliğini şeffaf, iş birliğine dayalı ve uzun ömürlü ürünler üreten bir disiplin olarak konumlandırmak.",
  },
  {
    title: "Misyon",
    description:
      "Startuplar ve işletmeler için CRM, B2B/B2C platformları ile mobil, web, masaüstü ve backend çözümlerini uçtan uca hayata geçirmek.",
  },
  {
    title: "Mühendislik Yaklaşımı",
    description:
      "Keşiften canlıya alıma kadar her adımı müşteriyle birlikte planlar; sprint demoları, canlı test ortamları ve esnek revizyonlarla ilerleriz.",
  },
] as const;
