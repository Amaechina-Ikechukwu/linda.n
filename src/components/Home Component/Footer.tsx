
function Footer() {


    return (
        <div className="container">
            <div className={` flex flex-col items-center gap-4 p-4`}>
                <img src="https://priceplan.online/assets/Linda.be1e6a15.png"
                    alt="LindaSalesPro" className="w-70" />

                <div className="w-full flex items-center justify-center gap-3">
                    <button className="bg-transparent cursor-pointer">
                        Home
                    </button>
                    <button className="bg-transparent cursor-pointer">
                        Features
                    </button>
                    <button className="bg-transparent cursor-pointer">
                        About
                    </button>
                    <button className="bg-transparent cursor-pointer">
                        Testimonials
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Footer;
