import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "MynerSoft || Smart Solutions for a Digital World.",
	description:
		"We develope an interactive interface for creating and managing features. ",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
