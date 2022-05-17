interface HeaderProps {
  selectedGenre: {
    title: string;
  };
}

export function Header(props: HeaderProps) {
  return (
    <header>
      <span className="category">Categoria:<span> {props.selectedGenre.title}</span></span>
    </header>
  );
}