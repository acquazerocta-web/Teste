export default function CTAFinal() {
  return (
    <section
      id="contato"
      className="bg-lavender/10 border-t border-lavender/20 section-padding"
    >
      <div className="container-max text-center">
        <p className="text-sage font-medium text-sm uppercase tracking-widest mb-6">
          Dê o primeiro passo
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mb-6 leading-tight">
          Você merece se
          <br />
          <span className="italic text-lavender-dark">sentir mais leve.</span>
        </h2>
        <p className="text-muted text-lg max-w-xl mx-auto mb-10">
          Comece com uma conversa gratuita de 15 minutos. Sem compromisso — só
          para entender o que você está vivendo e ver se faz sentido seguirmos
          juntos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-sage text-white font-medium px-8 py-4 rounded-full hover:bg-sage-dark transition-colors duration-200"
          >
            <span>💬</span>
            Falar pelo WhatsApp
          </a>
          <a
            href="mailto:contato@exemplo.com"
            className="inline-flex items-center justify-center gap-2 border border-charcoal/20 text-charcoal font-medium px-8 py-4 rounded-full hover:border-lavender hover:text-lavender-dark transition-colors duration-200"
          >
            <span>✉️</span>
            Enviar e-mail
          </a>
        </div>

        <p className="text-muted/60 text-sm">
          Retorno em até 24 horas · Atendimento online e presencial
        </p>
      </div>
    </section>
  );
}
