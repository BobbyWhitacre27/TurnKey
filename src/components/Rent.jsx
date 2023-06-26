import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getPostingsByType, getAllPostings, getPhotosByPostId } from "../api";

const Rent = ({ allPostings, allPhotos, setSelectedPost, user, isLoading, loading}) => {

	const buyPosts = allPostings?.filter((p) => p.type === "rent")



	const postPreview = buyPosts?.map((p) => {

		const date = new Date(p.date.replace(/-/g, '\/').replace(/T.+/, ''))

		const currentDate = new Date ()

		const difference  = currentDate - date

		const daysAgo = Math.ceil(difference / (1000 * 60 * 60 * 24))

		const price = p.price.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
		})

		const postPhotos = allPhotos.filter((f) => p?.id === f?.postId)

		const photos = postPhotos?.map((f) => f?.photo)[0]

		const imageNotFound = "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"

		return <div class="overflow-hidden rounded-lg shadow transition m-4">
			<Link class="hover:text-black"  onClick={() => setSelectedPost(p?.id)} to="/Post_details">
				<div class="relative">
					<img
						alt="House"
						src={photos ? photos : imageNotFound}
						class="h-56 w-full object-cover brightness-100"
					/>
					<div class="absolute top-2 right-2 bg-black px-3 rounded-lg font-bold text-white bg-opacity-75">{daysAgo <= 1 ? "Today" : <div>{daysAgo} days ago</div>}</div>
					{user.id === p.userId ? <div class="absolute top-2 left-2 bg-red-600 px-3 rounded-lg font-bold text-white bg-opacity-75">My Post</div> : ""}
				</div>
				<div class="px-4 py-2">
					
						<div class="text-lg text-left font-bold text-gray-900">
							{p.title}
						</div>
					
					<div class="flex mt-0.5 text-md">
					{price}<span class="text-gray-400 text-xs pt-1">/month</span>
					</div>
					<p class="line-clamp-3 text-sm/relaxed text-gray-500 text-left italic">
						{p.description}
					</p>
		
				</div>
			</Link>
		</div>
	})


	return (
		<section>



			<section
				class="overflow-hidden bg-[url(https://images.pexels.com/photos/1127119/pexels-photo-1127119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover bg-center bg-no-repeat"
			>
				<div class="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-18">
					<div class="text-center ltr:sm:text-left rtl:sm:text-right">
						<h2 class="text-5xl italic font-bold text-white sm:text-5xl md:text-7xl">
							For Rent
						</h2>

					</div>
				</div>
			</section>

			<div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2">
				{isLoading ? loading() : postPreview}
			</div>

		</section>
	)
}

export default Rent 