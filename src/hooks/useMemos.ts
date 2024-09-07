import { useState, useEffect } from "react";
import { Memo } from "../types";

// メモの状態を管理するカスタムフック
export const useMemos = () => {
  // メモの状態と更新関数を定義
  const [memos, setMemos] = useState<Memo[]>([]);

  // クライアントサイドでのみローカルストレージからメモを取得
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedMemos = localStorage.getItem("memos");
      if (storedMemos) {
        setMemos(JSON.parse(storedMemos));
      }
    }
  }, []);

  // メモの状態が更新されたらローカルストレージに保存
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("memos", JSON.stringify(memos));
    }
  }, [memos]);

  // 新しいメモを追加する関数
  const addMemo = (content: string) => {
    const newMemo: Memo = {
      id: Date.now().toString(), // 現在時刻をIDとして設定
      content,
      createdAt: new Date().toISOString(), // 現在の日時を作成時刻として設定
    };
    setMemos((prevMemos) => [...prevMemos, newMemo]); // 既存のメモに新しいメモを追加
  };

  // 指定したIDのメモを削除する関数
  const deleteMemo = (id: string) => {
    setMemos((prevMemos) => prevMemos.filter((memo) => memo.id !== id)); // 指定したID以外のメモのみを残す
  };

  // メモの状態にアクセスするためのメモ、追加、削除の関数を返す
  return { memos, addMemo, deleteMemo };
};
