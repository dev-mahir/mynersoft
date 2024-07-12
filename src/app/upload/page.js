"use client";

import { useState } from "react";

export default function UploadPage() {
	const [photo, setPhoto] = useState(null);
	  const [image, setImage] = useState(null);

	const handleUpload = async (e) => {
		e.preventDefault();
	
		const data = new FormData();
		data.append("file", photo);
		data.append("upload_preset", "nixhqiak");

		const res = await fetch(
			`https://api.cloudinary.com/v1_1/dxdrjruzm/upload`,
			{
				method: "POST",
				body: data,
			}
		);
		console.log(res);

		const file = await res.json();
		setImage(file.secure_url);
	};

	return (
		<div>
			{image && <img src={image} alt="Uploaded image" />}

			<form onSubmit={handleUpload}>
				<div className="form-control">
					<label htmlFor="">Upload Image</label>
					<input
						onChange={(e) => setPhoto(e.target.files[0])}
						type="file"
						name="photo"
						id="photo"
						className="input-file"
						accept="image/*"
					/>
				</div>
				<button type="submit" className="btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
}
