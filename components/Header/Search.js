"use client";

import Image from "next/image";
import React, { useState } from "react";

const Search = () => {
	const [showSearch, setShowSearch] = useState(false);

	return (
		<>
			<button>
				<input
					className={` ${
						showSearch ? "block" : "hidden"
					} rounded-full border pl-2 py-1 bg-white font-normal text-gray-500`}
					type="text"
					placeholder="Search here..."
				/>
			</button>
			<button onClick={() => setShowSearch(!showSearch)}>
				<Image
					src="/icon/search.svg"
					alt="menu"
					height={24}
					width={24}
					className="cursor-pointer lg:hidden"
				/>
			</button>
		</>
	);
};

export default Search;
