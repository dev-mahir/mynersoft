import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/header/Header";



export const metadata = {
	title: "MynerSoft || Smart Solutions for a Digital World.",
	description:
		"We develope an interactive interface for creating and managing features. ",
};

export default function RootLayout({ children }) {
	return (
		<>
			<html lang="en">
				
				<body>
					
				<Header/>
					{children}
					<Analytics />
					<SpeedInsights />
				</body>
			</html>
		</>
	);
}
