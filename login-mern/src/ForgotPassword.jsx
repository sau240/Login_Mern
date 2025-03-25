import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3001/auth/forgot-password", { email });
            setMessage(res.data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || "An error occurred");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Forgot Password</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <button type="submit">Send Reset Link</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
}

function ResetPassword() {
    const { token } = useParams();
    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:3001/auth/reset-password/${token}`, { newPassword });
            setMessage(res.data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || "An error occurred");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Reset Password</h2>
                <form onSubmit={handleSubmit}>
                    <input type="password" placeholder="Enter new password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                    <button type="submit">Reset Password</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
}

export { ForgotPassword, ResetPassword };
