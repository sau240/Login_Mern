import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import "./css/Dashboard.css";

function Dashboard() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div>
            {/* Navbar */}
            <nav className="navbar">
                <h1>Sandbox</h1>
                <div>
                    <button>Home</button>
                    <button>About</button>
                </div>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <SunIcon className="w-6 h-6 text-yellow-400" /> : <MoonIcon className="w-6 h-6 text-gray-700" />}
                </button>
            </nav>

            {/* Sliding Image Card */}
            <div className="cards-container">
                <div className="slider-container">
                    <img src="https://contentstatic.techgig.com/photo/108968172/top-5-lightweight-laptops-you-can-buy-in-2024.jpg?989012" alt="Laptop 1" />
                    <img src="https://m.media-amazon.com/images/G/31/img24/Laptops_Ayesha/mac-1400_1._SX1242_QL85_FMpng_.png" alt="Laptop 2" />
                    <img src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/09/The-Pros-and-Cons-of-Using-a-Virtual-Machine-to-Run-Windows-on-a-Mac.jpg" alt="Laptop 3" />
                    <img src="https://m.media-amazon.com/images/I/71KzEiCTaNL._AC_UF1000,1000_QL80_.jpg" alt="Laptop 4" />
                    <img src="https://m.media-amazon.com/images/I/71KzEiCTaNL._AC_UF1000,1000_QL80_.jpg" alt="Laptop 5" />
                    <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/computer/3/k/h/ef2033tu-thin-and-light-laptop-hp-original-imagzf4zn6khkagn.jpeg?q=90&crop=false" alt="Laptop 6" />
                    <img src="https://in-media.apjonlinecdn.com/catalog/product/c/0/c08249535-touch_1.png" alt="Laptop 7" />
                </div>
            </div>

            {/* Cards Section */}
            <div className="cards-container">
                {/* Card 1 */}
                <div className="card">
                    <h2>📊 Organize your content</h2>
                    <p>Track your performance metrics and insights.</p>
                </div>

                {/* Card 2 */}
                <div className="card">
                    <h2>🃏 What is a Card?</h2>
                    <p>Understand how cards help in design structure.</p>
                </div>

                {/* Card 3 */}
                <div className="card">
                    <h2>🏡 The Home Page Layout</h2>
                    <p>Customize your home page effectively.</p>
                </div>
            </div>

            {/* Footer */}
            <div className="footer">
                <p>&copy; 2025 Sandbox. All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Dashboard;
