import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
import Home from './pages/Home';
import About from './pages/About';
import Models from './pages/Models';
import News from './pages/News';
import Login from './pages/Account/Login';
import Register from './pages/Account/Register';
import Contact from './pages/Contact';
import CreateCar from './admin/CreateCars';
import Detail from './pages/Models/Detail';
import AdminCars from './admin/AdminCars';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route path="home" element={<Home />} />
                        <Route path="news" element={<News />} />
                        <Route path="about" element={<About />} />
                        <Route path="models" element={<Models />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="create" element={<CreateCar />} />
                        <Route path="models/:slug" element={<Detail />} />
                        <Route path="admin" element={<AdminCars />} />
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </GlobalStyles>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
