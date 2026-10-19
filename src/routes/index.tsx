import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kannacob | Democratizando a indústria da Cannabis" },
      {
        name: "description",
        content:
          "Comunidade que democratiza o acesso à indústria da Cannabis com educação, saúde, oportunidades e sustentabilidade.",
      },
      { property: "og:title", content: "Kannacob | Grow your freedom!" },
      {
        property: "og:description",
        content: "Uma comunidade de mente e portas abertas no ecossistema da Cannabis.",
      },
    ],
  }),
  component: Index,
});

const img = (f: string) => `/images/${f}`;
const BENEFITS = "https://kannacob.com.br/kannacob-beneficios";
const LOGIN = "https://login.circle.so/sign_up?request_host=kannacobcommunity.circle.so";

function Btn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-block rounded-full bg-primary px-7 py-3 font-bold text-primary-foreground transition hover:opacity-90"
    >
      {children}
    </a>
  );
}

function AgeGate() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("kc-age")) setOpen(true);
  }, []);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-deep/90 p-4">
      <div className="max-w-md rounded-xl bg-card p-8 text-center">
        <img src={img("cropped-LogotipoKannacobHorizontal_01_01.png.webp")} alt="Kannacob" className="mx-auto h-12" />
        <h2 className="mt-6 text-2xl font-extrabold">Oi, você tem mais de 18 anos?</h2>
        <p className="mt-2 text-muted-foreground">
          Precisamos ter certeza de que você tem a idade adequada antes de entrar neste site
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={() => {
              localStorage.setItem("kc-age", "1");
              setOpen(false);
            }}
            className="rounded-full bg-primary py-3 font-bold text-primary-foreground"
          >
            CLARO, ME DEIXE ENTRAR
          </button>
          <a href="https://www.google.com" className="py-2 text-sm text-muted-foreground">
            NÃO, ATÉ MAIS
          </a>
        </div>
      </div>
    </div>
  );
}

const slides = [
  {
    t: "Soluções",
    d: "Promovemos a expansão e o desenvolvimento do ecossistema da Cannabis por meio do fortalecimento das comunidades e do que elas têm de mais valioso: suas conexões.",
    i: "kannacob-64.jpg",
  },
  {
    t: "Preço Acessível",
    d: "Conectar pessoas, fortalecer elos de uma mesma corrente e aumentar oportunidades de negócios por meio de soluções disruptivas e sustentáveis são práticas que movem nosso negócio.",
    i: "kannacob-63-e1665684385886.jpg.webp",
  },
  {
    t: "Medicamentos",
    d: "Os medicamentos à base de CBD e THC possuem enorme potencial de tratamento para uma série de doenças e patologias. Se estamos falando de melhorias na saúde, os preços abusivos não podem e nem devem ser um impeditivo para que as pessoas aproveitem de tais benefícios.",
    i: "kannacob-26.jpg.webp",
  },
];

const pillars = [
  {
    t: "Educação",
    i: "kannacob-28-1024x683.jpg.webp",
    p: [
      "O Instituto Kannacob existe para educar, capacitar e desestigmatizar as pessoas em relação aos benefícios trazidos pela Cannabis. Nossos cursos vão do introdutório ao avançado, contando com aulas presenciais e imersivas em nossa fazenda.",
      "Além disso, nossa missão é capacitar os produtores interessados em cultivar Cannabis, independente do tamanho de sua propriedade ou o objetivo de sua plantação. Todos os parceiros que fornecem ou colaboram com nosso cultivo passam por um processo de treinamento estruturado pelo Instituto Kannacob. A ideia é que eles possam cultivar em seus próprios campos após o aprendizado.",
    ],
  },
  {
    t: "Saúde e Bem-estar",
    i: "kannacob-20-1-1024x683.jpg.webp",
    p: [
      "Remédios e cosméticos à base de Cannabis têm ganhado cada vez mais espaço nas prateleiras. O potencial dos medicamentos que possuem CBD e THC em sua composição é imenso, servindo de tratamento para mais de 40 doenças.",
      "Enquanto isso, os estudos sobre o uso medicinal da Cannabis não param de crescer em todo o mundo. Além do uso clínico, fabricantes de cosméticos encontram na Cannabis uma alternativa extremamente flexível para a elaboração de diversos produtos de beleza. Mais sustentáveis e normalmente orgânicos, os cosméticos são ricos em vitaminas e proteínas.",
    ],
  },
  {
    t: "Oportunidades",
    i: "kannacob-66-e1665687251125.jpg",
    p: [
      "Fazer a comunidade crescer também significa trabalhar para expandi-la. Assim como conectamos os produtores de Cannabis ao sistema bancário, nosso objetivo é fazer com que novos negócios surjam e mais oportunidades de geração de renda possam existir. Os membros da nossa Plataforma Online tem acesso a uma relação de vagas e oportunidades de negócios relacionadas ao segmento. Se você quer conhecer negócios ou promover o seu empreendimento, esse é o lugar perfeito para isso.",
    ],
  },
];

