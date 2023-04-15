import Navbar from './Navbar'
import styles from '../styles/Layout.module.css'

export default function Layout({children}) {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <p className={styles.htopo}>&lt;html&gt;</p>
                <p className={styles.htopo}>&lt;body&gt;</p>
                    <div className={styles.alturaminima}>{children}</div>
                <p className={styles.hbottom}>&lt;/body&gt;</p>
                <p className={styles.hbottom}>&lt;/html&gt;</p>
            </div>
        </>
    )
}
