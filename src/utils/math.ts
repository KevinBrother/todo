export function getRandomNumber(range: number) {
  let randomNumber = Math.random(); // 生成介于0和1之间的随机数
  let randomNumberInRange = randomNumber * range; // 将随机数缩放到0到 range 之间
  let result = Math.floor(randomNumberInRange); // 取整数部分，去除小数部分
  return result;
}
