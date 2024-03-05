import { useNavigate } from 'react-router-dom';
import styles from './BillPay.module.css'
import Select, { ValueType } from 'react-select';
import { useState } from 'react';


interface OptionType {
  value: string;
  label: string;
}

function BillPay() {

  const [atm, setAtm] = useState<OptionType | null>(null);
  const optionsAtm: OptionType[] = [
    { value: "TPCDO", label: "TPCDO" },
    { value: "ADONAI", label: "ADONAI" },
    { value: "RELIANCE", label: "RELIANCE" }
  ];

  const route = useNavigate();

  const transfer = () => {
    route("/Transfer");
  };

  const statement = () => {
    route("/WaterState");
  };

  return (
    <div className={styles.t}>
      <div className={styles.box}>
        <div></div>
        <div>
          <div style={{ fontSize: '30px', fontWeight: '600', margin: '0 0 0 90px' }}>Water Bill Payment</div>
          <div style={{ fontSize: '13px', fontWeight: '300', margin: '10px 0 0 90px' }}>transfer / Bill Payment / <span style={{color:'green'}}>Water</span></div>
        </div>
        <div className={styles.col}>
          
         
            <input type="text"
            className={styles.select}
            placeholder='Customer ID'
            />
         
          
          <Select
            className={styles.select2}
              options={optionsAtm}
              value={atm}
              placeholder="Select" 
              onChange={(value: ValueType<OptionType>) => setAtm(value as OptionType)} 
              isSearchable
            />
         
        </div>
        <div className={styles.btn}>
          <button onClick={transfer} style={{ height: '35px', width: '120px', borderRadius: '15px' }}>Cancel</button>
          <button onClick={statement} style={{ height: '35px', width: '120px', borderRadius: '15px', margin: '0 0 0 0' }}>Fetch Bill</button>
        </div>
      </div>
    </div>
  );
}

export default BillPay;