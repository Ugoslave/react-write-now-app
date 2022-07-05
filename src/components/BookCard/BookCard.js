import React from 'react';

import closeBtn from '../../img/card-close-button.svg';
import loader from '../../img/book-card-loader.gif';

import './BookCard.css';

const BookCard = ({ card, onClose }) => {
  return (
    <div className={card ? "card  card_active" : "card"}>
      <div className="card__container">
        <button
          type="button"
          className="card__close-button"
          onClick={onClose}
        >
          <img
            src={closeBtn}
            alt="Закрыть"
            className="card__button-image"
          />
        </button>
        <div className="card__data-box">
          <h2 className="card__title">
            {card ? card.author : 'IT`S EMPTY NOW HERE, SORRY)'}
          </h2>
          <p className="card__subtitle">
            {card ? card.title : 'DATA WERE HERE...'}
          </p>
            <img
              src={card ? card.image : loader}
              alt="Обложка книги"
              className="card__image"
            />
        </div>
      </div>
    </div>
  );
}

export default BookCard;
