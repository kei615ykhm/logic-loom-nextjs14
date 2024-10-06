import { v4 as uuidv4 } from 'uuid';
import { useSharedMemoState } from '../../shared/hooks/useSharedMemoState';
import { createMemoSchema } from '../../domains/createMemo/createMemo.schema';

export const useCreateMemo = () => {
  const { memos, setMemos } = useSharedMemoState();

  const handleAddMemo = (content: string) => {
    const newMemoData = {
      id: uuidv4(),
      content,
      createdAt: new Date().toISOString(),
    };

    try {
      /** zodを使用して新しいメモをバリデーションする */
      const validatedMemo = createMemoSchema.parse(newMemoData);
      setMemos((prevMemos) => [...prevMemos, validatedMemo]);
      /** ローカルストレージに保存 */
      localStorage.setItem('memos', JSON.stringify([...memos, validatedMemo]));
    } catch (error) {
      console.error('メモのバリデーションに失敗しました:', error);
    }
  };

  return { memos, handleAddMemo };
};
