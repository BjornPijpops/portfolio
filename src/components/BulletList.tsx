interface BulletListProps {
  heading: string;
  items: readonly string[];
}

export function BulletList({ heading, items }: BulletListProps) {
  if (items.length === 0) return null;
  return (
    <div className="bullet-list">
      <h4 className="bullet-list__heading">{heading}</h4>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
