import { useState } from 'react';
import styles from './Checkbox.module.css';

interface CheckboxProps  {
  id: string;
}

export default function Checkbox ({id}: CheckboxProps) {

  const [checked, setChecked] = useState(false)

  const handleInputChange = () => {
    setChecked(!checked);
  }

  return (
    <div className={styles.round}>
        <input type="checkbox" onChange={handleInputChange} checked={checked} id={id}/>
        <label htmlFor={id}/>
    </div>
  )
}