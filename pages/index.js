import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>People List | Home</title>
        <meta name='keywords' content='people' />
      </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab facilis consectetur non qui? Voluptatum temporibus esse, distinctio quis et nesciunt ut reprehenderit explicabo, tempora omnis nostrum doloremque commodi accusamus cum praesentium accusantium consectetur maiores voluptas? Numquam eum earum totam praesentium!</p>
      <Link href='/people'>
          <a className={styles.btn}>See people listing</a>
      </Link>
    </div>
   </>
  )
}
