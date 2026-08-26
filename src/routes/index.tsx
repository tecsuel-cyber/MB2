import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  MapPin,
  Phone,
  Instagram,
  Mail,
  Clock,
  ArrowRight,
  Check,
} from "lucide-react";


import logo from "@/assets/mb2-logo.png.asset.json";
import heroImg from "@/assets/hero-grafica.jpg";
import totemImg from "@/assets/totem-indoor.jpg";
import gBrindes from "@/assets/g-brindes.jpg";
import gAdesivos from "@/assets/g-adesivos.jpg";
import gLonas from "@/assets/g-lonas.jpg";
import gCartoes from "@/assets/g-cartoes.jpg";
import gCamisetas from "@/assets/g-camisetas.jpg";
import gTotem from "@/assets/g-totem.jpg";
import sDesign from "@/assets/s-design.jpg";
import sPapelaria from "@/assets/s-papelaria.jpg";
import gCarimbos from "@/assets/g-carimbos.jpg";
import estudioImg from "@/assets/estudio-mb2.jpg";
import pCartoes from "@/assets/p-cartoes.png";
import pBlocos from "@/assets/p-blocos.png";
import pAdesivosPng from "@/assets/p-adesivos.png";
import pBanner from "@/assets/p-banner.png";
import pWind from "@/assets/p-windbanner.png";
import pCaneca from "@/assets/p-caneca.png";
import trabalho1 from "@/assets/trabalho-1.png.asset.json";
import trabalho2 from "@/assets/trabalho-2.png.asset.json";
import trabalho3 from "@/assets/trabalho-3.png.asset.json";
import trabalho4 from "@/assets/trabalho-4.png.asset.json";
import trabalho5 from "@/assets/trabalho-5.png.asset.json";
import trabalho6 from "@/assets/trabalho-6.png.asset.json";
import trabalho7 from "@/assets/trabalho-7.png.asset.json";
import trabalho8 from "@/assets/trabalho-8.png.asset.json";
import trabalho9 from "@/assets/trabalho-9.png.asset.json";
import trabalho10 from "@/assets/trabalho-10.png.asset.json";
import trabalho11 from "@/assets/trabalho-11.png.asset.json";
import trabalho12 from "@/assets/trabalho-12.png.asset.json";
import { SectionTitle } from "@/components/site/Section";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2A9.94 9.94 0 0 0 2.1 11.94c0 1.75.46 3.46 1.34 4.97L2 22l5.23-1.37a9.9 9.9 0 0 0 4.81 1.23h.01A9.94 9.94 0 0 0 22 11.92 9.94 9.94 0 0 0 12.04 2Zm5.8 15.74a8.24 8.24 0 0 1-11.2.86l-.4-.3-3.1.81.83-3.02-.26-.4a8.25 8.25 0 1 1 14.13 2.05Z" />
    </svg>
  );
}

const heroProdutos = [
  { src: pCartoes, alt: "Cartões de visita personalizados" },
  { src: pBlocos, alt: "Blocos e talões impressos" },
  { src: pAdesivosPng, alt: "Adesivos personalizados" },
  { src: pBanner, alt: "Banner roll-up impresso" },
  { src: pWind, alt: "Wind banner com bandeira personalizada" },
  { src: pCaneca, alt: "Caneca personalizada" },
];


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "MB2 Comunicação | Gráfica Rápida e Mídia Indoor" },
      {
        name: "description",
        content:
          "Impressão digital, adesivos, lonas, brindes e personalizados com agilidade. E agora mídia indoor em totens digitais para anunciar sua marca na cidade.",
      },
      { property: "og:title", content: "MB2 Comunicação | Gráfica Rápida e Mídia Indoor" },
      {
        property: "og:description",
        content:
          "Comunicação visual completa: impressão, adesivos, lonas, brindes e totens digitais para anunciantes locais.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "MB2 Comunicação",
          description:
            "Gráfica rápida, comunicação visual e mídia indoor em totens digitais.",
          telephone: "+5527997572298",
          areaServed: "Espírito Santo",
          sameAs: ["https://www.instagram.com/mb2comunicacao"],
        }),
      },
    ],
  }),
});

const WHATSAPP = "https://wa.me/5527997572298";

