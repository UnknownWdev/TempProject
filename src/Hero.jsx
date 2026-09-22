import { useEffect, useState } from 'react';
import { ArrowRight, Menu, Moon, Sparkles, Sun, X } from 'lucide-react';

export default function Hero() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') !== 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((currentMode) => !currentMode);
  };

  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center px-6 text-center transition-colors duration-300 ${
        darkMode ? 'bg-[#211d1a] text-[#f5eee3]' : 'bg-[#e9dfcf] text-[#332c25]'
      }`}
    >
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
        className={`fixed left-6 top-6 z-40 border p-3 transition-colors ${
          darkMode
            ? 'border-[#d5b991]/40 bg-[#332c25] text-[#f5eee3]'
            : 'border-[#806142] bg-[#f5eee3] text-[#5d4936]'
        }`}
      >
        {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>

      <div className={`mb-8 inline-flex items-center gap-2 border px-4 py-2 text-sm font-medium uppercase tracking-[0.18em] ${
        darkMode
          ? 'border-[#d5b991]/40 bg-[#332c25] text-[#d5b991]'
          : 'border-[#a7835d]/40 bg-[#f5eee3] text-[#806142]'
      }`}>
        <Sparkles className="h-4 w-4" />
        Considered digital craft
      </div>

      <h1 className="max-w-3xl font-serif text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl">
        Distinguished websites for enduring businesses.
      </h1>

      <p className={`mt-6 max-w-xl text-lg leading-8 md:text-xl ${darkMode ? 'text-[#c7b9a8]' : 'text-[#6e5e4d]'}`}>
        Thoughtful digital experiences, composed with clarity, restraint, and a lasting sense of place.
      </p>

      <div className={`mt-10 border p-6 ${
        darkMode ? 'border-[#d5b991]/40 bg-[#332c25]' : 'border-[#a7835d]/40 bg-[#f5eee3]'
      }`}>
        <button
          onClick={() => setIsAnnual(!isAnnual)}
          className="mb-4 border border-[#806142] px-4 py-2 text-sm font-medium"
        >
          {isAnnual ? 'Annual billing' : 'Monthly billing'}
        </button>

        <div>
          <span className="text-4xl font-bold">
            {isAnnual ? '$24' : '$29'}
          </span>
          <span className={darkMode ? 'text-[#a99a89]' : 'text-slate-400'}>/month</span>
        </div>
      </div>

      <button
        className="mt-10 flex items-center gap-3 bg-[#5d4936] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-[#f8f1e7]"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Request a consultation
        <ArrowRight className="h-4 w-4" />
      </button>

      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        className={`fixed right-6 top-6 z-40 border p-3 ${
          darkMode
            ? 'border-[#d5b991]/40 bg-[#332c25] text-[#f5eee3]'
            : 'border-[#806142] bg-[#f5eee3] text-[#5d4936]'
        }`}
      >
        <Menu className="h-5 w-5" />
      </button>

      {isOpen && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/30"
        />
      )}

      <aside
        aria-label="Main navigation"
        className={`fixed inset-y-0 right-0 z-50 w-64 transform bg-slate-950/95 p-6 text-left text-white shadow-xl backdrop-blur-md transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
          className="mb-10 text-white"
        >
          <X className="h-6 w-6" />
        </button>

        <nav className="flex flex-col gap-6">
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#work" onClick={() => setIsOpen(false)}>Work</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </nav>
      </aside>
    </div>
  );
}
