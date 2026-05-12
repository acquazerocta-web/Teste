"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-lavender/20">
      <div className="container-max flex items-center justify-between py-4 px-6 md:px-12 lg:px-24">
        <span className="font-serif text-xl font-medium text-charcoal tracking-wide">
          Alívio Emocional
        </span>
        <a
          href="#contato"
          className="bg-lavender text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-lavender-dark transition-colors duration-200"
        >
          Agendar sessão
        </a>
      </div>
    </nav>
  );
}