const produtos = [
  {
    img: gCartoes,
    alt: "Cartões de visita impressos empilhados",
    title: "Gráfica rápida",
    itens: [
      "Cartões de visita e panfletos",
      "Folders, blocos e cardápios",
      "Materiais promocionais com prazo curto",
      "Acabamento feito internamente",
    ],
  },
  {
    img: gAdesivos,
    alt: "Produção de adesivos personalizados em recorte eletrônico",
    title: "Adesivos & recortes",
    itens: [
      "Adesivos personalizados de qualquer tamanho",
      "Recorte eletrônico em vinil",
      "Vitrines, portas e sinalização",
      "Adesivagem de veículos",
    ],
  },
  {
    img: gLonas,
    alt: "Lona impressa instalada na fachada de um comércio",
    title: "Lonas & banners",
    itens: [
      "Faixas e lonas em alta resolução",
      "Wind banners e displays",
      "Fachadas e testeiras",
      "Instalação no local",
    ],
  },
  {
    img: gBrindes,
    alt: "Brindes corporativos personalizados com a marca do cliente",
    title: "Brindes",
    itens: [
      "Canecas, squeezes e garrafas",
      "Canetas, chaveiros e agendas",
      "Sacolas e ecobags",
      "Kits corporativos completos",
    ],
  },
  {
    img: gCamisetas,
    alt: "Camisetas personalizadas impressas empilhadas na produção",
    title: "Personalizados",
    itens: [
      "Camisetas e uniformes",
      "Bonés, aventais e sacochilas",
      "Peças para festas e datas especiais",
      "Do unitário ao grande volume",
    ],
  },
  {
    img: gTotem,
    alt: "Totem digital de publicidade em entrada de supermercado",
    title: "Mídia indoor",
    itens: [
      "Totens digitais em pontos estratégicos",
      "Exibição em loop durante todo o dia",
      "Criação da arte inclusa",
      "Investimento mensal fixo",
    ],
  },
  {
    img: sDesign,
    alt: "Designer trabalhando na criação de identidade visual",
    title: "Designer gráfico",
    itens: [
      "Criação de logo e identidade visual",
      "Artes para redes sociais e anúncios",
      "Diagramação de cardápios e catálogos",
      "Ajuste e finalização de arquivos",
    ],
  },
  {
    img: sPapelaria,
    alt: "Papelaria personalizada para festas com caixinhas e topos de bolo",
    title: "Papelaria personalizada",
    itens: [
      "Decoração completa de festas",
      "Caixinhas, sacolinhas e lembrancinhas",
      "Topo de bolo e display de mesa",
      "Convites, rótulos e tags",
    ],
  },
  {
    img: gCarimbos,
    alt: "Carimbos personalizados automáticos e de madeira sobre a bancada",
    title: "Carimbos",
    itens: [
      "Carimbos automáticos e de madeira",
      "Modelos com logo e dados da empresa",
      "Carimbos para artesanato e embalagens",
      "Refil e troca de almofada",
    ],
  },
];

const galeria = [
  { src: trabalho1.url, alt: "Cartões de visita produzidos para studio de beleza" },
  { src: trabalho2.url, alt: "Adesivo personalizado aplicado em console de videogame" },
  { src: trabalho3.url, alt: "Wind banner personalizado para fotografia de surf" },
  { src: trabalho4.url, alt: "Totem de rua adesivado com marca do cliente" },
  { src: trabalho5.url, alt: "Fachada de vidro adesivada com comunicação visual completa" },
  { src: trabalho6.url, alt: "Canecas personalizadas de Dia das Mães em produção" },
  { src: trabalho7.url, alt: "Criação de identidade visual em andamento no estúdio" },
  { src: trabalho8.url, alt: "Bandeira personalizada com escudo para time" },
  { src: trabalho9.url, alt: "Banner em lona sendo instalado em fachada de restaurante" },
  { src: trabalho10.url, alt: "Sacola kraft personalizada e carimbo de madeira para delivery" },
  { src: trabalho11.url, alt: "Fachada em ACM impressa para loja de roupas infantis" },
  { src: trabalho12.url, alt: "Caneca de vidro jateado personalizada para o Dia dos Pais" },
];

const indoorBeneficios = [
  "Telas em alta definição em locais de grande circulação",
  "Sua marca exibida em ciclos ao longo de todo o dia",
  "Criação da arte inclusa — você só aprova",
  "Investimento mensal fixo, sem custo de mídia tradicional",
];

