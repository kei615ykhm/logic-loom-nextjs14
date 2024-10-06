import { memoSchema, Memo } from './fetchMemo.schema';

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
