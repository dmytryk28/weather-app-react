import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from '../login/Login.jsx'
import Dashboard from '../dashboard/Dashboard.jsx'
import './App.css'


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default App