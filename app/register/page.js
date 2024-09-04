import Button from "@/components/Button";
import React from "react";

const Register = () => {

	


	return (
		<div className="flex justify-center items-center h-[80vh]">
			<div>
				<div className="text-center pb-10">
					<h2>Welcome to Myner Soft</h2>
					<p>To continue please signup</p>
				</div>
				<div className="card">
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
								title="Sign up"
								variant="btn-primary"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
