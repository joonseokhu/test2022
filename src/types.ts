export type MaybePromise<T> = Promise<T> | T;
export type AsyncCallback<T> = (err: Error | null | undefined, payload?: T) => void;
