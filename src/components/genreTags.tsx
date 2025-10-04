'use client';
import styles from '@/styles/genreTags.module.css';

type Props = {
  tags: string[];
};

export default function GenreTags({ tags }: Props) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className={styles.container}>
      {tags.map((tag, index) => (
        <span key={index} className={styles.tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}
