import { useNavigate } from 'react-router-dom';
import styles from './TuitionCardSelect.module.css'
import Select, { ValueType } from 'react-select';
import { useState } from 'react';


interface OptionType {
  value: string;
  label: string;
}

function TuitionSelect() {

  const [atm, setAtm] = useState<OptionType | null>(null);
  const optionsAtm: OptionType[] = [
    { value: "**** **** 1234", label: "**** **** 1234" },
    { value: "**** **** 1234", label: "**** **** 1234" },
    { value: "**** **** 1234", label: "**** **** 1234" }
  ];

  const route = useNavigate();

  const transfer = () => {
    route("/TutStatement");
  };

  const state = () => {
    route("/TutReceipt");
  };

  return (
    <div className={styles.t}>
      <div className={styles.box}>
        <div></div>
        <div className={styles.card}>
        <div  >Tuition Fees Payment</div>
          <div style={{ fontSize: '13px',color:'rgba(160, 160, 160, 1)', fontWeight: '300', margin: '10px 0 0 10px' }}>transfer / Bill Payment / <span style={{color:'green'}}>Tuition</span></div>
        </div>
        <div className={styles.col}>
          
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
          <button onClick={state} style={{ height: '35px', width: '120px', borderRadius: '15px', margin: '0 0 0 0' }}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default TuitionSelect;