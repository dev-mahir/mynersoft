import { nav_links } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import Search from "./Header/Search";

const Header = () => {


	return (
		<header className="shadow-sm py-3 bg-gray-50">
			<div className="flex justify-between items-center container">
				<div>
					<Link href="/">MynerSoft</Link>
				</div>

				<nav className="hidden md:block">
					<ul className="flex gap-x-3 ">
						{nav_links.map((link) => (
							<Link
								href={link.href}
								key={link.key}
								className="text-gray-600 cursor-pointer transition-all hover:font-bold hover:text-gray-400">
								{link.label}
							</Link>
						))}
					</ul>
				</nav>

				<div className="flex items-center  gap-x-2">
					<div className=" flex items-center">
						<Search/>
					</div>

					<Image
						src="/icon/menu.svg"
						alt="menu"
						height={24}
						width={24}
						className="cursor-pointer lg:hidden"
					/>

					<div className="hidden lg:block">
						<Button
							type="button"
							title="Login"
							icon="/icon/user.svg"
							variant="bg-gray-900"
						/>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
