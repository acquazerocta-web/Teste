export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-cream pt-20">
      <div className="container-max section-padding w-full">
        <div className="max-w-3xl">
          <p className="text-sage font-medium text-sm uppercase tracking-widest mb-6">
            Hipnoterapia Clínica
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-charcoal leading-tight mb-8">
            Você não precisa
            <br />
            <span className="text-lavender-dark italic">carregar isso</span>
            <br />
            para sempre.
          </h1>
          <p className="text-muted text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            A hipnoterapia acessa o que a mente consciente não consegue alcançar
            sozinha — e abre caminho para um alívio genuíno, profundo e
            duradouro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="inline-block bg-lavender text-white font-medium px-8 py-4 rounded-full text-center hover:bg-lavender-dark transition-colors duration-200"
            >
              Agendar minha sessão
            </a>
            <a
              href="#como-funciona"
              className="inline-block border border-charcoal/20 text-charcoal font-medium px-8 py-4 rounded-full text-center hover:border-lavender hover:text-lavender-dark transition-colors duration-200"
            >
              Como funciona
            </a>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-lavender/10 -z-0 blur-3xl"
      />
    </section>
  );
}
