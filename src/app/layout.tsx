import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from "@/styles/layout.module.css";

export const metadata: Metadata = {
  title: "Yugo Kikuchi | Portfolio",
  description: "Portfolio site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={styles.body}>
        <Header />
        <main className={`${styles.main} container`}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
