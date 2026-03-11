import { Building2, Activity, FlaskConical, ClipboardList, Wifi, ShieldCheck } from "lucide-react";

const features = [
    {
        icon: Building2,
        title: "Поліклініка та цілодобовий стаціонар",
        description: "Амбулаторна та стаціонарна допомога під одним дахом. Прийом планових та ургентних пацієнтів щодня.",
        color: "text-teal-600",
        bg: "bg-teal-50",
        border: "border-teal-100",
    },
    {
        icon: Activity,
        title: "Медична реабілітація",
        description: "Комплексна реабілітація після операцій, інсульту, травм. Сучасне фізіотерапевтичне відділення.",
        color: "text-violet-600",
        bg: "bg-violet-50",
        border: "border-violet-100",
    },
    {
        icon: FlaskConical,
        title: "Рентген та УЗД-діагностика",
        description: "Цифровий рентген, маммографія, КТ, МРТ та ультразвукова діагностика. Результати — онлайн.",
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-100",
    },
    {
        icon: ClipboardList,
        title: "Повна лабораторна діагностика",
        description: "Понад 500 видів аналізів. Власна сертифікована лабораторія. Термінове виконання за 2 години.",
        color: "text-rose-600",
        bg: "bg-rose-50",
        border: "border-rose-100",
    },
    {
        icon: Wifi,
        title: "Онлайн-запис та особистий кабінет",
        description: "Записуйтесь до лікаря, отримуйте результати аналізів та консультуйтесь дистанційно.",
        color: "text-sky-600",
        bg: "bg-sky-50",
        border: "border-sky-100",
    },
    {
        icon: ShieldCheck,
        title: "Страхова та корпоративна медицина",
        description: "Пряма оплата через страхову компанію. Корпоративні програми для підприємств будь-якого масштабу.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-100",
    },
];

export const FeaturesSection = () => {
    return (
        <section className="bg-warm-white py-20 px-6">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">
                        Чому обирають нас
                    </span>
                    <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-800">
                        Наші переваги
                    </h2>
                    <p className="mt-3 text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
                        Клініка ProMED — це повний цикл медичної допомоги: від профілактики до складних хірургічних втручань.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((f) => (
                        <div
                            key={f.title}
                            className={`rounded-2xl ${f.bg} border ${f.border} p-6 hover:shadow-md transition-shadow`}
                        >
                            <div className={`mb-4 inline-flex rounded-xl p-3 bg-white shadow-sm`}>
                                <f.icon size={24} className={f.color} />
                            </div>
                            <h3 className="font-bold text-slate-800 mb-2 leading-snug">{f.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
