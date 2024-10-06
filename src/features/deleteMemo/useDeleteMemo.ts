import { useSharedMemoState } from '../../shared/hooks/useSharedMemoState';
import { fetchMemoSchema } from '../../domains/fetchMemo/fetchMemo.schema';
import { z } from 'zod';

/**
//    * 指定したIDのメモを削除する関数
//    * @param {string} id - 削除するメモのID
//    */
export const useDeleteMemo = () => {
  const { memos, setMemos, updateLocalStorage } = useSharedMemoState();

  const handleDeleteMemo = (id: string) => {
    try {
      z.string().uuid().parse(id);
      const updatedMemos = memos.filter((memo) => memo.id !== id);
      const memoArraySchema = z.array(fetchMemoSchema);
      const validatedMemos = memoArraySchema.parse(updatedMemos);
      setMemos(validatedMemos);
      updateLocalStorage(validatedMemos);
    } catch (error) {
      console.error('メモの削除中にエラーが発生しました。:', error);
    }
  };

  return { memos, handleDeleteMemo };
};
