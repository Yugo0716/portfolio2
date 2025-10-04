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
        <p>はじめまして。菊池勇吾（きくちゆうご）と申します。現在修士1年生（27卒）です。</p>
        <p>このページは私のポートフォリオサイトです。</p>
        <p>私がこれまでに取り組んできたことを知ってもらうために作りました。</p>
        <p>ゲームプランナー/ゲームエンジニア志望です。</p>

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
