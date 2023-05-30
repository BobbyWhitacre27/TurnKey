import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Post_photos = () => {
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
				<div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
					
				

						<div class="rounded-lg bg-white p-8 shadow-lg sm:w-1/2 m-auto lg:col-span-3 lg:p-12">
							<h1 class="mb-8 text-3xl font-bold">Add Photos</h1>
							<form action="" class="space-y-4">
								

								<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
								<div>
									<label class="sr-only" for="name">Image URL</label>
									<input
										class="w-full rounded-lg border-gray-200 border p-3 text-sm"
										placeholder="Image URL"
										type="text"
										id="name"
									/>
								</div>

								<div class="">
									<button
										type="submit"
										class="inline-block w-full rounded-lg bg-gray-200 px-5 py-3 font-medium  sm:w-auto"
									>
										Add Image
									</button>
								</div>

					
								</div>




					



							


								<div class="mt-4">
									<button
										type="submit"
										class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
									>
										Complete Posting
									</button>
								</div>
							</form>
						</div>
					
				</div>
			</section>



		</section>
	)
}

export default Post_photos