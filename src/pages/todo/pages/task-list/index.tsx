import { useState } from 'react';
import styles from './index.less';
import { Item } from '../../components';
import { IItemProps } from '../../components/item';

export default function Page() {
  const [data] = useState<IItemProps[]>([
    {type: 'todo', label: 'first'},
    { type: 'add', label: 'second'}
  ])
  return (
    <div>
      <h1 className={styles.title}>task list</h1>
      {
        data.map((item, index) => {
          return <Item key={index} {...item}/>
        })
      }
    </div>
  );
}
