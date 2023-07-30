import styles from '/styles/child/Layouts.module.css';
import Icon from './Icon';
import Pages from './Pages';

export default function SideBar() {
  return (
    <div className={styles.SideBar}>
        <Icon />
        <Pages />
    </div>
  )
}
