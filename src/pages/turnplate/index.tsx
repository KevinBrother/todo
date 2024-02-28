import { ROUTER } from '@/constants';
import { useNavigate } from '@umijs/max';
import { Button, Picker } from 'antd-mobile';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { turnplateEntity } from './entity';

// const mockObj: IStorageTurnplate = {
//   旅游: [
//     { name: '上海', percent: '70' },
//     { name: '上海周边', percent: '15' },
//     { name: '其他省份', percent: '9' },
//     { name: '出国', percent: '1' },
//   ],
//   吃饭地点: [
//     { name: '清源', percent: '70' },
//     { name: '河南拉面', percent: '15' },
//     { name: '5食堂', percent: '9' },
//     { name: '胡子大厨', percent: '1' },
//   ],
// };

export const initialData = {
  type: '',
  chooses: [],
};

function Page() {
  const keys = turnplateEntity.getKeys();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [key, setKey] = useState(keys.length > 0 ? keys[0] : '');
  const [result, setResult] = useState('');

  function run() {
    const name = turnplateEntity.getRandomRunName(key);
    setResult(name);
  }

  return (
    <div className="text-xs">
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        当前选择：{key}
      </Button>
      <Button
        onClick={() => {
          navigate(ROUTER.editTurnplate);
        }}
      >
        选择与编辑
      </Button>

      <div>
        {turnplateEntity.getValuesByKey(key).map((value) => {
          return (
            <div key={value.name}>
              可选值：{value.name}: {value.percent} %
            </div>
          );
        })}
        <Button onClick={run}>run</Button>
        result: {result}
      </div>

      <Picker
        onClose={() => {
          setVisible(false);
        }}
        visible={visible}
        onConfirm={(v) => {
          console.log('v', v);
          // @ts-ignore
          setKey(v[0]);
        }}
        columns={[
          turnplateEntity.getKeys().map((key) => ({
            label: key,
            value: key,
          })),
        ]}
      />
    </div>
  );
}

export default observer(Page);
