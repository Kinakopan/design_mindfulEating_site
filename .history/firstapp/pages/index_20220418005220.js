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
        bg="white"
      />

      <ImgCard 
      title="Mindful eating for you and us"
      bg="#E0E8FD"
      img="/food1.png"
      tcl="#000"
      txt="Do you prepare, cook, and eat with a mindful mind? Choose one of the following three questions that suit you to help you with a better diet."
      />
<br></br>
      <ImgCard
        bor="20px"
        title="BCIT D3 Students, Set-C"
        img=""
        n1="Hazel Wang"
        n2="Mio Takagi"
        n3="Minyoung Bae"
        n4="Verna Mai"
        


      
      />


     

      <Navbar></Navbar>

      <Link href="/quiz">Go to Quiz</Link>
      <Link href="/recipes">Go to Recipes</Link>
        
      </main>
    </div>
  )
}
