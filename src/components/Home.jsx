import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
	return (
		<section>



			<section
				class="overflow-hidden bg-[url(https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover bg-center bg-no-repeat"
			>
				<div class="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
					<div class="text-center ltr:sm:text-left rtl:sm:text-right">
						<div class="mt-8 mb-8 sm:mt-8">

							<h1 class="italic font-bold text-6xl text-white">Find your next home here.</h1>

							<div class="flex justify-center gap-4">
								<Link
								to="/Buy"
									class="inline-block px-5 py-3 mt-3 font-bold tracking-wide uppercase bg-white rounded-2xl hover:text-black"
								>
									Buy
								</Link>
								<Link
									to="/Rent"
									class="inline-block px-5 py-3 mt-3 font-bold tracking-wide uppercase bg-white rounded-2xl hover:text-black"
								>
									Rent
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>



			<div class="sm:grid grid-cols-3 gap-4 p-4 mb-8 mt-2">

				<article class="group">
					<img
						alt="Lava"
						src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
					/>

					<div class="p-4">
						<a href="#">
							<h3 class="text-lg font-medium text-gray-900">
								Buy a home
							</h3>
						</a>

						<p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
							Ready to buy? Shop home postings for sale and get in direct contact with the owner. No hassles! Drop a comment on the posting you like to contact the owner.
						</p>
					</div>
				</article>




				<article class="group">
					<img
						alt="Lava"
						src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
					/>

					<div class="p-4">
						<a href="#">
							<h3 class="text-lg font-medium text-gray-900">
								Rent a home
							</h3>
						</a>

						<p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
							Looking for your next lease? Look no further! Browse from many rental options available to you. See what is available and if you find something you like reach out!
						</p>
					</div>
				</article>




				<article class="group">
					<img
						alt="Lava"
						src="https://images.pexels.com/photos/5683082/pexels-photo-5683082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
					/>

					<div class="p-4">
						<a href="#">
							<h3 class="text-lg font-medium text-gray-900">
								Create a posting
							</h3>
						</a>

						<p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
							Have a property you are interested in selling or renting? You came to the right place! You can easily create an account and add your listing to our site.
						</p>
					</div>
				</article>


			</div>




			<section
				class="overflow-hidden bg-gray-100 sm:grid sm:grid-cols-2 sm:items-center"
			>
				<div class="p-8 md:p-12 lg:px-16 lg:py-24">
					<div
						class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
					>
						<h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
							Get started with TurnKey today!
						</h2>

						<p class="hidden text-gray-500 md:mt-4 md:block">
							Take the stress out of home hunting and join TurnKey today. Your go to website for real estate postings. Adding Postings and comments is 100% FREE. You will not be sorry!
						</p>

						<div class="mt-4 md:mt-8">
							<Link
								to="/Signup"
								class="inline-block rounded-xl bg-black px-12 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring focus:ring-yellow-400"
							>
								Create an account
							</Link>
						</div>
					</div>
				</div>

				<img
					alt="Violin"
					src="https://images.pexels.com/photos/4246234/pexels-photo-4246234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
					class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
				/>
			</section>




			<section class="bg-white">
				<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
					<h2 class="text-center text-4xl font-bold tracking-tight sm:text-5xl">
						Read trusted reviews from our customers
					</h2>

					<div class="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
						<blockquote class="rounded-lg bg-gray-100 p-8">
							<div class="flex items-center gap-4">
								<img
									alt="Man"
									src="https://images.pexels.com/photos/4171757/pexels-photo-4171757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
									class="h-16 w-16 rounded-full object-cover"
								/>

								<div>
									<div class="flex justify-center gap-0.5 text-green-500">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											/>
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											/>
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											/>
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											/>
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											/>
										</svg>
									</div>

									<p class="mt-1 text-lg font-medium text-gray-700">Jessica H.</p>
								</div>
							</div>

							<p class="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
								I found the home of my dreams with just a few clicks! The process was easy. Thank you, TurnKey!!!
							</p>
						</blockquote>

						<blockquote class="rounded-lg bg-gray-100 p-8">
							<div class="flex items-center gap-4">
								<img
									alt="Man"
									src="https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
									class="h-16 w-16 rounded-full object-cover"
								/>

								<div>
									<div class="flex justify-center gap-0.5 text-green-500">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											/>
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											/>
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											/>
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											/>
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											/>
										</svg>
									</div>

									<p class="mt-1 text-lg font-medium text-gray-700">Walter C.</p>
								</div>
							</div>

							<p class="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
								I was looking to rent my condo, TurnKey helped me rent it the next day!
							</p>
						</blockquote>

						<blockquote class="rounded-lg bg-gray-100 p-8">
							<div class="flex items-center gap-4">
								<img
									alt="Man"
									src="https://images.pexels.com/photos/3781557/pexels-photo-3781557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
									class="h-16 w-16 rounded-full object-cover"
								/>

								<div>
									<div class="flex justify-center gap-0.5 text-green-500">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											/>
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											/>
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											/>
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											/>
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											/>
										</svg>
									</div>

									<p class="mt-1 text-lg font-medium text-gray-700">Ashley T.</p>
								</div>
							</div>

							<p class="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
								Overwhelmed with other home rental sites I took a look at TurnKey and found my dream townhome in the City!
							</p>
						</blockquote>
					</div>
				</div>
			</section>






		</section>
	)
}

export default Home;



