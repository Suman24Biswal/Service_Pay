import  { useState , useEffect } from 'react';
import styles from './WaterOtp.module.css'
import { useNavigate } from 'react-router-dom';
import OtpInput from 'react-otp-input';



function WaterOtp(): JSX.Element {
   

    const route = useNavigate();
    const [otp, setOtp] = useState<string>('');
    const [time, setTime] = useState(20);
   
    useEffect(() => {
        const timer = time > 0 && setInterval(() => setTime(time - 1), 1000);
        return () => clearInterval(timer);
      }, [time]);

      const state = () => {
        route("/WaterState")
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
                        <div style={{ fontSize: '18px', margin: '30px 0 0 145px' }}>Enter Otp</div>
                        <div style={{ fontSize: '13px', margin: '0 0 0 80px' }}>We've sent an Otp through Email </div>
                        <div className={styles.otp}>
                            <OtpInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                containerStyle={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '270px',
                                }}
                                inputStyle={{
                                    width: '30px',
                                    height: '40px',
                                    fontSize: '1rem',
                                    textAlign: 'center',
                                    border: '2px solid #ccc',
                                    borderRadius: '15px',
                                }}
                                separatorStyle={{
                                    fontSize: '1.5rem',
                                    color: '#999',
                                }}
                                renderSeparator={<span>-</span>}
                                renderInput={(props, index) => (
                                    <input
                                        {...props}
                                        key={index}
                                        autoFocus={index === 0 ? true : undefined}
                                    />
                                )}
                            />
                        </div>
                        <div className={styles.timer}>Send code again _ 00:{time}</div>
                        <div className={styles.btn}>
                            <button onClick={state} style={{ height: '35px', width: '120px', borderRadius: '15px' }}>Go Back</button>

                            <button  style={{ height: '35px', width: '120px', borderRadius: '15px', margin: '0 0 0 10px' }}>Verify</button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default WaterOtp;