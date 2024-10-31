import PropTypes from "prop-types";

const Header = ({coins}) => {
    console.log(coins);
    return (
        <div className="flex justify-between items-center py-8">

            {/* Logo */}
                <div className="w-16">
                    <img src="assets/logo.png" alt="The image of logo"/>
                </div>

                {/* Menu */}
                <div className="flex flex-wrap gap-12 justify-between">
                    <ul className="lg:flex justify-center items-center gap-7 text-gray-500 font-medium cursor-pointer hidden">
                        <li className="hover:font-bold"><a href="">Home</a></li>
                        <li className="hover:font-bold"><a href="">Fixture</a></li>
                        <li className="hover:font-bold"><a href="">Teams</a></li>
                        <li className="hover:font-bold"><a href="">Schedules</a></li>
                    </ul>

                    <div className="lg:hidden block">
                    <div className="dropdown w-2">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 p-3 shadow">
                    <li><a>Home</a></li>
                    <li><a>Fixture</a></li>
                    <li><a>Teams</a></li>
                    <li><a>Schedules</a></li>
                </ul>
                </div>
            </div>

            {/* Balance */}
                <div className="flex items-center gap-2 md:text-lg font-bold px-4 py-3 border-2 border-gray-200 rounded-2xl">
                    {coins} Coin <img className="w-6" src="assets/coin.png" alt="The image of Coin"/>
                </div>
                </div>

            </div>
    );
};

Header.propTypes = {
   coins: PropTypes.array 
}

export default Header;