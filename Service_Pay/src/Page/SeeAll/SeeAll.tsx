import styles from './SeeAll.module.css'
import {NavLink} from 'react-router-dom'

function SeeAll() {
  return (
    <div className={styles.t}>
        <div className={styles.Nav} >
            <div style={{margin:'20px 0 0 23px',fontSize:'35px',fontWeight:'600'}}>Transfer</div>
            <div style={{margin:'5px 0 25px 29px',fontSize:'13px',fontWeight:'500'}} >Transfer / Bill Payment</div>
        </div>



        <div className={styles.box}>
        <div className={styles.all} >
            <div style={{margin:'5px 0 0 15px',display:'flex ',flexDirection:'row'}}> 
           
            <div style={{margin:'0 10px 0 0'}}>
            <NavLink to={'/Transfer'}>
                <img src="/Vector.png" alt="" />
                </NavLink>
            </div>
            Bill Payment
            </div>
            <div className={styles.three}>
                <div className={styles.f}>
                <div >
                <img src="/Mobile.png" alt="" />
                <div style={{margin:'5px 0 0 15px'}}>Mobile</div>
            </div>
            <div>
                <img src="/Tv.png" alt="" />
                <div style={{margin:'5px 0 0 15px'}}>TV</div>
            </div>
            <div>
                <img src="/El.png" alt="" />
                <div style={{margin:'5px 0 0 15px'}}>Electricity</div>
            </div>
            <div>
            <NavLink to={'/PayMethod'}>
                <img src="/Wt.png" alt="" />
                </NavLink>
                <div style={{margin:'5px 0 0 15px'}}>Water</div>
            </div>
            <div>
                <img src="/Gas.png" alt="" />
                <div style={{margin:'5px 0 0 15px'}}>Gas</div>
            </div>
            <div>
                <img src="/Phone.png" alt="" />
                <div style={{margin:'5px 0 0 15px'}}>Landline</div>
            </div>
            <div>
                <img src="/Broad.png" alt="" />
                <div style={{margin:'5px 0 0 15px'}}>Broadband</div>
            </div>
           
                </div>
                <div className={styles.f}>
                <div >
                <img src="/Mobile.png" alt="" />
                <div style={{margin:'5px 0 0 15px'}}>Mobile</div>
            </div>
            <div>
                <img src="/Tv.png" alt="" />
                <div style={{margin:'5px 0 0 15px'}}>TV</div>
            </div>
            <div>
                <img src="/El.png" alt="" />
                <div style={{margin:'5px 0 0 15px'}}>Electricity</div>
            </div>
            <div>
                <img src="/Wt.png" alt="" />
                <div style={{margin:'5px 0 0 15px'}}>Water</div>
            </div>
            <div>
                <img src="/Gas.png" alt="" />
                <div style={{margin:'5px 0 0 15px'}}>Gas</div>
            </div>
            <div>
                <img src="/Phone.png" alt="" />
                <div style={{margin:'5px 0 0 15px'}}>Landline</div>
            </div>
            <div>
                <img src="/Broad.png" alt="" />
                <div style={{margin:'5px 0 0 15px'}}>Broadband</div>
            </div>
                </div>
                <div className={styles.f}>
                <div >
                <img src="/Mobile.png" alt="" />
                <div style={{margin:'5px 0 0 15px'}}>Mobile</div>
            </div>
            <div>
                <img src="/Tv.png" alt="" />
                <div style={{margin:'5px 0 0 15px'}}>Mobile</div>
            </div>
            <div>
                <img src="/El.png" alt="" />
                <div style={{margin:'5px 0 0 15px'}}>Mobile</div>
            </div>
            <div>
                <img src="/Wt.png" alt="" />
                <div style={{margin:'5px 0 0 15px'}}>Mobile</div>
            </div>
            <div>
                <img src="/Gas.png" alt="" />
                <div style={{margin:'5px 0 0 15px'}}>Mobile</div>
            </div>
            <div>
                <img src="/Phone.png" alt="" />
                <div style={{margin:'5px 0 0 15px'}}>Mobile</div>
            </div>
            <div>
                <img src="/Broad.png" alt="" />
                <div style={{margin:'5px 0 0 15px'}}>Mobile</div>
            </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SeeAll
{/* <div >
<img src="/Mobile.png" alt="" />
</div>
<div>
<img src="/Tv.png" alt="" />
</div>
<div>
<img src="/El.png" alt="" />
</div>
<div>
<img src="/Wt.png" alt="" />
</div>
<div>
<img src="/Gas.png" alt="" />
</div>
<div>
<img src="/Phone.png" alt="" />
</div>
<div>
<img src="/Broad.png" alt="" />
</div> */}
