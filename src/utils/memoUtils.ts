import { memoSchema, createMemoSchema } from '../schemas/memoSchema';
import { Memo, CreateMemoInput } from '../schemas/memoSchema';

/**
 * 未知のデータをMemo型に変換する
 * @param data 検証するデータ
 * @returns データが有効な場合はMemoオブジェクト、そうでない場合はnull
 */
export function parseMemo(data: unknown): Memo | null {
  const result = memoSchema.safeParse(data);
  if (result.success) {
    return result.data;
  } else {
    console.error('Memo parsing failed:', result.error);
    return null;
  }
}

/**
 * 新しいメモ入力をバリデーションする
 * @param data 検証するデータ
 * @returns データが有効な場合はCreateMemoInputオブジェクト、そうでない場合はnull
 */
export function validateCreateMemoInput(data: unknown): CreateMemoInput | null {
  const result = createMemoSchema.safeParse(data);
  return result.success ? result.data : null;
}

/**
 * データがMemo型かどうかを判定する型ガード関数
 * @param data 検証するデータ
 * @returns dataがMemo型の場合true、そうでない場合false
 */
export function isMemo(data: unknown): data is Memo {
  return memoSchema.safeParse(data).success;
}
