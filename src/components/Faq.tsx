import SectionTitle from "./SectionTitle";
import copy from "../../content/copy.json";

type FaqItem = { q: string; a: string };

export default function Faq({
  title = copy.faq.title,
  items = copy.faq.items,
  id = "faq",
}: {
  title?: string;
  items?: FaqItem[];
  id?: string;
}) {
  return (
    <section id={id} className="py-20 md:py-28" style={{ backgroundColor: "#FCFBF7" }}>
      <div className="mx-auto max-w-3xl px-5">
        <SectionTitle align="center">{title}</SectionTitle>
        <dl className="mt-10 space-y-8">
          {items.map((f) => (
            <div
              key={f.q}
              className="rounded-xl p-6"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E2DA" }}
            >
              <dt className="text-lg font-bold" style={{ color: "#4A3E36" }}>
                {f.q}
              </dt>
              <dd className="mt-3 leading-relaxed" style={{ color: "#0D1C16" }}>
                {f.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
