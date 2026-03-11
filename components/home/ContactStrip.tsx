import { Phone, Ambulance, Headphones } from "lucide-react";

const contacts = [
    {
        icon: Phone,
        title: "Реєстратура",
        phones: ["(044) 123 45 67", "(044) 123 45 68", "(099) 111 22 33"],
        note: "Пн–Пт: 08:00 – 18:00",
        color: "bg-teal-600",
    },
    {
        icon: Ambulance,
        title: "Екстрена допомога",
        phones: ["(044) 999 00 11", "(066) 555 44 33"],
        note: "Цілодобово, без вихідних",
        color: "bg-rose-500",
    },
    {
        icon: Headphones,
        title: "Кол-центр",
        phones: ["0 800 500 123"],
        note: "Безкоштовно по Україні",
        color: "bg-amber-500",
    },
];

export const ContactStrip = () => {
    return (
        <section className="bg-warm-white py-10 px-6">
            <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-3 gap-6">
                {contacts.map((c) => (
                    <div
                        key={c.title}
                        className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className={`rounded-xl ${c.color} p-3 shrink-0`}>
                            <c.icon size={22} className="text-white" />
                        </div>
                        <div>
                            <p className="font-bold text-slate-800 mb-2">{c.title}</p>
                            {c.phones.map((p) => (
                                <a
                                    key={p}
                                    href={`tel:${p.replace(/\s/g, "")}`}
                                    className="block text-teal-700 font-semibold hover:text-teal-500 transition-colors"
                                >
                                    {p}
                                </a>
                            ))}
                            <p className="text-sm text-slate-500 mt-1">{c.note}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
