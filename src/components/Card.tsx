import Datetime from "./Datetime";
import type { Frontmatter } from "src/types";

export interface Props {
  href?: string;
  frontmatter: Frontmatter;
  secHeading?: boolean;
  rawContent?: string;
}

const styles = {
  cardContainer: "relative lg:col-[span_3] sm:col-[span_2]",
  titleLink:
    `block text-skin-accent 
    font-medium text-2xl underline-offset-4 
    decoration-dashed 
    mb-2
    focus-visible:no-underline focus-visible:underline-offset-0`,
  titleHeading: "tracking font-medium text-lg decoration-dashed hover:underline",
};

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  return (
    <li className={styles.cardContainer}>
      <a href={href} className={styles.titleLink}>
        {secHeading ? (
          <h2 className="tracking-tighter leading-none font-medium text-2xl decoration-dashed hover:underline">{frontmatter.title}</h2>
        ) : (
          <h3 className={styles.titleHeading}>{frontmatter.title}</h3>
        )}
      </a>
      <p className="break-all tracking-tighter leading-tight text-sm">{frontmatter.description}</p>
    </li>
  );
}
