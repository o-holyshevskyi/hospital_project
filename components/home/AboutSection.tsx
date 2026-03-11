import { CheckCircle2, ArrowRight } from "lucide-react";

const highlights = [
    "Заснована у 1994 році, більше 30 років на ринку медичних послуг",
    "Акредитована на вищу категорію Міністерством охорони здоров'я України",
    "Понад 150 000 пацієнтів отримали допомогу за останні 5 років",
    "Партнерство з 15 провідними страховими компаніями",
    "Сучасне діагностичне обладнання європейського рівня",
    "Безперервне підвищення кваліфікації персоналу за кордоном",
];

const stats = [
    { value: "405", label: "Ліжко-місць у стаціонарі" },
    { value: "148", label: "Лікарів-фахівців" },
    { value: "5 000+", label: "Операцій на рік" },
    { value: "30р", label: "Досвіду роботи" },
];

export const AboutSection = () => {
    return (
        <section id="about" className="bg-slate-900 py-24 px-6 overflow-hidden relative">
            {/* Decorative accent */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />

            <div className="relative mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left — text */}
                <div>
                    <span className="text-sm font-semibold uppercase tracking-widest text-teal-400">
                        Про нас
                    </span>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white leading-snug">
                        Клініка ProMED — ваш надійний партнер у здоров&apos;ї
                    </h2>
                    <p className="mt-5 text-slate-400 leading-relaxed">
                        Ми — сучасний медичний заклад, який поєднує передові технології та людяний підхід.
                        Наша мета — не лише лікувати хворобу, а й підтримувати якість вашого повсякденного життя.
                        Кожен пацієнт для нас — особистість, що заслуговує на увагу та турботу.
                    </p>
                    <p className="mt-4 text-slate-400 leading-relaxed">
                        З 1994 року клініка ProMED надає планову та ургентну медичну допомогу мешканцям міста та
                        регіону. За цей час ми виросли у великий багатопрофільний центр із 14 стаціонарними відділеннями
                        та амбулаторним блоком на понад 900 відвідувань на добу.
                    </p>

                    <ul className="mt-8 flex flex-col gap-3">
                        {highlights.map((h) => (
                            <li key={h} className="flex items-start gap-3 text-sm text-slate-300">
                                <CheckCircle2 size={18} className="text-teal-400 shrink-0 mt-0.5" />
                                {h}
                            </li>
                        ))}
                    </ul>

                    <a
                        href="#about-full"
                        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-teal-600 px-7 py-4 text-sm font-bold text-white hover:bg-teal-500 transition-all hover:-translate-y-0.5 shadow-lg shadow-teal-900/40"
                    >
                        Більше про клініку <ArrowRight size={16} />
                    </a>
                </div>

                {/* Right — stats grid */}
                <div className="grid grid-cols-2 gap-5">
                    {stats.map((s, i) => (
                        <div
                            key={s.label}
                            className={`rounded-3xl p-8 flex flex-col justify-between min-h-[160px] ${
                                i % 2 === 0
                                    ? "bg-teal-600/20 border border-teal-500/30"
                                    : "bg-amber-400/10 border border-amber-400/20"
                            }`}
                        >
                            <p className={`text-4xl font-black ${i % 2 === 0 ? "text-teal-300" : "text-amber-300"}`}>
                                {s.value}
                            </p>
                            <p className="text-sm text-slate-400 mt-2 leading-snug">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
