const details = [
  { icon: "⏱️", label: "Duração", value: "60 – 90 minutos" },
  { icon: "🌐", label: "Formato", value: "Online ou Presencial" },
  { icon: "📅", label: "Frequência", value: "Semanal ou quinzenal" },
  { icon: "🔒", label: "Privacidade", value: "Total sigilo e confidencialidade" },
];

export default function SessionInfo() {
  return (
    <section id="sessao" className="bg-beige section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="text-sage font-medium text-sm uppercase tracking-widest mb-4">
            A sessão
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-4">
            O que esperar
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Cada sessão é um espaço de acolhimento, segurança e transformação
            genuína.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {details.map((d) => (
            <div
              key={d.label}
              className="bg-cream rounded-2xl p-6 text-center border border-lavender/10"
            >
              <span className="text-3xl mb-3 block">{d.icon}</span>
              <p className="text-muted text-xs uppercase tracking-wider mb-1">{d.label}</p>
              <p className="font-serif text-lg font-medium text-charcoal">{d.value}</p>
            </div>
          ))}
        </div>

        {/* Investment */}
        <div className="bg-lavender/10 border border-lavender/20 rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto">
          <p className="text-sage font-medium text-sm uppercase tracking-widest mb-3">
            Investimento
          </p>
          <p className="font-serif text-5xl font-light text-charcoal mb-2">
            Sob consulta
          </p>
          <p className="text-muted mb-6">
            Entre em contato para saber os valores e verificar disponibilidade
            de agenda.
          </p>
          <a
            href="#contato"
            className="inline-block bg-lavender text-white font-medium px-8 py-4 rounded-full hover:bg-lavender-dark transition-colors duration-200"
          >
            Solicitar informações
          </a>
        </div>
      </div>
    </section>
  );
}
