import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
	getPostingsById,
	getPhotosByPostId,
	deletePost,
	deletePhoto,
	addPhoto,
	updateTitle,
	updatePrice,
	updateDescription,
	addComment,
	getCommentsByPostId,
	deleteComment
} from "../api";

const Post_details = ({ selectedPost, user, setRefresh, refresh }) => {
	const [postingDetails, setPostingDetails] = useState([])
	const [postingPhotos, setPostingPhotos] = useState([])
	const [postingComments, setPostingComments] = useState([])
	const [postingRefresh, setPostingRefresh] = useState(false)
	const [comment, setComment] = useState('');
	const [imageURL, setImageURL] = useState('');

	const [newTitle, setNewTitle] = useState('');
	const [newDescription, setNewDescription] = useState('');
	const [newPrice, setNewPrice] = useState(0);


	const [editTitle, setEditTitle] = useState(false)
	const [editDescription, setEditDescription] = useState(false)
	const [editPrice, setEditPrice] = useState(false)

	const navigate = useNavigate();

	// Fetches the post
	const posting = async () => {
		const posting = await getPostingsById(selectedPost);
		setPostingDetails(posting)
	}

	// Fetches the photos for the selected post
	const photos = async () => {
		const photos = await getPhotosByPostId(selectedPost);
		setPostingPhotos(photos)
	}

	// Fetches the comments for the selected post
	const comments = async () => {
		const comments = await getCommentsByPostId(selectedPost);
		setPostingComments(comments)
	}

	// Adds a photo for a post
	const handleAddPhoto = async () => {
		setPostingRefresh(true)
		setRefresh(true)
		await addPhoto(selectedPost, imageURL)
		setPostingRefresh(false)
		setRefresh(false)
	}

	// Adds a comment for a post
	const handleAddComment = async () => {
		setPostingRefresh(true)
		setRefresh(true)
		await addComment(userId, selectedPost, comment)
		setPostingRefresh(false)
		setRefresh(false)
	}

	// Deletes the post
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

	// Deletes photos for the selected post
	const handleDeletePhoto = async (id) => {
		setPostingRefresh(true)
		setRefresh(true)
		await deletePhoto(id)
		setPostingRefresh(false)
		setRefresh(false)
	}

	// Deletes comments for the selected post
	const handleDeleteComment = async (id) => {
		setPostingRefresh(true)
		setRefresh(true)
		await deleteComment(id)
		setPostingRefresh(false)
		setRefresh(false)
	}

	// Updates the title
	const handleUpdateTitle = async (id, title) => {
		setPostingRefresh(true)
		setRefresh(true)
		await updateTitle(selectedPost, newTitle)
		setPostingRefresh(false)
		setRefresh(false)

	}

	// Updates the price
	const handleUpdatePrice = async (id, title) => {
		setPostingRefresh(true)
		setRefresh(true)
		await updatePrice(selectedPost, newPrice)
		setPostingRefresh(false)
		setRefresh(false)
	}

	// Updates the description
	const handleUpdateDescription = async (id, title) => {
		setPostingRefresh(true)
		setRefresh(true)
		await updateDescription(selectedPost, newDescription)
		setPostingRefresh(false)
		setRefresh(false)
	}

	// Allows edit title box to display
	const handleShowUpdateTitleBox = () => {
		if (editTitle === false) {
			return setEditTitle(true)
		}
		return setEditTitle(false)
	}

	// Allows edit price box to display
	const handleShowUpdatePriceBox = () => {
		if (editPrice === false) {
			return setEditPrice(true)
		}
		return setEditPrice(false)
	}

	// Allows edit description box to display
	const handleShowUpdateDescriptionBox = () => {
		if (editDescription === false) {
			return setEditDescription(true)
		}
		return setEditDescription(false)
	}

	useEffect(() => {
		posting()
		photos()
		comments()
	}, [postingRefresh, refresh])

	// Variables used
	const id = postingDetails.id
	const price = postingDetails.price?.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
	})
	const photo1 = postingPhotos[0]?.photo
	const photoNotFound = <img class="aspect-square w-full rounded-xl object-cover" src="https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"></img>
	const type = postingDetails.type
	const title = postingDetails.title
	const description = postingDetails.description
	const date = new Date(postingDetails.date?.replace(/-/g, '\/').replace(/T.+/, ''))
	const currentDate = new Date ()
	const difference  = currentDate - date
	const daysAgo = Math.ceil(difference / (1000 * 60 * 60 * 24))

	// User variables used
	const postUserId = postingDetails.userId
	const userId = user.id
	const userAdmin = user.isadmin

	// Boxes that pop up to edit components
	const editTitleBox =
		<div class="grid mt-2">
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

	const editPriceBox =
		<div class="grid mt-2">
			<label
				for="UserEmail"
				class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
			>
				<input
					type="text"
					id="UserEmail"
					placeholder="Edit Price"
					onChange={(e) => setNewPrice(e.target.value)}
					class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
				/>

				<span
					class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
				>
					Edit Price
				</span>
			</label>

			<button
				onClick={handleUpdatePrice}
				class="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500 mt-2"
			>
				Update
			</button>
		</div>

	const editDescriptionBox =
		<div class="grid mt-2">
			<label
				for="UserEmail"
				class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
			>
				<input
					type="text"
					id="UserEmail"
					placeholder="Edit Price"
					onChange={(e) => setNewDescription(e.target.value)}
					class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
				/>

				<span
					class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
				>
					Edit Description
				</span>
			</label>

			<button
				onClick={handleUpdateDescription}
				class="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500 mt-2"
			>
				Update
			</button>
		</div>

	// The component to display the 1st photo
	const photo1Display = postingPhotos.map((p) => {
		return <div>
			{photo1 === p.photo ? <div class="relative"><img
				alt="House"
				src={photo1}
				class="aspect-square w-full rounded-xl object-cover"
			/>
				{userId === postUserId || userAdmin ? <button onClick={() => handleDeletePhoto(p.id)}>
					<img class="absolute top-4 right-4 h-6" src="https://cdn0.iconfinder.com/data/icons/controls-add-on/48/v-41-512.png">
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
							<img class="absolute top-4 right-4 h-6" src="https://cdn0.iconfinder.com/data/icons/controls-add-on/48/v-41-512.png">
							</img>
						</button> : ""}
					</div>}
			</div>
		</div>
	})

	// The component to display comments
	const commentDipsplay = postingComments.map((p) => {
		return <div class="flex py-2">{p.comment} {userId === p.userId || userAdmin ? <button onClick={() => handleDeleteComment(p.id)}><img class="h-5 pt-0 pl-1" src="https://cdn0.iconfinder.com/data/icons/controls-add-on/48/v-41-512.png"></img></button> : ""}</div>
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
							{daysAgo <= 1 ? "Today" : <div>{daysAgo} days ago</div>}
						</div>


						<div class="mt-8 flex justify-between">
							<div class="max-w-[35ch] space-y-2">

								{userId === postUserId || userAdmin ?
									<button onClick={handleShowUpdateTitleBox} class="text-xl text-left font-bold sm:text-2xl">
										{title}
									</button> :
									<h1 class="text-xl text-left font-bold sm:text-2xl">
										{title}
									</h1>}

								


							</div>
							{userId === postUserId || userAdmin ?
								<button onClick={handleShowUpdatePriceBox} class="text-lg font-bold">
									{type === "rent" ? <div>{price}/mo</div> : price} 
								</button> :
								<h1 class="text-lg font-bold">
									{type === "rent" ? <div>{price}/mo</div> : price} 
								</h1>}

							

						</div>

						{editTitle ? editTitleBox : ""}

						{editPrice ? editPriceBox : ""}

						<div class="mt-4">
							<div class="prose max-w-none text-left">

								{userId === postUserId || userAdmin ?
									<button onClick={handleShowUpdateDescriptionBox} class="text-left">
										{description}
									</button> :
									<p class="text-left">
										{description}
									</p>}

								{editDescription ? editDescriptionBox : ""}


								<p class="mt-2 text-gray-400 text-sm italic">
									{/* Posted by: {username} */}
								</p>
							</div>

						</div>



						<div class="mt-6 mb-2 text-left">Comments</div>
						<hr class="h-px my-2 bg-gray-700 dark:bg-gray-700"></hr>

						<p class="text-sm text-left text-gray-500 mb-2 px-2 py-2 rounded-xl italic bg-gray-100">{commentDipsplay.length > 0 ? commentDipsplay : "No comments"}</p>
						{!userId ? <div class="text-sm text-left text-gray-500">Want to add a comment? Please <Link to="/Login" class="underline text-blue-800">log in</Link>.</div> : ""}

						{userId || userAdmin ?
							<div class="gap-4">
								<label
									for="UserEmail"
									class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
								>
									<input
										id="UserEmail"
										placeholder="Comment"
										onChange={(e) => setComment(e.target.value)}
										class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
									/>

									<span
										class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
									>
										Comment
									</span>
								</label>

								<button
									onClick={handleAddComment}
									class="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500 mt-2"
								>
									Add Comment
								</button>
							</div>
							: ""}

						{userId !== postUserId && !userAdmin ?

							""

							: <button
								onClick={handleDeletePost}
								class="block m-auto rounded px-5 py-3 text-xs border-1 font-medium text-black hover:bg-red-500 mt-2"
							>
								Delete Post
							</button>
						}

					</div>

				</div>
			</div>

		</section>
	)
}

export default Post_details 