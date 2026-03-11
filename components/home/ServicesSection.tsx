import { Microscope, BedDouble, Stethoscope, ArrowRight } from "lucide-react";

const services = [
    {
        icon: Microscope,
        title: "Діагностика",
        description:
            "Сучасні методи обстеження: МРТ, КТ, УЗД, ендоскопія, лабораторні аналізи. Результати — в день звернення.",
        tags: ["Лабораторія", "УЗД", "КТ / МРТ", "Ендоскопія"],
        href: "#diagnostics",
        gradient: "from-teal-500 to-emerald-400",
        bg: "bg-teal-50",
        iconBg: "bg-teal-100",
        iconColor: "text-teal-700",
    },
    {
        icon: BedDouble,
        title: "Стаціонар",
        description:
            "Цілодобовий стаціонар з 14 профільними відділеннями. Комфортні палати, сучасне реанімаційне обладнання.",
        tags: ["Хірургія", "Кардіологія", "Неврологія", "Реабілітація"],
        href: "#inpatient",
        gradient: "from-violet-500 to-purple-400",
        bg: "bg-violet-50",
        iconBg: "bg-violet-100",
        iconColor: "text-violet-700",
    },
    {
        icon: Stethoscope,
        title: "Консультації",
        description:
            "Понад 30 вузьких спеціалістів. Запис онлайн або за телефоном. Прийом в день звернення за наявності місць.",
        tags: ["Кардіолог", "Невролог", "Уролог", "Офтальмолог"],
        href: "#consultations",
        gradient: "from-amber-500 to-orange-400",
        bg: "bg-amber-50",
        iconBg: "bg-amber-100",
        iconColor: "text-amber-700",
    },
];

export const ServicesSection = () => {
    return (
        <section id="services" className="bg-warm-white py-20 px-6">
            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">
                            Що ми пропонуємо
                        </span>
                        <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-800">
                            Наші послуги
                        </h2>
                    </div>
                    <a
                        href="#all-services"
                        className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-800 transition-colors"
                    >
                        Усі послуги <ArrowRight size={18} />
                    </a>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                    {services.map((s) => (
                        <a
                            key={s.title}
                            href={s.href}
                            className={`group flex flex-col rounded-3xl ${s.bg} border border-slate-200 p-7 hover:shadow-xl transition-all hover:-translate-y-1`}
                        >
                            <div className={`rounded-2xl ${s.iconBg} w-14 h-14 flex items-center justify-center mb-5`}>
                                <s.icon size={28} className={s.iconColor} />
                            </div>

                            <h3 className="text-xl font-bold text-slate-800 mb-3">{s.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed flex-1">{s.description}</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-5">
                                {s.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full bg-white border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-teal-700 group-hover:gap-3 transition-all">
                                Детальніше <ArrowRight size={16} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
