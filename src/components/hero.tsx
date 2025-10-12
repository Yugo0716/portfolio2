import Image from "next/image";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import styles from "@/styles/hero.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <Image
          src="/me.jpg"
          alt="My Picture"
          width={300}
          height={300}
          className={styles.avatar}
        />
        <h1 className={styles.title}>
          菊池勇吾（YUGO/きくっつぁん）のポートフォリオサイト
        </h1>
      </section>

      <section className={styles.intro}>

        <div className={styles.links}>
          <a
            href="https://x.com/kysan771166"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <FaXTwitter />
          </a>
          <a
            href="https://github.com/Yugo0716"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <FaGithub />
          </a>
        </div>
      </section>
    </div>
  );
}
