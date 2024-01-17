import React from 'react';
import styles from './index.less';

export interface IItemProps {
  type: 'add' | 'todo',
  label?: string
}
export function Item(props: IItemProps) {
  const {type,label} = props;
  return (
    <div>
      <h1 className={styles.title}>Page list {type} : {label}</h1>
    </div>
  );
}
