User Authentication & Dashboard System
This project is a full-stack authentication system built with React (Frontend), Node.js (Backend), and MongoDB (Database). It includes user registration, login, password reset functionality, and a dashboard with a dark mode toggle.

Features
User Registration & Login – Users can sign up, log in, and manage accounts.
Password Reset – Users can reset passwords via email.
Dashboard – Includes interactive UI with sliding image cards.
Dark Mode – Switch between light and dark themes.
MongoDB Database – Stores user data securely.
API Calls – Uses Axios for backend communication.
Bootstrap UI – For a clean and modern look.

Technologies Used
Frontend:
React.js

React Router

Bootstrap

Heroicons

Backend:
Node.js

Express.js

MongoDB & Mongoose

Axios

Project Structure
lua
Copy
Edit
📂 project-directory
│-- 📂 frontend (React App)
│   │-- 📜 App.jsx
│   │-- 📜 Dashboard.jsx
│   │-- 📜 Login.jsx
│   │-- 📜 Signup.jsx
│   │-- 📜 ForgotPassword.jsx
│   │-- 📜 ResetPassword.jsx
│   │-- 📂 css (CSS files)
│   │-- 📜 index.js
│-- 📂 backend (Node.js Server)
│   │-- 📜 server.js
│   │-- 📜 models/User.js
│   │-- 📜 models/Employee.js
│   │-- 📜 routes/authRoutes.js
│-- 📜 package.json
│-- 📜 README.md
Setup & Installation
Step 1: Clone the repository



bash
Copy
Edit
cd frontend
npm install
Backend:

bash
Copy
Edit
cd backend
npm install
Step 3: Configure the environment
Create a .env file inside the backend directory and set up your MongoDB connection:

env
Copy
Edit
MONGO_URI=your_mongodb_connection_string
PORT=3001
JWT_SECRET=your_secret_key
Step 4: Run the project
Start the backend server:

bash
Copy
Edit
cd backend
npm start
Start the frontend:

bash
Copy
Edit
cd frontend
npm start

API Endpoints
Method	Route	Description
POST	/register	Register a new user
POST	/login	Authenticate user login
POST	/forgot-password	Send password reset link
POST	/reset-password/:token	Reset password with token