const solutions = [
  ["Social Hub", "Seu lugar para ampliar o conhecimento sobre o campo e expandir seu networking e investir na produção de Cannabis ou diretamente em nosso negócio comprando seu Token."],
  ["Educação", "O Instituto Kannacob é focado na educação e capacitação da comunidade e dos produtores, formando mão de obra especializada para atender os mais diversos setores na indústria canábica."],
  ["Saúde e bem estar", "Nossas parcerias com médicos e empresas que oferecem produtos e serviços a um preço justo é exclusiva para membros da nossa plataforma."],
  ["Consultoria e Investimentos", "Esteja antenado aos movimentos do mercado, opções de investimentos e conheça nossos parceiros em primeira mão. Amplie sua possibilidade de investimento e de parcerias com a gente."],
  ["Sustentabilidade", "Faça parte do projeto “Adote uma árvore” e saiba mais sobre o Programa de Carbono Zero."],
] as const;

const green = [
  ["Adote uma árvore", "Toda área da Fazenda Santa Rosa que não for utilizada para produção de Cannabis ou moradia, será reflorestada em nosso Programa de Reflorestamento. Você pode fazer parte dele adotando uma árvore, acompanhando seu crescimento e tornando-se uma pessoa carbono zero.", "https://kannacobcommunity.circle.so/c/sponsor-a-tree/"],
  ["Implementação ESG", "As parcerias entre empresas e universidades uruguaias e brasileiras, vão mostrar o caminho de implementação de práticas ESG e ajudar a entender como o cultivo, a extração e produção da Cannabis podem ser totalmente sustentáveis.", "https://kannacob.com.br/kannacob-facaparte"],
  ["Projeto Carbono Zero", "Plantações de Cannabis possuem um imenso potencial de retenção de gases no efeito estufa, sendo ainda mais potentes que florestas tropicais. 1 hectare pode reter até 20 toneladas de carbono por ano. Em média, cada hectare de soja emite até 9 toneladas de CO2 por ano.", "https://kannacobcommunity.circle.so/c/co2-foot-print/"],
] as const;

const partners = [
  ["🇺🇾", "GERMINARE", "Cultivo de THC e CBD Medicinal e Industrial. Flores e Concentrados", "logos-partners-01.png"],
  ["🇺🇾", "KANNAMED", "Medicamentos e Cosméticos", "logo-kannamed2-1.png.webp"],
  ["🇨🇦", "TEN-TEN", "Cultivo de THC Medicinal. Flores e Comestíveis", "logos-partners-04.png.webp"],
] as const;

