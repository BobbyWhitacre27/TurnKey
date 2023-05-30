import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import Signup from './components/Signup.jsx'
import Rent from './components/Rent.jsx'
import Profile from './components/Profile.jsx'
import Post from './components/Post.jsx'
import Buy from './components/Buy.jsx'
import Post_photos from './components/Post_photos.jsx'

function App() {
	const [token, setToken] = useState("");
	const [user, setUser] = useState([]);
	const [posting, setPosting] = useState([])


	return (
		<div className="App">
			<BrowserRouter>
				<Header token={token} user={user} setUser={setUser} setToken={setToken} />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/Login" element={<Login setToken={setToken} setUser={setUser} />} />
					<Route path="/About" element={<About />} />
					<Route path="/Signup" element={<Signup setToken={setToken} setUser={setUser} />} />
					<Route path="/Rent" element={<Rent posting={posting} setPosting={setPosting} />} />
					<Route path="/Profile" element={<Profile posting={posting} setPosting={setPosting} />} />
					<Route path="/Post" element={<Post user={user} />} />
					<Route path="/Post_photos" element={<Post_photos />} />
					<Route path="/Buy" element={<Buy posting={posting} setPosting={setPosting} />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
