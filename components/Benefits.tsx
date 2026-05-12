const benefits = [
  {
    icon: "🌊",
    title: "Redução da ansiedade",
    desc: "Acalmar o sistema nervoso e quebrar ciclos de pensamento ansioso que se repetem.",
  },
  {
    icon: "🪨",
    title: "Libertação de traumas",
    desc: "Ressignificar memórias dolorosas sem precisar revivê-las com intensidade.",
  },
  {
    icon: "🔓",
    title: "Desbloqueio emocional",
    desc: "Dissolver crenças limitantes que impedem você de agir, amar ou se sentir livre.",
  },
  {
    icon: "😴",
    title: "Melhora do sono",
    desc: "Silenciar a mente acelerada e restaurar um sono reparador e profundo.",
  },
  {
    icon: "💪",
    title: "Autoestima e confiança",
    desc: "Reconectar-se ao seu valor e desenvolver uma relação mais gentil consigo mesmo.",
  },
  {
    icon: "❤️",
    title: "Relações mais saudáveis",
    desc: "Identificar e transformar padrões relacionais que causam sofrimento repetido.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-beige section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="text-sage font-medium text-sm uppercase tracking-widest mb-4">
            Para quem é
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-4">
            O que a hipnoterapia
            <br />
            pode transformar
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Cada sessão é única, mas estes são os temas mais comuns trazidos
            pelos meus clientes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-cream rounded-2xl p-8 border border-lavender/10 hover:border-lavender/30 hover:shadow-sm transition-all duration-200"
            >
              <span className="text-3xl mb-4 block">{b.icon}</span>
              <h3 className="font-serif text-xl font-medium text-charcoal mb-2">
                {b.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