function Index() {
  const [s, setS] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setS((v) => (v + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      <AgeGate />
      <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <img src={img("cropped-LogotipoKannacobHorizontal_01_01.png.webp")} alt="Kannacob" className="h-10" />
          <Btn href={LOGIN}>Login</Btn>
        </div>
      </header>

      <section className="bg-deep text-deep-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Existimos para <span className="text-accent">democratizar</span> o acesso à indústria da Cannabis por meio da verticalização de todo o mercado!
            </h1>
            <p className="mt-6 text-lg opacity-80">
              Conectando as duas pontas da cadeia de suprimentos, favorecendo o crescimento baseado em economia compartilhada, transparência e tecnologia.
            </p>
          </div>
          <img src={img("logo-kannacob-3D1.png.webp")} alt="" className="mx-auto w-full max-w-sm" />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold">Uma comunidade de mente e portas abertas</h2>
          <p className="mt-4 text-muted-foreground">
            Se você está interessado em ampliar suas conexões no ecossistema da Cannabis, a <b className="text-foreground">Kannacob é o seu lugar.</b> Nossa assinatura permite acesso a uma série de <b className="text-foreground">conteúdos, produtos, serviços e oportunidades de negócios</b> para todos os membros. <b className="text-foreground">Tudo isso por um preço justo</b> e que é diretamente repassado para nossos parceiros, produtores rurais e entusiastas do mundo da Cannabis.
          </p>
          <ul className="my-6 flex flex-wrap gap-2">
            {["Comunidade", "Educação", "Saúde e Bem Estar", "Oportunidades", "Sustentabilidade"].map((x) => (
              <li key={x} className="rounded-full bg-secondary px-4 py-1 text-sm font-medium text-secondary-foreground">{x}</li>
            ))}
          </ul>
          <Btn href={BENEFITS}>Vamos crescer juntos!</Btn>
        </div>
        <img src={img("people-bumping-their-fists-together-2021-08-27-00-03-21-utc-1.png.webp")} alt="" className="rounded-xl" />
      </section>

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <img src={img("Book-Mockup-kannacob.png.webp")} alt="E-book Kannacob" className="mx-auto max-w-sm" />
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Baixe nosso e-book gratuito</h2>
            <h3 className="mt-2 text-3xl font-extrabold">Cannabis sativa: História, aplicação e cultivo</h3>
            <p className="mt-2 text-accent-foreground">★★★★½ <span className="text-sm text-muted-foreground">Classificado como 4.5 de 5</span></p>
            <p className="mt-4 text-muted-foreground">
              Advinda do continente asiático, mais especificamente da faixa territorial que engloba partes da Índia e da China, o gene da Cannabis pertence a família da Cannabaceae, que também inclui um grupo de herbáceas e plantas de colheita anual que são cultivadas há mais de 10 mil anos para a extração de grãos, fibras e fitoquímicos.
            </p>
            <div className="mt-6 grid gap-4 text-sm sm:grid-cols-3">
              {[
                ["Capítulo 1 - Aspectos Gerais", ["Contexto histórico", "Importância econômica", "Uso medicinal"]],
                ["Capítulo 2 - Caracterização Botânica", ["Morfologia e reprodução", "Fisiologia e capacidade fotossintética", "Bioquímica e quimiotipos", "Relação luz x THC"]],
                ["Capítulo 3 - Formas de Cultivo", ["Sistema aberto", "Sistema controlado", "Técnicas alternativas", "Propagação vegetativa", "Colheita, processamento e extração"]],
              ].map(([t, items]) => (
                <div key={t as string}>
                  <h6 className="font-bold">{t as string}</h6>
                  <ul className="mt-1 list-disc pl-4 text-muted-foreground">
                    {(items as string[]).map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8"><Btn href="https://kannacobcommunity.circle.so/c/books/ebook">Baixe grátis</Btn></div>
          </div>
        </div>
      </section>

      <section className="bg-deep py-20 text-deep-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h3 className="text-3xl font-extrabold">Viemos para <span className="text-accent">democratizar</span> o Ouro Verde, não para tê-lo como privilégio.</h3>
          <div className="mt-10 aspect-video overflow-hidden rounded-xl">
            <iframe src="https://player.vimeo.com/video/736978572" title="Kannacob | Grow your freedom!" className="h-full w-full" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h3 className="text-center text-3xl font-extrabold">Produtos, medicamentos e soluções a um <span className="text-primary">Preço Acessível!</span></h3>
        <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="mb-6 flex gap-2">
              {slides.map((x, i) => (
                <button key={x.t} onClick={() => setS(i)} className={`rounded-full px-4 py-2 text-sm font-bold ${i === s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{x.t}</button>
              ))}
            </div>
            <h4 className="text-2xl font-extrabold">{slides[s]!.t}</h4>
            <p className="mt-3 text-muted-foreground">{slides[s]!.d}</p>
          </div>
          <img src={img(slides[s]!.i)} alt={slides[s]!.t} className="aspect-[4/3] w-full rounded-xl object-cover" />
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-center text-3xl font-extrabold">Como iremos democratizar a indústria da <span className="text-primary">cannabis</span></h3>
          <div className="mt-12 space-y-16">
            {pillars.map((p, i) => (
              <div key={p.t} className="grid items-center gap-10 md:grid-cols-2">
                <img src={img(p.i)} alt="" className={`rounded-xl ${i % 2 ? "md:order-2" : ""}`} />
                <div>
                  <h2 className="text-3xl font-extrabold">{p.t}</h2>
                  {p.p.map((t) => <p key={t} className="mt-4 text-muted-foreground">{t}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <h3 className="text-3xl font-extrabold">Faça parte da nossa comunidade de <span className="text-primary">empreendimento social</span></h3>
          <p className="mt-4 text-muted-foreground">Já somos 5 empresas, diversos produtores e parceiros dos mais variados campos, focados em crescer coletivamente no ecossistema da Cannabis.</p>
          <p className="mt-4 text-muted-foreground">Nossa atuação busca gerar impacto na sociedade em que vivemos, enquanto promove a inclusão dos mais diferentes projetos, pessoas e organizações.</p>
          <p className="mt-4 text-muted-foreground">Se você ou sua organização tem interesse em fazer parte ou compartilhar conhecimento com a Kannacob, não deixe de nos procurar. Apoiamos diversos projetos e estabelecemos parcerias com os mais diferentes agentes.</p>
        </div>
        <img src={img("kannacob-17-1024x683.jpg.webp")} alt="" className="rounded-xl" />
      </section>

      <section className="bg-deep text-deep-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-extrabold">Cultive suas ideias <span className="text-accent">com a gente!</span></h3>
            <p className="mt-4 opacity-80">Nosso propósito é democratizar o acesso e ampliar as conexões no mundo da Cannabis. <b>Seja membro da nossa Plataforma Online de Assinatura</b> e ganhe uma série de benefícios. Além de desconto em medicamentos e cursos exclusivos, você também ajuda a capacitar produtores agrícolas e ainda auxilia no financiamento de remédios para tratamentos intensivos, sendo possível compensar a sua pegada de carbono, <b>tornando-se uma pessoa Carbono Zero.</b></p>
            <p className="mt-4 opacity-80">Metade do nosso lucro vai para projetos sociais, investimentos na indústria da Cannabis e subsídios de produtos de empresas parceiras.</p>
            <div className="mt-6"><Btn href={BENEFITS}>Saiba mais</Btn></div>
          </div>
          <img src={img("VIDEO-COMMUNITY-LANDING-1.gif")} alt="" className="rounded-xl" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h3 className="text-center text-3xl font-extrabold">Soluções para a <span className="text-primary">Comunidade</span></h3>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {solutions.map(([t, d]) => (
            <div key={t} className="rounded-xl border bg-card p-6">
              <h4 className="font-extrabold">{t}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
          {green.map(([t, d, h]) => (
            <div key={t} className="flex flex-col rounded-xl bg-card p-8">
              <h2 className="text-2xl font-extrabold">{t}</h2>
              <p className="mt-3 flex-1 text-muted-foreground">{d}</p>
              <div className="mt-6"><Btn href={h}>Saiba mais</Btn></div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h3 className="text-center text-3xl font-extrabold">Nossos <span className="text-primary">Parceiros</span></h3>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {partners.map(([f, n, d, i]) => (
            <div key={n} className="rounded-xl border bg-card p-6 text-center">
              <img src={img(i)} alt={n} className="mx-auto h-20 object-contain" />
              <p className="mt-4 font-extrabold">{f} {n}</p>
              <p className="text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-extrabold">Inscreva-se para atualizações.</h2>
          <p className="mt-3 opacity-90">Quer saber mais sobre as principais notícias da Cannabis ao redor do mundo? Inscreva-se na nossa newsletter e receba os principais insights e notícias sobre o ecossistema semanalmente.</p>
          <form onSubmit={(e) => { e.preventDefault(); alert("Obrigado por se inscrever!"); }} className="mx-auto mt-6 flex max-w-md gap-2">
            <input type="email" required placeholder="Seu e-mail" className="flex-1 rounded-full bg-card px-5 py-3 text-foreground outline-none" />
            <button className="rounded-full bg-deep px-6 py-3 font-bold text-deep-foreground">Se inscrever</button>
          </form>
        </div>
      </section>

      <footer className="bg-deep py-12 text-deep-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
          <img src={img("logo-03.png.webp")} alt="Kannacob" className="h-14" />
          <p className="opacity-80">Uma comunidade de mente e portas abertas!</p>
          <p className="text-sm opacity-60">Entre em contato com a gente!</p>
        </div>
      </footer>
    </div>
  );
}
