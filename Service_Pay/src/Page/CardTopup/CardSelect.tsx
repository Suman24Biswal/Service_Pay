import { useNavigate } from 'react-router-dom';
import styles from './Cards.module.css';
import Select, { ValueType } from 'react-select'; // Importing ValueType for defining selected type
import { useState } from 'react';


interface OptionType {
  value: string;
  label: string;
}

function CardSelect() {
  const [selected, setSelected] = useState<OptionType | null>(null);
  const [atm, setAtm] = useState<OptionType | null>(null);


  const options: OptionType[] = [
    { value: "State Bank Of India", label: "State Bank Of India" },
    { value: "HDFC", label: "HDFC" },
    { value: "ICICI", label: "ICICI" }
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
    route("/Statement");
  };

  return (
    <div className={styles.t}>
      <div className={styles.box}>
        <div></div>
        <div>
          <div style={{ fontSize: '30px', fontWeight: '600', margin: '0 0 0 90px' }}>Card Top up</div>
          <div style={{ fontSize: '13px', fontWeight: '300', margin: '10px 0 0 90px' }}>transfer/Fund Transfer/<span style={{color:'green'}}>Card Top up</span></div>
        </div>
        <div className={styles.col}>
          
            <Select
            className={styles.select}
              options={options}
              value={selected}
              placeholder="Select" 
              onChange={(value: ValueType<OptionType>) => setSelected(value as OptionType)} 
              isSearchable
            />
          
          <Select
            className={styles.select2}
              options={optionsAtm}
              value={atm}
              placeholder="Select" 
              onChange={(value: ValueType<OptionType>) => setAtm(value as OptionType)} 
              isSearchable
            />
          <input placeholder='Enter Amount' className={styles.input1} />
          <input placeholder='Remarks' className={styles.input2} />
        </div>
        <div className={styles.btn}>
          <button onClick={transfer} style={{ height: '35px', width: '120px', borderRadius: '15px' }}>Cancel</button>
          <button onClick={statement} style={{ height: '35px', width: '120px', borderRadius: '15px', margin: '0 0 0 30px' }}>Proceed</button>
        </div>
      </div>
    </div>
  );
}

export default CardSelect;
