import { z } from 'zod';
import { fetchMemoSchema } from './fetchMemo.schema';

/** スキーマから型を推論 */
export type FetchMemo = z.infer<typeof fetchMemoSchema>;
