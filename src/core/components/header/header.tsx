import "./header.scss";
export function Header() {
  return (
    <header className="header">
      <div className="logos">
        <img
          className="logos__logo1"
          src="../img/disney.png"
          alt="Disney logo"
        />
        <img
          className="logos__logo2"
          src="../img/burguer.png"
          alt="Burguer logo"
        />
      </div>
    </header>
  );
}
