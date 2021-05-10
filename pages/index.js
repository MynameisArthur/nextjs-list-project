import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Ninja List | Home</title>
                <meta name='keywords' content='ninjas' />
            </Head>
            <div className={styles.container}>
                <h1 className={styles.title}>Homepage</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum quaerat quod dignissimos architecto quidem modi totam
                    odio accusantium, harum quos rem voluptas quae! Vel aliquam
                    porro culpa velit nam vero!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum quaerat quod dignissimos architecto quidem modi totam
                    odio accusantium, harum quos rem voluptas quae! Vel aliquam
                    porro culpa velit nam vero!
                </p>
                <Link href='/ninjas'>
                    <a className={styles.btn}>See Ninja Listing</a>
                </Link>
            </div>
        </>
    );
}
