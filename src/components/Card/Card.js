import React from 'react';

function Card(props) {
  function handleClick() {
    props.onClick(props.card);
    
  }
  return (
    <div className="element">
      <img className="element__image" src={props.card.link} alt='' onClick={handleClick}/>
      <button className="element__trash" type="button" />
      <div className="element__text">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-container">
          <button className="element__like-btn" type="button" />
          <p className={`element__like-counter ${(props.card.likes.length > 0) ? 'element__like-counter_display' : ''}`}>{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  )
}







// class Card {
//   constructor(items) {
//     this._cardTitle = items.name;
//     this._cardLink = items.link;
//     this._cardOwnerID = items.owner._id;
//     this._likes = items.likes;
//     this._id = items._id;
//     // this._handleCardClick = handleCardClick;
//     // this._handleDeleteClick = handleDeleteClick;
//     // this._handleLike = handleLike;
//     // this._userId = "a2fbf9b0cad144ef98de1a23";
//     // this._userID = userID;

//   }

//   id() {
//     return this._id;
//   }

//   handleDeleteCard(evt) {
//     evt.target.closest(".element").remove();
//   }

//   _handleLikeIcon(evt) {
//     evt.target.classList.toggle("element__like-black");
//   }

//   isLiked() {
//     return this._likes.some(item => item._id === this._userID);
//   }

//   _likeCounter() {
//     this._cloneCard.querySelector(".element__like-counter").textContent = this._likes.length;
//     if (this.isLiked()) {
//       this._cardLike.classList.add("element__like-black");
//     } else {
//       this._cardLike.classList.remove("element__like-black");
//     }
//   }

//   updateLikes(likes) {
//     this._likes = likes;
//     this._likeCounter();
//   }

//   _setEventListener() {
//     this._cardDeleteButton = this._cloneCard.querySelector('.element__trash');
//     this._cardLike.addEventListener("click", this._handleLikeIcon);
//     this._cardLike.addEventListener("click", () => this._handleLike(this, this.id()));

//     this._cardDeleteButton.addEventListener("click", (evt) => { this._handleDeleteClick(this.id(), evt.target.closest(".element"))});
//     this._cardImage.addEventListener("click", () => this._handleCardClick());
//   }

//   showLikes() {
//     if (this._likes.length > 0) {
//       this._cloneCard.querySelector(".element__like-counter").classList.add("element__like-counter_display");
//     } else if (this._likes.length === 0) {
//       this._cloneCard.querySelector(".element__like-counter").classList.remove("element__like-counter_display");
//     }
//   }

//   _showDeleteBtn() {
//     if (this._cardOwnerID == this._userID) {
//       this._cloneCard.querySelector(".element__trash").classList.add("element__trash_display");
//     }
//   }

//   getCard() {
//     const cardTemplate = document.querySelector("#el-template").content.querySelector(".element");
//     this._cloneCard = cardTemplate.cloneNode(true);
//     this._cardLike = this._cloneCard.querySelector(".element__like-btn");
//     this._cardImage = this._cloneCard.querySelector(".element__image");
//     this._cardName = this._cloneCard.querySelector(".element__title");
//     this._cardTrashIcon = this._cloneCard.querySelector(".element__trash");
//     this._cardImage.src = this._cardLink;
//     this._cardName.textContent = this._cardTitle;
//     this._cardImage.alt = `Picture of ${this._cardName.textContent}`;

//     this._showDeleteBtn();
//     this.showLikes();
//     this._likeCounter();
//     this._setEventListener();
//     return this._cloneCard;
//   }
// }

export default Card;
