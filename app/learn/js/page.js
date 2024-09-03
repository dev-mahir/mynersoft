import { getMetadata } from "@/app/components/Header/MetaData/metadata";
import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";
import React from "react";

export const metadata = getMetadata(
	"Javascript | Myner Soft",
	"Learn javascript in simple way"
);

const Js = async () => {
	const posts = await getAllPosts(
		"https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
   
    
    return <div>
        <ul>
            {posts.map((post) => <li key={post.id}>
                <Link href={`/learn/js/${post.id}`}>{post.title}</Link>
            </li>)}
        </ul>
    </div>;
};

export default Js;
