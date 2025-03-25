import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("http://localhost:3001/login", { email, password }, { withCredentials: true });
            console.log("Server Response:", response.data); // Add this line
        
            if (response.data.success) {
                alert("Login Successful!");
                setTimeout(() => navigate("/dashboard", { replace: true }), 500);
            } else {
                setError(response.data.message || "Login failed");
            }
        } catch (err) {
            console.error("Login Error:", err.response?.data || err.message);
            setError(err.response?.data?.message || "An error occurred. Please try again.");
        }
        
    };
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>

                <div className="signup-link">
                    <p>Don't have an account?</p>
                    <Link to="/register">Sign Up</Link>
                </div>
                
                <div className="forgot-password-link">
                    <p>Forgot your password?</p>
                    <Link to="/forgot-password">Reset Password</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;