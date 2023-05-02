export interface Comment {
  id?: string;
  text: string;
  postId: string;
  userId: string;
  createdDate?: number;
}
