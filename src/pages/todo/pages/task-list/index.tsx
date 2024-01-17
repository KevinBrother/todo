import { useEffect, useState } from 'react';
import styles from './index.less';
import { Item } from '../../components';
import { IItemProps } from '../../components/item';
import services from '@/services'
const { getTodoList}  = services.TodoController;
export default function Page() {

  const [data, setData] = useState<IItemProps[]>([
    {type: 'todo', label: 'first'},
    { type: 'add', label: 'second'}
  ])

  useEffect(() => {
    getTodoList().then(rst => {
      console.log('rst', rst)
      setData(rst);
    })
  }, [])

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
