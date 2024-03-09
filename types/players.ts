export interface Player {
  _id: string;
  _type: "post";
  _createdAt: string;
  title?: string;
  categories: {
    _id: string;
    title: string;
  }[];
  twitter: string;
  twitch: string;
  youtube: string;
  instagram: string;
  tiktok: string;
}
