import { NavLink } from 'react-router-dom'
import styles from './Transfer.module.css'

function Transfer() {
  return (
    <div className={styles.t}>
        <div className={styles.Nav} >
            <div style={{margin:'20px 0 0 23px'}}>Transfer</div>
            <div></div>
        </div>
        <div className={styles.box}>
        <div className={styles.all} >
            <div style={{margin:'5px 0 0 15px'}}> Fund Transfer</div>
            <div className={styles.f}>
            <div>
                <NavLink to={'/CardSelect'}>
            <img src="/Group.png" alt="" />
            </NavLink>
            <div style={{margin:'5px 0 0 15px',fontSize:'16px'}}>CardTop Up</div>
            </div>
            <div>
            <img  src="/Careda.png" alt="" />
            <div style={{margin:'5px 0 0 0',fontSize:'16px'}}>Account-Transfer</div>
            </div>
            <div>
            <img src="/CardT.png" alt="" />
            <div style={{margin:'5px 0 0 0',fontSize:'16px'}}>Card-Transfer</div>
            </div>
            </div>
        </div>
        <div className={styles.all} > 
        <div style={{margin:'5px 0 0 15px'}} >Bill Payment</div>
        <div className={styles.s}>
            <div >
                <img src="/Mobile.png" alt="" />
                <div style={{margin:'5px 0 0 15px',fontSize:'16px'}}>Mobile</div>
            </div>
            <div>
               <NavLink to={'/TvPaySelect'}>
               <img src="/Tv.png" alt="" />
               </NavLink>
                <div style={{margin:'5px 0 0 15px',fontSize:'16px'}}>Tv</div>
            </div>
            <div>
                <img style={{backgroundImage:'cover'}} src="/El.png" alt="" />
                <div style={{margin:'5px 0 0 15px',fontSize:'16px'}}>Electricity</div>
            </div>
            <div>
               <NavLink to={'/PayMethod'}>
               <img src="/Wt.png" alt="" />
               </NavLink>
                <div style={{margin:'5px 0 0 15px',fontSize:'16px'}}>Water</div>
            </div>
            <div>
                <img src="/Gas.png" alt="" />
                <div style={{margin:'5px 0 0 15px',fontSize:'16px'}}>Gas</div>
            </div>
            <div>
                <img src="/Phone.png" alt="" />
                <div style={{margin:'5px 0 0 15px',fontSize:'16px'}}>Phone</div>
            </div>
            <div>
                <img src="/Broad.png" alt="" />
                <div style={{margin:'5px 0 0 15px',fontSize:'16px'}}>Broadband</div>
            </div>
            <div style={{margin:'15px 0 0 15px'}}>
                <NavLink to={'/SeeAll'}>
                <img src="/See.png" alt="" />
                </NavLink>
            </div>
            </div>
           
        </div  >
        <div className={styles.all}>
            <div style={{margin:'5px 0 0 15px'}} >Miscellaneous</div>
            <div className={styles.l}>
                <div >
                   <NavLink to={'/TutionfeeSelect'}>
                   <img src="/tution.png" alt="" />
                   </NavLink>
                    <div style={{margin:'5px 0 0 15px',fontSize:'16px'}}>Tuition-fee</div>
                </div>
                <div>
                    <img src="/fd.png" alt="" />
                    <div style={{margin:'5px 0 0 15px',fontSize:'16px'}}>Fixed Deposit</div>
                </div>
            </div>
        </div>

        </div>
        
    </div>
  )
}

export default Transfer