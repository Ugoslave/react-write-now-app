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
    <li className="data-row">
      <ul className="data-row__list" onClick={handleClick}>
        <li className="data-row__item-box data-row__item-box_content_name">
          <p className="data-row__text">{row.author}</p>
        </li>
        <li className="data-row__item-box">
          <p className="data-row__text">{row.title}</p>
        </li>
      </ul>
      <div className="data-row__button-box">
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
          id={row.id}
          onClick={handleDeleteClick}
        >
          <img src={removeButton} alt="Удалить" />
        </button>
      </div>
    </li>
  );
}

export default DataRow;
