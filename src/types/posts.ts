export type BlogPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
};

export type BlogPostList = BlogPost[];
