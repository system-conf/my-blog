// pages/posts/[id].js
import { useRouter } from 'next/router';
import { getPost, getPostIds } from '../../lib/posts.js';

export async function getStaticPaths() {
  const paths = getPostIds().map(id => ({
    params: { id }
  }));
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = getPost(params.id);
  return {
    props: {
      post
    }
  };
}

export default function Post({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
