export default function UploadPage() {
	return (
		<div>
			<form action="">
				<div className="form-control">
					<label htmlFor="">Upload Image</label>
					<input
						type="file"
						name="photo"
						id="photo"
						className="input-file"
					/>
				</div>
				<button className="btn-primary">Submit</button>
			</form>
		</div>
	);
}
