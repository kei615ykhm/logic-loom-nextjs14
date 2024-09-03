import { useState } from "react";
import { Memo } from "../types";

export const useMemos = () => {
  const [memos, setMemos] = useState<Memo[]>([]);

  const addMemo = (content: string) => {
    const newMemo: Memo = {
      id: Date.now().toString(),
      content,
      createdAt: new Date().toISOString(),
    };
    setMemos([...memos, newMemo]);
  };

  return { memos, addMemo };
};
