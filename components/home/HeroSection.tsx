import { ArrowRight, ShieldCheck, Clock, Heart } from "lucide-react";

export const HeroSection = () => {
    return (
        <section className="relative min-h-[92vh] bg-gradient-to-br from-teal-700 via-teal-600 to-emerald-500 overflow-hidden flex items-center">
            {/* Decorative blobs */}
            <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 -left-20 w-[360px] h-[360px] rounded-full bg-emerald-400/20 blur-2xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-teal-800/20 blur-3xl pointer-events-none" />

            <div className="relative mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left — text */}
                <div className="flex flex-col gap-8">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                        <ShieldCheck size={16} />
                        Акредитована клініка вищої категорії
                    </span>

                    <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-tight">
                        Клініка ProMED —{" "}
                        <span className="text-amber-300">здоров&apos;я</span>{" "}
                        у надійних руках
                    </h1>

                    <p className="text-lg text-white/80 max-w-lg leading-relaxed">
                        Сучасна приватна клініка з понад 30 роками досвіду. Понад 40 спеціалістів, новітнє обладнання та індивідуальний підхід до кожного пацієнта.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#appointment"
                            className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-7 py-4 text-base font-bold text-teal-900 shadow-lg hover:bg-amber-300 transition-all hover:-translate-y-0.5"
                        >
                            Записатись на прийом
                            <ArrowRight size={18} />
                        </a>
                        <a
                            href="#services"
                            className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 px-7 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
                        >
                            Наші послуги
                        </a>
                    </div>

                    {/* Quick stats */}
                    <div className="grid grid-cols-3 gap-4 pt-2">
                        {[
                            { value: "40+", label: "Спеціалістів" },
                            { value: "30р", label: "Досвіду" },
                            { value: "150к+", label: "Пацієнтів" },
                        ].map((stat) => (
                            <div key={stat.label} className="rounded-2xl bg-white/10 backdrop-blur-sm p-4 text-center border border-white/20">
                                <p className="text-3xl font-black text-white">{stat.value}</p>
                                <p className="text-sm text-white/70 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right — info cards */}
                <div className="hidden lg:flex flex-col gap-5">
                    {[
                        {
                            icon: Clock,
                            title: "Графік роботи",
                            lines: ["Пн–Пт: 08:00 – 18:00", "Сб: 09:00 – 14:00", "Нд: Вихідний"],
                        },
                        {
                            icon: Heart,
                            title: "Екстрена допомога",
                            lines: ["Цілодобово", "(044) 123 45 67", "(099) 987 65 43"],
                        },
                        {
                            icon: ShieldCheck,
                            title: "Страхова медицина",
                            lines: ["Приймаємо понад 15", "страхових компаній", "Пряме відшкодування"],
                        },
                    ].map((card) => (
                        <div
                            key={card.title}
                            className="flex items-start gap-4 rounded-2xl bg-white/15 backdrop-blur-md p-5 border border-white/20 hover:bg-white/20 transition-all"
                        >
                            <div className="rounded-xl bg-amber-400/20 p-3 shrink-0">
                                <card.icon size={22} className="text-amber-300" />
                            </div>
                            <div>
                                <p className="font-bold text-white mb-1">{card.title}</p>
                                {card.lines.map((l) => (
                                    <p key={l} className="text-sm text-white/70">{l}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 80L1440 80L1440 20C1200 70 960 0 720 30C480 60 240 10 0 40L0 80Z" fill="#fffbf7" />
                </svg>
            </div>
        </section>
    );
};
