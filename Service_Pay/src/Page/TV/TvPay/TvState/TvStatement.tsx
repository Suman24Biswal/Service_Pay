import styles from './TvState.module.css'
import { useNavigate } from 'react-router-dom'

function TvStatement() {
   const route = useNavigate()
   
   const pay = () => {
    route("/TvPaySelect")
   }
   const select = () => {
    route("/TvCardSelect")
   }
  return (
    <div>
         <div className={styles.t}>
     <div className={styles.box}>
     <div></div>
       <div className={styles.card}>
       <div >Tv Recharge</div>
          <div style={{ fontSize: '13px',color:'rgba(160, 160, 160, 1)', fontWeight: '300', margin: '10px 0 0 10px' }}>transfer / Bill Payment / <span style={{color:'green'}}>Tv</span></div>
       </div>
       <div className={styles.col}>
       <div className={styles.div}>Customer Id :</div>
       <div className={styles.div}>Name :</div>
       <div className={styles.div}>State :</div>
       <div className={styles.div}>Operator :</div>
       <div className={styles.div}>Bill Amount :</div>
       <div className={styles.div}>Package :</div>
       </div>
       <div className={styles.btn}>
        <button onClick={pay}  style={{borderRadius:'15px'}} >Back</button>
        
        <button onClick={select}  style={{borderRadius:'15px'}}>Pay Now</button>
        
       </div>
     </div>
    </div>
    </div>
  )
}

export default TvStatement