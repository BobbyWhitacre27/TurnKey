import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { addPhoto, deletePhoto } from "../api";


const Post_photos = ({ allPostings, user, setRefresh, allPhotos }) => {
	const navigate = useNavigate();
	const [imageURL, setImageURL] = useState('');


	const userId = user.id

	const userPosts = allPostings.filter((p) => p.userId === userId)

	const lastUserPost = userPosts[userPosts.length - 1]

	const lastUserPostId = lastUserPost?.id

	const postPhotos = allPhotos.filter((f) => lastUserPostId === f.postId)

	const photosOfPosting = postPhotos.map((f) => {
		return <div class="relative">
			<img class="m-auto h-64 rounded-xl mb-2" src={f.photo}></img>
			<button onClick={() => handleDeletePhoto(f.id)} >
				<img class="absolute top-4 right-4 h-6" src="https://pixy.org/src/439/4393715.png"></img>
			</button>
		</div>
	})

	const handleAdd = async (event) => {
		event.preventDefault();
		setRefresh(true)
		await addPhoto(lastUserPostId, imageURL)
		setRefresh(false)
	}

	const handleDeletePhoto = async (id) => {
		setRefresh(true)
		await deletePhoto(id)
		setRefresh(false)
	}

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
						<h1 class="mb-8 text-3xl font-bold">Add Photo</h1>
						{photosOfPosting}
						<form action="" class="space-y-4 mt-4">



							<div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
								<div>
									<label class="sr-only" for="name">Image URL</label>
									<input
										class="w-full rounded-lg border-gray-200 border p-3 text-sm"
										placeholder="Image URL"
										type="text"
										id="name"
										onChange={(e) => setImageURL(e.target.value)}
									/>
								</div>

								<div class="">
									<button
										onClick={handleAdd}
										class="inline-block w-full rounded-lg bg-gray-200 px-5 py-3 font-medium  sm:w-auto"
									>
										Add
									</button>
								</div>


							</div>











							<div class="mt-4">
								<button

									onClick={() => navigate("/Profile")}
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