
export default function robots() {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: "/private/",
		},
		sitemap: "https://mynersoft.vercel.app/sitemap.xml",
	};
}
