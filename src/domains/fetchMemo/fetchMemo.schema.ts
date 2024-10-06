import { z } from 'zod';

//** データ取得用のメモスキーマ */
export const fetchMemoSchema = z
  .object({
    id: z.string().uuid({ message: 'IDは有効なUUIDである必要があります。' }),
    content: z.string(),
    createdAt: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: '作成日時は有効な日付である必要があります。',
    }),
  })
  .strict(); // 予期しないプロパティを許可しない

export type Memo = z.infer<typeof fetchMemoSchema>;
