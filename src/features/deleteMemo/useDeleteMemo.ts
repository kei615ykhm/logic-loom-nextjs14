import { useSharedMemoState } from '../../shared/hooks/useSharedMemoState';

/**
//    * 指定したIDのメモを削除する関数
//    * @param {string} id - 削除するメモのID
//    */
export const useDeleteMemo = () => {
  const { memos, setMemos, updateLocalStorage } = useSharedMemoState();

  const handleDeleteMemo = (id: string) => {
    const updatedMemos = memos.filter((memo) => memo.id !== id);
    setMemos(updatedMemos);
    localStorage.setItem('memos', JSON.stringify(updatedMemos));
  };

  return { memos, handleDeleteMemo };
};
