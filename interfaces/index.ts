// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

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
