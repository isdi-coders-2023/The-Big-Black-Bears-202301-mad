import "./about.scss";

export default function AboutPage() {
  return (
    <section className="about">
      <h2 className="about__title">About us</h2>
      <div className="about-containers">
        <div className="about__div1">
          <p>Welcome to our fancy app!</p>
        </div>
        <div className="about__div2">
          <p>
            This project is made with the purpose to make the Disney brand known
            worldwide.
          </p>
        </div>
        <div className="about__div3">
          <p>
            Our mission is to gather all the information related with all the
            characters and make it available for all our users.
          </p>
        </div>
        <div className="about__div4">
          Take a look at some of them and find out in which video games and
          films they have appeared.
        </div>
      </div>
    </section>
  );
}
