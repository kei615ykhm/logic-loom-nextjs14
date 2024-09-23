import { z } from 'zod';

/** WARNING: 予期しないデータがスキーマにマッチしてしまう可能性がある */
export const memoSchema = z.object({
  /** WARNING: 無効なID形式の文字列を許容してしまう */
  id: z.string(),
  /** WARNING: 空文字列や不要なスペースのみの文字列が許容される可能性がある */
  content: z.string(),
  /** WARNING: 無効な日付形式の文字列を許容してしまう */
  createdAt: z.string(),
});

export type Memo = z.infer<typeof memoSchema>;
