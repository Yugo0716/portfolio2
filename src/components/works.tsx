import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/works.module.css';
import { getWorks } from '@/libs/client';
import { Works } from '@/libs/client';

export default async function WorksSection() {
  const data = await getWorks();
  const works = data.contents;

  // isGame ごとに分ける
  const games  = works.filter((w: Works) => Array.isArray(w.isGame) && w.isGame.includes("ゲーム"));
  const others = works.filter((w: Works) => Array.isArray(w.isGame) && w.isGame.includes("その他の制作物"));


  const renderWorks = (items: Works[]) => (
    <div id="works" className={styles.grid}>
      {items.map((work) => (
        <Link key={work.id} href={`/works/${work.id}`} className={styles.card}>
          {/* サムネイル */}
          <div className={styles.thumb}>
            <Image
              src={work.thumb.url}
              alt={work.title}
              width={work.thumb.width}
              height={work.thumb.height}
              className={styles.thumbImg}
            />
          </div>

          {/* タイトル + ロゴ */}
          <div className={styles.info}>
            <h3 className={styles.title}>
              {work.logo && (
                <Image
                  src={work.logo.url}
                  alt={`${work.title} ロゴ`}
                  width={32}
                  height={32}
                  className={styles.logo}
                />
              )}
              {work.title}
            </h3>
            <p className={styles.jenre}>{work.jenre}</p>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Works</h2>
      <p className={styles.desc}>大学時代に私が制作に関わったコンテンツを掲載しています。</p>

      <h3 className={styles.subheading}>ゲーム</h3>
      {renderWorks(games)}

      <h3 className={styles.subheading}>その他の制作物</h3>
      {renderWorks(others)}
    </section>
  );
}
