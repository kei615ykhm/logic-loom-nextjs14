import { z } from 'zod';

/**
 * データを安全にパースする関数
 * @param schema - zodスキーマオブジェクト
 * @param data - バリデーション対象のデータ
 * @returns バリデーションが成功した場合はデータ、失敗した場合はnull
 */
export function safeParse<T>(schema: z.ZodType<T>, data: unknown): T | null {
  const result = schema.safeParse(data);
  return result.success ? result.data : null;
}
