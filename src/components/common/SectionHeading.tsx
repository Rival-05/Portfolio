interface SectionHeadingProps {
  subheading: string;
  heading: string;
}
export default function SectionHeading({
  subheading,
  heading,
}: SectionHeadingProps) {
  return (
    <div className="space-y-1 text-left">
      <p className="text-secondary text-sm sm:text-base">{subheading}</p>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
        {heading}
      </h2>
    </div>
  );
}
