import React from 'react';

import Header from '../Header/Header';
import DataRow from '../DataRow/DataRow';
import Footer from '../Footer/Footer';
import BookCard from '../BookCard/BookCard';
import AddBookPopup from "../AddBookPopup/AddBookPopup";

import books from '../../constants/books';

import addButton from "../../img/contacts-container-add-button.svg";

import './App.css';

const App = () => {
  const [selectedCard, setSelectedCard] = React.useState('');
  const [isAddBookPopupOpen, setIsAddBookPopupOpen] = React.useState(false);
  const [isEditBookData, setIsEditBookData] = React.useState(false);
  const [selectedBook, setSelectedBook] = React.useState(null);
  const [indexElement, setIndexElement] = React.useState(null);
  const [newList, setNewList] = React.useState([]);
  const [items, setItems] = React.useState([]);

  const saveBookListInLocalStorage = (list) => {
    const jsonBooks = JSON.stringify(list);

    localStorage.setItem("list", jsonBooks);
  }

  const getBookList = () => {
    const bookList = JSON.parse(localStorage.getItem("list"));

    setItems(bookList);
  }

  const removeBookListInLocalStorage = () => {
    localStorage.removeItem("list");
  }


  React.useEffect(() => {
    saveBookListInLocalStorage(books);
      getBookList();
  }, []);

  const handleAddBookClick = () => {
    setIsAddBookPopupOpen(true);
  }

  const handleCardClick = (selectedCard) => {
    setSelectedCard(selectedCard);
  }

  const closeCard = () => {
    setSelectedCard(null);
  }

  const handleCardDelete = (evt) => {
    const targetElement = evt.target.closest(".data-row");

    targetElement.remove();
    setIndexElement(books.findIndex(n => n.id === evt.currentTarget.id));
    books.splice(indexElement, 1);
    setNewList(books);
    removeBookListInLocalStorage();
    saveBookListInLocalStorage(newList);
  }

  const closeAllPopups = () => {
    setIsAddBookPopupOpen(false);
    setSelectedCard(null);
    setIsEditBookData(false);
    setIndexElement(null);
  }

  const handleAddBookSubmit = (evt) => {
    const newBookList = [evt, ...items];

    removeBookListInLocalStorage();
    saveBookListInLocalStorage(newBookList);

    setItems(newBookList);
    closeAllPopups();
  }

  const handleEditBookData = (evt) => {
    handleAddBookClick();
    setIsEditBookData(true);
    setSelectedBook(evt);
    setIndexElement(books.findIndex(n => n.id === evt.id));
  }

  const handleChangeBookData = (evt) => {
    books.splice(indexElement, 1, evt);
    setItems(books);
    closeAllPopups();
  }

  return (
    <>
      <div className="app">
        <Header />
        <section className="data-box">
          <ul className="book-list">
            {items.map((item) => {
              return (
                <DataRow
                  key={item.id}
                  row={item}
                  onRowClick={handleCardClick}
                  onCardDelete={handleCardDelete}
                  onEditCard={handleEditBookData}
                />
              );
            })}
          </ul>
          <button
            type="button"
            className="element__button element__button_section-place"
            onClick={handleAddBookClick}
          >
            <img src={addButton} alt="Добавить книгу" />
          </button>
        </section>
        <Footer />
      </div>
      <BookCard
        card={selectedCard}
        onClose={closeCard}
      />
      <AddBookPopup
        isOpen={isAddBookPopupOpen}
        onClose={closeAllPopups}
        onAddBook={isEditBookData ? handleChangeBookData : handleAddBookSubmit}
        isEdit={isEditBookData}
        card={selectedBook}
      />
    </>
  );
}

export default App;
