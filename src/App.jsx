import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getAllPostings, getAllPhotos } from "./api";

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
	const [allPostings, setAllPostings] = useState({})
	const [allComments, setSelectedComments] = useState({})
	const [allPhotos, setAllPhotos] = useState({})
	const [selectedPost, setSelectedPost] = useState(0)
	const [refresh, setRefresh] = useState(false)

	const postings = async () => {
		const allPosts = await getAllPostings();
		setAllPostings(allPosts)
	}

	const photos = async () => {
		const allPhotos = await getAllPhotos();
		setAllPhotos(allPhotos)
	}

	useEffect(() => {
		postings()
		photos()
	}, [refresh])

	console.log({allPhotos})

	return (
		<div className="App">
			<BrowserRouter>
				<Header token={token} user={user} setUser={setUser} setToken={setToken} />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/Login" element={<Login setToken={setToken} setUser={setUser} />} />
					<Route path="/About" element={<About />} />
					<Route path="/Signup" element={<Signup setToken={setToken} setUser={setUser} />} />
					<Route path="/Rent" element={<Rent allPostings={allPostings} allPhotos={allPhotos} />} />
					<Route path="/Profile" element={<Profile allPostings={allPostings} allPhotos={allPhotos} user={user} />} />
					<Route path="/Post" element={<Post user={user} setRefresh={setRefresh}/>} />
					<Route path="/Post_photos" element={<Post_photos allPostings={allPostings} user={user} allPhotos={allPhotos} setAllPhotos={setAllPhotos} setRefresh={setRefresh}/>} />
					<Route path="/Buy" element={<Buy allPostings={allPostings} allPhotos={allPhotos}/>} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
