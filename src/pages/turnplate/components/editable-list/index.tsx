import { $storage, IStorageTurnplate } from '@/utils/storage';
import { Button, Form, Input } from 'antd-mobile';
import { AddCircleOutline } from 'antd-mobile-icons';
import { Dispatch, SetStateAction } from 'react';

export type IEditableListDataSource = { name: string; percent: number }[];

export interface IEditableListValue {
  type: string;
  chooses: IEditableListDataSource;
}

interface IEditableListProps {
  value: IEditableListValue;
  setPopupVisible: (visible: boolean) => void;
  setTurnplate: Dispatch<SetStateAction<IStorageTurnplate>>;
}

export function EditableList(props: IEditableListProps) {
  const { value, setPopupVisible, setTurnplate } = props;
  const [form] = Form.useForm();
  const onFinish = () => {
    const { type, chooses } = form.getFieldsValue();
    setTurnplate((data) => {
      data[type] = chooses;
      return data;
    });
    $storage.setTurnplateByKey(type, chooses);
    setPopupVisible(false);
  };

  form.setFieldsValue(value);

  return (
    <div>
      <Form
        form={form}
        footer={
          <Button
            block
            onClick={() => onFinish()}
            size="large"
            className="text-white bg-blue-400 active:bg-blue-500"
          >
            提交
          </Button>
        }
        mode="card"
      >
        <Form.Item
          name="type"
          rules={[{ required: true, message: '类型不能为空' }]}
        >
          <Input onChange={console.log} placeholder="请输入类型" />
        </Form.Item>
        <Form.Array
          name="chooses"
          // onAdd={(operation) => operation.add({ name: '张三' })}
          renderAdd={() => (
            <span className="flex justify-center">
              <AddCircleOutline />
            </span>
          )}
          renderHeader={({ index }, { remove }) => (
            <>
              <span>选择{index + 1}</span>
              <a onClick={() => remove(index)} style={{ float: 'right' }}>
                删除
              </a>
            </>
          )}
        >
          {(fields) =>
            fields.map(({ index }) => (
              <div className="flex" key={index}>
                <Form.Item
                  className="flex-auto"
                  name={[index, 'name']}
                  rules={[{ required: true, message: '选择标识不能为空' }]}
                >
                  <Input placeholder="请输入选择标识" />
                </Form.Item>
                <Form.Item name={[index, 'percent']} extra="%">
                  <Input
                    placeholder="0"
                    type="number"
                    className="w-10 md:w-16"
                  />
                </Form.Item>
              </div>
            ))
          }
        </Form.Array>
      </Form>
    </div>
  );
}
