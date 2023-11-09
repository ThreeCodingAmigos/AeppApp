import styles from './OutputContainer.module.css';
import { useState } from 'react';

export const OutputContainer = () => {
    return (
        <div className={styles.container}>
            <p>Output</p>
            <hr/>
        </div>
    );
}