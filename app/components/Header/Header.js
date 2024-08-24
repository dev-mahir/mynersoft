import { Fascinate } from "next/font/google";
import Link from "next/link";


const Header = () => {
    return (
		<header>
			<div className="flex justify-between">
				<div>
					<Link href="/">MynerSoft</Link>
				</div>
				<div>
					<nav>
						<ul className="flex gap-x-2 ">
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
						</ul>
					</nav>
				</div>
                <div>
                    Search......
                </div>
			</div>
		</header>
	);
}

export default Header;