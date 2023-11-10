import styles from './OutputContainer.module.css';
import { useState } from 'react';
import { Button } from '../Input/Button';
export const OutputContainer = () => {
    return (
        <div className={styles.container}>
            <section className={styles.header}>
                <p>Output</p>
                <Button />
            </section>
            <hr/>
        </div>
    );
}