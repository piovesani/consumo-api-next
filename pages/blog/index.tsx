import { Post } from "../../types/Post";

type Props = {
    name: string;
    posts: Post[];
}

const Blog = ({ name, posts }: Props) => {
    return (
        <>
            <h1>Ola, este é o blog de {name}</h1><ul>
                {posts.map((post, index) => (
                    <li key={index}>
                        <a href={`/blog/${post.id}`}>{post.title}</a>{post.title}</li>
                ))}
            </ul>
        </>
    );
}

export const getStaticProps = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await response.json();
    return {
        props: {
            name: 'Renan Piovesani',
            posts
        },
        revalidate: 7200
    }

}

export default Blog;