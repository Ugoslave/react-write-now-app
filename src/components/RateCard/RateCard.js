import React from 'react';

import closeBtn from '../../img/card-close-button.svg';

import './RateCard.css';

const RateCard = ({ card, onClose }) => {
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
        <div className="rate-card">
          <h2 className="rate-card__title">
            {card ? card.author : ''}
          </h2>
          <p className="rate-card__subtitle">
            {card ? card.title : ''}
          </p>
            <img
              src='#'
              alt="Обложка книги"
              className="rate-card__arrow"
            />
        </div>
      </div>
    </div>
  );
}

export default RateCard;
