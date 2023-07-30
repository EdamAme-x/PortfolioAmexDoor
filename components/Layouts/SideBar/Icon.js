import styles from '/styles/child/Layouts.module.css';

export default function Icon() {
  return (
    <div className={styles.Icon}>
        <img src="/icon.ico" height="30" width="35"/>
        <h2>Amex Door</h2>
    </div>
  )
}
