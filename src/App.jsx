import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Available from "./components/Available/Available";
import Cards from "./components/Cards";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer";
import { toast } from "react-toastify";

const App = () => {
  const [coins, setCoins] = useState(0);
  const [active, setActive] = useState(true);
  const [players, setPlayers] = useState([]);

  const handleAddCoin = () => {
    const newBalance = coins + 1200000;
    setCoins(newBalance);
    toast.success('Congratulations for claimed', {
      position: 'top-center'
    });
  }

  const handleActiveContent = content => {
    if(content === true){
      setActive(true);
    }else{
      setActive(false);
    }
  }

  const handleAddPlayer = player => {
    const playerExist = players.find(p => p.playerId === player.playerId);
    // console.log(player);
    if(!playerExist && coins >= player.biddingPrice && players.length < 6){
      setPlayers([...players, player]);
      toast.success('You have successfully added', {
        position: 'top-center'
      });
      const decreaseCoins = coins - player.biddingPrice;
      setCoins(decreaseCoins);
    }else{
      toast.error('You cannot select now');
    }
}
  // console.log(players);

  const handleRemovePlayer = id => {
    const newPlayer = players.filter(p => p.playerId !== id);
    setPlayers(newPlayer);
    toast.success('Deleted Successfully', {
      position: 'top-center'
    });
  }

  return (
    <div>
      <main className="md:w-4/5 w-11/12 mx-auto lg:mb-96 md:mb-80 mb-96">
      {/* Header Start */}
      <Header coins={coins}></Header>

      {/* Banner Start */}
       <Banner handleAddCoin={handleAddCoin}></Banner>

          {/* Available Players */}
       <Available active={active} players={players} handleActiveContent={handleActiveContent}></Available>

       {/* Cards content */}
       <Cards active={active} players={players} handleAddPlayer={handleAddPlayer} handleActiveContent={handleActiveContent} handleRemovePlayer={handleRemovePlayer}></Cards>
    </main>

       {/* Footer */}
       <footer className="relative" style={{
        backgroundColor: 'rgb(6, 9, 26)',
        marginTop: '20px'
       }}>
          {/* Newsletter */}
       <section className="absolute md:-top-56 -top-[340px] lg:left-36 md:left-24">
       <Newsletter></Newsletter>
       </section>
        <Footer></Footer>
       </footer>
    </div>
  )
}

export default App;