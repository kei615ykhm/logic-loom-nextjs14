import { z } from 'zod';

/** WARNING: 予期しないデータがスキーマにマッチしてしまう可能性がある */
export const memoSchema = z.object({
  /** WARNING: 無効なID形式の文字列を許容してしまう */
  id: z.string(),
  content: z.string().min(1, { message: 'メモの内容が空です' }),
  /** NOTE: ローカルストレージでは日付が文字列として保存されるためz.date()を不使用 */
  createdAt: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: '無効な日付形式です',
  }),
});

export type Memo = z.infer<typeof memoSchema>;
