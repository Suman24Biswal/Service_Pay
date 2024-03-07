import { useNavigate } from 'react-router-dom';
import styles from './BroadSelect.module.css'
import Select, { ValueType } from 'react-select'; // Importing ValueType for defining selected type
import { useState } from 'react';


interface OptionType {
  value: string;
  label: string;
}

function BroadSelect() {
  const [selected, setSelected] = useState<OptionType | null>(null);



  const options: OptionType[] = [
    { value: "Odisha", label: "Odisha" },
    { value: "Banglore", label: "Banglore" },
    { value: "Delhi", label: "Delhi" }
  ];
  

  const route = useNavigate();

  const pay = () => {
    route("/BroadbandStatement");
  };

  const Receipt = () => {
    route("/BroadReceipt");
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
        </div>
        <div className={styles.btn}>
          <button onClick={pay} style={{ height: '35px', width: '120px', borderRadius: '15px' }}>Cancel</button>
          <button onClick={Receipt} style={{ height: '35px', width: '120px', borderRadius: '15px', margin: '0 0 0 36px' }}>Proceed</button>
        </div>
      </div>
    </div>
  );
}

export default BroadSelect;