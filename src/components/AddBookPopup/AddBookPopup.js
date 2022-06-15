import PopupWithForm from "../PopupWithForm";
import React from "react";

const AddBookPopup = ({ isOpen, onClose, onAddStaffer, isEdit, card }) => {

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
    onAddStaffer({
      id: `${Math.floor(Math.random() * 76352087)}`,
      name: newAuthorName,
      title: newTitle,
      image: newImageLink,
    });
  }

  React.useEffect(() => {
    if (isEdit === true) {
      setNewAuthorName(card.name);
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
      title="Новая книга"
      buttonText="Добавить"
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
