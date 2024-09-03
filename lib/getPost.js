export default async function getPost(id) {
	const result = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${id}`,
		{
			cache: "force-cache",
		}
	);

	if (!result.ok) {
		throw new Error("There was an error fetching posts");
	}
	return result.json();
}
