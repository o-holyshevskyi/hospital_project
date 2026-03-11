import { Calendar, ArrowRight, Tag } from "lucide-react";

const news = [
    {
        date: "28 лютого 2026",
        category: "Кардіологія",
        title: "Основні симптоми інфаркту міокарда: що важливо знати кожному",
        excerpt:
            "Щороку від серцево-судинних захворювань в Україні помирає понад 400 тисяч людей. Раннє розпізнавання симптомів може врятувати життя.",
        color: "bg-rose-50 border-rose-100",
        tagColor: "bg-rose-100 text-rose-700",
        dot: "bg-rose-500",
    },
    {
        date: "14 лютого 2026",
        category: "Профілактика",
        title: "Скринінг здоров'я 40+: чому регулярні обстеження — не розкіш",
        excerpt:
            "Починаючи з 40 років ризик багатьох захворювань суттєво зростає. Розповідаємо, які аналізи та обстеження варто пройти обов'язково.",
        color: "bg-teal-50 border-teal-100",
        tagColor: "bg-teal-100 text-teal-700",
        dot: "bg-teal-500",
    },
    {
        date: "3 лютого 2026",
        category: "Новини клініки",
        title: "ProMED отримала нове обладнання для МРТ-діагностики 3 Тесла",
        excerpt:
            "Ми пишаємось тим, що тепер можемо пропонувати пацієнтам МРТ найвищої роздільної здатності — 3 Тесла — для точнішої діагностики.",
        color: "bg-violet-50 border-violet-100",
        tagColor: "bg-violet-100 text-violet-700",
        dot: "bg-violet-500",
    },
    {
        date: "20 січня 2026",
        category: "Поради лікаря",
        title: "Кинь курити — починай відновлюватися вже сьогодні",
        excerpt:
            "Вже через 20 хвилин після останньої сигарети організм починає відновлюватись. Дізнайтесь, як клініка ProMED допомагає позбутись залежності.",
        color: "bg-amber-50 border-amber-100",
        tagColor: "bg-amber-100 text-amber-700",
        dot: "bg-amber-500",
    },
];

export const NewsSection = () => {
    return (
        <section id="news" className="bg-warm-white py-20 px-6">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">
                            Актуальне
                        </span>
                        <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-800">
                            Останні новини
                        </h2>
                    </div>
                    <a
                        href="#all-news"
                        className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-800 transition-colors shrink-0"
                    >
                        Усі новини <ArrowRight size={18} />
                    </a>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {news.map((n) => (
                        <article
                            key={n.title}
                            className={`group rounded-2xl border ${n.color} p-6 flex flex-col gap-4 hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer`}
                        >
                            {/* Category & date */}
                            <div className="flex items-center justify-between gap-2">
                                <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${n.tagColor}`}>
                                    <Tag size={11} />
                                    {n.category}
                                </span>
                                <div className={`w-2.5 h-2.5 rounded-full ${n.dot} shrink-0`} />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col gap-2 flex-1">
                                <h3 className="font-bold text-slate-800 leading-snug text-sm group-hover:text-teal-700 transition-colors">
                                    {n.title}
                                </h3>
                                <p className="text-xs text-slate-500 leading-relaxed">{n.excerpt}</p>
                            </div>

                            {/* Footer */}
                            <div className="flex items-center gap-1.5 text-xs text-slate-400 border-t border-slate-200/60 pt-3">
                                <Calendar size={12} />
                                {n.date}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
