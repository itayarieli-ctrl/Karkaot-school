"use client";

import { useState } from "react";
import initialCopy from "../../../content/copy.json";

type Copy = typeof initialCopy;

type PublishState =
  | { kind: "idle" }
  | { kind: "publishing" }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

// Deep clone via JSON to fully detach from the imported module.
function deepClone<T>(v: T): T {
  return JSON.parse(JSON.stringify(v));
}

export default function AdminPage() {
  const [copy, setCopy] = useState<Copy>(() => deepClone(initialCopy));
  const [state, setState] = useState<PublishState>({ kind: "idle" });

  // Track if the form has changes (diff against the initial snapshot).
  const dirty = JSON.stringify(copy) !== JSON.stringify(initialCopy);

  async function publish() {
    setState({ kind: "publishing" });
    try {
      const res = await fetch("/api/admin/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(copy),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || `HTTP ${res.status}`);
      }
      setState({
        kind: "success",
        message: data.message || "פורסם בהצלחה!",
      });
    } catch (err) {
      setState({
        kind: "error",
        message: err instanceof Error ? err.message : String(err),
      });
    }
  }

  function update(updater: (prev: Copy) => Copy) {
    setCopy((c) => updater(deepClone(c)));
    if (state.kind !== "idle") setState({ kind: "idle" });
  }

  return (
    <div
      dir="rtl"
      style={{
        minHeight: "100vh",
        backgroundColor: "#FCFBF7",
        color: "#0D1C16",
        fontFamily: "var(--font-arimo), system-ui, sans-serif",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          backgroundColor: "#4A3E36",
          color: "#FCFBF7",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800 }}>
            עורך תוכן — לימודי קרקעות
          </h1>
          <p style={{ margin: 0, fontSize: 13, opacity: 0.8 }}>
            ערוך טקסטים בטופס מטה. לחץ &quot;פרסום&quot; כדי לעדכן את האתר החי.
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {dirty && (
            <span style={{ fontSize: 12, color: "#F2AF78" }}>שינויים לא מפורסמים</span>
          )}
          <button
            onClick={publish}
            disabled={state.kind === "publishing" || !dirty}
            style={{
              backgroundColor: dirty ? "#18362A" : "#6c625a",
              color: "#FCFBF7",
              border: "none",
              borderRadius: 6,
              padding: "10px 20px",
              fontWeight: 700,
              fontSize: 15,
              cursor: dirty ? "pointer" : "not-allowed",
            }}
          >
            {state.kind === "publishing" ? "מפרסם..." : "פרסום"}
          </button>
        </div>
      </header>

      {state.kind === "success" && (
        <Banner kind="success" message={state.message} />
      )}
      {state.kind === "error" && (
        <Banner kind="error" message={"שגיאת פרסום: " + state.message} />
      )}

      <main style={{ padding: "24px", maxWidth: 980, margin: "0 auto" }}>
        <Section title="Hero — חלק עליון של הדף" defaultOpen>
          <Field
            label="תגית (badge קטן)"
            value={copy.hero.badge}
            onChange={(v) => update((c) => ((c.hero.badge = v), c))}
          />
          <Field
            label='כותרת ראשית — שורה 1'
            value={copy.hero.h1_line1}
            onChange={(v) => update((c) => ((c.hero.h1_line1 = v), c))}
          />
          <Field
            label='כותרת ראשית — שורה 2 (בירוק)'
            value={copy.hero.h1_line2}
            onChange={(v) => update((c) => ((c.hero.h1_line2 = v), c))}
          />
          <TextArea
            label="תת-כותרת"
            value={copy.hero.subtitle}
            onChange={(v) => update((c) => ((c.hero.subtitle = v), c))}
          />
          <Field
            label="כפתור CTA ראשי"
            value={copy.hero.cta_primary}
            onChange={(v) => update((c) => ((c.hero.cta_primary = v), c))}
          />
          <Field
            label="כפתור CTA משני"
            value={copy.hero.cta_secondary}
            onChange={(v) => update((c) => ((c.hero.cta_secondary = v), c))}
          />
          <Field
            label="טקסט placeholder לתמונה (זמני)"
            value={copy.hero.image_placeholder}
            onChange={(v) => update((c) => ((c.hero.image_placeholder = v), c))}
          />
        </Section>

        <Section title="Services — סקציית הקורסים">
          <Field
            label="כותרת"
            value={copy.services.title}
            onChange={(v) => update((c) => ((c.services.title = v), c))}
          />
          <TextArea
            label="תת-כותרת"
            value={copy.services.subtitle}
            onChange={(v) => update((c) => ((c.services.subtitle = v), c))}
          />
          {copy.services.cards.map((card, i) => (
            <CardSection key={i} title={`כרטיס ${i + 1}`}>
              <Field
                label="תגית (badge)"
                value={card.badge}
                onChange={(v) =>
                  update((c) => ((c.services.cards[i].badge = v), c))
                }
              />
              <Field
                label="כותרת"
                value={card.title}
                onChange={(v) =>
                  update((c) => ((c.services.cards[i].title = v), c))
                }
              />
              <Field
                label="תת-כותרת"
                value={card.subtitle}
                onChange={(v) =>
                  update((c) => ((c.services.cards[i].subtitle = v), c))
                }
              />
              <StringList
                label="נקודות (bullets)"
                items={card.bullets}
                onChange={(arr) =>
                  update((c) => ((c.services.cards[i].bullets = arr), c))
                }
              />
              <Field
                label="כפתור CTA"
                value={card.cta}
                onChange={(v) =>
                  update((c) => ((c.services.cards[i].cta = v), c))
                }
              />
            </CardSection>
          ))}
        </Section>

        <Section title="Syllabus — תוכנית הקורס">
          <Field
            label="כותרת"
            value={copy.syllabus.title}
            onChange={(v) => update((c) => ((c.syllabus.title = v), c))}
          />
          <TextArea
            label="תת-כותרת"
            value={copy.syllabus.subtitle}
            onChange={(v) => update((c) => ((c.syllabus.subtitle = v), c))}
          />
          {copy.syllabus.lessons.map((lesson, i) => (
            <CardSection key={i} title={`שיעור ${lesson.n}`}>
              <Field
                label="מספר"
                value={lesson.n}
                onChange={(v) =>
                  update((c) => ((c.syllabus.lessons[i].n = v), c))
                }
              />
              <Field
                label="כותרת"
                value={lesson.title}
                onChange={(v) =>
                  update((c) => ((c.syllabus.lessons[i].title = v), c))
                }
              />
              <TextArea
                label="תיאור"
                value={lesson.desc}
                onChange={(v) =>
                  update((c) => ((c.syllabus.lessons[i].desc = v), c))
                }
              />
            </CardSection>
          ))}
          <button
            onClick={() =>
              update((c) => (
                c.syllabus.lessons.push({
                  n: String(c.syllabus.lessons.length + 1).padStart(2, "0"),
                  title: "שיעור חדש",
                  desc: "תיאור...",
                }),
                c
              ))
            }
            style={addBtnStyle}
          >
            + הוסף שיעור
          </button>
          {copy.syllabus.lessons.length > 0 && (
            <button
              onClick={() =>
                update((c) => (c.syllabus.lessons.pop(), c))
              }
              style={removeBtnStyle}
            >
              − הסר את השיעור האחרון
            </button>
          )}

          <Field
            label="כותרת סקציית הוובינרים"
            value={copy.syllabus.webinars_title}
            onChange={(v) => update((c) => ((c.syllabus.webinars_title = v), c))}
          />
          {copy.syllabus.webinars.map((w, i) => (
            <CardSection key={i} title={`וובינר ${i + 1}`}>
              <Field
                label="כותרת"
                value={w.title}
                onChange={(v) =>
                  update((c) => ((c.syllabus.webinars[i].title = v), c))
                }
              />
              <TextArea
                label="תיאור"
                value={w.desc}
                onChange={(v) =>
                  update((c) => ((c.syllabus.webinars[i].desc = v), c))
                }
              />
            </CardSection>
          ))}
          <button
            onClick={() =>
              update((c) => (
                c.syllabus.webinars.push({ title: "וובינר חדש", desc: "תיאור..." }),
                c
              ))
            }
            style={addBtnStyle}
          >
            + הוסף וובינר
          </button>
          {copy.syllabus.webinars.length > 0 && (
            <button
              onClick={() => update((c) => (c.syllabus.webinars.pop(), c))}
              style={removeBtnStyle}
            >
              − הסר את הוובינר האחרון
            </button>
          )}
        </Section>

        <Section title="FAQ — שאלות נפוצות">
          <Field
            label="כותרת"
            value={copy.faq.title}
            onChange={(v) => update((c) => ((c.faq.title = v), c))}
          />
          {copy.faq.items.map((item, i) => (
            <CardSection key={i} title={`שאלה ${i + 1}`}>
              <Field
                label="שאלה"
                value={item.q}
                onChange={(v) => update((c) => ((c.faq.items[i].q = v), c))}
              />
              <TextArea
                label="תשובה"
                value={item.a}
                onChange={(v) => update((c) => ((c.faq.items[i].a = v), c))}
                rows={4}
              />
            </CardSection>
          ))}
          <button
            onClick={() =>
              update((c) => (
                c.faq.items.push({ q: "שאלה חדשה", a: "תשובה חדשה" }),
                c
              ))
            }
            style={addBtnStyle}
          >
            + הוסף שאלה
          </button>
          {copy.faq.items.length > 0 && (
            <button
              onClick={() => update((c) => (c.faq.items.pop(), c))}
              style={removeBtnStyle}
            >
              − הסר את השאלה האחרונה
            </button>
          )}
        </Section>

        <Section title="טופס יצירת קשר">
          <Field
            label="כותרת"
            value={copy.lead.title}
            onChange={(v) => update((c) => ((c.lead.title = v), c))}
          />
          <TextArea
            label="תת-כותרת"
            value={copy.lead.subtitle}
            onChange={(v) => update((c) => ((c.lead.subtitle = v), c))}
          />
          <Field
            label="כתובת אימייל ליצירת קשר"
            value={copy.lead.contact_email}
            onChange={(v) => update((c) => ((c.lead.contact_email = v), c))}
          />
          <Field
            label='תווית האפשרות "קורס דיגיטלי" בטופס'
            value={copy.lead.interest_labels.course}
            onChange={(v) =>
              update((c) => ((c.lead.interest_labels.course = v), c))
            }
          />
          <Field
            label='תווית האפשרות "ייעוץ עסקה" בטופס'
            value={copy.lead.interest_labels.consult}
            onChange={(v) =>
              update((c) => ((c.lead.interest_labels.consult = v), c))
            }
          />
          <TextArea
            label="טקסט הסכמה (consent)"
            value={copy.lead.consent}
            onChange={(v) => update((c) => ((c.lead.consent = v), c))}
            rows={3}
          />
          <Field
            label="הודעת הצלחה אחרי שליחת טופס"
            value={copy.lead.success}
            onChange={(v) => update((c) => ((c.lead.success = v), c))}
          />
        </Section>

        <Section title="Footer — תחתית האתר">
          <Field
            label="טאגליין"
            value={copy.footer.tagline}
            onChange={(v) => update((c) => ((c.footer.tagline = v), c))}
          />
          <Field
            label='שורת "ייעוץ עסקה — בקרוב" בניווט'
            value={copy.footer.consultation_soon}
            onChange={(v) =>
              update((c) => ((c.footer.consultation_soon = v), c))
            }
          />
          <Field
            label="טקסט הקישור לאיש אדמה"
            value={copy.footer.back_to_ishadama}
            onChange={(v) => update((c) => ((c.footer.back_to_ishadama = v), c))}
          />
          <Field
            label="כתובת אימייל"
            value={copy.footer.contact_email}
            onChange={(v) => update((c) => ((c.footer.contact_email = v), c))}
          />
        </Section>

        <div style={{ height: 80 }} />
      </main>
    </div>
  );
}

