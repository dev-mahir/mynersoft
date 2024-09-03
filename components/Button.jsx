import Image from "next/image";
import React from "react";

// type ButtonProps = {
// 	type: "button" | "submit",
// 	title: string,
// 	icon?: string,
// 	variant: any,
// };


const Button = ({ type, title, icon, variant }) => {
	return (
		<button type={type} className={`btn ${variant}`}>
			{icon && <Image src={icon} alt={title} width={24} height={24} />}
			{title}
		</button>
	);
};

export default Button;
