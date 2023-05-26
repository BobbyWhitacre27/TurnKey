import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
	return (
		<section>

			<footer aria-label="Site Footer" class="bg-white border-top mb-6">
				<div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
					<div class="sm:flex sm:items-center sm:justify-between">
						<div class="flex justify-center text-teal-600 sm:justify-start">
							<img src="https://i.ibb.co/KL6qQD4/Turn-Key-Logo-2.png" class="h-16"></img>
						</div>

						<p class="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
							Created by Bobby Whitacre &copy; 2023. All rights reserved.
						</p>
					</div>
				</div>
			</footer>


		</section>
	)
}

export default Footer 