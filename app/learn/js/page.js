import { getMetadata } from "@/components/MetaData/metadata";
import { js_topics } from "@/constants";
import Link from "next/link";
import React from "react";

export const metadata = getMetadata(
	"Javascript | Myner Soft",
	"Learn javascript in simple way"
);

const Js = () => {
	return (
		<div className=" ">
			<div
				className=" flex justify-start flex-wrap  gap-4
            ">
				{js_topics.map((item) => (
					<div className="card bg-emerald-600" key={item}>
						<Link
							href={`/${item.slug}`}
							className="font-bold text-white ">
							{item.label}
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Js;
