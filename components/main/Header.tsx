import { HospitalIcon, MapPin, Phone, ArrowRight, Menu } from "lucide-react";
import Link from "next/link";

const navLinks = [
    { label: "Послуги", href: "#services" },
    { label: "Лікарі", href: "#doctors" },
    { label: "Про клініку", href: "#about" },
    { label: "Новини", href: "#news" },
    { label: "Контакти", href: "#contacts" },
];

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm">
            <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 py-3 gap-6">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 shrink-0">
                    <div className="rounded-xl bg-teal-600 p-2">
                        <HospitalIcon size={24} className="text-white" />
                    </div>
                    <div className="flex flex-col leading-tight">
                        <span className="text-lg font-black text-slate-800 tracking-tight">ProMED</span>
                        <span className="text-xs text-slate-500 font-medium">Приватна клініка</span>
                    </div>
                </Link>

                {/* Nav */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navLinks.map((l) => (
                        <a
                            key={l.label}
                            href={l.href}
                            className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-teal-700 hover:bg-teal-50 transition-all"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                {/* Right side */}
                <div className="flex items-center gap-3 shrink-0">
                    {/* Address — hidden on small screens */}
                    <div className="hidden xl:flex items-center gap-2 text-sm text-slate-500">
                        <MapPin size={14} className="text-teal-600 shrink-0" />
                        <span>вул. Старої Гвардії, 77</span>
                    </div>

                    {/* Phone — hidden on small screens */}
                    <a
                        href="tel:0800500123"
                        className="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-teal-600 transition-colors"
                    >
                        <Phone size={14} className="text-teal-600" />
                        0 800 500 123
                    </a>

                    {/* CTA */}
                    <a
                        href="#appointment"
                        className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-teal-500 transition-all hover:-translate-y-0.5 shadow-sm shadow-teal-200"
                    >
                        Записатись
                        <ArrowRight size={15} />
                    </a>

                    {/* Mobile menu button */}
                    <button
                        aria-label="Меню"
                        className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors"
                    >
                        <Menu size={18} />
                    </button>
                </div>
            </div>
        </header>
    );
};
