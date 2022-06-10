import React from 'react';
import { IconTruck } from '@vtex/admin-ui';
import styles from './styles.css'

type Props = {
  width:number
}

const Termomether = ({width}:Props) => {

  return (
    <div>
      <div className={styles.progressContainer}>
        <div className={styles.progressbar}>
          <div
            className={styles.progressbarFill}
            style={{
              width: `${width}%`,
              backgroundColor: "#ff50f6"
            }}
            />
        </div>
        <div
          className={width >= 100 ? styles.iconActive : styles.icon}
        >
          <IconTruck />
        </div>
      </div>
    </div>
  );
};

export default Termomether;
