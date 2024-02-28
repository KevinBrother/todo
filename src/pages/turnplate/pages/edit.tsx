import { $storage } from '@/utils/storage';
import { Button, List, Popup, Space } from 'antd-mobile';
import { AddOutline } from 'antd-mobile-icons';
import { useState } from 'react';
import { EditableList, IEditableListValue } from '../components';

export const initialData = {
  type: '',
  chooses: [],
};

export default function Page() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [data, setData] = useState<IEditableListValue>(initialData);
  const [turnplate, setTurnplate] = useState($storage.turnplate);

  return (
    <div className="text-xs">
      <div className="flex justify-between px-4 items-center h-12">
        <span>Turnplate</span>
        <AddOutline
          onClick={() => {
            setPopupVisible(true);
            setData(initialData);
          }}
          fontSize={24}
          color="var(--adm-color-primary)"
        />
      </div>
      <List>
        {Object.keys(turnplate).map((item) => {
          return (
            <List.Item key={item} onClick={() => {}} clickable={false}>
              <div className="flex justify-between">
                {item}
                <div>
                  <Space>
                    <Button
                      onClick={() => {
                        setPopupVisible(true);

                        setData({ type: item, chooses: turnplate[item] });
                      }}
                    >
                      编辑
                    </Button>
                  </Space>
                </div>
              </div>
            </List.Item>
          );
        })}
      </List>
      <Popup
        visible={popupVisible}
        closeOnSwipe
        onMaskClick={() => {
          setPopupVisible(false);
        }}
        onClose={() => {
          setPopupVisible(false);
        }}
        bodyStyle={{ height: '80vh', overflowY: 'auto' }}
      >
        <EditableList
          value={data}
          setPopupVisible={setPopupVisible}
          setTurnplate={setTurnplate}
        />
      </Popup>
    </div>
  );
}
