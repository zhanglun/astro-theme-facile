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
  const [currentPage, setCurrentPage] = useState(1);
  const [renderPosts, setRenderPosts] = useState(
    allPosts.slice(0, SITE.postPerPage)
  );
  console.log("%c Line:17 🌮 renderPosts", "color:#e41a6a", renderPosts);

  function viewMore() {
    if (renderPosts.length >= allPosts.length) {
      return;
    }

    const updatePage = currentPage + 1;

    setCurrentPage(updatePage);
    setRenderPosts(allPosts.slice(0, updatePage * SITE.postPerPage));

    console.log(
      "%c Line:15 🍑 renderPosts",
      "color:#ed9ec7",
      renderPosts.length
    );
  }

  return (
    <div>
      <ul className="grid w-full lg:gap-y-14 lg:grid-cols-[repeat(12,1fr)] lg:gap-6">
        {renderPosts.map(({ frontmatter, compiledContent }) => {
          return (
            <Card
              href={`/blogs/${slugify(frontmatter)}`}
              frontmatter={frontmatter}
              rawContent={compiledContent()}
            />
          );
        })}
      </ul>

      {renderPosts.length < allPosts.length && (
        <nav className="pagination-wrapper" aria-label="Pagination">
          <div onClick={() => viewMore()}>
            <span>VIEW MORE BLOGS</span>
            <CircleArrow
              size={1.2}
              rotate={0}
              theme={CircleArrowThemeEnum.light}
            />
          </div>
        </nav>
      )}
    </div>
  );
};
