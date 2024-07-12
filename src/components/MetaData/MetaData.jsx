import Head from 'next/head';
import React from 'react'

const MetaData = ({title}) => {
  return (
		<Head>
          <title>{title}</title>
			<meta
				name="description"
				content="Myner Soft || Smart Solutions for a Digital World."
			/>
			<meta property="og:title" content="Home" />
			<meta property="og:description" content="This is home page." />
			<meta
				property="og:image"
				content="https://example.com/my-image.jpg"
			/>
		</Head>
  );
}

export default MetaData