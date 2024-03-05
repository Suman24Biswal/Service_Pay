import { useNavigate } from 'react-router-dom';
import styles from './TvPay.module.css'
import Select, { ValueType } from 'react-select'; // Importing ValueType for defining selected type
import { useState } from 'react';


interface OptionType {
  value: string;
  label: string;
}

function TvPaySelect() {
  const [selected, setSelected] = useState<OptionType | null>(null);
  const [atm, setAtm] = useState<OptionType | null>(null);


  const options: OptionType[] = [
    { value: "Odisha", label: "Odisha" },
    { value: "Banglore", label: "Banglore" },
    { value: "Delhi", label: "Delhi" }
  ];
  const optionsAtm: OptionType[] = [
    { value: "**** **** 1234", label: "**** **** 1234" },
    { value: "**** **** 1234", label: "**** **** 1234" },
    { value: "**** **** 1234", label: "**** **** 1234" }
  ];

  const route = useNavigate();

  const transfer = () => {
    route("/Transfer");
  };

  const statement = () => {
    route("/TvStatement");
  };

  return (
    <div className={styles.t}>
      <div className={styles.box}>
        <div></div>
        <div className={styles.card}>
        <div >Tv Recharge</div>
          <div style={{ fontSize: '13px',color:'rgba(160, 160, 160, 1)', fontWeight: '300', margin: '10px 0 0 10px' }}>transfer / Bill Payment / <span style={{color:'green'}}>Tv</span></div>
        </div>
        <div className={styles.col}>
            <div>
        <input placeholder='Enter Amount' style={{ height: '35px', width: '300px', borderRadius: '15px', margin: '40px 0 0 90px', paddingLeft: '1rem' }} />
        </div>
        <div>
            <Select

            className={styles.select}
              options={options}
              value={selected}
              placeholder="Select" 
              onChange={(value: ValueType<OptionType>) => setSelected(value as OptionType)} 
              isSearchable
            />
          </div>
       <div>
       <Select
            className={styles.select2}
              options={optionsAtm}
              value={atm}
              placeholder="Select" 
              onChange={(value: ValueType<OptionType>) => setAtm(value as OptionType)} 
              isSearchable
            />
       </div>
          <div>
          <Select
            className={styles.select2}
              options={optionsAtm}
              value={atm}
              placeholder="Select" 
              onChange={(value: ValueType<OptionType>) => setAtm(value as OptionType)} 
              isSearchable
            />
          </div>
        </div>
        <div className={styles.btn}>
          <button onClick={transfer} style={{ height: '35px', width: '120px', borderRadius: '15px' }}>Cancel</button>
          <button onClick={statement} style={{ height: '35px', width: '120px', borderRadius: '15px', margin: '0 0 0 33px' }}>Proceed</button>
        </div>
      </div>
    </div>
  );
}

export default TvPaySelect;