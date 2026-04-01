import { SectionKicker, SectionLead, SectionTitle } from "@/components/home/section-copy";

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
      <SectionKicker>{eyebrow}</SectionKicker>
      <SectionTitle>{title}</SectionTitle>
      {description ? <SectionLead className="max-w-xl">{description}</SectionLead> : null}
    </div>
  );
}
