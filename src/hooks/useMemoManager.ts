import { useEffect, useState } from 'react';
import { Memo, memoSchema } from '../schemas/memoSchema';
import { z } from 'zod';

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
        const parsedMemos = JSON.parse(storedMemos);
        if (Array.isArray(parsedMemos)) {
          const memoArraySchema = z.array(memoSchema);
          const validatedMemos = memoArraySchema.parse(parsedMemos);
          setMemos(parsedMemos);
        } else {
          console.error('保存されたメモが配列ではありません');
        }
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
    const newMemo: Memo = {
      id: Date.now().toString(),
      content,
      createdAt: new Date().toISOString(),
    };
    // TODO: zodを使用して新しいメモをバリデーションする
    // const validatedMemo = MemoSchema.parse(newMemo);
    setMemos([...memos, newMemo]);
  };

  /**
   * 指定したIDのメモを削除する関数
   * @param {string} id - 削除するメモのID
   */
  const handleDeleteMemo = (id: string) => {
    setMemos(memos.filter((memo) => memo.id !== id));
  };

  return { memos, handleAddMemo, handleDeleteMemo };
};
