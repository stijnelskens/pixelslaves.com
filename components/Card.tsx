import { IoLogoTwitch, IoLogoTiktok, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5';
import { Player } from '../interfaces/index';

const Card = ({player}: Player) => {
  const { name, twitter, twitch, instagram, tiktok } = player.fields;
  return (
    <div className={`flex flex-col justify-center p-6 border-2 rounded-lg ${name == 'PixelSlaves_' ? 'border-red-400' : 'border-gray-200'}`} key={player.sys.id}>
      <h2 className="mb-2 text-2xl font-bold">{name}</h2>
      {player.metadata.tags[0] && (
        <div className="mb-4">
          <span className="text-gray-500 capitalize">{player.metadata.tags[0].sys.id}</span>
        </div>
      )}
      {/* {twitter && twitch && instagram && tiktok && ( */}
        <ul className="flex space-x-3">
          {twitter && (
            <li>
              <a href={twitter} target="_blank" rel="noopener" className="text-2xl sm:text-xl hover:text-blue-400">
                <span className="sr-only">Twitter</span>
                <IoLogoTwitter />
              </a>
            </li>
          )}
          {twitch && (
          <li>
            <a href={twitch} target="_blank" rel="noopener" className="text-2xl sm:text-xl hover:text-violet-700">
              <span className="sr-only">Twitch</span>
              <IoLogoTwitch />
            </a>
          </li>
          )}
          {instagram && (
            <li>
              <a href={instagram} target="_blank" rel="noopener" className="text-2xl sm:text-xl hover:text-orange-400">
                <span className="sr-only">Instagram</span>
                <IoLogoInstagram />
              </a>
            </li>
          )}
          {tiktok && (
          <li>
            <a href={tiktok} target="_blank" rel="noopener" className="text-2xl sm:text-xl hover:text-red-400">
              <span className="sr-only">TikTok</span>
              <IoLogoTiktok />
            </a>
          </li>
          )}
        </ul>
      {/* )} */}
    </div>
  );
};

export default Card;