// metadata.js
export const getMetadata = (title, description, keywords) => {
	return {
		title: title || "Default Title",
		description: description || "Default description for the Next.js app.",
		keywords: keywords || ["mynersoft", "myner soft", "dev mahir", "mahir"],
	};
};