function Index() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setSlide((s) => (s + 1) % heroProdutos.length),
      3200,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#topo" className="flex items-center gap-3">
            <img src={logo.url} alt="MB2 Comunicação" className="h-9 w-auto" />
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a className="transition-colors hover:text-foreground" href="#empresa">A empresa</a>
            <a className="transition-colors hover:text-foreground" href="#produtos">O que fazemos</a>
            <a className="transition-colors hover:text-foreground" href="#indoor">Mídia indoor</a>
            <a className="transition-colors hover:text-foreground" href="#trabalhos">Trabalhos</a>
            <a className="transition-colors hover:text-foreground" href="#contato">Contato</a>
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-fire px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Pedir orçamento
          </a>
        </nav>
      </header>

      <main id="topo">
        <section className="relative overflow-hidden">
          <img
            src={heroImg}
            alt="Impressora de grande formato produzindo material gráfico"
            width={1600}
            height={1008}
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/85 to-background" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-36">
            <div>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-whatsapp/50 bg-whatsapp/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-whatsapp"
              >
                <span className="pulse-dot size-2 rounded-full bg-whatsapp" />
                Atendimento exclusivo pelo WhatsApp
              </a>
              <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl">
                Sua marca <span className="text-fire">impressa</span>, aplicada e vista na cidade inteira.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                A MB2 Comunicação une gráfica rápida, comunicação visual e mídia indoor em totens
                digitais para colocar o seu negócio na frente das pessoas certas.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-fire px-7 py-3.5 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
                >
                  <WhatsAppIcon className="size-5 text-primary-foreground" />
                  Falar no WhatsApp <ArrowRight className="size-4" />
                </a>
                <a
                  href="#produtos"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  Ver o que produzimos
                </a>
              </div>
            </div>

            <div className="relative aspect-square w-full">
              {heroProdutos.map((p, i) => (
                <img
                  key={p.alt}
                  src={p.src}
                  alt={p.alt}
                  width={1024}
                  height={1024}
                  loading={i === 0 ? undefined : "lazy"}
                  className={`absolute inset-0 h-full w-full object-contain drop-shadow-2xl transition-all duration-700 ${
                    i === slide ? "scale-100 opacity-100" : "scale-95 opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-x-0 -bottom-2 flex justify-center gap-2">
                {heroProdutos.map((p, i) => (
                  <button
                    key={p.alt}
                    type="button"
                    aria-label={`Ver ${p.alt}`}
                    onClick={() => setSlide(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === slide ? "w-6 bg-fire" : "w-1.5 bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </section>


        <section id="empresa" className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <SectionTitle
                kicker="Quem somos"
                title="Uma gráfica que pensa a comunicação por inteiro"
                description="Somos uma empresa de comunicação visual e gráfica rápida. Cuidamos de todo o processo — da criação da arte à impressão, do acabamento à entrega e instalação — com atendimento próximo e prazos que respeitam a urgência de quem vende todos os dias."
              />
              <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Trabalhamos com estrutura própria de impressão e acabamento, o que nos
                  permite manter a qualidade sob controle e responder rápido a pedidos de
                  última hora. Cada trabalho passa pelas mãos de quem realmente produz, sem
                  intermediários e sem retrabalho.
                </p>
                <p>
                  Atendemos de autônomos e pequenos comércios a empresas que precisam de
                  identidade visual completa: cartão de visita, fachada, uniforme, brinde,
                  papelaria e sinalização — tudo com a mesma linguagem. E agora também
                  levamos a sua marca para as telas, com mídia indoor em totens digitais
                  instalados nos pontos de maior movimento da região.
                </p>
              </div>
            </div>
            <img
              src={estudioImg}
              alt="Estúdio de criação da MB2 Comunicação com notebook exibindo a logo da marca"
              width={1200}
              height={1408}
              loading="lazy"
              className="w-full rounded-2xl border border-border object-cover shadow-glow"
            />
          </div>
        </section>

        <section id="produtos" className="border-y border-border/60 bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-24">
            <SectionTitle
              kicker="O que fazemos"
              title="Produtos e serviços"
              description="Tudo o que sua empresa precisa para ser vista — impresso, aplicado ou exibido."
            />
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {produtos.map((p) => (
                <article
                  key={p.title}
                  className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/40"
                >
                  <img
                    src={p.img}
                    alt={p.alt}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <ul className="mt-5 space-y-3">
                      {p.itens.map((i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                            <Check className="size-3.5" />
                          </span>
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>


        <section id="indoor" className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_0.85fr] md:items-center">
            <div>
              <SectionTitle
                kicker="Novo — Mídia indoor"
                title={<>Totens digitais em <span className="text-fire">pontos estratégicos</span> da cidade</>}
                description="Instalamos telas em locais de grande circulação e vendemos o espaço publicitário para empresas locais. Sua marca aparece em loop, todos os dias, para quem está por perto e pronto para comprar."
              />
              <ul className="mt-8 space-y-3">
                {indoorBeneficios.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-fire px-7 py-3.5 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
              >
                Quero anunciar nos totens <ArrowRight className="size-4" />
              </a>
            </div>
            <img
              src={totemImg}
              alt="Totem digital de publicidade instalado em corredor de shopping"
              width={1200}
              height={1408}
              loading="lazy"
              className="rounded-2xl border border-border object-cover shadow-glow"
            />
          </div>
        </section>

        <section id="trabalhos" className="border-y border-border/60 bg-surface py-24">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle kicker="Trabalhos" title="Um pouco do que sai da nossa produção" />
          </div>
          <div className="mt-14 overflow-hidden">
            <div className="marquee-track flex w-max gap-5 px-5">
              {[...galeria, ...galeria].map((g, i) => (
                <figure
                  key={`${g.alt}-${i}`}
                  className="h-56 shrink-0 overflow-hidden rounded-xl border border-border sm:h-64"
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    width={1000}
                    height={1000}
                    loading="lazy"
                    className="h-full w-auto object-cover"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="mx-auto max-w-6xl px-5 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Contato</span>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Vamos colocar sua marca na rua?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Envie sua arte ou conte sua ideia — respondemos com orçamento e prazo.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              <Phone className="size-4" /> Falar no WhatsApp
            </a>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Phone,
                label: "WhatsApp / Telefone",
                value: "(27) 99757-2298",
                href: WHATSAPP,
              },
              {
                icon: Instagram,
                label: "Instagram",
                value: "@mb2comunicacao",
                href: "https://www.instagram.com/mb2comunicacao",
              },
              {
                icon: Mail,
                label: "E-mail",
                value: "contato@mb2comunicacao.com.br",
                href: "mailto:contato@mb2comunicacao.com.br",
              },
              {
                icon: Clock,
                label: "Atendimento",
                value: "Seg a Sex, 8h às 18h",
                href: null,
              },
            ].map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <span className="flex size-11 items-center justify-center rounded-full bg-primary/12 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <span className="mt-5 block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {label}
                  </span>
                  <span className="mt-1.5 block break-words text-sm font-semibold">{value}</span>
                </>
              );
              const cls =
                "block rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/40";
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className={cls}
                >
                  {inner}
                </a>
              ) : (
                <div key={label} className={cls}>
                  {inner}
                </div>
              );
            })}
          </div>

          <div className="mt-5 grid gap-5 overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-center gap-4 p-8">
              <span className="flex size-11 items-center justify-center rounded-full bg-primary/12 text-primary">
                <MapPin className="size-5" />
              </span>
              <div>
                <span className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Onde estamos
                </span>
                <p className="mt-1.5 text-sm font-semibold leading-relaxed">
                  Rua Nelson Costa Mello, 227, Fundos
                  <br />
                  Ouro Branco — Alfredo Chaves/ES
                  <br />
                  CEP: 29240-000
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/Tw7SG3CVfWPssrFC9"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                Abrir no Google Maps <ArrowRight className="size-4" />
              </a>
            </div>
            <iframe
              title="Mapa da localização da MB2 Comunicação"
              src="https://www.google.com/maps?q=Rua%20Nelson%20Costa%20Mello%2C%20227%2C%20Ouro%20Branco%2C%20Alfredo%20Chaves%20-%20ES%2C%2029240-000&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full border-0 md:h-full"
            />
          </div>
        </section>

      </main>

      <footer className="border-t border-border/60 bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 sm:flex-row sm:justify-between">
          <img src={logo.url} alt="MB2 Comunicação" className="h-8 w-auto" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MB2 Comunicação. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
