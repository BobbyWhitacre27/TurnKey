import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
	return (
		<section>



			<section class="relative flex flex-wrap lg:h-screen lg:items-center">
				<div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
					<div class="mx-auto max-w-lg text-center">
						<h1 class="text-2xl font-bold sm:text-3xl">Welcome back to TurnKey!</h1>

						<p class="mt-4 text-gray-500">
							Please enter your username and password below to log into your account!
						</p>
					</div>

					<form action="" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
						<div>
							<label for="email" class="sr-only">Email</label>

							<div class="relative">
								<input
									type="email"
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
									class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
									placeholder="Enter password"
								/>

						
							</div>
						</div>

						<div class="flex items-center justify-between">
							<p class="text-sm text-gray-500">
								<span>No account? </span>
								<Link class="underline" to="/Signup">Sign up</Link>
							</p>

							<button
								type="submit"
								class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
							>
								Sign in
							</button>
						</div>
					</form>
				</div>

				<div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
					<img
						alt="Welcome"
						src="https://images.pexels.com/photos/1022936/pexels-photo-1022936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						class="absolute inset-0 h-full w-full object-cover"
					/>
				</div>
			</section>





		</section>
	)
}

export default Login 