import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Auth/Register/Register';
import Login from './components/Auth/Login/Login';
import Feeds from './components/Post/Feeds/Feeds';
import Profile from './components/Profile/Profile';
import SearchUsers from './components/SearchUsers/SearchUsers';
import './App.css';

function App() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Register/>} />
            {/* <Route path="/register" element={<Register/>} /> */}
            <Route path="/login" element={<Login/>} />
            <Route path="/feeds" element={<Feeds/>} />
            <Route path="/profile/:userId" element={<Profile/>} />
            <Route path="/search" element={<SearchUsers/>} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
