import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import ImgCard from '../comps/ImgCard'
import Navbar from '../comps/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mindful eating</title>
        <meta name="description" content="Mindful eating guide website" />
        <link rel="icon" href="/logo/navbar_logo.png" />
      </Head>

      <main>

      <ImgCard 
              img="/logo/vertical_logo.png"
      />
      
      <ImgCard 
      bg="white"
      tcl="#E0E8FD"
      />
     

      <Navbar></Navbar>

      <Link href="/quiz">Go to Quiz</Link>
      <Link href="/recipes">Go to Recipes</Link>
        
      </main>
    </div>
  )
}
