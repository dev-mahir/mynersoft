import ytdl from "ytdl-core";

export default async () => {
	const { url } = req.query;
	ytdl(url).pipe(
		fs.createWriteStream("video.mp4")
	);
	const video = ytdl(url, { filter: "audioonly" });
	res.setHeader("Content-Disposition", 'attachment; filename="video.mp4"');
	res.setHeader("Content-Type", "audio/mp4");
	video.pipe(res);
};
