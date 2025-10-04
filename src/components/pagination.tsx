import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import styles from "@/styles/pagination.module.css";

interface PaginationProps<T> {
  items: T[];
  id: string;
  getId: (item: T) => string;
  getTitle: (item: T) => string;
  pathPrefix: string; // 例：'/works'や'/game-review'
}

export default function Pagination<T>({
  items,
  id,
  getId,
  getTitle,
  pathPrefix,
}: PaginationProps<T>) {
  const currentIndex = items.findIndex((item) => getId(item) === id);
  const prev = items[currentIndex - 1];
  const next = items[currentIndex + 1];

  return (
    <div className={styles.pagination}>
      {prev ? (
        <a href={`${pathPrefix}/${getId(prev)}`} className={`${styles.link} ${styles.prev}`}>
          <FaAngleLeft className={styles.icon} />
          {getTitle(prev)}
        </a>
      ) : (
        <span />
      )}
      {next ? (
        <a href={`${pathPrefix}/${getId(next)}`} className={`${styles.link} ${styles.next}`}>
          {getTitle(next)}
          <FaAngleRight className={styles.icon} />
        </a>
      ) : (
        <span />
      )}
    </div>
  );
}
