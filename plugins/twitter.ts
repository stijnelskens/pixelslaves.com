import Twitter from "twitter-lite";

export default defineNuxtPlugin(() => {
  const twitterClient = new Twitter({
    subdomain: "api", // "api" is the default (change for other subdomains)
    version: "2", // version "1.1" is the default (change for other subdomains)
    extension: false,
    consumer_key: process.env.TWITTER_API_KEY || "", // from Twitter.
    consumer_secret: process.env.TWITTER_API_SECRET || "", // from Twitter.
    access_token_key: process.env.TWITTER_ACCESS_TOKEN, // from your User (oauth_token)
    access_token_secret: process.env.TWITTER_ACCESS_SECRET, // from your User (oauth_token_secret)
  });
  return {
    provide: { twitterClient },
  };
});
