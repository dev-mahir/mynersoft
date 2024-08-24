// metadata.js
export const getMetadata = (title, description) => {
	return {
		title: title || "Default Title",
		description: description || "Default description for the Next.js app.",
	};
};
