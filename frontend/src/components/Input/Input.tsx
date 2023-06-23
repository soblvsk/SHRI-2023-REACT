import { FunctionComponent } from 'react';

import styles from './styles.module.css';

interface Props {
  label: string;
  placeholder: string;
  value: string;
  type: string;
  onChange: (value: string) => void;
}

export const Input: FunctionComponent<Props> = ({ label, placeholder, value, type, onChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <label className={styles['label-custom']}>
      {label}
      <input
        className={styles['input-custom']}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={handleInputChange}
      />
    </label>
  );
};
