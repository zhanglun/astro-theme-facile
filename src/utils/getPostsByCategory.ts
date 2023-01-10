import { slufigyAll } from "./slugify";
import type { MarkdownInstance } from "astro";
import type { Frontmatter } from "../types";

const getPostsByCategory = (
  posts: MarkdownInstance<Frontmatter>[],
  category: string
) =>
  posts.filter(post =>
    slufigyAll(
      [].concat(post?.frontmatter?.categories as []).filter(_ => _)
    ).includes(category)
  );

export default getPostsByCategory;
