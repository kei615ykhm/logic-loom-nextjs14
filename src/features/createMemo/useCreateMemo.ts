import { v4 as uuidv4 } from 'uuid';
import { useSharedMemoState } from '../../shared/hooks/useSharedMemoState';
import { createMemoSchema } from '../../domains/createMemo/createMemo.schema';

export const useCreateMemo = () => {
  const { memos, setMemos, updateLocalStorage } = useSharedMemoState();

  const handleAddMemo = (content: string) => {
    const newMemoData = {
      id: uuidv4(),
      content,
      createdAt: new Date().toISOString(),
    };

    try {
      const validatedMemo = createMemoSchema.parse(newMemoData);
      const updatedMemos = [...memos, validatedMemo];
      setMemos(updatedMemos);
      updateLocalStorage(updatedMemos);
    } catch (error) {
      console.error('メモのバリデーションに失敗しました:', error);
    }
  };

  return { memos, handleAddMemo };
};
