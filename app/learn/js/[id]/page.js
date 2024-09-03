import { getMetadata } from "@/app/components/Header/MetaData/metadata";
import getPost from "@/lib/getPost";
import getPostsComment from "@/lib/getPostsComment";
import React from "react";

export async function generateMetadata({ params }) {
	const { id } = params;
	const post = await getPost(
		`https://jsonplaceholder.typicode.com/posts/${id}`
	);
	return {
		title: post.title,
		description: post.description,
	};
}

const SinglePost = async ({ params }) => {
	const { id } = params;

	const post = await getPost(
		`https://jsonplaceholder.typicode.com/posts/${id}`
	);
	const comments = await getPostsComment(
		`https://jsonplaceholder.typicode.com/posts/${id}`
	);

	//we can get parallel responses



	return (
		<div>
			<h2 className="text-2xl font-bold text-blue-400">{post.title}</h2>
			<p>{post.description}</p>
		</div>
	);
};

export default SinglePost;
