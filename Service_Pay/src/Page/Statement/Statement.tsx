import styles from './Statement.module.css'
import { useNavigate } from 'react-router-dom'

function Statement() {
   const route = useNavigate()
   
   const select = () => {
    route("/CardSelect")
   }
   const otp = () => {
    route("/Otp")
   }
  return (
    <div>
         <div className={styles.t}>
     <div className={styles.box}>
     <div></div>
       <div className={styles.card}>
        <div style={{fontSize:'30px',fontWeight:'600'}}>Card Top up</div>
        <div style={{fontSize:'13px',fontWeight:'300',marginTop:'10px'}}>transfer/Fund Transfer/Card Top up</div>
       </div>
       <div className={styles.col}>
       <div className={styles.div}>From :</div>
       <div className={styles.div}>To Card :</div>
       <div className={styles.div}>Amount :</div>
       <div className={styles.div}>Remarks :</div>
       </div>
       <div className={styles.btn}>
        <button onClick={select} style={{height:'35px',width:'120px',borderRadius:'15px'}}>Cancel</button>
        
        <button onClick={otp} style={{height:'35px',width:'120px',borderRadius:'15px',margin:'0 0 0 60px'}}>Proceed</button>
        
       </div>
     </div>
    </div>
    </div>
  )
}

export default Statement