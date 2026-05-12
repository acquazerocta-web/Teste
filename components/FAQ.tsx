"use client";

import { useState } from "react";

const faqs = [
  {
    q: "A hipnoterapia é segura?",
    a: "Sim, completamente. A hipnoterapia clínica é uma abordagem reconhecida e segura. Durante todo o processo, você permanece consciente, lúcido e no controle. Ninguém pode forçá-lo a fazer ou dizer algo contra a sua vontade em estado de hipnose.",
  },
  {
    q: "Toda pessoa pode ser hipnotizada?",
    a: "A grande maioria das pessoas pode entrar em estado de transe hipnótico. A receptividade varia de pessoa para pessoa, mas com um ambiente seguro e a técnica adequada, quase todos conseguem acessar esse estado de atenção focada.",
  },
  {
    q: "Quantas sessões eu precisarei?",
    a: "Depende de cada caso. Algumas questões se resolvem em 1 a 3 sessões; outras demandam um acompanhamento mais prolongado. Na conversa inicial gratuita, podemos ter uma noção mais clara do que você precisa.",
  },
  {
    q: "A sessão online funciona tão bem quanto a presencial?",
    a: "Sim. A hipnoterapia online tem se mostrado tão eficaz quanto a presencial para a maioria dos casos. O mais importante é que você esteja em um ambiente tranquilo, confortável e sem interrupções.",
  },
  {
    q: "Vou me lembrar do que aconteceu durante a sessão?",
    a: "Na maioria das sessões, sim — você se lembra de tudo. Em níveis mais profundos de transe, pode haver algumas partes que ficam menos nítidas, semelhante a quando acordamos de um sonho. Isso é completamente normal e não interfere nos resultados.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-cream section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="text-sage font-medium text-sm uppercase tracking-widest mb-4">
            Perguntas frequentes
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal">
            Suas dúvidas, respondidas
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-lavender/20 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-beige/50 transition-colors duration-150"
              >
                <span className="font-serif text-lg font-medium text-charcoal pr-4">
                  {faq.q}
                </span>
                <span
                  className={`text-lavender-dark text-xl flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <p className="text-muted leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
