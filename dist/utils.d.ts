import { MaybePromise } from './types';
export declare const wait: (time: number) => Promise<number>;
export declare const mapPromise: <T, R>(arr: T[], callback: (element: T, index: number) => MaybePromise<R>) => Promise<R[]>;
export declare const getRandomInt: (from: number, to: number) => number;
