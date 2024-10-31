const Footer = () => {
    return (
       <div>
         <div className="lg:px-20 px-10 md:pt-48 pt-20 text-white border-b border-b-gray-700 pb-12">
            <div className="flex justify-center">
                <img src="assets/logo-footer.png" alt="Logo of Footer"/>
            </div>

            <div className="flex flex-row flex-wrap justify-between items-center gap-8 mt-12">
            
                <div className="space-y-3 mb-8">
                    <h3 className="text-lg font-bold">About Us</h3>
                    <p className="text-gray-500 font-medium w-72">We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>

               <div className="space-y-5">
                <h3 className="text-lg font-bold">Quick Links</h3>
                <ul className="text-gray-500 font-medium space-y-3 list-disc ml-6">
                    <li><a href="">Home</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
               </div>

                 <form className="space-y-3">
                    <h6 className="text-white text-xl font-bold">Subscribe</h6>
                    <fieldset className="form-control w-80 space-y-3">
                    <label className="label">
                        <span className="label-text text-lg text-gray-500 font-medium">Subscribe to our newsletter for the latest updates.</span>
                    </label>
                    <div className="join rounded-xl">
                        <input
                        type="text"
                        placeholder="Enter your email"
                        className="input input-bordered join-item" required/>
                        <button className="btn bg-gradient-to-l from-red-300 to-orange-300 join-item px-6 font-bold border-none">Subscribe</button>
                    </div>
                    </fieldset>
                </form>
            </div>
        </div>
        <div className="text-gray-500 font-medium text-center mt-8 pb-8">
            <p>@2024 Your Company All Rights Reserved.</p>
        </div>
    </div>
    );
};

export default Footer;