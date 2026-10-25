interface PageHeaderProps {
  title: string;
  intro: string;
  centered?: boolean;
}

export function PageHeader({ title, intro, centered = false }: PageHeaderProps) {
  return (
    <header className={centered ? 'page-header page-header--centered' : 'page-header'}>
      <h1 className="page-header__title">{title}</h1>
      <p className="page-header__intro">{intro}</p>
    </header>
  );
}
