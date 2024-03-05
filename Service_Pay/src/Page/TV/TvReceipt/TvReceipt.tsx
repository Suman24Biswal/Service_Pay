import styles from './TvReciept.module.css'
import { useNavigate } from 'react-router-dom'

function TvReceipt() {
   const route = useNavigate()
   
   const pay = () => {
    route("/PayMethod")
   }
 
  return (
    <div>
         <div className={styles.t}>
     <div className={styles.box}>
     <div></div>
      
       <div className={styles.col}>
       <div className={styles.trans}>
       <div style={{margin:'20px 0 0 46px'}}> Transaction Success</div>
         <div style={{marginTop:'10px'}}> <img  src="/TransSuc.svg" alt="" /></div>
         </div>
         <div style={{margin:'0 0 10px 33px'}}><img src="/dottedline.svg" alt="" /></div>
       <div className={styles.rows}>
          <div className={styles.col1}>
            <div>Transaction Id</div>
            <div></div>
          </div>
             <div></div>
         </div>
      
       </div>
       <div className={styles.btn}>
        <button onClick={pay}  style={{borderRadius:'15px'}} >Back</button>
        
        <button style={{borderRadius:'15px',width:'150px'}}>Download Statement</button>
        
       </div>
     </div>
    </div>
    </div>
  )
}

export default TvReceipt