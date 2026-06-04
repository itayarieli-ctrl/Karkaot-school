export default function SectionTitle({
  children,
  align = "right",
}: {
  children: React.ReactNode;
  align?: "right" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-right"}>
      <h2
        className="text-3xl font-bold tracking-tight md:text-4xl"
        style={{ color: "#4A3E36" }}
      >
        {children}
      </h2>
      {align === "center" && (
        <div className="section-divider">
          <span className="dot" />
        </div>
      )}
    </div>
  );
}
