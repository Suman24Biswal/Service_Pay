import  { useState , useEffect } from 'react';
import styles from './Verify.module.css';
import { useNavigate } from 'react-router-dom';
import OtpInput from 'react-otp-input';



function Verify(): JSX.Element {
   

    const route = useNavigate();
    const [otp, setOtp] = useState<string>('');
    const [time, setTime] = useState(20);
   
    useEffect(() => {
        const timer = time > 0 && setInterval(() => setTime(time - 1), 1000);
        return () => clearInterval(timer);
      }, [time]);

      const Otp = () => {
        route("/Otp")
      }
 
 

    return (
        <div>
            <div className={styles.t}>
                <div className={styles.box}>
                    <div></div>
                    <div className={styles.card}>
                        <div style={{ fontSize: '30px', fontWeight: '600' }}>Card Top up</div>
                        <div style={{ fontSize: '13px', fontWeight: '300', marginTop: '10px' }}>transfer/Fund Transfer/Card Top up</div>
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
                            <button onClick={Otp} style={{ height: '35px', width: '120px', borderRadius: '15px' }}>Cancel</button>

                            <button  style={{ height: '35px', width: '120px', borderRadius: '15px', margin: '0 0 0 10px' }}>Verify</button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Verify;
