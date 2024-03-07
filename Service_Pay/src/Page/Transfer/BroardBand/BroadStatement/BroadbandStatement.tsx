import styles from './BrStatement.module.css'
import { useNavigate } from 'react-router-dom'

function BroadbandStatement() {
   const route = useNavigate()
   
   const pay = () => {
    route("/BroadbandOperator")
   }
   const select = () => {
    route("/BroadSelect")
   }
  return (
    <div>
         <div className={styles.box1}>
     <div className={styles.box2}>
     <div></div>
       <div className={styles.card}>
       <div >Broad Band Bill Payment</div>
          <div style={{ fontSize: '13px',color:'rgba(160, 160, 160, 1)', fontWeight: '300', margin: '10px 0 0 10px' }}>transfer / Bill Payment / <span style={{color:'green'}}>BroadBand</span></div>
       </div>
       <div className={styles.col}>
       <div className={styles.div}>Customer Id :</div>
       <div className={styles.div}>Name :</div>
       <div className={styles.div}>Landline No :</div>
       <div className={styles.div}>Operator :</div>
       <div className={styles.div}>Bill Amount :</div>
       <div className={styles.div}>Due date :</div>
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

export default BroadbandStatement