export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/70 py-10 px-6 md:px-12 lg:px-24">
      <div className="container-max flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-serif text-cream text-lg font-medium mb-1">
            Alívio Emocional
          </p>
          <p className="text-sm">Hipnoterapia Clínica</p>
        </div>

        <nav className="flex gap-6 text-sm">
          <a href="#como-funciona" className="hover:text-cream transition-colors">
            Como funciona
          </a>
          <a href="#sobre" className="hover:text-cream transition-colors">
            Sobre
          </a>
          <a href="#faq" className="hover:text-cream transition-colors">
            FAQ
          </a>
          <a href="#contato" className="hover:text-cream transition-colors">
            Contato
          </a>
        </nav>

        <p className="text-xs text-cream/40">
          © {new Date().getFullYear()} · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
