import Link from 'next/link'
import Layout from '../components/Layout'
import client from '../pages/api/contentful';
import { useEffect, useState } from 'react';

const IndexPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await client.getEntries();
      setPosts(response.items);
    }
    fetchPosts();
  }, []);
  
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className="container">
        <h1 className="text-4xl font-bold underline">
          Hello world!
        </h1>
        <h1 className="text-sm">Hello Next.js 👋</h1>
        {posts.map(post => (
          <div key={post.sys.id}>
            <h3>{post.fields.name}</h3>
            <div>{post.fields.twitter}</div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

// get static props
// export async function getStaticProps() {
//   const res = await client.getEntries();
//   return {
//     props: {
//       posts: res.items
//     }
//   }
// };

export default IndexPage;
