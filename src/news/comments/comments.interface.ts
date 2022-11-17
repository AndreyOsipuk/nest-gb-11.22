export interface Comment {
  id?: number | string;
  message: string;
  author: string;
}

export type CommentEdit = Partial<Comment>

export type Comments = Record<string | number, Comment[]>;

