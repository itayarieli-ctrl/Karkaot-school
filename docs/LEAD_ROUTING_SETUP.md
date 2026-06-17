# Lead Routing — הגדרה חד-פעמית (Google Apps Script)

מסמך זה מתאר איך לקשר את טופס הלידים באתר ל:
1. **Google Sheet** — שורה חדשה לכל ליד
2. **אימייל ל-info@ishadama.co.il** — התראה על כל ליד שמגיע

לוקח ~10 דקות, נעשה פעם אחת.

---

## שלב 1 — לפתוח את Apps Script מתוך ה-Sheet

1. פתח את ה-Sheet:
   https://docs.google.com/spreadsheets/d/1AHQxP3iXlWSQo3Dy6wRjstGn8EobJmBNSjubIbkRSJs/edit
2. בתפריט עליון: **Extensions → Apps Script** (תוסף → Apps Script).
3. ייפתח חלון עורך עם קובץ בשם `Code.gs`. תמחק את כל מה שיש שם.
4. תעתיק את הקוד מסעיף "סקריפט להעתקה" למטה — והדבק במקום הקוד שמחקת.

## שלב 2 — לשמור ולהריץ פריסה ראשונה

1. **שמור** את הקובץ (Ctrl/Cmd + S).
2. למעלה מימין: **Deploy → New deployment**.
3. בחר type: **Web app** (סמל גלגל-שיניים → Web app).
4. הגדרות:
   - **Description**: "Lead intake — limudei karkaot"
   - **Execute as**: **Me** (החשבון שלך)
   - **Who has access**: **Anyone** (חובה — האתר לא מחובר לחשבון גוגל)
5. לחץ **Deploy**. Google יבקש אישור — אשר.
6. תקבל **Web app URL**. תעתיק אותו (נראה כמו:
   `https://script.google.com/macros/s/AKfycb.../exec`).

## שלב 3 — להעביר לי את ה-URL

תשלח לי את ה-URL מסעיף 2.6. אני אשים אותו במשתנה סביבה (`LEAD_WEBHOOK_URL`)
ב-Vercel — אחרי דפלוי, כל ליד שיגיע יזרום אוטומטית ל-Sheet + אימייל.

---

## סקריפט להעתקה

```javascript
// Lead intake for limudei-karkaot landing page.
// Receives JSON POST, appends a row to the active sheet, and emails a notice.

const NOTIFY_EMAIL = 'info@ishadama.co.il';

const HEADERS = [
  'תאריך',
  'שם',
  'אימייל',
  'טלפון',
  'תחום עניין',
  'הודעה',
  'מקור',
];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Initialise header row on first run.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    }

    const row = [
      new Date(data.timestamp || Date.now()),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.interestLabel || data.interest || '',
      data.message || '',
      data.source || 'school.landing',
    ];
    sheet.appendRow(row);

    // Email notification — best-effort, swallow errors so we don't fail
    // the lead capture if mail quota is reached.
    try {
      MailApp.sendEmail({
        to: NOTIFY_EMAIL,
        subject: 'ליד חדש — לימודי קרקעות: ' + (data.name || ''),
        htmlBody: buildHtml(data),
      });
    } catch (mailErr) {
      console.error('mail failed', mailErr);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    console.error('lead handler failed', err);
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function buildHtml(d) {
  const rows = [
    ['שם', d.name],
    ['אימייל', d.email],
    ['טלפון', d.phone],
    ['תחום עניין', d.interestLabel || d.interest],
    ['הודעה', d.message],
  ];
  const tr = rows
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="padding:6px 12px;font-weight:bold">${k}</td><td style="padding:6px 12px">${escapeHtml(v)}</td></tr>`)
    .join('');
  return `
    <div dir="rtl" style="font-family:Arial,sans-serif;font-size:14px;color:#0D1C16">
      <h2 style="color:#4A3E36;margin-bottom:8px">ליד חדש מאתר לימודי קרקעות</h2>
      <table style="border-collapse:collapse">${tr}</table>
      <p style="color:#9E846E;margin-top:16px;font-size:12px">השורה נוספה גם ל-Sheet אוטומטית.</p>
    </div>
  `;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Quick test — run this once from the Apps Script editor to verify
// permissions and the Sheet header row before deploying.
function testRun() {
  doPost({
    postData: {
      contents: JSON.stringify({
        name: 'בדיקה',
        email: 'test@example.com',
        phone: '050-0000000',
        interestLabel: 'קורס מוקלט',
        message: 'זאת בדיקה',
        source: 'manual-test',
        timestamp: new Date().toISOString(),
      }),
    },
  });
}
```

---

## עדכון הסקריפט מאוחר יותר

אם תרצה לשנות משהו (למשל את כתובת ההתראה), חזור ל-Apps Script, ערוך, שמור,
ואז **Deploy → Manage deployments → Edit (עיפרון) → New version → Deploy**.
ה-URL נשמר זהה.

## פתרון תקלות

- **"Authorization required"** בעת הריצה ראשונה — לחץ "Review permissions"
  ואשר. Google מציג אזהרה "this app isn't verified" — לחץ "Advanced → Go to
  ... (unsafe)". זה הפרויקט שלך, הוא לא מסוכן.
- **שורות לא מופיעות ב-Sheet** — ודא שהקובץ פעיל הוא הראשון בכרטיסיות.
- **אין אימייל** — בדוק את תקיית הספאם. כמו כן, ל-Apps Script יש מכסת מיילים
  (~100 ביום בחשבון רגיל) — מעל לזה תצטרכו מנוי Workspace.