// --- Building-block components ---

function Section({
  title,
  defaultOpen = false,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  return (
    <details
      open={defaultOpen}
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E8E2DA",
        borderRadius: 12,
        marginBottom: 16,
        padding: "16px 20px",
      }}
    >
      <summary
        style={{
          cursor: "pointer",
          fontSize: 18,
          fontWeight: 700,
          color: "#4A3E36",
          userSelect: "none",
        }}
      >
        {title}
      </summary>
      <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 14 }}>
        {children}
      </div>
    </details>
  );
}

function CardSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        backgroundColor: "#F2EEE9",
        borderRadius: 8,
        padding: "12px 14px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <div style={{ fontSize: 14, fontWeight: 700, color: "#4A3E36" }}>{title}</div>
      {children}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label style={labelStyle}>
      <span>{label}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={inputStyle}
      />
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
  rows = 3,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
}) {
  return (
    <label style={labelStyle}>
      <span>{label}</span>
      <textarea
        value={value}
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
        style={{ ...inputStyle, resize: "vertical" }}
      />
    </label>
  );
}

function StringList({
  label,
  items,
  onChange,
}: {
  label: string;
  items: string[];
  onChange: (arr: string[]) => void;
}) {
  return (
    <div>
      <div style={{ fontSize: 13, fontWeight: 600, color: "#4A3E36", marginBottom: 6 }}>
        {label}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 6 }}>
            <input
              type="text"
              value={item}
              onChange={(e) => {
                const next = [...items];
                next[i] = e.target.value;
                onChange(next);
              }}
              style={{ ...inputStyle, flex: 1 }}
            />
            <button
              type="button"
              onClick={() => onChange(items.filter((_, k) => k !== i))}
              style={smallBtnStyle}
              title="הסר"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => onChange([...items, ""])}
        style={{ ...addBtnStyle, marginTop: 6 }}
      >
        + הוסף נקודה
      </button>
    </div>
  );
}

