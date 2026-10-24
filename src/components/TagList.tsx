interface TagListProps {
  tags: readonly string[];
  label: string;
}

export function TagList({ tags, label }: TagListProps) {
  return (
    <ul className="tag-list" aria-label={label}>
      {tags.map((tag) => (
        <li key={tag} className="tag">
          {tag}
        </li>
      ))}
    </ul>
  );
}
