import closeButton from "../../img/card-close-button.svg";

import './PopupWithForm.css';

const PopupWithForm = (props)=> {
  return (
    <div
      className={`popup ${
        props.isOpen && "popup_active"
      }`}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__button-close"
          onClick={props.onClose}
        >
          <img
            src={closeButton}
            alt="Закрыть"
            className="popup__button-image"
          />
        </button>
        <div className="popup__content-box">
          <h2 className="popup__title">
            {props.title}
          </h2>
          <form
            name={props.name}
            className= "book-form"
            noValidate
            onSubmit={props.onSubmit}
          >
            {props.children}
            <button
              type="submit"
              className="book-form__button"
            >
              {props.buttonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopupWithForm;
