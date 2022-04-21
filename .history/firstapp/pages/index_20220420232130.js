import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import ImgCard from '../comps/ImgCard';
import Navbar from '../comps/Navbar';
import Questions from '../comps/Questions';

import { useRouter } from 'next/router';

export default function Home() {

  const r = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Mindful eating</title>
        <meta name="description" content="Mindful eating guide website" />
        <link rel="icon" href="/logo/navbar_logo.png" />
      </Head>

      <main>

      <ImgCard 
        img="/logo/horizontal_logo.png"
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

      <Questions 
      id="recipe" btName="want to cook" txt="I want to prepare healthy daily meals but don’t know what to cook" ></Questions>



    <h1>About us</h1>

      <ImgCard
        bor="20px"
        mar="2rem"
        title="BCIT D3 Students, Set-C"
        img="/about_us.png"
        marg="0 0 0 -4em"
        n1="Hazel Wang"
        n2="Mio Takagi"
        n3="Minyoung Bae"
        n4="Verna Mai"
        txt="There are various ways to keep the health of the Earth sustainable while protecting our health. However, instead of suddenly stopping us from eating meat, we created this website to suggest a delicious and easy way to practice."
      />

      <Navbar></Navbar>
        
      </main>
    </div>
  )
}
