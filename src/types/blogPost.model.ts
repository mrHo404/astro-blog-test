export type BlogPost = {
  layout: string;
  title: string;
  description: string;
  date: string;
  category: string;
  author: string;
  image: Image;
};

type Image = {
  src: string;
  alt: string;
};
