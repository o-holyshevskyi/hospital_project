import { Star, ArrowRight, GraduationCap } from "lucide-react";

const doctors = [
    {
        name: "Коваленко Олег Вікторович",
        specialty: "Кардіолог",
        experience: 18,
        category: "Вища категорія",
        degree: "Кандидат медичних наук",
        rating: 4.9,
        reviews: 124,
        initials: "КО",
        color: "bg-teal-600",
    },
    {
        name: "Петренко Марина Сергіївна",
        specialty: "Невролог",
        experience: 14,
        category: "Вища категорія",
        degree: null,
        rating: 4.8,
        reviews: 98,
        initials: "ПМ",
        color: "bg-violet-600",
    },
    {
        name: "Бондаренко Ігор Анатолійович",
        specialty: "Хірург",
        experience: 22,
        category: "Вища категорія",
        degree: "Доктор медичних наук",
        rating: 5.0,
        reviews: 201,
        initials: "БІ",
        color: "bg-amber-600",
    },
    {
        name: "Литвиненко Оксана Юріївна",
        specialty: "Ендокринолог",
        experience: 11,
        category: "Перша категорія",
        degree: null,
        rating: 4.7,
        reviews: 76,
        initials: "ЛО",
        color: "bg-rose-500",
    },
    {
        name: "Мельник Василь Петрович",
        specialty: "Уролог",
        experience: 16,
        category: "Вища категорія",
        degree: "Кандидат медичних наук",
        rating: 4.9,
        reviews: 88,
        initials: "МВ",
        color: "bg-sky-600",
    },
    {
        name: "Захаренко Тетяна Іванівна",
        specialty: "Офтальмолог",
        experience: 9,
        category: "Перша категорія",
        degree: null,
        rating: 4.8,
        reviews: 61,
        initials: "ЗТ",
        color: "bg-emerald-600",
    },
];

export const DoctorsSection = () => {
    return (
        <section id="doctors" className="bg-slate-50 py-20 px-6">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">
                            Наша команда
                        </span>
                        <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-800">
                            Лікарі клініки
                        </h2>
                        <p className="mt-2 text-slate-500 text-sm max-w-md">
                            Досвідчені фахівці з вищою кваліфікаційною категорією та постійним підвищенням кваліфікації.
                        </p>
                    </div>
                    <a
                        href="#all-doctors"
                        className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-800 transition-colors shrink-0"
                    >
                        Усі лікарі <ArrowRight size={18} />
                    </a>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {doctors.map((d) => (
                        <div
                            key={d.name}
                            className="group rounded-3xl bg-white border border-slate-200 p-6 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer"
                        >
                            <div className="flex items-center gap-4 mb-5">
                                {/* Avatar */}
                                <div className={`w-16 h-16 rounded-2xl ${d.color} flex items-center justify-center shrink-0`}>
                                    <span className="text-xl font-black text-white">{d.initials}</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800 leading-snug">{d.name}</h3>
                                    <p className="text-sm text-teal-600 font-semibold">{d.specialty}</p>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="flex flex-col gap-2 mb-5">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-500">Стаж</span>
                                    <span className="font-semibold text-slate-700">{d.experience} років</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-500">Категорія</span>
                                    <span className="font-semibold text-slate-700">{d.category}</span>
                                </div>
                                {d.degree && (
                                    <div className="flex items-center gap-2 text-sm text-violet-700 bg-violet-50 rounded-lg px-3 py-1.5 mt-1">
                                        <GraduationCap size={14} />
                                        <span className="font-medium">{d.degree}</span>
                                    </div>
                                )}
                            </div>

                            {/* Rating */}
                            <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                                <div className="flex items-center gap-1">
                                    <Star size={15} className="fill-amber-400 text-amber-400" />
                                    <span className="text-sm font-bold text-slate-700">{d.rating}</span>
                                    <span className="text-xs text-slate-400">({d.reviews} відгуків)</span>
                                </div>
                                <span className="text-sm font-semibold text-teal-600 group-hover:underline">
                                    Записатись
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
