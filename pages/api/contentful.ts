const client = require('contentful').createClient({
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  space: process.env.CONTENTFUL_SPACE_ID,
});
 
export default client;