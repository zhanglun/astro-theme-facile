import React, { useState } from "react";
import type { MarkdownInstance } from "astro";
import type { Frontmatter } from "@types";
import { SITE } from "@config";
import Card from "@components/Card";
import slugify from "@utils/slugify";
import { CircleArrow, CircleArrowThemeEnum } from "@components/CircleArrow";

export interface Props {
  allPosts: MarkdownInstance<Frontmatter>[];
}

export const BlogList = (props: Props) => {
  const { allPosts } = props;
  const [currentPage, setCurrentPage] = useState(0);
  const [renderPosts, setRenderPosts] = useState(
    allPosts.slice(0, SITE.postPerPage)
  );

  function viewMore() {
    if (renderPosts.length >= allPosts.length) {
      return;
    }

    const updatePage = currentPage + 1;

    setCurrentPage(updatePage);
    setRenderPosts(allPosts.slice(0, SITE.postPerPage + updatePage * 4));

    document.body.scrollTo(0, document.body.scrollHeight);
  }

  return (
    <div className="m-auto max-w-screen-2xl">
      <ul className="grid w-full lg:gap-y-14 lg:grid-cols-[repeat(12,1fr)] lg:gap-6">
        {renderPosts.map(({ frontmatter }) => {
          return (
            <Card
              key={frontmatter.title}
              href={`/blogs/${slugify(frontmatter)}`}
              frontmatter={frontmatter}
            />
          );
        })}
      </ul>

      {renderPosts.length < allPosts.length && (
        <nav
          className="md:mt-16 ml-[auto] flex items-center justify-end"
          aria-label="Pagination"
        >
          <div className="leading-none" onClick={() => viewMore()}>
            <span className="mr-2">VIEW MORE BLOGS</span>
            <CircleArrow
              size={1}
              rotate={0}
              theme={CircleArrowThemeEnum.light}
            />
          </div>
        </nav>
      )}
    </div>
  );
};
