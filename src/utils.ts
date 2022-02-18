import { MaybePromise } from './types';

export const wait = (time: number): Promise<number> => (
  new Promise((resolve) => {
    setTimeout(() => resolve(time), time);
  })
);

export const mapPromise = <T, R>(
  arr: T[],
  callback: (element: T, index: number) => MaybePromise<R>,
): Promise<R[]> => arr.reduce(async (
    pacc: Promise<R[]>,
    item: T,
    index: number,
  ) => {
    const acc: R[] = await pacc;
    const currentResult: R = await callback(item, index);
    return acc.concat(currentResult);
  }, Promise.resolve([]));

export const getRandomInt = (from: number, to: number): number => {
  const min = Math.ceil(from);
  const max = Math.floor(to);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
