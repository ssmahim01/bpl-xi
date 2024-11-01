import './Newsletter.css';

const Newsletter = () => {
    return (
        <div className="lg:w-[1210px] md:w-[610px] w-11/12 mx-auto p-5 border-2 border-white rounded-3xl" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.15)'
        }}>
            <div className="flex flex-col justify-center items-center gap-6 rounded-3xl py-24 bg-cover bg-center bg-no-repeat md:bg-white bg-gradient-to-r from-slate-100 to-orange-200 md:bg-shadow">
                <h2 className="md:text-3xl text-xl font-bold md:px-0 px-4">Subscribe to our Newsletter</h2>

                <p className="md:text-xl text-base text-center text-gray-500 font-medium md:px-0 px-4">Get the latest updates and news right in your inbox!</p>

                <form className="flex gap-3 form-action md:ml-0 ml-4">
                <input type="email" placeholder="Enter your email" className="input input-bordered rounded-xl border-gray-200 lg:w-[430px] md:w-96 w-3/5 text-gray-500 p-5" required/>
                <button className="btn md:px-7 px-4 shadow-sm bg-gradient-to-r from-red-300 to-orange-300 font-bold border-none" type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;