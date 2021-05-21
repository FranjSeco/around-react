import React from 'react';
import {CurrentUserContext} from '../../contexts/CurrentUserContext.js'

function Card(props) {
  function handleClick() {
    props.onClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onDeleteCardPopup(props.card._id);
  }

  const userInfo = React.useContext(CurrentUserContext); 
  const isOwn = userInfo._id === props.card.owner._id;
  const isLiked = props.card.likes.some(i => i._id === userInfo._id)

  return (
    <div className="element">
      <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
      <button className={`element__trash ${(isOwn) ? 'element__trash_display' : '' }`} onClick={handleDeleteClick} type="button" />
      <div className="element__text">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-container">
          <button className={`element__like-btn ${(isLiked) ? 'element__like-black' : ''}`} onClick={handleLikeClick} type="button" />
          <p className={`element__like-counter ${(props.card.likes.length > 0) ? 'element__like-counter_display' : ''}`}>{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;
