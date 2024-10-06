import { useState, useEffect } from 'react';
import { z } from 'zod';
import {
  Memo,
  fetchMemoSchema,
} from '../../domains/fetchMemo/fetchMemo.schema';

export const useSharedMemoState = () => {
  const [memos, setMemos] = useState<Memo[]>([]);

  /** 初回レンダリング時にローカルストレージからメモを取得し、状態を更新する */
  useEffect(() => {
    const storedMemos = localStorage.getItem('memos');
    if (storedMemos) {
      try {
        const parsedMemos: unknown = JSON.parse(storedMemos);
        const memoArraySchema = z.array(fetchMemoSchema);
        const validatedMemos: Memo[] = memoArraySchema.parse(parsedMemos);
        setMemos(validatedMemos);
      } catch (error) {
        console.error('保存されたメモの解析に失敗しました:', error);
      }
    }
  }, []);

  const updateLocalStorage = (updatedMemos: Memo[]) => {
    localStorage.setItem('memos', JSON.stringify(updatedMemos));
  };

  return { memos, setMemos, updateLocalStorage };
};
