const currencies = [
    { code: "USD", name: "الدولار الأمريكي", flag: "🇺🇸" },
    { code: "SAR", name: "الريال السعودي", flag: "🇸🇦" },
    { code: "EUR", name: "اليورو الأوروبي", flag: "🇪🇺" },
    { code: "AED", name: "الدرهم الإماراتي", flag: "🇦🇪" },
    { code: "GBP", name: "الجنيه الاسترليني", flag: "🇬🇧" },
    { code: "CHF", name: "الفرنك السويسري", flag: "🇨🇭" },
    { code: "CAD", name: "الدولار الكندي", flag: "🇨🇦" },
    { code: "AUD", name: "الدولار الأسترالي", flag: "🇦🇺" },
    { code: "BHD", name: "الدينار البحريني", flag: "🇧🇭" },
    { code: "JOD", name: "الدينار الأردني", flag: "🇯🇴" },
    { code: "CNY", name: "اليوان الصيني", flag: "🇨🇳" },
    { code: "DKK", name: "الكرونة الدنماركية", flag: "🇩🇰" },
    { code: "EGP", name: "الجنيه المصري", flag: "🇪🇬" }
];

const exchangeRates = {
    USD: { buy: 50.23, sell: 50.33 },
    SAR: { buy: 13.3449, sell: 13.407 },
    EUR: { buy: 57.901, sell: 58.101 },
    AED: { buy: 13.6626, sell: 13.7042 },
    GBP: { buy: 67.7301, sell: 67.9161 },
    CHF: { buy: 61.6697, sell: 61.8837 },
    CAD: { buy: 36.0408, sell: 36.1906 },
    AUD: { buy: 30.4373, sell: 30.507 },
    BHD: { buy: 131.3, sell: 133.00 },
    JOD: { buy: 70.3994, sell: 71.0876 },
    CNY: { buy: 7.446, sell: 7.4615 },
    DKK: { buy: 7.74533, sell: 7.77189 },
    EGP: { buy: 1.00, sell: 1.00 }
};

const lastUpdatedText = "تاريخ التحديث: 2026-08-16 - 11:09 ص";
