import styles from './Side.module.css'
import { NavLink} from 'react-router-dom'

function Side() {

 

  return (
    <div className={styles.side}>
        <div></div>
        <div className={styles.d}>
            <img src="/Dashboard + icon.png" alt="" />
        </div>
        <div className={styles.d}>
            <img src="/Group 36723.png" alt="" />
        </div>
      <div className={styles.d}>
      <NavLink to={'/Transfer'}>
            <img src="/Group 36724.png" alt="" />
            </NavLink>
      </div>
        <div className={styles.d}>
        <NavLink to={'/Sample'}>
            <img src="/Settings.png" alt="" />
            </NavLink>
        </div>
    </div>
  )
}

export default Side