import React, { useState } from "react";
import { CircleArrow, CircleArrowThemeEnum } from "../CircleArrow";
import * as styles from "./index.module.css";

export interface ListPaginationProps {
  prevPage?: string;
  prevPageTitle?: string;
  nextPage?: string;
  nextPageTitle?: string;
}
export function ListPagination(props: ListPaginationProps) {
  const {
    prevPage = "",
    prevPageTitle = "Previous Page",
    nextPage = "",
    nextPageTitle = "Next Page",
  } = props;

  const [prevTheme, setPrevTheme] = useState(CircleArrowThemeEnum.light);
  const [nextTheme, setNextTheme] = useState(CircleArrowThemeEnum.light);

  const renderPrevItem = () => {
    if (prevPage) {
      return (
        <a
          className={styles.paginationItem}
          href={prevPage}
          rel="prev"
          onMouseOver={() => setPrevTheme(CircleArrowThemeEnum.dark)}
          onMouseOut={() => setPrevTheme(CircleArrowThemeEnum.light)}
        >
          <CircleArrow size={14} rotate={90} theme={prevTheme} />{" "}
          <span className={styles.paginationItemPrev}>{prevPageTitle}</span>
        </a>
      );
    }
    return null;
  };

  const renderNextItem = () => {
    if (nextPage) {
      return (
        <a
          className={styles.paginationItem}
          href={nextPage}
          rel="next"
          onMouseOver={() => setNextTheme(CircleArrowThemeEnum.dark)}
          onMouseOut={() => setNextTheme(CircleArrowThemeEnum.light)}
        >
          <span className={styles.paginationItemNext}>{nextPageTitle}</span>{" "}
          <CircleArrow size={14} rotate={-90} theme={nextTheme} />
        </a>
      );
    }
    return null;
  };

  return (
    <div className={styles.pagination}>
      {renderPrevItem()}
      <span />
      {renderNextItem()}
    </div>
  );
}
