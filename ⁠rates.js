<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>حاسبة تحويل العملات - جروب عملاء البنوك المصرية</title>
    <style>
        body {
            background-color: #0b0f19;
            font-family: Tahoma, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            direction: rtl;
            text-align: right;
        }
        .card {
            background-color: #111827;
            color: #f3f4f6;
            padding: 15px;
            border-radius: 16px;
            border: 1px solid #d4af37;
            width: 100%;
            max-width: 380px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
            box-sizing: border-box;
        }
        .header-branding {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            margin-bottom: 10px;
            padding-bottom: 6px;
            border-bottom: 1px solid rgba(212, 175, 55, 0.3);
        }
        .logo-img { width: 24px; height: 24px; object-fit: contain; }
        .group-title { color: #d4af37; font-size: 12px; font-weight: bold; }
        h3 { color: #d4af37; text-align: center; margin-bottom: 12px; font-size: 14px; }
        .input-group { margin-bottom: 10px; }
        .input-group label { display: block; margin-bottom: 4px; font-size: 12px; color: #94a3b8; }
        .input-group input, .input-group select {
            width: 100%; padding: 8px 10px; background: #1f2937; border: 1px solid #374151;
            color: #fff; border-radius: 8px; box-sizing: border-box; font-size: 13px; text-align: right; outline: none; cursor: pointer;
        }
        .input-group select:focus, .input-group input:focus { border-color: #d4af37; }
        .result-box {
            background: #1f2937; padding: 10px; border-radius: 8px; text-align: center;
            border: 1px dashed #d4af37; margin-top: 12px;
        }
        .result-label { font-size: 11px; color: #94a3b8; display: block; margin-bottom: 2px; }
        #result { font-size: 16px; font-weight: bold; color: #d4af37; }
        .update-info { text-align: center; font-size: 10px; color: #64748b; margin-top: 10px; }
        .footer-divider { border: none; border-top: 1px solid rgba(212, 175, 55, 0.3); margin: 12px 0 8px 0; }
        .footer-branding { text-align: center; color: #d4af37; font-size: 11px; }
        .footer-developer { color: #d4af37; font-size: 10px; margin-top: 2px; text-align: center; }
    </style>
</head>
<body>

<div class="card">
    <div class="header-branding">
        <img src="logo.png" alt="Logo" class="logo-img">
        <span class="group-title">جروب عملاء البنوك المصرية 🛡️</span>
    </div>
    <h3>💱 حاسبة العملات اللحظية</h3>
    
    <div class="input-group">
        <label>المبلغ:</label>
        <input type="number" id="amount" value="1" oninput="convertCurrency()">
    </div>

    <div class="input-group">
        <label>من عملة:</label>
        <select id="fromCurrency" onchange="convertCurrency()"></select>
    </div>

    <div class="input-group">
        <label>إلى عملة:</label>
        <select id="toCurrency" onchange="convertCurrency()"></select>
    </div>

    <div class="result-box">
        <span class="result-label">القيمة الناتجة:</span>
        <span id="result">0.00 جنيه</span>
    </div>
    
    <div class="update-info">مرجع بنك مصر - 16 أغسطس 2026</div>

    <hr class="footer-divider">
    <div class="footer-branding">جروب عملاء البنوك المصرية 🛡️</div>
    <div class="footer-developer">Developed by Tarek Metwally</div>
</div>

<script>
    const ratesData = {
        rates: {
            EGP: { name: "جنيه مصري", flag: "🇪🇬", sell: 1.00 },
            USD: { name: "دولار أمريكي", flag: "🇺🇸", sell: 50.28 },
            EUR: { name: "يورو", flag: "🇪🇺", sell: 58.00 },
            GBP: { name: "جنيه إسترليني", flag: "🇬🇧", sell: 67.82 },
            SAR: { name: "ريال سعودي", flag: "🇸🇦", sell: 13.38 },
            AED: { name: "درهم إماراتي", flag: "🇦🇪", sell: 13.68 },
            KWD: { name: "دينار كويتي", flag: "🇰🇼", sell: 163.75 }
        }
    };

    const fromSelect = document.getElementById('fromCurrency');
    const toSelect = document.getElementById('toCurrency');

    for (let code in ratesData.rates) {
        let item = ratesData.rates[code];
        let optText = `${item.flag} ${item.name} (${code})`;
        fromSelect.add(new Option(optText, code));
        toSelect.add(new Option(optText, code));
    }

    fromSelect.value = "USD";
    toSelect.value = "EGP";

    function convertCurrency() {
        let amount = parseFloat(document.getElementById('amount').value) || 0;
        let from = fromSelect.value;
        let to = toSelect.value;
        let rates = ratesData.rates;

        let amountInEGP = amount * rates[from].sell;
        let finalResult = amountInEGP / rates[to].sell;

        document.getElementById('result').innerText = 
            finalResult.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' جنيه';
    }

    convertCurrency();
</script>
</body>
</html>
