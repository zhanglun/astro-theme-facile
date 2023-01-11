import React from 'react';
import type { MarkdownInstance } from 'astro';
import type { Frontmatter } from '@types';
import { SITE } from '@config';
import Card from '@components/Card';
import slugify from '@utils/slugify';

export interface Props {
  allPosts: MarkdownInstance<Frontmatter>[];
}

export const BlogList = (props: Props) => {
  const { allPosts } = props
  const renderPosts = allPosts.slice(0, SITE.postPerPage)

  console.log("%c Line:15 🍑 renderPosts", "color:#ed9ec7", renderPosts);

  return <div>
    <ul className="grid w-full lg:gap-y-14 lg:grid-cols-[repeat(12,1fr)] lg:gap-6">
      {renderPosts.map(({ frontmatter, compiledContent }) => {
        return (
          <Card
            href={`/blogs/${slugify(frontmatter)}`}
            frontmatter={frontmatter}
            rawContent={compiledContent()}
          />
        );
      })
      }
    </ul>

    { renderPosts.length < allPosts.length && (
      <nav className="pagination-wrapper" aria-label="Pagination">
        <div>
          <span>VIEW MORE BLOGS</span>
        </div>
      </nav>
    )}
  </div>
}