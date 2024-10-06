import { z } from 'zod';
import { createMemoSchema } from './createMemo.schema';

/** スキーマから型を推論 */
export type CreateMemo = z.infer<typeof createMemoSchema>;
