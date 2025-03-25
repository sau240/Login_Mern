import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import { ForgotPassword, ResetPassword } from "./ForgotPassword";
import Login from './Login';
import Signup from './Signup';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/register" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password/:token" element={<ResetPassword />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

