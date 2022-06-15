import React from 'react';
import api from '../../utils/api';
import closeBtn from '../../img/card-close-button.svg';
import downArrow from '../../img/rate-card-down-arrow.png';
import upArrow from '../../img/rate-card-up-arrow.png';

import './RateCard.css';

const RateCard = ({ card, onClose }) => {

  let dates = [];
  let al = [];

  const [rates, setRates] = React.useState([])


  const createDates = () => {

    const createDay = (day) => {
      const date = new Date();
      date.setDate(date.getDate() - day);

      return date.getFullYear() + '/' + (date.getMonth() < 10 ? '0' + Number(date.getMonth() + 1) : Number(date.getMonth() +1)) + '/' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
    }

    for (let i = 1; i <= 10; i++) {
      dates[i-1] = createDay(i);
    }
  }



  const getPrevRates = () => {

    let arr = [];

    for (let i of dates) {
      api
    .getArchiveRates(i)
    .then((res) => {
      const arr = Object.values(res.Valute).map(i => Object.values(i));
      const newArr = arr.map((item) => {
        return {
          'char': item[2],
          'rate': item[5],
        }
      });

      const item = card ? newArr.filter((i) => i.char === card.CharCode)[0] : null;

      arr.push(item);


    })
    .catch(() => {
      console.log(`За ${i} курс недоступен`);
    });


    }

    setRates(arr);
  }

  console.log(rates);

  React.useEffect(() => {

    if (card){
      createDates();
      getPrevRates();
    }
  }, [card]);



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
            {`${card ? card.Nominal : ''} ${card ? card.Name : ''}`}
          </h2>
          <p className="rate-card__subtitle">
            {`${card ? (card.Value).toFixed(2) : ''} рублей`}
          </p>
          <div className="rate-card__code-box">
            <ul className="rate-card__list">
              <li className="rate-card__code">
                {card ? card.CharCode : ''}
              </li>
              <li className="rate-card__code">
                {card ? card.NumCode : ''}
              </li>
            </ul>
            <img
              src={(card ? card.Value > card.Previous : '')  ? upArrow : downArrow}
              alt="Стрелка"
              className="rate-card__arrow"
            />
            <ul className="rate-card__list">
              <li className="rate-card__code">
                {`${(card ? (card.Previous - card.Value) > 0 : '') ? '-' : '+'}
                  ${card ? Math.abs((((card.Previous - card.Value) / card.Value) * 100).toFixed(3)) : ''} %`}
              </li>
              <li className="rate-card__code">
                {card ? (card.Previous).toFixed(2) : ''}
              </li>
            </ul>
          </div>
          <p className="rate-card__previous-rate-title">за последние 10 дней:</p>
          <ul className="rate-card__rates-list">
            <li className="rate-card__rate">{rates.rate}</li>
            <li className="rate-card__rate">{rates.rate}</li>
            <li className="rate-card__rate">{rates.rate}</li>
            <li className="rate-card__rate">{rates.rate}</li>
            <li className="rate-card__rate">{rates.rate}</li>
            <li className="rate-card__rate">{rates.rate}</li>
            <li className="rate-card__rate">{rates.rate}</li>
            <li className="rate-card__rate">{rates.rate}</li>
            <li className="rate-card__rate">{rates.rate}</li>
            <li className="rate-card__rate">{rates.rate}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RateCard;
