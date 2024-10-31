import PropTypes from 'prop-types';
import './Available.css';

const Available = ({active, handleActiveContent, players}) => {
    return (
        <div className="flex md:justify-between justify-center items-center flex-wrap space-y-4">
          <div>
            <h2 className="text-3xl font-bold">{active? 'Available Players' : `Selected Players (${players.length}/6)`}</h2>
          </div>

          <div className="join">
            <button onClick={() => handleActiveContent(true)} className={`${active? "bg-active btn font-bold px-6 join-item" : "btn text-gray-400 font-medium px-6"}`}>Available</button>
            <button onClick={() => handleActiveContent(false)} className={active? "btn text-gray-400 font-medium px-6" : "bg-active btn font-bold px-6 join-item"}>Selected ({players.length})</button>
          </div>
     </div>
    );
  };
  

Available.propTypes = {
  active: PropTypes.array,
  players: PropTypes.array,
  handleActiveContent: PropTypes.func
}

export default Available;