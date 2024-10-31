import PropTypes from "prop-types";

import Card from "./Card";

const Selected = ({players, active, handleActiveContent, handleRemovePlayer}) => {

    return (
        <div className="mt-3">
            {
                players.map(player => 

                    <div key={player.playerId} className="lg:w-[1210px] w-11/12 mx-auto border border-gray-200 rounded-2xl flex justify-between items-center p-3 mb-5">
                <div className="flex gap-5 items-center">
                    <img className="w-24 h-24 rounded-2xl" src={player.image} alt={`The image of ${player.name}`}/>
                    <div className="space-y-1">
                    <h2 className="md:text-2xl text-xl font-bold">{player.name}</h2>
                    <p className="md:text-base text-sm text-gray-500 font-medium">{player.role}</p>
                    <p className="md:text-base text-sm text-gray-500 font-medium">Price: ${player.biddingPrice}</p>
                    </div>
                </div>

                <div className="text-red-500 mr-3 cursor-pointer" onClick={()=> handleRemovePlayer(player.playerId)}>
                <i className="fa-regular fa-trash-can text-lg"></i>
                </div>
            </div>
        )
    }

            <div className="mt-10 w-[185px] py-2 rounded-2xl" style={{
                    border: '1px solid rgb(19, 19, 19)',
                }}>
                <button onClick={() => handleActiveContent(true)} className="btn rounded-xl px-5 font-bold border-none mx-3" style={{
                    backgroundColor: 'rgb(231, 254, 41)',
                }}>Add More Player</button>
            </div>

            {
                active && <Card></Card>
            }
</div>
    );
};

Selected.propTypes = {
    players: PropTypes.array,
    active: PropTypes.array,
    handleActiveContent: PropTypes.func,
    handleRemovePlayer: PropTypes.func
}

export default Selected;