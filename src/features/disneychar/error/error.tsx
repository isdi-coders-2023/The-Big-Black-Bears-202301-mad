import "./error.scss";

export default function ErrorPage() {
  return (
    <section className="error">
      <h2 className="error__title">Error 404:</h2>
      <h2 className="error__title-desktop">Error 404: Bear not found</h2>
      <p className="error__phrase-desktop">
        This is not the bear you are looking for!
      </p>
      <p className="error__phrase1">Not the bear</p>
      <p className="error__phrase2">you are looking for...</p>
      <span>
        <img
          className="error__image"
          src="../../../../../img/bear.png"
          alt="Bear"
        ></img>
      </span>
    </section>
  );
}
