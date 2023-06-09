import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ user, setUser, setToken, token }) => {
	const navigate = useNavigate();
	const [isNavOpen, setIsNavOpen] = useState(false);

	const logout = () => {
        localStorage.removeItem('token');
        setToken('');
        setUser('');
		setIsNavOpen(false)
        navigate('/');
    }



	const navMobleBox = 
	<div class="absolute bg-gray-400 top-0 left-0 w-full h-36 text-white font-bold text-3xl text-left pl-6 underline">
		<button onClick={() => setIsNavOpen(false)}><img class="h-10 absolute right-6" src="https://cdn0.iconfinder.com/data/icons/controls-add-on/48/v-41-1024.png"></img></button>
		{token === "" ? <div onClick={() => setIsNavOpen(false)}><Link to="/Login">Log in</Link></div> : ""}
		{token === "" ? <div onClick={() => setIsNavOpen(false)}><Link to="/Signup">Sign in</Link></div> : ""}
		{token === "" ? "" : <div class="mt-4" onClick={logout}><Link to="/">Logout</Link></div>}
		</div>

	return (
		<header>


			<header aria-label="Site Header" class="shadow-sm">


				{isNavOpen ? navMobleBox : ""}


				<div
					class="mx-auto flex sm:grid sm:grid-cols-3 h-16 max-w-screen-xl place-items-center px-4"
				>
					<span class="flex w-0 flex-1 lg:hidden">

					</span>

					<div class="flex items-center gap-4">
						<Link to="/">
							<span class="sr-only">Logo</span>
							<img src="https://i.ibb.co/KL6qQD4/Turn-Key-Logo-2.png" class="h-12"></img>
							<span class="h-10 w-20 rounded-lg bg-gray-200"></span>
						</Link>

						
					</div>

					<div class="flex w-0 flex-1 justify-end lg:hidden">
					<button class="rounded-full bg-gray-100 p-2 text-gray-600" type="button" onClick={() => setIsNavOpen(true)}>
							<span class="sr-only">Account</span>
							<svg
								class="h-5 w-5"
								fill="none"
								stroke="currentColor"
								viewbox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									
									d="M14 7a4 4 0 11-8 0 4 4 0 018 0zM10 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
								></path>
							</svg>
						</button>


						{/* <button class="rounded-full bg-gray-100 p-2 text-gray-500" type="button">
							<span class="sr-only">Menu</span>
							<svg
								class="h-5 w-5"
								fill="currentColor"
								viewbox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									class=""
									clip-rule="evenodd"
									d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
									fill-rule="evenodd"
								></path>
							</svg>
						</button> */}
					</div>

					<nav
						aria-label="Site Nav"
						class="hidden items-center justify-center gap-8 text-sm font-medium lg:flex lg:w-0 lg:flex-1"
					>
						<Link to="/" class="text-gray-900">Home</Link>
						<Link to="/Buy" class="text-gray-900" href="">Buy</Link>
						<Link to="/Rent" class="text-gray-900">Rent</Link>
						{token === "" ? "" : <div><Link to="/Profile" class="text-gray-900">Profile</Link></div>}
						{token === "" ? "" : <div><Link to="/Post" class="text-white bg-indigo-600 px-2 py-1 rounded-2xl">Post</Link></div>}

					</nav>

					
						{token === "" ? <div class="hidden items-center gap-4 lg:flex"><Link
							to="/Login"
							class="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-600 hover:text-black"
						>
							Log in
						</Link>

						<Link
							to="/Signup"
							class="rounded-lg bg-black px-5 py-2 text-sm font-medium text-white"
						>
							Sign up
						</Link></div>
						:
						<div class="hidden items-center gap-4 lg:flex"><Link
							to="/"
							onClick={logout}
							class="rounded-lg bg-black px-5 py-2 text-sm font-medium text-white"
						>
							Logout
						</Link></div>}
					
				</div>

				<div class="border-t border-gray-100 lg:hidden">
					<nav
						class="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium"
					>
						<Link to="/" class="shrink-0 px-4 text-gray-900">Home</Link>
						<Link to="/Buy" class="shrink-0 px-4 text-gray-900">Buy</Link>
						<Link to="/Rent" class="shrink-0 px-4 text-gray-900">Rent</Link>
						{token === "" ? "" : <div><Link to="/Post" class="shrink-0 px-4 text-gray-900">Post</Link></div>}
					</nav>
				</div>
			</header>
		</header>
	)
}

export default Header; 