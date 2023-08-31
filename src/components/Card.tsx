import React from 'react';
import { IoLogoTwitch, IoLogoTiktok, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5';
import { Player } from '../interfaces/index';

const Card = ({ player }: Player) => {
  const { name, twitter, twitch, instagram, tiktok } = player.fields;
  return (
    <div className={`flex flex-col justify-center p-6 border-2 rounded-lg animate-fade-in ${name == 'PixelSlaves_' ? 'border-red-400' : 'border-gray-200'}`} key={player.sys.id}>
      <h2 className="mb-2 text-2xl font-bold">{name}</h2>
      {player.metadata.tags[0] && (
        <div className="mb-4">
          <span className="text-gray-500 capitalize">{player.metadata.tags[0].sys.id}</span>
        </div>
      )}
      {(twitter || twitch || instagram || tiktok) && (
        <ul className="flex space-x-3">
          {twitter && (
            <li>
              <a href={twitter} target="_blank" rel="noopener" className="text-2xl sm:text-xl hover:text-blue-400">
                <span className="sr-only">Twitter</span>
                <svg aria-hidden="true" fill="currentColor" height="16" viewBox="0 0 22 20"><path d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z"></path></svg>
              </a>
            </li>
          )}
          {twitch && (
          <li>
            <a href={twitch} target="_blank" rel="noopener" className="text-2xl sm:text-xl hover:text-violet-700">
              <span className="sr-only">Twitch</span>
              <IoLogoTwitch aria-hidden="true"  />
            </a>
          </li>
          )}
          {instagram && (
            <li>
              <a href={instagram} target="_blank" rel="noopener" className="text-2xl sm:text-xl hover:text-orange-400">
                <span className="sr-only">Instagram</span>
                <IoLogoInstagram aria-hidden="true"  />
              </a>
            </li>
          )}
          {tiktok && (
          <li>
            <a href={tiktok} target="_blank" rel="noopener" className="text-2xl sm:text-xl hover:text-red-400">
              <span className="sr-only">TikTok</span>
              <IoLogoTiktok aria-hidden="true"  />
            </a>
          </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Card;