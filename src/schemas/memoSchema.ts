import { z } from 'zod';

export const memoSchema = z.object({
  id: z.string(),
  content: z.string(),
  createdAt: z.string(),
});

export type Memo = z.infer<typeof memoSchema>;
