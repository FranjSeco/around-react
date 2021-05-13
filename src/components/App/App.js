import React from 'react';

import Header from '../Header/Header.js'
import Main from '../Main/Main.js'
import PopupWithForm from '../PopUp/PopupWithForm.js'
import ImagePopup from '../PopUp/ImagePopup.js'
import Footer from '../Footer/Footer.js'

import './App.css';
import '../../index.css';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImageOpen, setIsImageOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState([]);
  

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick({ name, link }) {
    setSelectedCard({ name, link });
    setIsImageOpen(true);
  }

  function handleClose() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImageOpen(false);
    setSelectedCard([]);
  }

  return (
    <div className="App">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        
      />
      

      <PopupWithForm
        name={'profile'}
        title={'Edit Profile'}
        btn={'Save'}
        isOpen={isEditProfilePopupOpen}
        onClose={handleClose}>
        <input
          id="name-input"
          className="form-input profile-form__input profile-form__input_name"
          type="text"
          name="Name"
          placeholder='Name'
          minLength={2}
          maxLength={40}
          required
        />

        <span
          id="name-input-error"
          className="form-input-error" />
        <input
          id="about-input"
          className="profile-form__input profile-form__input_about form-input"
          type="text"
          name="About"
          placeholder='Job'
          minLength={2}
          maxLength={200}
          required
        />

        <span
          id="about-input-error"
          className="form-input-error"
        />

      </PopupWithForm>

      <PopupWithForm
        name={'avatar'}
        title={'Edit Avatar'}
        btn={'Save'}
        isOpen={isEditAvatarPopupOpen}
        onClose={handleClose}>
        <input id="avatar-input" className="avatar-form__input avatar-form__input_about form-input" placeholder="Avatar URL" type="url" name="link" required />
        <span id="avatar-input-error" className="form-input-error" />
      </PopupWithForm>

      <PopupWithForm
        name={'image'}
        title={'New Place'}
        btn={'Save'}
        isOpen={isAddPlacePopupOpen}
        onClose={handleClose}>
        <input id="image-input" className="image-form__input image-form__input_name form-input" placeholder="Title" type="text" name="name" minLength={1} maxLength={30} required />
        <span id="image-input-error" className="form-input-error" />
        <input id="url-input" className="image-form__input image-form__input_about form-input" placeholder="Image URL" type="url" name="link" required />
        <span id="url-input-error" className="form-input-error" />
      </PopupWithForm>

      <PopupWithForm
        name={'delete'}
        title={'Are you sure?'}
        btn={'Yes'}
        onClose={handleClose}>

      </PopupWithForm>

      <ImagePopup isOpen={isImageOpen} card={selectedCard}  onClose={handleClose}></ImagePopup>

      <Footer />
    </div>
  );
}

export default App;
