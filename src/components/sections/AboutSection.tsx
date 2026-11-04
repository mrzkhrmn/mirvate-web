import Image from "next/image";
import {
  Boxes,
  Eye,
  Handshake,
  MessagesSquare,
  PenTool,
  Cpu,
  Network,
  Activity,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { WHY_PILLARS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const pillarIcons = {
  handshake: Handshake,
  "pen-tool": PenTool,
  eye: Eye,
  cpu: Cpu,
  network: Network,
  "messages-square": MessagesSquare,
} as const;

export function AboutSection() {
  return (
    <section id="neden-biz" className="relative w-full bg-surface py-16 md:py-24">
      <Container>
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <span className="font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-widest text-primary">
            MIRVATE Yaklaşımı
          </span>
          <h2 className="mt-2 font-[family-name:var(--font-headline)] text-3xl font-bold tracking-tight text-on-surface md:text-5xl">
            Yalnızca Bir Yazılım Ekibi Değil, Mühendislik Ortağınız.
          </h2>
          <p className="mt-2 text-[15px] leading-6 text-on-surface-variant">
            Şeffaflığı, esnekliği ve kesintisiz iletişimi merkeze alarak projelerinizi
            kendi ürünümüz gibi benimsiyor ve büyütüyoruz.
          </p>
        </div>

        {/* Showcase 1 */}
        <Reveal className="relative mb-10 grid grid-cols-1 items-center gap-6 overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container-low/70 p-6 lg:grid-cols-12 lg:p-10">
          <div className="flex flex-col justify-center space-y-4 lg:col-span-6">
            <div className="inline-flex w-fit items-center gap-2 rounded bg-surface-container px-2 py-1 font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-wider text-primary">
              <Boxes className="h-[15px] w-[15px]" />
              Şeffaf Çevik Mimari Alanı
            </div>
            <h3 className="font-[family-name:var(--font-headline)] text-2xl font-bold text-on-surface md:text-3xl">
              Hiyerarşi ve Gizli Süreç Yok: Açık Sprint Panosu & Canlı C4 Mimarisi
            </h3>
            <p className="leading-7 text-on-surface-variant">
              Sprint kartlarından veritabanı şemalarına kadar projenin her boyutu ortak
              ekranda izlenir. Müşterimiz projenin dışındaki bir alıcı değil, her
              mimari tartışmada karar verici bir paydaştır.
            </p>
            <div className="grid grid-cols-1 gap-2 pt-1 sm:grid-cols-2">
              <div className="rounded-lg border border-outline-variant/30 bg-surface-container-lowest/80 p-3">
                <div className="mb-1 flex items-center gap-2 font-[family-name:var(--font-headline)] text-base font-semibold text-primary">
                  <Handshake className="h-[18px] w-[18px]" />
                  Sürece Dahilsiniz
                </div>
                <p className="text-[13px] leading-5 text-on-surface-variant">
                  Sürpriz teslimatlar yerine haftalık sprint incelemeleri ve ortak karar
                  alma.
                </p>
              </div>
              <div className="rounded-lg border border-outline-variant/30 bg-surface-container-lowest/80 p-3">
                <div className="mb-1 flex items-center gap-2 font-[family-name:var(--font-headline)] text-base font-semibold text-secondary-fixed">
                  <MessagesSquare className="h-[18px] w-[18px]" />
                  Doğrudan Mühendis İletişimi
                </div>
                <p className="text-[13px] leading-5 text-on-surface-variant">
                  Kod yazan baş mimarla doğrudan toplantı; aracı hesap yöneticileri
                  olmaksızın hızlı aksiyon.
                </p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl border border-outline-variant/40 shadow-[0_16px_40px_rgba(0,0,0,0.5)] lg:col-span-6">
            <Image
              src="/images/collaboration-workspace.png"
              alt="Fütüristik yazılım mühendisliği iş birliği çalışma alanı — C4 mimari ve sprint panosu"
              width={1200}
              height={800}
              className="h-auto max-h-[440px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent" />
            <div className="absolute right-3 bottom-3 left-3 flex items-center justify-between rounded-lg border border-outline-variant/30 bg-surface-container-lowest/85 px-3 py-2 font-[family-name:var(--font-mono)] text-[10px] text-on-surface backdrop-blur-md">
              <span className="flex items-center gap-1.5 text-primary">
                <span className="h-1.5 w-1.5 animate-ping rounded-full bg-primary-container" />
                C4 Model • Etkileşimli Sprint Duvarı
              </span>
              <span className="text-on-surface-variant">Çok Katmanlı Görselleştirme</span>
            </div>
          </div>
        </Reveal>

        {/* Showcase 2 */}
        <Reveal className="relative mb-10 grid grid-cols-1 items-center gap-6 overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container-low/70 p-6 lg:grid-cols-12 lg:p-10">
          <div className="group relative order-2 overflow-hidden rounded-xl border border-outline-variant/40 shadow-[0_16px_40px_rgba(0,0,0,0.5)] lg:order-1 lg:col-span-6">
            <Image
              src="/images/devops-dashboard.png"
              alt="Dağıtık bulut sistemleri ve DevOps gözlemlenebilirlik paneli"
              width={1200}
              height={800}
              className="h-auto max-h-[440px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent" />
            <div className="absolute right-3 bottom-3 left-3 flex items-center justify-between rounded-lg border border-outline-variant/30 bg-surface-container-lowest/85 px-3 py-2 font-[family-name:var(--font-mono)] text-[10px] text-on-surface backdrop-blur-md">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Kubernetes Pod & Ağ Telemetrisi
              </span>
              <span className="text-on-surface-variant">%99.999 SLA Operasyon Kontrolü</span>
            </div>
          </div>
          <div className="order-1 flex flex-col justify-center space-y-4 lg:order-2 lg:col-span-6">
            <div className="inline-flex w-fit items-center gap-2 rounded bg-surface-container px-2 py-1 font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-wider text-secondary">
              <Activity className="h-[15px] w-[15px]" />
              Canlı Test & Gözlemlenebilirlik
            </div>
            <h3 className="font-[family-name:var(--font-headline)] text-2xl font-bold text-on-surface md:text-3xl">
              Düzenli Demolar & Canlı Test Ortamları ile Sıfır Belirsizlik
            </h3>
            <p className="leading-7 text-on-surface-variant">
              Geliştirdiğimiz her servis, Kubernetes pod&apos;larında eş zamanlı telemetri
              ve izlenebilirlikle çalışır. Projenizin ilerleyişini simülasyonlarla değil,
              doğrudan çalışan canlı sunucu testleriyle tecrübe edersiniz.
            </p>
            <div className="grid grid-cols-1 gap-2 pt-1 sm:grid-cols-2">
              <div className="rounded-lg border border-outline-variant/30 bg-surface-container-lowest/80 p-3">
                <div className="mb-1 flex items-center gap-2 font-[family-name:var(--font-headline)] text-base font-semibold text-primary">
                  <PenTool className="h-[18px] w-[18px]" />
                  Esnek Tasarım Revizyonları
                </div>
                <p className="text-[13px] leading-5 text-on-surface-variant">
                  Süreç esnasında olgunlaşan yeni fikirler anında revize edilir, kalıplara
                  hapsedilmez.
                </p>
              </div>
              <div className="rounded-lg border border-outline-variant/30 bg-surface-container-lowest/80 p-3">
                <div className="mb-1 flex items-center gap-2 font-[family-name:var(--font-headline)] text-base font-semibold text-secondary-fixed">
                  <Eye className="h-[18px] w-[18px]" />
                  Düzenli Demo & Canlı Testler
                </div>
                <p className="text-[13px] leading-5 text-on-surface-variant">
                  Her iterasyon canlı sandbox ortamlarında test edilir, kullanıcı deneyimi
                  doğrulanır.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WHY_PILLARS.map((pillar, i) => {
            const Icon = pillarIcons[pillar.icon];
            const isViolet = pillar.accent === "violet";
            return (
              <Reveal key={pillar.title} delay={i * 0.04}>
                <article className="rounded-xl bg-surface-container-low p-6 transition-all hover:bg-surface-container">
                  <div
                    className={cn(
                      "mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-highest",
                      isViolet ? "text-secondary" : "text-primary-container",
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-1 font-[family-name:var(--font-headline)] text-xl font-semibold text-on-surface">
                    {pillar.title}
                  </h3>
                  <p className="text-[13px] leading-5 text-on-surface-variant">
                    {pillar.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
