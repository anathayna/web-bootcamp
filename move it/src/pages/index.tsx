import { CompletedChallenges } from "../components/CompletedChallenges";
import { ExperienceBar } from "../components/ExperienceBar";
import { Countdown } from "../components/Countdown";
import { Profile } from "../components/Profile";
import styles from '../styles/pages/Home.module.css';
import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>início | move.it</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div></div>
      </section>
    </div>
  )
}
