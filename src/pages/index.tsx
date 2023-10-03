
import { Inter } from 'next/font/google'
import styles from '../styles/mainpage.module.css'
import Link from 'next/link';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className={styles.buttonContainer}>
          <Link legacyBehavior href="/users" passHref>

              <a className={styles.bigButton}>UserPage</a>
          </Link>
      </div>
  )
}
