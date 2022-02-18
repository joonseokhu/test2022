export declare type MaybePromise<T> = Promise<T> | T;
export declare type AsyncCallback<T> = (err: Error | null | undefined, payload?: T) => void;
