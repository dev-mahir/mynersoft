// pages/_app.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import Head from "next/head";
import { Analytics } from "next-analytics";

const GA_TRACKING_ID = "YOUR_TRACKING_ID";

const MyApp = ({ Component, pageProps }) => {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url) => {
			gtag.pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<Head>
				<Analytics />
				<script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
					}}
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
