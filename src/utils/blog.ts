import type { BlogPost } from '@types';
import type { MarkdownInstance } from 'astro';

type FormatBlogPostsParams = {
  filterOutDrafts?: boolean;
  filterOutFuturePosts?: boolean;
  sortByDate?: boolean;
  limit?: number;
};

export function formatBlogPosts(
  posts: MarkdownInstance<Record<string, any>>[],
  {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = undefined,
  }: FormatBlogPostsParams = {}
): MarkdownInstance<Record<string, any>>[] {
  const filteredPosts = posts.reduce(
    (accumulator: MarkdownInstance<Record<string, any>>[], post) => {
      const { date, draft } = post.frontmatter as BlogPost;
      if (filterOutDrafts && draft) return accumulator;

      if (filterOutFuturePosts && new Date(date) > new Date())
        return accumulator;

      accumulator.push(post);

      return accumulator;
    },
    []
  );
  if (sortByDate) {
    filteredPosts.sort(
      (first, second) =>
        new Date(second.frontmatter.date).getTime() -
        new Date(first.frontmatter.date).getTime()
    );
  } else {
    filteredPosts.sort(() => Math.random() - 0.5);
  }

  if (limit) {
    return filteredPosts.slice(0, limit);
  }
  return filteredPosts;
}
