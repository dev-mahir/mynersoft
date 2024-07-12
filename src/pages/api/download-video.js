// pages/api/download-video.js
import ytdl from "ytdl-core";
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
	const { url } = req.query;

	if (!url || !ytdl.validateURL(url)) {
		res.status(400).json({ error: "A valid URL is required" });
		return;
	}

	const videoPath = path.join(process.cwd(), "public", "video.mp4");

	try {
		const videoStream = ytdl(url, { filter: "audioandvideo" }).pipe(
			fs.createWriteStream(videoPath)
		);

		videoStream.on("finish", () => {
			res.status(200).json({
				message: "Download complete",
				videoPath: "/video.mp4",
			});
		});

		videoStream.on("error", (err) => {
			console.error("Error downloading video:", err);
			res.status(500).json({
				error: "Error downloading video",
				details: err.message,
			});
		});
	} catch (err) {
		console.error("Error:", err);
		res.status(500).json({ error: "Server error", details: err.message });
	}
}