function Banner({ kind, message }: { kind: "success" | "error"; message: string }) {
  const bg = kind === "success" ? "rgba(159, 199, 148, 0.4)" : "#FEE2E2";
  const fg = kind === "success" ? "#18362A" : "#991B1B";
  return (
    <div
      style={{
        backgroundColor: bg,
        color: fg,
        padding: "12px 24px",
        fontSize: 14,
        fontWeight: 600,
      }}
    >
      {message}
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 4,
  fontSize: 13,
  fontWeight: 600,
  color: "#4A3E36",
};

const inputStyle: React.CSSProperties = {
  backgroundColor: "#FCFBF7",
  border: "1px solid #E8E2DA",
  borderRadius: 6,
  padding: "8px 10px",
  fontSize: 14,
  color: "#0D1C16",
  fontFamily: "inherit",
  width: "100%",
  boxSizing: "border-box",
};

const addBtnStyle: React.CSSProperties = {
  backgroundColor: "#FFFFFF",
  color: "#18362A",
  border: "1px dashed #18362A",
  borderRadius: 6,
  padding: "6px 12px",
  fontWeight: 600,
  fontSize: 13,
  cursor: "pointer",
  alignSelf: "flex-start",
};

const removeBtnStyle: React.CSSProperties = {
  ...addBtnStyle,
  color: "#991B1B",
  borderColor: "#991B1B",
  marginRight: 8,
};

const smallBtnStyle: React.CSSProperties = {
  backgroundColor: "#FFFFFF",
  color: "#991B1B",
  border: "1px solid #E8E2DA",
  borderRadius: 6,
  padding: "0 10px",
  cursor: "pointer",
};
