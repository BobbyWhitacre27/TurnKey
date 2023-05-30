import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createPosting } from "../api/index.js"

const Post = ({user, setRefresh}) => {
	const navigate = useNavigate();

	const [title, setTitle] = useState('');
	const [price, setPrice] = useState(0);
	const [type, setType] = useState('');
	const [description, setDescription] = useState('');

	const [message, setMessage] = useState('')

	const userId = user.id

	const date = new Date()

	const handleSubmit = async (event) => {
        event.preventDefault()
        if (title === "") {
            setMessage("Please fill in title")
            return
        }
        if (type === "") {
            setMessage("Please select For Sale or For Rent")
            return
        }
        if (description === '') {
            setMessage("Please include a description")
            return
        }
		setRefresh(true)
        console.log({userId, title, price, type, date, description})
        await createPosting(userId, title, price, type, date, description)
		setRefresh(false)
        navigate("/Post_photos")
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
							<h1 class="mb-8 text-3xl font-bold">Add A New Posting</h1>
							{message}
							<form action="" class="space-y-4">
								<div>
									<label class="sr-only" for="name">Title</label>
									<input
										class="w-full rounded-lg border-gray-200 border p-3 text-sm"
										placeholder="Title"
										type="text"
										id="title"
										onChange={(e) => setTitle(e.target.value)}
									/>
								</div>

								<div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
									<div>
										<label class="sr-only" for="email">Price</label>
										<input
											class="w-full rounded-lg border-gray-200 border p-3 text-sm"
											placeholder="Price"
											type="integer"
											id="price"
											onChange={(e) => setPrice(e.target.value)}
										/>
									</div>

					
								</div>

								<div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
									<div>
										<input
											class="peer sr-only"
											id="option1"
											type="radio"
											tabindex="-1"
											name="option"
											onChange={(e) => setType('buy')}
										/>

										<label
											for="option1"
											class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
											tabindex="0"
										>
											<span class="text-sm font-medium"> For Sale </span>
										</label>
									</div>

									<div>
										<input
											class="peer sr-only"
											id="option2"
											type="radio"
											tabindex="-1"
											name="option"
											onChange={(e) => setType('rent')}
										/>

										<label
											for="option2"
											class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
											tabindex="0"
										>
											<span class="text-sm font-medium"> For Rent </span>
										</label>
									</div>

						
								</div>

								<div>
									<label class="sr-only" for="message">Message</label>

									<textarea
										class="w-full rounded-lg border-gray-200 border p-3 text-sm"
										placeholder="Description - Include contact method, location, and listing details."
										rows="8"
										id="message"
										onChange={(e) => setDescription(e.target.value)}
									></textarea>
								</div>

								<div class="mt-4">
									<button
										onClick={handleSubmit}
										class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
									>
										Add Posting
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