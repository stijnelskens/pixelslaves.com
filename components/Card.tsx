import { IoLogoTwitch, IoLogoTiktok, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5';

type Tags = {
  sys: {
    id: string,
    key: string,
  }
};

type Props = {
  player: {
    sys: {
      id: string,
    }
    fields: {
      name: string;
      twitter: string;
      twitch: string;
      instagram: string;
      tiktok: string;
    }
    metadata: {
      tags: Tags[];
    }
  }
};

const Card = ({player}: Props) => {
  return (
    <div className="flex flex-col justify-center p-6 border-2 border-gray-200 rounded-lg" key={player.sys.id}>
      <h3 className="mb-2 text-2xl font-bold">{player.fields.name}</h3>
      {/* {player.metadata.tags.map(tag => (
        <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">{tag}</span>
      ))} */}
      {player.fields.twitter && player.fields.twitch && player.fields.instagram && player.fields.tiktok && (
        <ul className="flex space-x-2">
          {player.fields.twitter && (
            <li>
              <a href={player.fields.twitter} target="_blank" rel="noopener" className="text-xl hover:text-blue-400">
                <span className="sr-only">Twitter</span>
                <IoLogoTwitter />
              </a>
            </li>
          )}
          {player.fields.twitch && (
          <li>
            <a href={player.fields.twitch} target="_blank" rel="noopener" className="text-xl hover:text-violet-700">
              <span className="sr-only">Twitch</span>
              <IoLogoTwitch />
            </a>
          </li>
          )}
          {player.fields.instagram && (
            <li>
              <a href={player.fields.instagram} target="_blank" rel="noopener" className="text-xl hover:text-orange-400">
                <span className="sr-only">Instagram</span>
                <IoLogoInstagram />
              </a>
            </li>
          )}
          {player.fields.tiktok && (
          <li>
            <a href={player.fields.tiktok} target="_blank" rel="noopener" className="text-xl hover:text-red-400">
              <span className="sr-only">TikTok</span>
              <IoLogoTiktok />
            </a>
          </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Card;