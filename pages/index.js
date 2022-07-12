import Head from 'next/head'
import styles from '../styles/styles.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <div className={content}>
            <h1>See Every Color!</h1>
            <p>
                Enter a color in the URL to see how that color renders in your browser.
            </p>
            <p>The following URL formats are supported:</p>
            <ul>
                <li>
                    Named colors<br /> Format: <code>/named/:colorName</code><br /> Example: <a href="/named/tomato">/named/tomato</a>
                </li>
                <li>
                    Hex colors<br /> Format: <code>/hex/:hexValue</code><br /> Example: <a href="/hex/bada55">/hex/bada55</a>
                </li>
                <li>
                    RGB colors<br /> Format: <code>/rgb/:red/:green/:blue</code><br /> Example: <a href="/rgb/80/90/100">/rgb/80/90/100</a>
                </li>
            </ul>
        </div>
      </main>
    </div>
  )
}
