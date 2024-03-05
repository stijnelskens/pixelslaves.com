import { Slug } from "@sanity/types";

export interface Post {
  _id: string;
  _type: "post";
  _createdAt: string;
  title?: string;
  slug: Slug;
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
