import styles from './WaterState.module.css'
import { useNavigate } from 'react-router-dom'

function WaterState() {
   const route = useNavigate()
   
   const pay = () => {
    route("/PayMethod")
   }
   const otp = () => {
    route("/WaterOtp")
   }
  return (
    <div>
         <div className={styles.t}>
     <div className={styles.box}>
     <div></div>
       <div className={styles.card}>
       <div >Water Bill Payment</div>
          <div style={{ fontSize: '13px',color:'rgba(160, 160, 160, 1)', fontWeight: '300', margin: '10px 0 0 10px' }}>transfer / Bill Payment / <span style={{color:'green'}}>Water</span></div>
       </div>
       <div className={styles.col}>
       <div className={styles.div}>Customer Id :</div>
       <div className={styles.div}>Name :</div>
       <div className={styles.div}>Vender :</div>
       <div className={styles.div}>Due date :</div>
       <div className={styles.div}>Pay before due date :</div>
       <div className={styles.div}>Bill after due date :</div>
       </div>
       <div className={styles.btn}>
        <button onClick={pay}  style={{borderRadius:'15px'}} >Back</button>
        
        <button onClick={otp}  style={{borderRadius:'15px'}}>Pay Now</button>
        
       </div>
     </div>
    </div>
    </div>
  )
}

export default WaterState