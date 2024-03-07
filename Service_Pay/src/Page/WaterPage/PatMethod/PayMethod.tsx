import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select, { ValueType } from 'react-select';
import styles from './Pay.module.css';

interface OptionType {
  value: string;
  label: string;
}

interface PayMethodProps {
  title: string;
}

function PayMethod(props: PayMethodProps) {
  const { title } = props;

  const [atm, setAtm] = useState<OptionType | null>(null);
  const optionsAtm: OptionType[] = [
    { value: "**** **** 1234", label: "**** **** 1234" },
    { value: "**** **** 1234", label: "**** **** 1234" },
    { value: "**** **** 1234", label: "**** **** 1234" }
  ];

  const route = useNavigate();

  const transfer = () => {
    route("/Transfer");
  };

  const state = () => {
    route("/WaterState");
  };

  return (
    <div className={styles.box1}>
      <div className={styles.box2}>
        <div></div>
        <div className={styles.card}>
          <div>{title}</div>
          <div style={{ fontSize: '13px', color: 'rgba(160, 160, 160, 1)', fontWeight: '300', margin: '10px 0 0 10px' }}>transfer / Bill Payment / <span style={{ color: 'green' }}>Water</span></div>
        </div>
        <div className={styles.col}>
          <input className={styles.select} type="text" />
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

export default PayMethod;

