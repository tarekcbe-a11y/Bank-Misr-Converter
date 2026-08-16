const currencies = [
    { code: "USD", name: "دولار أمريكي", flag: "🇺🇸" },
    { code: "EUR", name: "يورو", flag: "🇪🇺" },
    { code: "SAR", name: "ريال سعودي", flag: "🇸🇦" },
    { code: "GBP", name: "جنيه إسترليني", flag: "🇬🇧" },
    { code: "AED", name: "درهم إماراتي", flag: "🇦🇪" },
    { code: "CHF", name: "فرنك سويسري", flag: "🇨🇭" },
    { code: "AUD", name: "دولار أسترالي", flag: "🇦🇺" },
    { code: "BHD", name: "دينار بحريني", flag: "🇧🇭" },
    { code: "CAD", name: "دولار كندي", flag: "🇨🇦" },
    { code: "CNY", name: "يوان صيني", flag: "🇨🇳" },
    { code: "DKK", name: "كرونة دنماركية", flag: "🇩🇰" },
    { code: "JOD", name: "دينار أردني", flag: "🇯🇴" },
    { code: "EGP", name: "جنيه مصري", flag: "🇪🇬" }
];

const exchangeRates = {
    USD: { buy: 50.20, sell: 50.30 },
    EUR: { buy: 57.8600, sell: 58.2726 },
    SAR: { buy: 13.3337, sell: 13.398 },
    GBP: { buy: 67.6897, sell: 68.2118 },
    AED: { buy: 13.6544, sell: 13.696 },
    CHF: { buy: 61.6329, sell: 62.0681 },
    AUD: { buy: 30.4161, sell: 30.6878 },
    BHD: { buy: 131.221, sell: 133.422 },
    CAD: { buy: 36.0192, sell: 36.2784 },
    CNY: { buy: 7.44156, sell: 7.4628 },
    DKK: { buy: 7.7407, sell: 7.7907 },
    JOD: { buy: 70.3574, sell: 71.0452 },
    EGP: { buy: 1.00, sell: 1.00 }
};

const lastUpdatedText = "تاريخ التحديث: 2026-08-16 - 08:05 م";
