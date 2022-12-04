interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <header className="flex justify-center py-4 font-bold text-4xl border-b border-colorBoarder">
      Wordle
    </header>
  );
};

export default Header;
