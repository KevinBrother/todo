import services from '@/services';
import { useEffect, useState } from 'react';
import { Item } from '../../components';
import { IItemProps } from '../../components/item';
import styles from './index.less';

const { getTodoList } = services.TodoController;

export default function Page() {
  const [data, setData] = useState<IItemProps[]>([]);

  useEffect(() => {
    getTodoList().then((rst) => {
      console.log('rst', rst);
      setData(rst);
    });
  }, []);

  return (
    <div className="text-xs h-[500px] border ">
      <h1 className={styles.title}>task list</h1>
      <div className="flex flex-col gap-4 fl overflow-y-auto h-full">
        {data.map((item, index) => {
          return <Item key={index} {...item} />;
        })}
      </div>
      <div className="">
        <Item type="add" />
      </div>
    </div>
  );
}
