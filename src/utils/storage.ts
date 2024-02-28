import { IEditableListValue } from '@/pages/turnplate/components';

export interface IStorageTurnplate {
  [key: string]: IEditableListValue['chooses'];
}

function formatKey(key: string) {
  return `kssbox_${key}`.toUpperCase();
}

function getData(key: string) {
  const str = localStorage.getItem(formatKey(key)) as string;
  try {
    return JSON.parse(str);
  } catch (e) {
    return null;
  }
}

function setData(key: string, data: ISafeAny) {
  localStorage.setItem(formatKey(key), JSON.stringify(data));
}

export class Storage {
  get turnplate(): IStorageTurnplate {
    return getData('turnplate') || {};
  }

  set turnplate(data: IStorageTurnplate) {
    setData('turnplate', data);
  }

  // getTurnplateByKey(key: string): IEditableListValue {
  //   return this.turnplate[key] ||
  // }

  setTurnplateByKey(key: string, chooses: IEditableListValue['chooses']) {
    const turnplate = this.turnplate;
    turnplate[key] = chooses;
    this.turnplate = turnplate;
  }

  clear() {
    this.turnplate = {};
  }
}

const $storage = new Storage();

window.$storage = $storage;

export { $storage };
