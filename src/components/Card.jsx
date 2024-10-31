import PropTypes from "prop-types";

const Card = ({card, handleAddPlayer}) => {
    const {name, 
             country, 
            image, 
           role, 
          battingType, 
        bowlingType,
    biddingPrice} = card;

    return (
        <div className="border border-gray-200 p-6 rounded-xl space-y-3">
            <img className="w-full lg:h-60 md:h-72 h-60 rounded-2xl" src={image} alt={`Image of the ${name}`}/>

                <h3 className="flex items-center gap-4 text-xl font-bold pt-3">
                    <i className="fa-solid fa-user text-2xl"></i> {name}
                </h3>

            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                 <p className="flex items-center gap-2 text-gray-400 font-medium">
                <i className="fa-solid fa-flag text-xl"></i> {country}
            </p>

            <button className="btn text-sm font-medium">{role}</button>
            </div>

            <h3 className="text-lg font-bold">Rating</h3>

            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{battingType}</h3>
                <h3 className="text-gray-500">{bowlingType}</h3>
            </div>

            <div className="flex justify-between items-center">
            <p className="md:text-lg font-semibold">Price: ${biddingPrice}</p>

            <button onClick={() => handleAddPlayer(card, biddingPrice)} className="lg:px-4 px-3 md:px-7 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:btn-ghost">Choose Player</button>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object,
    handleAddPlayer: PropTypes.func
}

export default Card;