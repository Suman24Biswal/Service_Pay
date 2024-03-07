import styles from './TvReciept.module.css'
import { useNavigate } from 'react-router-dom'

export default function TvReceipt() {
   const route = useNavigate()
   
   const pay = () => {
    route("/PayMethod")
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
        <button onClick={pay}  style={{borderRadius:'15px'}} >Back</button>
        
        <button style={{borderRadius:'15px',width:'150px'}}>Download Statement</button>
        
       </div>
     </div>
    </div>
    </div>
  )
}

// export default TvReceipt ;
// import styles from './TvReciept.module.css'
export  function TvReceipting() {
  // import styles from './TvReciept.module.css'
  const Trans = [
    {
      'id':1,
      "name":'Transaction Id',
      "value":'#000085752257'
    },
    {
      'id':2,
      "name":'Payment Time',
      "value":'05-03-2024  01:34pm'
    },
    {
      'id':3,
      "name":'Sender Name',
      "value":'John Doe'
    },
    {
      'id':4,
      "name":'Payment Method',
      "value":'Card'
    },
    {
      'id':4,
      "name":'Service Name',
      "value":'Vodafone Landline'
    },
    {
      'id':4,
      "name":'Amount',
      "value":<span style={{fontSize:'22px',fontWeight:'700'}}>$125.00</span>
    }
   ]

  return(
    <div className={styles.transfer}>
    {Trans.map((allTrans) => {
     return(
       <div className={styles.transfer2} key={allTrans.id}>
       <div className={styles.trans3}>{allTrans.name}</div>
       <div   className={styles.trans4}>{allTrans.value}</div>
     </div>
     )
    })}
       </div> 
  )
}