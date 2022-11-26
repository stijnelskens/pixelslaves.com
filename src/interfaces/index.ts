export interface Player {
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
      tags: {
        sys: {
          id: string;
        }
      }
    }
  }
}
