import { AsyncCallback } from './types';
import { getRandomInt, wait } from './utils';

const getLuck = async (name: string, age: number) => {
  await wait(1500);
  if (!name) throw new Error('이름은 필수입니다.');
  if (!age) throw new Error('나이는 필수입니다.');
  const luck = getRandomInt(0, 100);
  if (luck < 20) throw new Error('운세결과가 너무 안좋아서 에러가 났습니다.');
  return luck;
};

export default (name: string, age: number, callback: AsyncCallback<number>): void => {
  getLuck(name, age)
    .then((luck) => callback(null, luck))
    .catch((err: Error) => callback(err));
};
