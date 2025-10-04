'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from '@/styles/footer.module.css'

export default function Footer(){
    return (
    <footer className={styles.footer}>
      YUGO Portfolio
    </footer>
  );
}