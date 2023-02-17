import "./form.scss";

export function Form() {
  return (
    <form className="form">
      <div className="form__container">
        <input id="name" name="name" type="name" value="" placeholder="Name" />
        <div className="form__checkbox">
          <p className="form__checkbox__title">
            Where does your character appear?
          </p>
          <div className="form__checkbox1">
            <input type="checkbox" id="appear" name="appear" value="Movie" />
            <label className="form__checkbox__label">Movie</label>
          </div>
          <div className="form__checkbox2">
            <input
              type="checkbox"
              id="appear"
              name="appear"
              value="Short films"
            />
            <label className="form__checkbox__label">Short films</label>
          </div>
          <div className="form__checkbox3">
            <input type="checkbox" id="appear" name="appear" value="TV Shows" />
            <label className="form__checkbox__label">TV Shows</label>
          </div>
          <div className="form__checkbox4">
            <input
              type="checkbox"
              id="appear"
              name="appear"
              value="VideoGames"
            />
            <label className="form__checkbox__label">VideoGames</label>
          </div>
        </div>
        <input
          id="description"
          name="description"
          type="description"
          value=""
          placeholder="Description"
        />
        <input
          id="picture"
          name="picture"
          type="picture"
          value=""
          placeholder="Image"
        />
        <button className="form__button" type="submit"></button>
      </div>
    </form>
  );
}
