import styles from './Tuition.module.css'
import { useNavigate } from 'react-router-dom'

function TuStatement() {
   const route = useNavigate()
   
   const select = () => {
    route("/TutionfeeSelect")
   }
   const otp = () => {
    route("/TuitionSelect")
   }
  return (
    <div>
         <div className={styles.t}>
     <div className={styles.box}>
     <div></div>
       <div className={styles.card}>
       <div  >Tuition Fees Payment</div>
          <div style={{ fontSize: '13px',color:'rgba(160, 160, 160, 1)', fontWeight: '300', margin: '10px 0 0 10px' }}>transfer / Bill Payment / <span style={{color:'green'}}>Water</span></div>
       </div>
       <div className={styles.col}>
       <div className={styles.div}>From :</div>
       <div className={styles.div}>To Card :</div>
       <div className={styles.div}>Amount :</div>
       <div className={styles.div}>Remarks :</div>
       </div>
       <div className={styles.btn}>
        <button onClick={select} style={{height:'35px',width:'120px',borderRadius:'15px'}}>Cancel</button>
        
        <button onClick={otp} style={{height:'35px',width:'120px',borderRadius:'15px',margin:'0 0 0 30px'}}>Proceed</button>
        
       </div>
     </div>
    </div>
    </div>
  )
}

export default TuStatement