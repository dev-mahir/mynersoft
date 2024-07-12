// pages/index.js
"use client";
import { useState } from "react";

export default function Home() {
	const [url, setUrl] = useState("");
	const [status, setStatus] = useState("");

	const handleDownload = async () => {
		setStatus("Downloading...");
		try {
			const response = await fetch(
				`/api/download-video?url=${encodeURIComponent(url)}`
			);
			const data = await response.json();

			if (response.ok) {
				setStatus(
					"Download complete. You can find the video in the public folder."
				);
				console.log(data.videoPath); // URL to access the downloaded video
			} else {
				setStatus(`Error: ${data.error}`);
			}
		} catch (error) {
			setStatus("Error downloading video");
			console.error("Error:", error);
		}
	};

	return (
		<div style={{ padding: "20px" }}>
			<h1>YouTube Video Downloader</h1>
			<input
				type="text"
				placeholder="Enter YouTube URL"
				value={url}
				onChange={(e) => setUrl(e.target.value)}
				style={{
					width: "300px",
					padding: "10px",
					marginBottom: "10px",
				}}
			/>
			<button onClick={handleDownload} style={{ padding: "10px 20px" }}>
				Download
			</button>
			<p>{status}</p>
		</div>
	);
}
