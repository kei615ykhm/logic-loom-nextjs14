import { z } from 'zod';

/** メモ作成用のスキーマ */
export const createMemoSchema = z.object({
  content: z
    .string()
    .min(1, { message: '内容は最低1文字必要です。' })
    .max(1000, { message: '内容は1000文字以内でなければなりません。' }),
});

export type CreateMemoInput = z.infer<typeof createMemoSchema>;
