// pages/api/download-video.js
import ytdl from "ytdl-core";
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
	const { url } = req.query;

	if (!url) {
		res.status(400).json({ error: "URL is required" });
		return;
	}

	const videoPath = path.join(process.cwd(), "public", "video.mp4");
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
		res.status(500).json({
			error: "Error downloading video",
			details: err.message,
		});
	});
}
