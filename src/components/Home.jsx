import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
	return (
		<section>



			<section
				class="overflow-hidden bg-[url(https://images.pexels.com/photos/7061672/pexels-photo-7061672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover bg-center bg-top bg-no-repeat"
			>
				<div class="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
					<div class="text-center ltr:sm:text-left rtl:sm:text-right">
		

						<div class="mt-4 sm:mt-8">
							
						</div>
					</div>
				</div>
			</section>

			<div class="sm:grid grid-cols-3 p-4 mt-2 mb-8">
				<div class="block group p-4 shadow rounded-xl">
					<img
						src="https://images.pexels.com/photos/15592008/pexels-photo-15592008/free-photo-of-facade-of-a-red-townhouse.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt=""
						class="h-[350px] w-full object-cover sm:h-[450px]"
					/>

					<div class="mt-3">
						<h3
							class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4"
						>
							Townhome Available
						</h3>

						{/* <p class="mt-1.5 max-w-[40ch] text-xs text-gray-500 text-left">
							Renting our townhome, available in the summer. Please email for details.
						</p> */}
						<button
							class="inline-block px-5 py-3 mt-3 text-xs font-medium tracking-wide text-white uppercase bg-black"
						>
							See Details
						</button>
					</div>
				</div>


			</div>

		</section>
	)
}

export default Home;



