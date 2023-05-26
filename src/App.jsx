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

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/Login" element={<Login />} />
					<Route path="/About" element={<About />} />
					<Route path="/Signup" element={<Signup />} />
					<Route path="/Rent" element={<Rent />} />
					<Route path="/Profile" element={<Profile />} />
					<Route path="/Post" element={<Post />} />
					<Route path="/Buy" element={<Buy />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
