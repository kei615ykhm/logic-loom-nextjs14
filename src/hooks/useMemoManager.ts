import { useEffect, useState } from "react";
import { Memo } from "../types";

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
    const storedMemos = localStorage.getItem("memos");
    if (storedMemos) {
      setMemos(JSON.parse(storedMemos));
    }
  }, []);

  // メモを追加する関数
  const handleAddMemo = (content: string) => {
    const newMemo: Memo = {
      id: Date.now().toString(),
      content,
      createdAt: new Date().toISOString(),
    };
    setMemos([...memos, newMemo]);
  };

  // 指定したIDのメモを削除する関数
  const handleDeleteMemo = (id: string) => {
    setMemos(memos.filter((memo) => memo.id !== id));
  };

  // メモの状態と操作用関数を返す
  return { memos, handleAddMemo, handleDeleteMemo };
};
