import { useEffect, useState } from 'react';
import { Memo, memoSchema } from '../../domains/memo/memoZodSchema';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';

/**
 * メモの状態を管理するカスタムフック
 * @returns {object} メモの状態と操作用関数を含むオブジェクト
 * @returns {Memo[]} memos - 現在のメモのリスト
 * @returns {function} handleAddMemo - メモを追加する関数
 * @returns {function} handleDeleteMemo - 指定したIDのメモを削除する関数
 */
export const useMemoManager = () => {
  const [memos, setMemos] = useState<Memo[]>([]);

  /** 初回レンダリング時にローカルストレージからメモを取得し、状態を更新する */
  useEffect(() => {
    const storedMemos = localStorage.getItem('memos');
    if (
      storedMemos !== undefined &&
      storedMemos !== null &&
      storedMemos !== ''
    ) {
      try {
        const parsedMemos: unknown = JSON.parse(storedMemos);
        const memoArraySchema = z.array(memoSchema);
        const validatedMemos: Memo[] = memoArraySchema.parse(parsedMemos);
        setMemos(validatedMemos);
      } catch (error) {
        console.error('保存されたメモの解析に失敗しました:', error);
      }
    }
  }, []);

  /**
   * メモを追加する関数
   * @param {string} content - 追加するメモの内容
   */
  const handleAddMemo = (content: string) => {
    const newMemoData: Memo = {
      id: uuidv4(),
      content,
      createdAt: new Date().toISOString(),
    };

    try {
      /** zodを使用して新しいメモをバリデーションする */
      const validatedMemo: Memo = memoSchema.parse(newMemoData);
      setMemos((prevMemos) => [...prevMemos, validatedMemo]);
      /** ローカルストレージに保存 */
      localStorage.setItem('memos', JSON.stringify([...memos, validatedMemo]));
    } catch (error) {
      console.error('メモのバリデーションに失敗しました:', error);
    }
  };

  /**
   * 指定したIDのメモを削除する関数
   * @param {string} id - 削除するメモのID
   */
  const handleDeleteMemo = (id: string) => {
    const updatedMemos = memos.filter((memo) => memo.id !== id);
    setMemos(updatedMemos);
    /** ローカルストレージに削除情報を保存 */
    localStorage.setItem('memos', JSON.stringify(updatedMemos));
  };

  return { memos, handleAddMemo, handleDeleteMemo };
};
