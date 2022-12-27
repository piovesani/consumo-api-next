
import { GetStaticProps } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { Post } from "../../types/Post";

type Props = {
    post: Post
}

const BlogItem = ({ post }: Props) => {
    return (
        <div>
            <Head>
                <title>{post.title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="title" content={post.title} />
                <meta name="description" content={post.body} />


                <meta property="og:type" content="website" />
                <meta property="og:url" content={`http://localhost:3000/blog/${post.id}`} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.body} />
                <meta property="og:image" content="" />


                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={`http://localhost:3000/blog/${post.id}`} />
                <meta property="twitter:title" content={post.title} />
                <meta property="twitter:description" content={post.body} />
                <meta property="twitter:image" content="" />
            </Head>
            <h1>Blog</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
}

export default BlogItem;

export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await response.json();

    const paths = posts.map(post => ({
        params: { id: post.id.toString() }
    }));

    return { paths, fallback: false }
}

interface IParams extends ParsedUrlQuery {
    id: string
}

export const getStaticProps: GetStaticProps = async (context) => {

    const { id } = context.params as IParams;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await response.json();

    return {
        props: {
            post
        }
    }
}