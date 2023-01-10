import React from "react";
import Card from "@components/Card";
import slugify from "@utils/slugify";
import type { MarkdownInstance } from "astro";
import type { Frontmatter } from "@types";

export const ArchiveList = ({
  archiveMap,
}: {
  archiveMap: { [key: string]: MarkdownInstance<Frontmatter>[] };
}) => {
  return Object.keys(archiveMap).map(year => {
    return (
      <div className="relative mt-[10vw] mb-[24vw]">
          <div className="text-[36vw] font-bold tracking-[0.2] leading-none mt-0 min-w-full pointer-events-none absolute text-center select-none shadow-[2px_2px_0_hsl(210deg_1%_69%_/_56%)]">
            {year}
          </div>
        <ul className="relative grid w-full lg:gap-y-14 lg:grid-cols-[repeat(12,1fr)] lg:gap-6">
          {archiveMap[year].map(({ frontmatter, compiledContent }) => {
            return (
              <Card
                href={`/blogs/${slugify(frontmatter)}`}
                frontmatter={frontmatter}
                rawContent={compiledContent()}
              />
            );
          })}
        </ul>
      </div>
    );
  });
};
