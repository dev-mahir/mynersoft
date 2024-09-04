"use client";
import Image from "next/image";
import React, { useState } from "react";
import Input from "../Form/Input";
import Button from "../Button";

const Model = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className="card bg-gray-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px]">
			<div>
				<div className="flex justify-end pt-1 pb-3">
					<button>
						<Image
							src="/icon/close.svg"
							alt="Close"
							width={24}
							height={24}
						/>
					</button>
				</div>
				<div>
					<form>
						<div className="form-control">
							<label htmlFor="email">Email</label>
							<input
								id="email"
								type="text"
								placeholder="mynersoft@gmail.com"
							/>
						</div>
						<div className="form-control">
							<label htmlFor="Password">password</label>
							<input
								id="password"
								type="password"
								placeholder="Your password"
							/>
						</div>
						<div className="form-control">
							<Button
								type="submit"
								title="login"
								variant="btn-primary"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Model;
