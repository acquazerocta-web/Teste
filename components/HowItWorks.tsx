const steps = [
  {
    number: "01",
    title: "Primeiro contato",
    desc: "Você me envia uma mensagem e agendamos uma conversa inicial gratuita de 15 minutos para entender o que você está vivendo e esclarecer dúvidas.",
  },
  {
    number: "02",
    title: "A sessão",
    desc: "Em um ambiente seguro e acolhedor (presencial ou online), conduzimos juntos a sessão de hipnoterapia. Cada encontro tem duração de 60 a 90 minutos.",
  },
  {
    number: "03",
    title: "Transformação",
    desc: "Após a sessão, muitos clientes já relatam leveza e clareza. O processo continua internamente nos dias seguintes, com resultados que se aprofundam com o tempo.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-cream section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="text-sage font-medium text-sm uppercase tracking-widest mb-4">
            O processo
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal">
            Como funciona
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden md:block absolute top-8 left-full w-full h-px bg-lavender/30 -translate-x-4"
                />
              )}
              <div className="font-serif text-6xl font-light text-lavender/40 mb-4">
                {step.number}
              </div>
              <h3 className="font-serif text-2xl font-medium text-charcoal mb-3">
                {step.title}
              </h3>
              <p className="text-muted leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
