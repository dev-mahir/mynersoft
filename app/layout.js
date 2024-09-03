import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import { getMetadata } from "./components/Header/MetaData/metadata";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = getMetadata(
	"Myner Soft | Smart solution fro a digital world",
	"We create , update the code "
);

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
