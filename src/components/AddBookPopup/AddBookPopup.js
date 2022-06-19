import PopupWithForm from "../PopupWithForm/PopupWithForm";
import React from "react";

import './AddBookPopup.css';

const AddBookPopup = ({ isOpen, onClose, onAddBook, isEdit, card }) => {

  const [newImageLink, setNewImageLink] = React.useState("");
  const [newAuthorName, setNewAuthorName] = React.useState("");
  const [newTitle, setNewTitle] = React.useState("");


  const handleImageInputChange = (evt) => {
    setNewImageLink(evt.target.value);
  }

  const handleNameInputChange = (evt) => {
    setNewAuthorName(evt.target.value);
  }

  const handleTitleInputChange = (evt) => {
    setNewTitle(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddBook({
      id: `${Math.floor(Math.random() * 76352087)}`,
      author: newAuthorName,
      title: newTitle,
      image: newImageLink,
    });
  }

  React.useEffect(() => {
    if (isEdit === true) {
      setNewAuthorName(card.author);
      setNewTitle(card.title);
      setNewImageLink(card.image);
    }
  }, [isEdit]);

  React.useEffect(() => {
    if (isOpen === false) {
      setNewAuthorName('');
      setNewTitle('');
      setNewImageLink('');
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      name="add-element"
      title={isEdit ? "Изменение данных" : "Новая книга"}
      buttonText={isEdit ? "Сохранить" : "Добавить"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        required
        type = "text"
        name = "author-data"
        id = "author-name"
        placeholder="Имя автора"
        minLength="1" maxLength="30"
        className = "contact-form__input"
        value={newAuthorName}
        onChange={handleNameInputChange}
      />
      <span id="author-name-error" className="popup__input-error" />
      <input
        required
        type = "text"
        name = "title"
        id = "book-title"
        placeholder="Название книги"
        minLength="1"
        maxLength="40"
        className = "contact-form__input"
        value={newTitle}
        onChange={handleTitleInputChange}
      />
      <span id="user-surname-error" className="popup__input-error" />
      <input
        type = "url"
        name = "image"
        id = "book-image"
        placeholder="Ссылка на обложку"
        minLength="10"
        className = "contact-form__input"
        value={newImageLink}
        onChange={handleImageInputChange}
      />
      <span id="book-image-error" className="popup__input-error" />
    </PopupWithForm>
  );
}

export default AddBookPopup;
