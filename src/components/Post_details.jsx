import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getPostingsById, getPhotosByPostId, deletePost, deletePhoto, addPhoto, updateTitle } from "../api";

const Post_details = ({ selectedPost, setSelectedPost, allPostings, allPhotos, allComments, user, setRefresh, refresh }) => {
	const [postingDetails, setPostingDetails] = useState([])
	const [postingPhotos, setPostingPhotos] = useState([])
	const [postingRefresh, setPostingRefresh] = useState(false)
	const [imageURL, setImageURL] = useState('');

	const [newTitle, setNewTitle] = useState('');
	const [newDescription, setNewDescription] = useState('');
	const [newPrice, setNewPrice] = useState(0);


	const [editTitle, setEditTitle] = useState(false)
	const [editDescription, setEditDescription] = useState(false)
	const [editPrice, setEditPrice] = useState(false)

	const navigate = useNavigate();

	const posting = async () => {
		const posting = await getPostingsById(selectedPost);
		setPostingDetails(posting)
	}

	const photos = async () => {
		const photos = await getPhotosByPostId(selectedPost);
		setPostingPhotos(photos)
	}


	const handleAddPhoto = async () => {
		setPostingRefresh(true)
		setRefresh(true)
		await addPhoto(selectedPost, imageURL)
		setPostingRefresh(false)
		setRefresh(false)
	}

	const handleDeletePost = async () => {
		setRefresh(true)
		if (postingPhotos.length > 0) {
			window.alert("Please delete all photos first.")
			return
		}
		await deletePost(selectedPost)
		setRefresh(false)
		navigate(-1)
		window.alert("Post successfully deleted!")
	}

	const handleDeletePhoto = async (id) => {
		setPostingRefresh(true)
		setRefresh(true)
		await deletePhoto(id)
		setPostingRefresh(false)
		setRefresh(false)
	}

	const handleUpdateTitle = async (id, title) => {
		setPostingRefresh(true)
		setRefresh(true)
		await updateTitle(selectedPost, newTitle)
		setPostingRefresh(false)
		setRefresh(false)

	}

	const handleDisplayUpdateTitle = () => {
		if (editTitle === false) {
			return setEditTitle(true)
		}
		return setEditTitle(false)
	}

	useEffect(() => {
		posting()
		photos()
	}, [postingRefresh, refresh])

	const id = postingDetails.id
	const price = (postingDetails.price)
	const photo1 = postingPhotos[0]?.photo
	const photoNotFound = <img class="aspect-square w-full rounded-xl object-cover" src="https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"></img>
	const type = postingDetails.type
	const title = postingDetails.title
	const description = postingDetails.description
	const date = (postingDetails.date)
	const daysAgo = new Date() - date

	const postUserId = postingDetails.userId
	const username = user.username
	const userId = user.id
	const userAdmin = user.isadmin

	const editTitleDisplay =
		<div class="grid">
			<label
				for="UserEmail"
				class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
			>
				<input
					type="text"
					id="UserEmail"
					placeholder="Edit Title"
					onChange={(e) => setNewTitle(e.target.value)}
					class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
				/>

				<span
					class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
				>
					Edit Title
				</span>
			</label>

			<button
				onClick={handleUpdateTitle}
				class="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500 mt-2"
			>
				Update
			</button>
		</div>

	const photo1Display = postingPhotos.map((p) => {
		return <div>
			{photo1 === p.photo ? <div class="relative"><img
				alt="House"
				src={photo1}
				class="aspect-square w-full rounded-xl object-cover"
			/>
				{userId === postUserId || userAdmin ? <button onClick={() => handleDeletePhoto(p.id)}>
					<img class="absolute top-4 right-4 h-6" src="https://pixy.org/src/439/4393715.png">
					</img>
				</button> : ""}
			</div> : ""}

			<div class="grid grid-cols-1 gap-4">
				{photo1 === p.photo ? "" :
					<div class="relative">
						<img
							alt="House"
							src={p.photo}
							class="aspect-square w-full rounded-xl object-cover"
						/>
						{userId === postUserId || userAdmin ? <button onClick={() => handleDeletePhoto(p.id)}>
							<img class="absolute top-4 right-4 h-6" src="https://pixy.org/src/439/4393715.png">
							</img>
						</button> : ""}
					</div>}
			</div>
		</div>
	})



	return (
		<section>

			<div class="relative mx-auto max-w-screen-xl px-4 py-8">
				<div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
					<div class="grid grid-cols-2 gap-4 md:grid-cols-1">

						{photo1Display.length > 0 ? photo1Display : photoNotFound}

						{userId === postUserId || userAdmin ?

							<div>
								<div class="grid grid-cols-1 m-auto mt-2 gap-4 sm:grid-cols-2">
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
											onClick={handleAddPhoto}
											class="inline-block w-full rounded-lg bg-gray-200 px-5 py-3 font-medium  sm:w-auto"
										>
											Add
										</button>
									</div>


								</div>
							</div>

							: ""}

					</div>

					<div class="sticky top-0">

						<div class="flex justify-between">
							<strong
								class="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-md font-medium tracking-wide text-blue-600"
							>
								To {type}
							</strong>
							{/* {date} */}
						</div>


						<div class="mt-8 flex justify-between">
							<div class="max-w-[35ch] space-y-2">

								{userId === postUserId || userAdmin ?
									<button onClick={handleDisplayUpdateTitle} class="text-xl font-bold sm:text-2xl">
										{title}
									</button> :
									<h1 class="text-xl font-bold sm:text-2xl">
										{title}
									</h1>}

								{editTitle ? editTitleDisplay : ""}


							</div>

							<p class="text-lg font-bold">${price}</p>
						</div>

						<div class="mt-4">
							<div class="prose max-w-none text-left">
								<p>
									{description}
								</p>
								<p class="mt-2 text-gray-400 text-sm italic">
									{/* Posted by: {username} */}
								</p>
							</div>

						</div>



						<div class="mt-6 mb-2 text-left">Comments</div>
						<hr class="h-px my-2 bg-gray-700 dark:bg-gray-700"></hr>

						<p class="text-sm text-left text-gray-500 mb-2">No comments.</p>


						{userId || userAdmin ?
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
							: ""}

						{userId === postUserId || userAdmin ?



							<button
								onClick={handleDeletePost}
								class="block m-auto rounded bg-red-600 px-5 py-3 text-xs font-medium text-white hover:bg-red-500 mt-2"
							>
								Delete Post
							</button>
							: ""}

					</div>

				</div>
			</div>

		</section>
	)
}

export default Post_details 