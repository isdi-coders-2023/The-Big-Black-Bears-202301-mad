import "./header.scss";
export function Header() {
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
            alt="Disney logo"
          />
        </div>

        <div>
          <img
            className="logos__logo3"
            src="../img/burger.png"
            alt="Burger logo"
          />
        </div>
      </div>
    </header>
  );
}
