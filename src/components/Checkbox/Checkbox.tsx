import styles from './Checkbox.module.css';

interface CheckboxProps  {
  id: string;
  checked: boolean;
  setChecked: (value: boolean) => void;
}

export default function Checkbox ({id, checked, setChecked}: CheckboxProps) {

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