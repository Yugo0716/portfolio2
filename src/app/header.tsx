'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from '@/styles/header.module.css'

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>YUGO Portfolio</h1>
      <ul className={styles.menu}>
        {isHome ? (
          <>
            <li><a href="/">Top</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#works">Works</a></li>
          </>
        ) : (
          <>
            <li><Link href="/">Top</Link></li>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#works">Works</Link></li>
          </>
        )}
      </ul>
    </header>
  );
}
