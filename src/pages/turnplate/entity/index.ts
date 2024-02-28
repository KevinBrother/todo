import { getRandomNumber } from '@/utils/math';
import { $storage } from '@/utils/storage';
import { makeAutoObservable } from 'mobx';
class TurnplateEntity {
  turnplate = $storage.turnplate;

  constructor() {
    makeAutoObservable(this);
  }

  getKeys = () => {
    return Object.keys(this.turnplate);
  };

  getValuesByKey = (key: string) => {
    const turnplate = this.turnplate;
    return turnplate[key];
  };

  /**
   * 根据当前选择的类型，按照百分比获得随机值
   * @param key
   * @returns
   */
  getRandomRunName = (key: string) => {
    const chooses = this.turnplate[key];

    const maxPercent = chooses.reduce((prev, curr) => {
      return prev + Number(curr.percent);
    }, 0);

    let base = 0;
    const random = getRandomNumber(maxPercent + 1);
    for (let { name, percent: strPercent } of chooses) {
      const percent = Number(strPercent);
      let sum = base + percent;
      if (random < sum) {
        console.log(
          '随机数为：%s, 当前值占比为：%s',
          random,
          `${Math.floor((percent / maxPercent) * 100)} %`,
        );
        return name;
      }

      base += percent;
    }

    return '没有匹配项';
  };
}

export const turnplateEntity = new TurnplateEntity();
