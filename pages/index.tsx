import Layout from '../components/Layout'
import client from '../pages/api/contentful';
import { useEffect, useState } from 'react';
import Card from '../components/Card';

const IndexPage = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await client.getEntries();
      setPlayers(response.items);
    }
    fetchPlayers();
  }, []);
  
  return (
    <Layout title="Crew – PixelSlaves.com">
      <div className="container">
        <h1 className="sr-only">
          Crew
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {players.map(player => (
            <Card key={player.sys.id} player={player} />
          ))}
        </div>
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
