import { slugifyStr } from "./slugify";
import type { MarkdownInstance } from "astro";
import type { Frontmatter } from "../types";

const getUniqueYears = (posts: MarkdownInstance<Frontmatter>[]) => {
  const filteredPosts = posts.filter(({ frontmatter }) => !frontmatter.draft);

  return filteredPosts.reduce((acu: { [key: string]: MarkdownInstance<Frontmatter>[] }, cur: MarkdownInstance<Frontmatter>) => {
    const { datetime } = cur.frontmatter
    let year = Date.parse(datetime) ? new Date(datetime).getFullYear() + '' : '1999'
    console.log("🚀 ~ file: getUniqueYears.ts:11 ~ returnfilteredPosts.reduce ~ year", year)

    if (!acu[year]) {
      acu[year] = []
    }

    acu[year].push(cur)

    return acu
  }, {});
};

export default getUniqueYears;
