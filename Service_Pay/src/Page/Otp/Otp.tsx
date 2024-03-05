import styles from './Otp.module.css'
import { useNavigate } from 'react-router-dom'


function Otp() {
    const route = useNavigate()

    const state = () => {
        route("/Statement")
    }
    const verify = () => {
        route("/Verify")
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
  <button  className={styles.viaEm}>Send Otp via E-mail</button>
  <button className={styles.viaPhn}>Send Otp via Phone</button>
  </div>
  <div className={styles.btn}>
   <button onClick={state} style={{height:'35px',width:'120px',borderRadius:'15px'}}>Cancel</button>
   
   <button onClick={verify} style={{height:'35px',width:'120px',borderRadius:'15px',margin:'0 0 0 30px'}}>Send</button>
   
  </div>
</div>
</div>
</div>
  )
}

export default Otp