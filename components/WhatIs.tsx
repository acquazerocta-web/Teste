export default function WhatIs() {
  return (
    <section className="bg-beige section-padding">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sage font-medium text-sm uppercase tracking-widest mb-4">
              O que é
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-6 leading-tight">
              Hipnoterapia não é{" "}
              <span className="italic text-lavender-dark">mágica</span> — é
              ciência.
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              A hipnoterapia é uma abordagem terapêutica que utiliza o estado de
              transe hipnótico — um estado natural de atenção focada e
              receptividade aumentada — para acessar e ressignificar padrões
              emocionais e crenças profundas.
            </p>
            <p className="text-muted leading-relaxed">
              Diferente do que o cinema mostra, você permanece consciente,
              seguro e no controle durante toda a sessão. O hipnoterapeuta é
              apenas um guia — você é quem faz o trabalho.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: "🧠",
                title: "Baseada em evidências",
                desc: "Reconhecida pela APA e amplamente estudada",
              },
              {
                icon: "🛡️",
                title: "Você está seguro",
                desc: "Ninguém faz nada contra a sua vontade em hipnose",
              },
              {
                icon: "💤",
                title: "Estado natural",
                desc: "Similar ao estado entre o sono e a vigília",
              },
              {
                icon: "🌱",
                title: "Acessa a raiz",
                desc: "Trabalha as causas, não apenas os sintomas",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-cream rounded-2xl p-6 border border-lavender/10"
              >
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <h3 className="font-serif text-lg font-medium text-charcoal mb-1">
                  {item.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
