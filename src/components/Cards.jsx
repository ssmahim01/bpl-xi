import { useEffect, useState } from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import Selected from "./Selected";

const Cards = ({active, handleAddPlayer, players, handleActiveContent, handleRemovePlayer}) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('players.json')
        .then(response => response.json())
        .then(data => setCards(data))
    }, []);

    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 my-7">
            { 
               active? cards.map((card, i) => <Card key={i} card={card} handleAddPlayer={handleAddPlayer}></Card>) : <Selected players={players} active={active} handleActiveContent={handleActiveContent} handleRemovePlayer={handleRemovePlayer}></Selected>
            }
        </div>
    );
};

Cards.propTypes = {
    active: PropTypes.array,
    players: PropTypes.array,
    handleAddPlayer: PropTypes.func,
    handleActiveContent: PropTypes.func,
    handleRemovePlayer: PropTypes.func
}

export default Cards;