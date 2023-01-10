import Datetime from "./Datetime";
import type { Frontmatter } from "src/types";

export interface Props {
  href?: string;
  frontmatter: Frontmatter;
  secHeading?: boolean;
  rawContent: string;
}

const styles = {
  cardContainer: "lg:col-[span_3] sm:col-[span_2]",
  titleLink:
    "text-skin-accent font-medium text-lg underline-offset-4 decoration-dashed focus-visible:no-underline focus-visible:underline-offset-0 inline-block",
  titleHeading: "font-medium text-lg decoration-dashed hover:underline",
};

export default function Card({ href, frontmatter, secHeading = true, rawContent }: Props) {
  const text = rawContent.replace(/<[^>]+>/ig, '')
  const firstPeriodIdx = text.search(/\.\s|。/ig)
  const description = frontmatter.description || text.slice(0, Math.min(250, firstPeriodIdx + 1))

  return (
    <li className={styles.cardContainer}>
      <a href={href} className={styles.titleLink}>
        {secHeading ? (
          <h2 className={styles.titleHeading}>{frontmatter.title}</h2>
        ) : (
          <h3 className={styles.titleHeading}>{frontmatter.title}</h3>
        )}
      </a>
      <Datetime datetime={frontmatter.datetime} />
      <p>{description}</p>
    </li>
  );
}
