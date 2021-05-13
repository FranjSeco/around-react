import React from 'react';
import api from '../../utils/api.js'
import Card from '../Card/Card.js'


function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');

    const [cards, setCards] = React.useState([]);
    


    React.useEffect(() => {
        api.apiUserInfo()
            .then(data => {
                setUserName(data.name);
                setUserDescription(data.about);
                setUserAvatar(data.avatar);
            })
            .catch((err) => {
                console.log(`${err}`);
            });

    }, [])

    React.useEffect(() => {
        api.getInitialCards()
            .then(data => {
                setCards(data);
            })
            .catch((err) => {
                console.log(`${err}`);
            });
    }, [])



    return (
        <main className="main">
            <section className="profile">
                <div onClick={props.onEditAvatar} className="profile__avatar" />
                <img className="profile__avatar-image" src={userAvatar} alt="Profile" />
                <div className="profile__info">
                    <div className="profile__info-block">
                        <h1 className="profile__info-title">{userName}</h1>
                        <button onClick={props.onEditProfile} className="profile__info-btn" type="button">
                        </button>
                    </div>
                    <p className="profile__info-about">{userDescription}</p>
                </div>
                <button onClick={props.onAddPlace} className="profile__add-btn" type="button">
                </button>
            </section>
            <div className="elements">
                {
                    cards.map(
                        (card, id) => (<Card
                        key={id}
                        card={card}
                        onClick={() => props.onCardClick(card)} />))
                }
            </div>


        </main>
    )
}

export default Main;