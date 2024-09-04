import { useEffect, useState } from "react";
import { Memo } from "../types";

export const useMemos = () => {
  const [memos, setMemos] = useState<Memo[]>([]);

  useEffect(() => {
    const storedMemos = localStorage.getItem("memos");
    if (storedMemos) {
      setMemos(JSON.parse(storedMemos));
    }
  }, []);

  const saveMemos = (updatedMemos: Memo[]) => {
    setMemos(updatedMemos);
    localStorage.setItem("memos", JSON.stringify(updatedMemos));
  };

  const addMemo = (content: string) => {
    const newMemo: Memo = {
      id: Date.now().toString(),
      content,
      createdAt: new Date().toISOString(),
    };
    setMemos([...memos, newMemo]);
  };

  const deleteMemo = (id: string) => {
    setMemos(memos.filter((memo) => memo.id !== id));
  };

  return { memos, addMemo, deleteMemo };
};
