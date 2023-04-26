import { PostType } from "./post-type.enum";

export interface BasePost {
  _id?: string;
  title: string;
  tags: string[];
  type: PostType;
  userId: string;
  createdDate: number;
  updatedDate?: number;
}

export interface PostText extends BasePost {
  anonce: string;
}

export interface PostVideo extends BasePost {
  video: string;
}

export interface PostQuote extends BasePost {
  quote: string;
}

export interface PostPhoto extends BasePost {
  photo: string;
}

export interface PostLink extends BasePost {
  link: string;
}

export type IPost = 
  | PostText
  | PostVideo
  | PostQuote
  | PostPhoto
  | PostLink;