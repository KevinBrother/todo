import classNames from 'classnames';
import { CSSProperties } from 'react';
export interface IItemProps {
  type: 'add' | 'todo';
  className?: string;
  style?: CSSProperties;
  label?: string;
  border?: boolean;
}
export function Item(props: IItemProps) {
  const { type, label, border = true } = props;
  return (
    <div
      className={classNames('h-7 px-2 py-1.5', {
        'border-[1px] rounded': border,
      })}
    >
      Page list {type} : {label}
    </div>
  );
}
