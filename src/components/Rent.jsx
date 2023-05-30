import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getPostingsByType, getAllPostings } from "../api";

const Rent = ({ posting, setPosting}) => {

	// const postings = async () => {
	// 	const type = 'rent'
    //     const postings = await getPostingsByType(type);
    //     setPosting(postings)
    // }

	// useEffect(() => {
    //     postings()
    // }, [])

	// console.log({posting})


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




		</section>
	)
}

export default Rent 