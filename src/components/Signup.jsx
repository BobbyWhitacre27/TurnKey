import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register, login } from "../api/index.js"

const Signup = ({setUser, setToken}) => {
	const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

          const signUp = await register(username, password);
          if (signUp.error) {
            setMessage(signUp.message);
            return;
            }
          if (signUp) {
            const logIn = await login(username, password);
            if (logIn.error) {
                setMessage(logIn.message);
            } else {
                setToken(logIn.token);
                setUser(logIn.user);
				setMessage(signUp.message);
                localStorage.setItem('token', JSON.stringify(logIn.token));
                navigate('/Profile');
            }
            }
        } catch (error) {
            console.error("error in handleSubmit of Register.js");
        }
    };

    const registerMessage = message !== "" ? <p class="mt-4 text-gray-500">{message}</p> : ""


    return (
        <section>
	

	<section class="relative flex flex-wrap lg:h-screen lg:items-center">
				<div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
					<div class="mx-auto max-w-lg text-center">
						<h1 class="text-2xl font-bold sm:text-3xl">Join TurnKey! Create an account.</h1>

						<p class="mt-4 text-gray-500">
							Please create a username and password below to set up your account!
						</p>
						{registerMessage}
					</div>

					<form action="" class="mx-auto mb-0 mt-8 max-w-md space-y-4" onSubmit={handleSubmit}>
						<div>
							<label for="email" class="sr-only">Username</label>

							<div class="relative">
								<input
									type="username"
									onChange={(e) => setUsername(e.target.value)}
									class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
									placeholder="Enter username"
								/>

						
							</div>
						</div>

						<div>
							<label for="password" class="sr-only">Password</label>

							<div class="relative">
								<input
									type="password"
									onChange={(e) => setPassword(e.target.value)}
									class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
									placeholder="Enter password"
								/>

						
							</div>
						</div>

						<div class="flex items-center justify-between">
							<p class="text-sm text-gray-500">
								<span>Have an account? </span>
								<Link class="underline" to="/Login">Log in</Link>
							</p>

							<button
								type="submit"
								class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
							>
								Sign up
							</button>
						</div>
					</form>
				</div>

				<div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
					<img
						alt="Welcome"
						src="https://images.pexels.com/photos/6579046/pexels-photo-6579046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						class="absolute inset-0 h-full w-full object-cover"
					/>
				</div>
			</section>



        </section>
    )
}

export default Signup 