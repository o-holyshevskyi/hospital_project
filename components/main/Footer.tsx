import { Phone, MapPin, Mail, Clock, Facebook, Youtube, Send, HospitalIcon } from "lucide-react";

const navLinks = [
    { label: "Про клініку", href: "#about" },
    { label: "Послуги", href: "#services" },
    { label: "Лікарі", href: "#doctors" },
    { label: "Новини", href: "#news" },
    { label: "Контакти", href: "#contacts" },
    { label: "Платні послуги", href: "#pricing" },
];

const services = [
    { label: "Діагностика", href: "#diagnostics" },
    { label: "Стаціонар", href: "#inpatient" },
    { label: "Консультації", href: "#consultations" },
    { label: "Реабілітація", href: "#rehabilitation" },
    { label: "Лабораторія", href: "#lab" },
    { label: "Хірургія", href: "#surgery" },
];

export const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300">
            {/* Main footer body */}
            <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Col 1 — Brand */}
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-teal-600 p-2">
                            <HospitalIcon size={24} className="text-white" />
                        </div>
                        <div>
                            <p className="font-black text-white text-lg leading-tight">ProMED</p>
                            <p className="text-xs text-slate-400">Приватна клініка</p>
                        </div>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-400">
                        Сучасна приватна клініка з 30-річним досвідом. Здоров'я вашої родини — наш пріоритет.
                    </p>
                    {/* Socials */}
                    <div className="flex items-center gap-3">
                        {[
                            { icon: Facebook, href: "#", label: "Facebook" },
                            { icon: Youtube, href: "#", label: "YouTube" },
                            { icon: Send, href: "#", label: "Telegram" },
                        ].map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800 hover:bg-teal-600 transition-colors"
                            >
                                <Icon size={16} className="text-slate-300" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Col 2 — Navigation */}
                <div>
                    <p className="font-bold text-white mb-4">Навігація</p>
                    <ul className="flex flex-col gap-2">
                        {navLinks.map((l) => (
                            <li key={l.label}>
                                <a
                                    href={l.href}
                                    className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
                                >
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Col 3 — Services */}
                <div>
                    <p className="font-bold text-white mb-4">Послуги</p>
                    <ul className="flex flex-col gap-2">
                        {services.map((l) => (
                            <li key={l.label}>
                                <a
                                    href={l.href}
                                    className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
                                >
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Col 4 — Contacts */}
                <div id="contacts">
                    <p className="font-bold text-white mb-4">Контакти</p>
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-start gap-3 text-sm">
                            <MapPin size={16} className="text-teal-400 shrink-0 mt-0.5" />
                            <span>вул. Старої Гвардії, 77, м. ProCity</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm">
                            <Phone size={16} className="text-teal-400 shrink-0 mt-0.5" />
                            <div className="flex flex-col gap-1">
                                <a href="tel:0800500123" className="hover:text-teal-400 transition-colors">0 800 500 123</a>
                                <a href="tel:+380441234567" className="hover:text-teal-400 transition-colors">(044) 123 45 67</a>
                                <a href="tel:+380991112233" className="hover:text-teal-400 transition-colors">(099) 111 22 33</a>
                            </div>
                        </li>
                        <li className="flex items-start gap-3 text-sm">
                            <Mail size={16} className="text-teal-400 shrink-0 mt-0.5" />
                            <a href="mailto:info@promed.ua" className="hover:text-teal-400 transition-colors">
                                info@promed.ua
                            </a>
                        </li>
                        <li className="flex items-start gap-3 text-sm">
                            <Clock size={16} className="text-teal-400 shrink-0 mt-0.5" />
                            <div className="flex flex-col gap-0.5">
                                <span>Пн–Пт: 08:00 – 18:00</span>
                                <span>Сб: 09:00 – 14:00</span>
                                <span>Нд: Вихідний</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-slate-800">
                <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
                    <p>© 1994 – 2026 Клініка ProMED. Всі права захищені.</p>
                    <div className="flex items-center gap-4">
                        <a href="#privacy" className="hover:text-slate-300 transition-colors">Політика конфіденційності</a>
                        <a href="#docs" className="hover:text-slate-300 transition-colors">Документи</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
