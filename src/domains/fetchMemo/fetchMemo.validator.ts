import { memoSchema, Memo } from './fetchMemo.schema';

/**
 * データがMemo型かどうかを判定する型ガード関数
 * @param data 検証するデータ
 * @returns dataがMemo型の場合true、そうでない場合false
 */
export function isMemo(data: unknown): data is Memo {
  return memoSchema.safeParse(data).success;
}
