import { z } from 'zod';

//** 基本的なメモスキーマ */
export const memoSchema = z
  .object({
    id: z.string().uuid({ message: 'IDは有効なUUIDである必要があります。' }),
    content: z.string(),
    createdAt: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: '作成日時は有効な日付である必要があります。',
    }),
  })
  .strict(); // 予期しないプロパティを許可しない

export type Memo = z.infer<typeof memoSchema>;

//** メモの作成時のスキーマ */
export const createMemoSchema = z.object({
  content: z
    .string()
    .min(1, { message: '内容は最低1文字必要です。' })
    .max(1000, { message: '内容は最大1000文字までです。' }),
});

export type CreateMemoInput = z.infer<typeof createMemoSchema>;
