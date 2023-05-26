import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = () => {
	return (
		<section>


			<section
				class="overflow-hidden bg-[url(https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover bg-center bg-no-repeat"
			>
				<div class="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-18">
					<div class="text-center ltr:sm:text-left rtl:sm:text-right">
						<h2 class="text-5xl italic font-bold text-white sm:text-5xl md:text-7xl">
							Post
						</h2>

					</div>
				</div>
			</section>





			<section class="">
				<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
					
				

						<div class="rounded-lg bg-white p-8 shadow-lg sm:w-1/2 m-auto lg:col-span-3 lg:p-12">
							<form action="" class="space-y-4">
								<div>
									<label class="sr-only" for="name">Name</label>
									<input
										class="w-full rounded-lg border-gray-200 p-3 text-sm"
										placeholder="Name"
										type="text"
										id="name"
									/>
								</div>

								<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
									<div>
										<label class="sr-only" for="email">Email</label>
										<input
											class="w-full rounded-lg border-gray-200 p-3 text-sm"
											placeholder="Email address"
											type="email"
											id="email"
										/>
									</div>

									<div>
										<label class="sr-only" for="phone">Phone</label>
										<input
											class="w-full rounded-lg border-gray-200 p-3 text-sm"
											placeholder="Phone Number"
											type="tel"
											id="phone"
										/>
									</div>
								</div>

								<div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
									<div>
										<input
											class="peer sr-only"
											id="option1"
											type="radio"
											tabindex="-1"
											name="option"
										/>

										<label
											for="option1"
											class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
											tabindex="0"
										>
											<span class="text-sm font-medium"> Option 1 </span>
										</label>
									</div>

									<div>
										<input
											class="peer sr-only"
											id="option2"
											type="radio"
											tabindex="-1"
											name="option"
										/>

										<label
											for="option2"
											class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
											tabindex="0"
										>
											<span class="text-sm font-medium"> Option 2 </span>
										</label>
									</div>

									<div>
										<input
											class="peer sr-only"
											id="option3"
											type="radio"
											tabindex="-1"
											name="option"
										/>

										<label
											for="option3"
											class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
											tabindex="0"
										>
											<span class="text-sm font-medium"> Option 3 </span>
										</label>
									</div>
								</div>

								<div>
									<label class="sr-only" for="message">Message</label>

									<textarea
										class="w-full rounded-lg border-gray-200 p-3 text-sm"
										placeholder="Message"
										rows="8"
										id="message"
									></textarea>
								</div>

								<div class="mt-4">
									<button
										type="submit"
										class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
									>
										Next
									</button>
								</div>
							</form>
						</div>
					
				</div>
			</section>



		</section>
	)
}

export default Post