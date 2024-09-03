import { Poppins } from "next/font/google"; 
import "./globals.css"; 
import { getMetadata } from "@/components/MetaData/metadata"; 

import Footer from "@/components/Footer"; 
import Header from "@/components/Header"; 


const poppins = Poppins({
	subsets: ["latin"], 
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Specify font weights
});


export const metadata = getMetadata(
	"Myner Soft | Smart solution for a digital world",
	"We create, update the code"
);


export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={ poppins.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
