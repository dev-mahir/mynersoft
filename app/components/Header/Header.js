import { Fascinate } from "next/font/google";
import Link from "next/link";

const Header = () => {
	return (
		<header className="shadow-sm py-1 bg-gray-50">
			<div className="flex justify-between items-center container">
				<div>
					<Link href="/">MynerSoft</Link>
				</div>
				<div>
					<nav>
						<ul className="flex gap-x-3 ">
							<li>
								<Link href="/" className="px-2 py-1">
									Home
								</Link>
								<Link href="/learn/js" className="px-2 py-1">
									JS
								</Link>
							</li>
							<li>
								<Link
									// prefetch={ false}
									href="/redux-toolkit"
									className="px-2 py-1">
									Redux Toolkit
								</Link>
							</li>
							<li>
								<Link href="/contact-us">Career</Link>
							</li>
							<li>
								<Link href="/contact-us">Our Work</Link>
							</li>
							<li>
								<Link href="/contact-us">Services</Link>
							</li>
						</ul>
					</nav>
				</div>
				<div>
					<button>
						<input
							className="rounded-full border pl-2 py-1 bg-white font-normal text-gray-500"
							type="text"
							placeholder="Search here..."
						/>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
