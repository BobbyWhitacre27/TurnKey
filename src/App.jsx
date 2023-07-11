import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getAllPostings, getAllPhotos } from "./api";

import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Footer from './components/Footer.jsx'
import Signup from './components/Signup.jsx'
import Rent from './components/Rent.jsx'
import Profile from './components/Profile.jsx'
import Post from './components/Post.jsx'
import Buy from './components/Buy.jsx'
import Post_photos from './components/Post_photos.jsx'
import Post_details from './components/Post_details.jsx'

function App() {
	const [token, setToken] = useState("");
	const [user, setUser] = useState([]);
	const [allPostings, setAllPostings] = useState([])
	const [allComments, setSelectedComments] = useState({})
	const [allPhotos, setAllPhotos] = useState({})
	const [selectedPost, setSelectedPost] = useState(0)
	const [refresh, setRefresh] = useState(false)

	const [isLoading, setIsLoading] = useState(false);

	const postings = async () => {
		setIsLoading(true)
		const allPosts = await getAllPostings();
		setAllPostings(allPosts)
		setIsLoading(false)
	}

	const photos = async () => {
		setIsLoading(true)
		const allPhotos = await getAllPhotos();
		setAllPhotos(allPhotos)
		setIsLoading(false)
	}

	const loading = () => {
		return (<div class="flex text-2xl p-2 justify-center">
			<h2 class="pr-2">Loading</h2>

				<div role="status">
					<svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
						<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
					</svg>
					<span class="sr-only">Loading...</span>
				</div>
			
		</div>)
	}

	useEffect(() => {
		postings()
		photos()
	}, [refresh, selectedPost])

	return (
		<div className="App">
			<BrowserRouter>
				<Header token={token} user={user} setUser={setUser} setToken={setToken} />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/Login" element={<Login setToken={setToken} setUser={setUser} />} />
					<Route path="/Post_details" element={<Post_details selectedPost={selectedPost} setSelectedPost={setSelectedPost} allPostings={allPostings} user={user} allPhotos={allPhotos} setAllPhotos={setAllPhotos} setRefresh={setRefresh} />} />
					<Route path="/Signup" element={<Signup setToken={setToken} setUser={setUser} />} />
					<Route path="/Rent" element={<Rent allPostings={allPostings} allPhotos={allPhotos} selectedPost={selectedPost} setSelectedPost={setSelectedPost} user={user} isLoading={isLoading} loading={loading} />} />
					<Route path="/Profile" element={<Profile allPostings={allPostings} allPhotos={allPhotos} user={user} selectedPost={selectedPost} setSelectedPost={setSelectedPost} />} />
					<Route path="/Post" element={<Post user={user} setRefresh={setRefresh} />} />
					<Route path="/Post_photos" element={<Post_photos allPostings={allPostings} user={user} allPhotos={allPhotos} setAllPhotos={setAllPhotos} setRefresh={setRefresh} />} />
					<Route path="/Buy" element={<Buy allPostings={allPostings} allPhotos={allPhotos} selectedPost={selectedPost} setSelectedPost={setSelectedPost} user={user} isLoading={isLoading} loading={loading} />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
