import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Signup.css"; // ✅ Import the new CSS file

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [message, setMessage] = useState(""); // ✅ Message state for success/error
    const navigate = useNavigate(); // ✅ Redirect user after successful signup

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/register", {
                name,
                email,
                password,
            });

            setMessage(response.data.message || "Registration Successful!");
            
            // ✅ Redirect to login page after signup
            setTimeout(() => navigate("/login"), 2000);
        } catch (err) {
            setMessage("Error: " + (err.response?.data?.message || "Something went wrong."));
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2>Register</h2>

                {/* ✅ Display success/error messages */}
                {message && <p className="error-message">{message}</p>}

                <form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div className="mb-3">
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="mb-3">
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-3">
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn-submit">
                        Register
                    </button>
                </form>

                {/* Login Redirect */}
                <div className="signup-link">
                    <p>Already have an account?</p>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;
