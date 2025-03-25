const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");  // 🔑 Secure password hashing
const EmployeeModel = require("./models/Employee");

const app = express();
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:5173", // Allow frontend
        credentials: true,  // ✅ Allow credentials (cookies, auth tokens)
    })
);

// ✅ Connect to MongoDB (Use Correct DB Name)
mongoose.connect("mongodb+srv://sv695177:o15kRG9hrfxuhOgd@login.tqopm.mongodb.net/login", {  // 🔄 Ensure correct DB name
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,  
    connectTimeoutMS: 10000,        
})
.then(() => console.log("✅ MongoDB Connected Successfully"))
.catch(err => console.log("❌ MongoDB Connection Error:", err));

// ✅ REGISTER Route (Store Hashed Password)
app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }
        
        const existingUser = await EmployeeModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "Email already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10); // Hash Password
        const user = await EmployeeModel.create({ name, email, password: hashedPassword });

        res.status(201).json({ success: true, message: "User Registered Successfully", user });
    } catch (err) {
        console.error("Registration Error:", err);
        res.status(500).json({ success: false, message: "Server Error: " + err.message });
    }
});

// ✅ LOGIN Route (Check Credentials)
// ✅ LOGIN Route (Fixes "Invalid credentials" issue)
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Email and Password required" });
        }

        const user = await EmployeeModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // ✅ Ensure password hashing is handled correctly
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        res.status(200).json({ success: true, message: "Login Successful", user });
    } catch (err) {
        console.error("Login Error:", err);
        res.status(500).json({ success: false, message: "Server Error: " + err.message });
    }
});


app.listen(3001, () => {
    console.log("🚀 Server running on port 3001");
});
