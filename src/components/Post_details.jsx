import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPostingsById, getPhotosByPostId } from "../api";

const Post_details = ({ selectedPost, setSelectedPost, allPostings, allPhotos, allComments, user }) => {
	const [postingDetails, setPostingDetails] = useState([])
	const [postingPhotos, setPostingPhotos] = useState([])

	const posting = async () => {
		const posting = await getPostingsById(selectedPost);
		setPostingDetails(posting)
	}

	const photos = async () => {
		const photos = await getPhotosByPostId(selectedPost);
		setPostingPhotos(photos)
	}

	useEffect(() => {
		posting()
		photos()
	}, [])

	console.log({ postingDetails })
	console.log({ postingPhotos })
	console.log({ user })

	const id = postingDetails.id
	const price = postingDetails.price
	const photo = postingPhotos[0]?.photo
	const type = postingDetails.type
	const title = postingDetails.title
	const description = postingDetails.description
	const date = (postingDetails.date)
	const daysAgo = new Date() - date
	const username = user.username
	const postUserId = postingDetails.userId
	const userId = user.id
	const userAdmin = user.isadmin

	console.log({postUserId})
	console.log({userId})
	


	return (
		<section>






			<section>
				<div class="relative mx-auto max-w-screen-xl px-4 py-8">
					<div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
						<div class="grid grid-cols-2 gap-4 md:grid-cols-1">
							<img
								alt="House"
								src={photo ? photo : ""}
								class="aspect-square w-full rounded-xl object-cover"
							/>

							{/* <div class="grid grid-cols-2 gap-4 lg:mt-4">
								<img
									alt="Les Paul"
									src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
									class="aspect-square w-full rounded-xl object-cover"
								/>

								<img
									alt="Les Paul"
									src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
									class="aspect-square w-full rounded-xl object-cover"
								/>

								<img
									alt="Les Paul"
									src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
									class="aspect-square w-full rounded-xl object-cover"
								/>

								<img
									alt="Les Paul"
									src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
									class="aspect-square w-full rounded-xl object-cover"
								/>
							</div> */}
						</div>

						<div class="sticky top-0">

							<div class="flex justify-between">
								<strong
									class="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-md font-medium tracking-wide text-blue-600"
								>
									To {type}
								</strong>
								{date}
							</div>


							<div class="mt-8 flex justify-between">
								<div class="max-w-[35ch] space-y-2">
									<h1 class="text-xl font-bold sm:text-2xl">
										{title}
									</h1>


								</div>

								<p class="text-lg font-bold">${price}</p>
							</div>

							<div class="mt-4">
								<div class="prose max-w-none text-left">
									<p>
										{description}
									</p>
									<p class="mt-2 text-gray-400 text-sm italic">
										Posted by: {username}
									</p>
								</div>

							</div>



							<div class="mt-6 mb-2 text-left">Comments</div>
							<hr class="h-px my-2 bg-gray-700 dark:bg-gray-700"></hr>

							<p class="text-sm text-left text-gray-500 mb-2">No comments.</p>

							<div class="gap-4">


								<label
									for="UserEmail"
									class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
								>
									<input
										type=""
										id="UserEmail"
										placeholder="Email"
										class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
									/>

									<span
										class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
									>
										Comment
									</span>
								</label>

								<button
									type="submit"
									class="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500 mt-2"
								>
									Add Comment
								</button>
							</div>

								{userId === postUserId || userAdmin ? <button
									type="submit"
									class="block m-auto rounded bg-red-600 px-5 py-3 text-xs font-medium text-white hover:bg-red-500 mt-2"
								>
									Delete Post
								</button> : ""}

						</div>
	
					</div>
				</div>
			</section>




		</section>
	)
}

export default Post_details 