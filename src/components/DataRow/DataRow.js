import removeButton from "../../img/element-removeButton.svg";
import editButton from "../../img/element-editButton.svg";

import './DataRow.css';


const DataRow = ({ row, onRowClick, onCardDelete, onEditCard }) => {

  const handleClick = () => {
    onRowClick(row);
  }

  function handleEditClick() {
    onEditCard(row);
  }

  function handleDeleteClick(evt) {
    onCardDelete(evt);
  }

  return (
    <li
      className="data-row"
      onClick={handleClick}
    >
      <ul className="data-row__list">
        <li className="data-row__item-box data-row__item-box_content_code">
          <p className="data-row__text">{book.author}</p>
        </li>
        <li className="data-row__item-box data-row__item-box_content_price">
          <p className="data-row__text">{book.title}</p>
        </li>
        <li className="data-row__item-box data-row__item-box_content_ratio">
          <button
            type="button"
            className="element__button"
            onClick ={handleEditClick}
          >
            <img src={editButton} alt="Редактировать" />
          </button>
          <button
            type="button"
            className="element__button"
            onClick={handleDeleteClick}
          >
            <img src={removeButton} alt="Удалить" />
          </button>
        </li>
      </ul>
    </li>
  );
}

export default DataRow;
