import Image from "next/image"
import Hero from '@/components/hero'
import AboutSection from '@/components/about'
import WorksSection from '@/components/works'
import styles from '@/styles/home.module.css'

export default async function Home(){
  return(
    <div className={styles.wrapper}>
      <Hero />
      <AboutSection />
      <WorksSection />
    </div>
    
  )
}