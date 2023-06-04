import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { } from "../api";

const Buy = ({ allPostings, allPhotos, setSelectedPost }) => {

	const buyPosts = allPostings.filter((p) => p.type === "buy")

	const postPreview = buyPosts.map((p) => {

		const date = new Date(p.date.replace(/-/g, '\/').replace(/T.+/, ''))

		const price = p.price.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
		})

		const photos = allPhotos.filter((f) => p.id === f.postId)

		return <div class="overflow-hidden rounded-lg shadow transition m-4">
			<Link class="hover:text-black"  onClick={() => setSelectedPost(p.id)} to="/Post_details">
				<div class="relative">
					<img
						alt="House"
						src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						class="h-56 w-full object-cover brightness-75"
					/>
					<div class="absolute top-2 right-2 bg-black px-3 rounded-lg font-bold text-white bg-opacity-75">{date.toLocaleDateString('en-US')}</div>
				</div>
				<div class="px-4 py-2">
					
						<div class="text-lg text-left font-bold text-gray-900">
							{p.title}
						</div>
					
					<div class="flex justify-between mt-0.5 text-md">
					{price}	
					</div>
					<p class="line-clamp-3 text-sm/relaxed text-gray-500 text-left italic">
						{p.description}
					</p>
					<div class="flex justify-between text-xs text-gray-800 mt-2"><p>Name</p><p>1 Comment</p></div>
				</div>
			</Link>
		</div>
	})


	return (
		<section>


			<section
				class="overflow-hidden bg-[url(https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover bg-center bg-no-repeat"
			>
				<div class="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-18">
					<div class="text-center ltr:sm:text-left rtl:sm:text-right">
						<h2 class="text-5xl italic font-bold text-white sm:text-5xl md:text-7xl">
							For Sale
						</h2>

					</div>
				</div>
			</section>

			<div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2">
				{postPreview}
			</div>

		</section>
	)
}

export default Buy