interface PageHeaderProps {
  title: string;
  intro: string;
}

export function PageHeader({ title, intro }: PageHeaderProps) {
  return (
    <header className="page-header">
      <h1 className="page-header__title">{title}</h1>
      <p className="page-header__intro">{intro}</p>
    </header>
  );
}
