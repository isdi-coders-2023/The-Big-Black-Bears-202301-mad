import { Link } from "react-router-dom";
import {} from "../../../core/components/app.router/app.router";
import "./home.scss";

export default function HomePage() {
  return (
    <section className="homepage">
      <h2>Discover the best Disney characters in history.</h2>
      <Link to={"/home"}>
        <button className="explorebutton" type="button">
          EXPLORE
        </button>
      </Link>
    </section>
  );
}
