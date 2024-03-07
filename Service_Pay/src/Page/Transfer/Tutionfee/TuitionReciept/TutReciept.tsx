
import { TvReceipting } from '../../../TV/TvReceipt/TvReceipt'
import styles from './TutReciept.module.css'
import { useNavigate } from 'react-router-dom'

function TutReceipt() {
   const route = useNavigate()
   
   const back = () => {
    route("/Transfer")
   }
 
  return (
   
    <div>
    <div className={styles.box1}>
<div className={styles.box2}>
<div></div>
 
  <div className={styles.col}>
  <div className={styles.trans}>
  <div style={{margin:'20px 0 0 46px'}}> Transaction Success</div>
    <div style={{marginTop:'10px'}}> <img  src="/TransSuc.svg" alt="" /></div>
    </div>
    <div style={{margin:'0 0 30px 33px'}}><img src="/dottedline.svg" alt="" /></div>
    <TvReceipting/>
    </div>
       <div className={styles.btn}>
        <button onClick={back}  style={{borderRadius:'15px'}} >Back</button>
      
        <button style={{borderRadius:'15px',width:'150px'}}>Download Statement</button>
        
       </div>
     </div>
    </div>
    </div>
  )
}

export default TutReceipt