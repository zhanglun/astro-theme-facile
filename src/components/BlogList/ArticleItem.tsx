import type { Frontmatter } from '@types';
import React from 'react';

export interface Props {
  href?: string;
  frontmatter: Frontmatter;
  secHeading?: boolean;
  rawContent?: string;
}

export function ArticleItem({ href, frontmatter, rawContent }: Props) {
  const { title } = frontmatter;

  return (
    <li>
      <article
        className="border-b border-[#e2e2e2] group"
        itemScope
        itemType="http://schema.org/Article"
      >
        <a
          href={href}
          itemProp="url"
          className="text-[var(--color-text-base)] block text-[1.125rem] font-semibold py-4"
        >
          <div className="flex justify-between">
            <span className="items-center flex text-[0.875rem] font-normal before:content-[' '] before:bg-[currentColor]
          before:rounded-2xl before:block before:mr-1 before:w-2 before:h-2">
              {frontmatter.categories}
            </span>
            <div className="bg-[var(--color-text-base)] rounded-full text-[white] fill-[white] text-[0] opacity-0 p-1 scale-50 transition-all -rotate-[135deg]
            group-hover:opacity-100 group-hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="1.4"
                  d="M12 3v17M19 13l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          <span itemProp="headline" className="text-[var(--color-text-base)] block text-[1.125rem] font-semibold group-hover:underline">
            {title}
          </span>
        </a>
        {/* <small>{post.frontmatter.date}</small> */}
        {/* <section> */}
        {/*  <p */}
        {/*    dangerouslySetInnerHTML={{ */}
        {/*      __html: post.frontmatter.description || post.excerpt, */}
        {/*    }} */}
        {/*    itemProp="description" */}
        {/*  /> */}
        {/* </section> */}
        {/* <footer> */}
        {/*  <Link to={post.fields.slug} itemProp="url" className="read-more"> */}
        {/*    READ MORE */}
        {/*  </Link> */}
        {/* </footer> */}
      </article>
    </li>
  );
}
