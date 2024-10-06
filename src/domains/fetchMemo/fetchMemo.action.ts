import { createMemoSchema, CreateMemoInput } from './fetchMemo.schema';

/**
 * 新しいメモ入力をバリデーションする
 * @param data 検証するデータ
 * @returns データが有効な場合はCreateMemoInputオブジェクト、そうでない場合はnull
 */
export function validateCreateMemoInput(data: unknown): CreateMemoInput | null {
  const result = createMemoSchema.safeParse(data);
  return result.success ? result.data : null;
}
