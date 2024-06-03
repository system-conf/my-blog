// pages/index.js
import Link from 'next/link';
import { getPosts } from '../lib/posts.js';

export async function getStaticProps() {
  const posts = getPosts();
  return {
    props: {
      posts
    }
  };
}

export default function Home({ posts }) {
  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
