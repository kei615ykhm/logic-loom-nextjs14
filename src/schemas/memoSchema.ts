import { z } from 'zod';

/** WARNING: 予期しないデータがスキーマにマッチしてしまう可能性がある */
export const memoSchema = z.object({
  id: z.string().uuid({ message: 'IDは有効なUUIDである必要があります' }),
  content: z.string().min(1, { message: 'メモの内容が空です' }),
  createdAt: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: '無効な日付形式です',
  }),
});

export type Memo = z.infer<typeof memoSchema>;
