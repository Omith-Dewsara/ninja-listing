import Head from 'next/head';
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title> Ninja List | Home </title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}> Hello Canada </h1>
        <p className={styles.text}> Sudden looked elinor off gay estate nor silent. Son read such next see the rest two. Was use extent old entire sussex. Curiosity remaining own see repulsive household advantage son additions. Supposing exquisite daughters eagerness why repulsive for. Praise turned it lovers be warmly by. Little do it eldest former be if.</p>
        <p className={styles.text}>Acceptance middletons me if discretion boisterous travelling an. She prosperous continuing entreaties co</p>
        <Link href="/ninjas">
          <a className={styles.btn}> See ninja Listing </a>
        </Link>
      </div>
    </>
  )
}
