interface SectionHeadingProps {
  subheading: string;
  heading: string;
}
export default function SectionHeading({
  subheading,
  heading,
}: SectionHeadingProps) {
  return (
    <div>
      <p className="text-secondary text-sm">{subheading}</p>
      <h2 className="text-2xl font-bold">{heading}</h2>
    </div>
  );
}
