import Head from "next/head";

const About = () => {
    return (
        <div>
            <Head>
                <title>About</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="title" content="exemplo lorem" />
                <meta name="description" content="ea molestias quasi exercitationem repellat qui ipsa sit autea molestias quasi exercitationem repellat qui ipsa sit aut" />


                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://localhost:3000" />
                <meta property="og:title" content="exemplo lorem" />
                <meta property="og:description" content="ea molestias quasi exercitationem repellat qui ipsa sit autea molestias quasi exercitationem repellat qui ipsa sit aut" />
                <meta property="og:image" content="" />


                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="http://localhost:3000" />
                <meta property="twitter:title" content="exemplo lorem" />
                <meta property="twitter:description" content="ea molestias quasi exercitationem repellat qui ipsa sit autea molestias quasi exercitationem repellat qui ipsa sit aut"/>
                <meta property="twitter:image" content="" />
            </Head>
            <h1>Sobre a página em Next</h1>
        </div>
    );
}

export default About;