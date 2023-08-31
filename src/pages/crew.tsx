import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Layout from '~/components/Layout'
import client from './api/contentful';
import Card from '~/components/Card';
import Loader from '~/components/Loader';	

const CrewPage: NextPage = () => {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPlayers = async () => {
      setLoading(true);
      await client.getEntries().then(res =>  {
        setPlayers(res.items);
        setLoading(false);
      }).catch(err => {
        setError(err);
      });
    }
    fetchPlayers();
  }, []);
  
  return (
    <Layout title="Crew | PixelSlaves.com" header={true}>
      <div className="container">
        <h1 className="sr-only">
          Crew
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {loading && <Loader />}
          {error && <p>Er is een probleem met de items te laden.</p>}
          {!loading && !error && players.map(player => (
            <Card key={player.sys.id} player={player} />
          ))}
        </div>
      </div>
    </Layout>
  )
};

export default CrewPage;
