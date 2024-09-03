export default async function getPostsComment(id) {
	console.log(
		id
	);
	
	const result = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${id}/comments`
	);

	if (!result.ok) {
		throw new Error("There was an error fetching posts");
	}
	return result.json();
}
