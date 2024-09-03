export default async function getAllPosts(url) {
	const result = await fetch(url);
	return result.json();
}
