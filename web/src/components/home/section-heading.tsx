type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)] sm:text-sm">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl leading-none tracking-[-0.04em] text-[var(--color-brown-deep)] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-xl text-base leading-7 text-[var(--color-brown-soft)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
