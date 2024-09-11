import { useEffect, useState } from "react";
import { Memo } from "../types";

// メモの状態を管理するカスタムフック
export const useMemoManager = () => {
  const [memos, setMemos] = useState<Memo[]>([]);

  // クライアントサイドでのみローカルストレージにメモを保存
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
