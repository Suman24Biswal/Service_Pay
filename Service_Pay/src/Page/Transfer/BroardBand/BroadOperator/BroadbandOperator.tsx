import { useNavigate } from 'react-router-dom';
import styles from './Operator.module.css'
import Select, { ValueType } from 'react-select'; // Importing ValueType for defining selected type
import { useState } from 'react';


interface OptionType {
  value: string;
  label: string;
}

function BroadbandOperator() {
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
    route("/BroadbandStatement");
  };

  return (
    <div className={styles.box1}>
      <div className={styles.box2}>
        <div></div>
        <div className={styles.card}>
        <div >Broad Band Bill Payment</div>
          <div style={{ fontSize: '13px',color:'rgba(160, 160, 160, 1)', fontWeight: '300', margin: '10px 0 0 10px' }}>transfer / Bill Payment / <span style={{color:'green'}}>BroadBand</span></div>
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
        </div>
        <div className={styles.btn}>
          <button onClick={transfer} style={{ height: '35px', width: '120px', borderRadius: '15px' }}>Cancel</button>
          <button onClick={statement} style={{ height: '35px', width: '120px', borderRadius: '15px', margin: '0 0 0 30px' }}>Proceed</button>
        </div>
      </div>
    </div>
  );
}

export default BroadbandOperator;