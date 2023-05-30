import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllPostings } from "../api";

const Buy = () => {
	const [allPostings, setAllPostings] = useState({})

	const postings = async () => {
		const allPosts = await getAllPostings();
		setAllPostings(allPosts)
	}

	useEffect(() => {
		postings()
	}, [])

	// console.log({ allPostings })

	// const buyPosts = allPostings.filter((p) => p.type === "buy")

	// console.log({buyPosts})

	// const postPreview = buyPosts.map((p) => {

	// 	const date = p.date

	// 	return 	<article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg m-4">
	// 	<Link to="/">
	// 	<img
	// 		alt="Office"
	// 		src="https://photos.zillowstatic.com/fp/89bf89672fe7b6a175b2546c95df9e5f-cc_ft_1536.webp"
	// 		class="h-56 w-full object-cover brightness-75"
	// 	/>
	// 	<div class="bg-white p-4 sm:p-6">
	// 		<time datetime="2022-10-10" class="block text-xs text-gray-500">
	// 			{date}
	// 		</time>
	// 			<h3 class="mt-0.5 text-lg text-gray-900">
	// 				{p.title}
	// 			</h3>
	// 		<p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
	// 			{p.description}
	// 		</p>
	// 	</div>
	// 	</Link>
	// </article>
	// })


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

				<article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg m-4">
					<Link to="/">
					<img
						alt="Office"
						src="https://photos.zillowstatic.com/fp/89bf89672fe7b6a175b2546c95df9e5f-cc_ft_1536.webp"
						class="h-56 w-full object-cover brightness-75"
					/>

					<div class="bg-white p-4 sm:p-6">
						<time datetime="2022-10-10" class="block text-xs text-gray-500">
							{/* {date} */}
						</time>

						
							<h3 class="mt-0.5 text-lg text-gray-900">
								How to position your furniture for positivity
							</h3>
					

						<p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
							dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
							sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
							voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
							Molestias explicabo corporis voluptatem?
						</p>
					</div>
					</Link>
				</article>

			{/* {postPreview} */}

			</div>




		</section>
	)
}

export default Buy