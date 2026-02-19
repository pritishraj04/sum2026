export default function Footer() {
    return (
        <footer className="relative w-full text-white overflow-hidden bg-black">
            {/* Background Image - Clear, no overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('/assets/images/footer.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            {/* No Gradient Overlay */}

            <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-16 2xl:px-24 py-16 flex flex-col items-center">

                {/* 1. Top Logo Section */}
                <div className="mb-10 text-center flex flex-col items-center">
                    <div className="relative w-24 h-24 mb-4">
                        <img
                            src="/assets/ui/logo-footer.svg"
                            alt="S+UM Footer Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* 2. Horizontal Nav Row */}
                <div className="hidden md:flex flex-wrap justify-center gap-x-5 gap-y-0.5 mb-16 text-[0.65rem] font-bold tracking-[0.15em] uppercase opacity-90 drop-shadow-md">
                    {["Realestate", "Hospitality", "Restaurants", "Prints", "Art & Paintings", "Jewellery"].map((item) => (
                        <a key={item} href="#" className="hover:text-white/70 transition-colors shadow-black">{item}</a>
                    ))}
                    <div className="w-full flex justify-center gap-x-5 mt-1">
                        {["Spatial Design Systems", "Packaging Design", "Real Estate Marketing"].map((item) => (
                            <a key={item} href="#" className="hover:text-white/70 transition-colors shadow-black">{item}</a>
                        ))}
                    </div>
                    <div className="w-full flex justify-center gap-x-5 mt-1">
                        {["Menu Design", "Web Developement", "Sales / Product Brochure"].map((item) => (
                            <a key={item} href="#" className="hover:text-white/70 transition-colors shadow-black">{item}</a>
                        ))}
                    </div>
                </div>

                {/* 3. Main 4-Column Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 text-sm drop-shadow-md">

                    {/* Col 1: Address & Contact */}
                    <div className="flex flex-col gap-6">
                        <h4 className="font-bold text-lg shadow-black">S+UM Architects</h4>

                        <div className="opacity-90 text-md shadow-black">
                            <p className="leading-[30px]">Office Address</p>
                            <p className="leading-[31px]">B96, P.C Colony, Kankarbagh</p>
                            <p className="leading-[31px]">Patna, Bihar 800020</p>
                        </div>

                        <div className="opacity-90 text-xs shadow-black">
                            <p className="leading-[30px]">Contact</p>
                            <p className="leading-[31px]">+91 90451 87480, 90451 87480</p>
                        </div>

                        <div className="opacity-90 text-xs shadow-black">
                            <p className="leading-[30px]">E-Mail</p>
                            <p className="leading-[31px]">mail@sumstudios.in</p>
                        </div>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-lg shadow-black">Quick Links</h4>
                        <ul className="flex flex-col gap-2 text-lg leading-[31px] opacity-90 shadow-black">
                            <li><a href="#" className="hover:underline">Meet Us</a></li>
                            <li><a href="#" className="hover:underline">Projects</a></li>
                            <li><a href="#" className="hover:underline">Store</a></li>
                            <li><a href="#" className="hover:underline">Submit Request</a></li>
                            <li><a href="#" className="hover:underline">Bespoke Design</a></li>
                        </ul>
                    </div>

                    {/* Col 3: Socials */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-lg shadow-black">Socials</h4>
                        <ul className="flex flex-col gap-2 text-lg leading-[31px] opacity-90 shadow-black">
                            <li><a href="#" className="hover:underline">Instagram</a></li>
                            <li><a href="#" className="hover:underline">WhatsApp</a></li>
                            <li><a href="#" className="hover:underline">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Col 4: Categories */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-lg shadow-black">Categories</h4>
                        <ul className="flex flex-col gap-2 text-lg leading-[31px] opacity-90 shadow-black">
                            <li><a href="#" className="hover:underline">Buildings</a></li>
                            <li><a href="#" className="hover:underline">Residences</a></li>
                            <li><a href="#" className="hover:underline">Commercial Buildings</a></li>
                            <li><a href="#" className="hover:underline">Landscaping</a></li>
                            <li><a href="#" className="hover:underline">Facade Design</a></li>
                        </ul>
                    </div>
                </div>

                {/* 4. Bottom Footer Bar */}
                <div className="w-full mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-end text-[0.65rem] opacity-80 drop-shadow-md">
                    <div className="flex flex-col gap-1">
                        <p className="shadow-black">©{new Date().getFullYear()} S+UM Architects | All Rights Reserved.</p>
                        <p className="shadow-black">DESIGNED WITH POLARDOT</p>
                        <div className="mt-2 flex items-center gap-2">
                            <span className="font-bold text-lg leading-none shadow-black">polar</span>
                            <div className="w-2 h-2 rounded-full bg-white shadow-black" />
                            <span className="font-bold text-lg leading-none shadow-black">dot</span>
                        </div>
                    </div>

                    <p className="shadow-black">Privacy</p>
                </div>
            </div>

            {/* 5. Massive Bottom Text - Structured to fit and clip bottom */}
            <div className="relative w-full text-center pointer-events-none select-none opacity-20 translate-y-[25%]">
                <h1 className="text-[9vw] font-bold leading-none text-white tracking-widest whitespace-nowrap">
                    S+UM ARCHITECTS
                </h1>
            </div>
        </footer>
    );
}
