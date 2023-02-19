import "./header.scss";
type HeaderProps = { children: JSX.Element };
export function Header({ children }: HeaderProps) {
  return (
    <header className="header">
      <div className="logos">
        <div className="logos-desktop">
          <img
            className="logos__logo1"
            src="../img/disney.png"
            alt="Disney logo"
          />
          <img
            className="logos__logo2"
            src="../img/disney-logo.png"
            alt="Disney logo1"
          />
        </div>
      </div>
      {children}
    </header>
  );
}
