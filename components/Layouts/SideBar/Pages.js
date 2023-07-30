import styles from '/styles/child/Layouts.module.css';


export default function Pages() {
    return (
        <div className={styles.Pages}>
                <div>
                    <img src="/icons/home.svg" height="35" width="35" />
                    <p>Home</p>
                </div>
        </div>
    )
}