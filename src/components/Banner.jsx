import PropTypes from "prop-types";

const Banner = ({handleAddCoin}) => {
    return (
        <div className="py-16 mb-8 bg-cover bg-center bg-no-repeat bg-gray-900 rounded-2xl" style={{
            backgroundImage: "url('assets/bg-shadow.png')"
        }}>

            {/* Main image of Banner */}
            <div className="flex justify-center">
                <img src="assets/banner-main.png" alt="The main image of Banner"/>
            </div>

            <div className="md:w-3/5 w-11/12 mx-auto my-8 space-y-5 text-center">
                <h1 className="text-white md:text-3xl text-2xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>

                <h3 className="md:text-xl text-gray-400 font-medium">Beyond Boundaries Beyond Limits</h3>

                <div className="w-[186px] py-2 mx-auto rounded-xl" style={{
                    border: '2px solid rgb(231, 254, 41)',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)'
                }}>
                <button onClick={handleAddCoin} className="btn rounded-xl px-5 font-bold border-none" style={{
                    backgroundColor: 'rgb(231, 254, 41)',
                }}>Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    handleAddCoin: PropTypes.func
}

export default Banner;