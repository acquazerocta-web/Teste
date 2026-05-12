export default function About() {
  return (
    <section id="sobre" className="bg-cream section-padding">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Placeholder visual */}
          <div className="relative">
            <div className="w-full aspect-[4/5] bg-beige rounded-3xl flex items-center justify-center border border-lavender/10">
              <div className="text-center p-8">
                <div className="w-24 h-24 rounded-full bg-lavender/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">🌿</span>
                </div>
                <p className="text-muted text-sm">Foto do hipnoterapeuta</p>
              </div>
            </div>
            {/* Decorative badge */}
            <div className="absolute -bottom-4 -right-4 bg-lavender rounded-2xl p-5 text-white text-center shadow-lg">
              <p className="font-serif text-3xl font-light">+5</p>
              <p className="text-xs font-medium uppercase tracking-wide opacity-90">
                anos de
                <br />
                experiência
              </p>
            </div>
          </div>

          <div>
            <p className="text-sage font-medium text-sm uppercase tracking-widest mb-4">
              Sobre mim
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-6 leading-tight">
              Cuidado que começa
              <br />
              <span className="italic text-lavender-dark">com escuta.</span>
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Sou hipnoterapeuta clínico certificado, apaixonado por acompanhar
              pessoas no processo de reconexão com sua própria capacidade de
              cura. Acredito que cada pessoa carrega em si os recursos
              necessários para se transformar — meu papel é criar o espaço
              seguro para que isso aconteça.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Utilizo técnicas modernas de hipnoterapia integrativa, combinando
              abordagens da hipnose ericksoniana, terapia de regressão e
              reprogramação de crenças — sempre com ética, respeito e
              profundidade.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Hipnose Ericksoniana",
                "Hipnoterapia Clínica",
                "Regressão Terapêutica",
                "Reprogramação Mental",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-beige text-charcoal text-sm px-4 py-2 rounded-full border border-lavender/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
