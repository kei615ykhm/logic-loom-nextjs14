import { useState, useEffect } from "react";
import { Memo } from "../types";

export const useMemos = () => {
  const [memos, setMemos] = useState<Memo[]>([]);

  // 初回レンダリング時にローカルストレージからメモを読み込む
  useEffect(() => {
    const storedMemos = localStorage.getItem("memos");
    if (storedMemos) {
      setMemos(JSON.parse(storedMemos));
    }
  }, []);

  // メモの状態が変更されるたびにローカルストレージを更新
  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(memos));
  }, [memos]);

  const addMemo = (content: string) => {
    const newMemo: Memo = {
      id: Date.now().toString(),
      content,
      createdAt: new Date().toISOString(),
    };
    setMemos((prevMemos) => [...prevMemos, newMemo]);
  };

  const deleteMemo = (id: string) => {
    setMemos((prevMemos) => prevMemos.filter((memo) => memo.id !== id));
  };

  return { memos, addMemo, deleteMemo };
};
